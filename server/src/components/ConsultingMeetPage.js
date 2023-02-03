import { useEffect, useRef, useState } from "react";
import kurentoUtils from "kurento-utils";
import Button from "../UI/Button";

import classes from "./ConsultingMeetPage.module.scss";
import { REALTOR_STATUS, USER_STATUS } from "../pages/ConsultingPage";

const ConsultingMeetPage = ({
  isRealtor,
  toggleTest,
  status,
  statusChangeHandler,
  sessionId,
}) => {
  const video = useRef();
  const video2 = useRef();

  const [info, setInfo] = useState("준비중...");

  const setStatus = (action) => {
    statusChangeHandler(action);
  };

  useEffect(() => {
    switch (status) {
      case REALTOR_STATUS.BEFORE_START:
        // if(wep)
        break;
      case REALTOR_STATUS.START_BUT_NOT_CONNECT:
        //오른쪽 리스트를 매물 목록으로 전환

        //유저에게 알람을 보낸다
        //유저의 접속을 기다리고 있습니다...
        //방에 들어아고 내 화면 틀기
        register();
        break;
      case REALTOR_STATUS.CONNECTING:
        break;

      case USER_STATUS.ENTER_SESSION:
        break;

      case USER_STATUS.CONNECTING:
        break;
    }
  }, [isRealtor, status]);

  const ws = useRef(new WebSocket("wss://localhost:8080/groupcall"));
  const participants = {};
  let name = isRealtor ? "중개사맨" : "고객";
  let room = sessionId;

  window.onbeforeunload = () => {
    ws.current.close();
  };

  ws.current.onclose = () => {
    console.log("나 걍 꺼지고 싶어...");

    // let newWS;
    // setTimeout((newWS = new WebSocket("wss://localhost:8443/groupcall")), 300);

    // while (newWS.readyState != 4) {
    //   console.log(`...시도`);
    // }

    // ws.current = newWS;
    // console.log("다시 일한다...");
  };

  ws.current.onmessage = (message) => {
    const parsedMessage = JSON.parse(message.data);
    console.info("Received message: " + message.data);

    switch (parsedMessage.id) {
      //누가 있음
      case "existingParticipants":
        onExistingParticipants(parsedMessage);
        break;

      //상대가 왔다.
      case "newParticipantArrived":
        onNewParticipant(parsedMessage);
        break;

      //상대가 나갔다
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

  const register = () => {
    const message = {
      id: "joinRoom",
      name: name,
      room: room,
    };
    sendMessage(message);
  };

  //상대가 연결되었습니다
  function onNewParticipant(request) {
    if (isRealtor) {
      setInfo("고객이 접속하였습니다");
    } else {
      console.log("중개사가 다시 방에 접속했습니다");
    }

    receiveVideo(request.name);
  }

  //비디오가 온다네
  function receiveVideoResponse(result) {
    participants[result.name].rtcPeer.processAnswer(
      result.sdpAnswer,
      function (error) {
        if (error) return console.error(error);
      }
    );
  }

  //이미 누가 있어용
  const onExistingParticipants = (msg) => {
    if (!isRealtor) setInfo("중개사와 연결중입니다...");

    const constraints = {
      audio: true,
      video: {
        mandatory: {
          maxWidth: 1280,
          maxFrameRate: 30,
          minFrameRate: 30,
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
        setInfo("");
      }
    );

    msg.data.forEach(receiveVideo);
  };

  function leaveRoom() {
    sendMessage({
      id: "leaveRoom",
    });

    for (var key in participants) {
      participants[key].dispose();
    }

    // document.getElementById("join").style.display = "block";
    // document.getElementById("room").style.display = "none";

    ws.current.close();
  }

  function receiveVideo(sender) {
    const participant = Participant(sender);
    participants[sender] = participant;

    //상대가 고객이라면 -> 소리만 받음
    //상대가 중개사라면 -> 화면과 소리 다 받기
    let constraints;

    if (isRealtor) {
      constraints = {
        audio: true,
        video: false,
      };
    } else {
      constraints = {
        audio: true,
        video: {
          mandatory: {
            maxWidth: 1280,
            maxFrameRate: 30,
            minFrameRate: 30,
          },
        },
      };
    }

    const options = {
      remoteVideo: isRealtor ? video2.current : video.current,
      onicecandidate: participant.onIceCandidate.bind(participant),
      mediaConstraints: constraints,
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

  //상대가 떠남
  const onParticipantLeft = (request) => {
    console.log(`상대 ${request.name}가 나가버림`);
    const participant = participants[request.name];
    participant.dispose();
    delete participants[request.name];
  };

  const sendMessage = (message) => {
    var jsonMessage = JSON.stringify(message);
    console.log("Sending message: " + jsonMessage);
    if (ws.current.readyState) ws.current.send(jsonMessage);
  };

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
      <video autoPlay={true} ref={video2} width="0" height="0"></video>
      <div className={classes.msgBox}>
        <h1>{info}</h1>
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
