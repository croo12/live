import { useEffect, useRef } from "react";
import kurentoUtils from "kurento-utils";
import Button from "../UI/Button";

import classes from "./ConsultingMeetPage.module.scss";

export const REALTOR_STATUS = {
  BEFORE_START: 0,
  START_BUT_NOT_CONNECT: 1,
  CONNECTING: 2,
};

export const USER_STATUS = {
  ENTER_SESSION: 0,
  CONNECTING: 1,
  END: 2,
};

const ConsultingMeetPage = ({
  isRealtor,
  toggleTest,
  status,
  statusChangeHandler,
  sessionId,
}) => {
  const video = useRef();
  const video2 = useRef();

  const setStatus = (action) => {
    statusChangeHandler(action);
  };

  useEffect(() => {
    console.log(status);

    if (isRealtor) {
      switch (status) {
        case REALTOR_STATUS.BEFORE_START:
          console.log(`처음으로 돌아가기`);
          //예약목록 보기
          //현재 접속 중이 아니지롱 표시
          //webrtc Peer 초기화
          break;

        case REALTOR_STATUS.START_BUT_NOT_CONNECT:
          const confirm = window.confirm;

          if (confirm(`정말로 함? 상담 시작함`)) {
            //유저에게 알람을 보낸다

            //오른쪽 리스트를 매물 목록으로 전환한다
            //유저의 접속을 기다리고 있습니다...
            //방에 들어아고 내 화면 틀기
            register();
          } else {
          }

          break;

        case REALTOR_STATUS.CONNECTING:
          //webrtc통신하기
          break;

        default:
          console.log(`없는 상태인데`);
          break;
      }
    } else {
      switch (status) {
        case USER_STATUS.ENTER_SESSION:
          //중개사에게 연락 요청 보내기
          //응답을 기다리는 중 띄우기
          break;

        case USER_STATUS.CONNECTING:
          //반갑연결하기
          //통화 진행하기
          //내 오디오를 상대에게 보내면서
          //상대 영상과 오디오 받아오기

          //녹화버튼 활성화하기
          break;

        case USER_STATUS.END:
          //끗, webrtc초기화
          //리뷰 활성화하기
          //신고 활성화하기
          break;

        default:
          break;
      }
    }
  }, [isRealtor, status]);

  const ws = useRef(new WebSocket("wss://localhost:8443/groupcall"));
  var participants = {};
  var name = isRealtor ? "중개사맨" : "고객";
  var room = sessionId;

  window.onbeforeunload = function () {
    ws.current.close();
  };

  ws.current.onclose = () => {
    console.log("나 걍 꺼지고 싶어...");
    // setTimeout(ws.current = new WebSocket("wss://localhost:8443/groupcall"), 300)
  };

  ws.current.onmessage = function (message) {
    var parsedMessage = JSON.parse(message.data);
    console.info("Received message: " + message.data);

    switch (parsedMessage.id) {
      case "existingParticipants":
        onExistingParticipants(parsedMessage);
        break;
      case "newParticipantArrived":
        onNewParticipant(parsedMessage);
        break;
      case "participantLeft":
        onParticipantLeft(parsedMessage);
        break;
      case "receiveVideoAnswer":
        receiveVideoResponse(parsedMessage);
        break;
      case "iceCandidate":
        participants[parsedMessage.name].rtcPeer.addIceCandidate(
          parsedMessage.candidate,
          function (error) {
            if (error) {
              console.error("Error adding candidate: " + error);
              return;
            }
          }
        );
        break;
      default:
        console.error("Unrecognized message", parsedMessage);
    }
  };

  function register() {
    // name = document.getElementById("name").value;
    // room = document.getElementById("roomName").value;

    // document.getElementById("room-header").innerText = "ROOM " + room;
    // document.getElementById("join").style.display = "none";
    // document.getElementById("room").style.display = "block";

    var message = {
      id: "joinRoom",
      name: name,
      room: room,
    };
    sendMessage(message);
  }

  function onNewParticipant(request) {
    receiveVideo(request.name);
  }

  function receiveVideoResponse(result) {
    participants[result.name].rtcPeer.processAnswer(
      result.sdpAnswer,
      function (error) {
        if (error) return console.error(error);
      }
    );
  }

  function onExistingParticipants(msg) {
    var constraints = {
      audio: true,
      video: {
        mandatory: {
          maxWidth: 320,
          maxFrameRate: 15,
          minFrameRate: 15,
        },
      },
    };
    console.log(name + " registered in room " + room);
    const participant = Participant(name);
    participants[name] = participant;
    // var video = participant.getVideoElement();

    var options = {
      localVideo: video.current,
      mediaConstraints: constraints,
      onicecandidate: participant.onIceCandidate.bind(participant),
    };
    participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(
      options,
      function (error) {
        if (error) {
          return console.error(error);
        }
        this.generateOffer(participant.offerToReceiveVideo.bind(participant));
      }
    );

    msg.data.forEach(receiveVideo);
  }

  function leaveRoom() {
    sendMessage({
      id: "leaveRoom",
    });

    for (var key in participants) {
      participants[key].dispose();
    }

    document.getElementById("join").style.display = "block";
    document.getElementById("room").style.display = "none";

    ws.current.close();
  }

  function receiveVideo(sender) {
    const participant = Participant(sender);
    participants[sender] = participant;
    // var video = participant.getVideoElement();

    var options = {
      remoteVideo: video2.current,
      onicecandidate: participant.onIceCandidate.bind(participant),
    };

    participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(
      options,
      function (error) {
        if (error) {
          return console.error(error);
        }
        this.generateOffer(participant.offerToReceiveVideo.bind(participant));
      }
    );
  }

  function onParticipantLeft(request) {
    console.log("Participant " + request.name + " left");
    var participant = participants[request.name];
    participant.dispose();
    delete participants[request.name];
  }

  function sendMessage(message) {
    var jsonMessage = JSON.stringify(message);
    console.log("Sending message: " + jsonMessage);
    ws.current.send(jsonMessage);
  }

  //============================================================================
  //==============Participant 객체 생성기========================================
  //============================================================================
  const Participant = (name) => {
    return {
      name,
      offerToReceiveVideo(error, offerSdp, wp) {
        if (error) return console.error("sdp offer error");

        console.log("Invoking SDP offer callback function");

        sendMessage({
          id: "receiveVideoFrom",
          sender: name,
          sdpOffer: offerSdp,
        });
      },
      onIceCandidate(candidate, wp) {
        console.log("Local candidate" + JSON.stringify(candidate));

        sendMessage({
          id: "onIceCandidate",
          candidate: candidate,
          name,
        });
      },
      rtcPeer: null,
      dispose() {
        console.log("Disposing participant " + this.name);
        this.rtcPeer.dispose();
        // container.parentNode.removeChild(container);
      },
    };
  };

  return (
    <>
      <video autoPlay={true} ref={video}></video>
      <video autoPlay={true} ref={video2}></video>
      <div className={classes.msgBox}>
        <h1>멀르</h1>
        <Button
          clickEvent={() => {
            register();
          }}
        >
          ㄱㄱ
        </Button>
        <Button
          clickEvent={() => {
            toggleTest();
          }}
        >
          {!isRealtor ? "중개사" : "고객"} 해보기
        </Button>
      </div>
    </>
  );
};

export default ConsultingMeetPage;
