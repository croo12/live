import { useCallback, useEffect, useRef, useState } from "react";
import { WebRtcPeer as kurentoUtils } from "kurento-utils";
import Button from "../UI/Button";

const BEFORE_START = 0;
const BEFORE_ACTION = 1;
const NOW_ACTION = 2;

const ConsultingMeetPage = (props) => {
  const video = useRef();
  const video2 = useRef();
  const webRtcPeer = useRef(null);
  // const [webRtcPeer, setWebRtcPeer] = useState(null);

  //일단 나 중개사임
  const isRealtor = useRef(true);

  const [state, setState] = useState(BEFORE_START);
  const [sessionId, setSession] = useState(props.sessionId);
  const [wsocket, setSocket] = useState(
    new WebSocket(`wss://localhost:8443/helloworld`)
  );

  //그럴싸한 후보 추가하기
  const handleAddIceCandidate = useCallback(
    (jsonMsg) => {
      if (webRtcPeer.current == null) {
        console.warn("상대가 없는데 경로를 왜 찾아");
        return;
      }

      webRtcPeer.current.addIceCandidate(jsonMsg.candidate, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    },
    [webRtcPeer]
  );

  //서버로 메세지 전송
  const sendMsg = useCallback(
    (msg) => {
      if (wsocket.readyState !== wsocket.OPEN) {
        console.warn(`웹소켓 세션 안열림 : ${wsocket.readyState}`);
        return;
      }

      const jsonMsg = JSON.stringify(msg);
      wsocket.send(jsonMsg);
    },
    [wsocket]
  );

  //SDP Answer용
  const handlerProcessSdpAnswer = useCallback(
    (jsonMsg) => {
      console.log(`kms에서 답장이 왔으니 WEBRTC 진행 해버릴까...`);

      if (webRtcPeer.current == null) {
        console.log("상대가 없는데?");
        return;
      }

      //에러남
      webRtcPeer.current.processAnswer(jsonMsg.sdpAnswer, (err) => {
        if (err) {
          new Error(err);
          // stop(); 중지
          return;
        }

        //비디오 시작하기
        startVideo(true);
        //
      });
    },
    [webRtcPeer]
  );

  //로딩시 일어날 일들
  useEffect(() => {
    console.log("로오딩");

    //끄기 전에 웹소켓 닫기
    window.onbeforeunload = () => {
      wsocket.close();
    };

    //메시지 받았습니다
    wsocket.onmessage = (msg) => {
      // console.log(msg);
      const jsonMsg = JSON.parse(msg.data);
      console.log(`메세지가 왔다네 : `, jsonMsg);

      switch (jsonMsg.id) {
        case `PROCESS_SDP_ANSWER`:
          handlerProcessSdpAnswer(jsonMsg);
          break;

        case "ADD_ICE_CANDIDATE":
          handleAddIceCandidate(jsonMsg);
          break;

        default:
          console.log("뭐임 이건 없는 id잖어");
          break;
      }
    };
  }, [
    wsocket,
    sessionId,
    webRtcPeer,
    handleAddIceCandidate,
    handlerProcessSdpAnswer,
  ]);

  //서버통신용 명령어 마구 선언하기

  //시-작
  const uiStart = () => {
    console.log(`start Create WebServerPeer`);
    //상태 바꾸기
    //스피너 띄우기

    const options = {
      localVideo: video.current,
      remoteVideo: video2.current,
      mediaConstraints: { audio: true, video: true },
      onicecandidate: (candidate) =>
        sendMsg({
          id: "ADD_ICE_CANDIDATE",
          candidate: candidate,
        }),
    };

    webRtcPeer.current = new kurentoUtils.WebRtcPeerSendrecv(options, (err) => {
      if (err) {
        console.error(`WebRtcPeer 주고받기 실패함`);
        console.error(err);
        //정지!!!
        return;
      }

      console.log("내꺼 틀어볼까");
      startVideo();

      console.log("SDP offer 보내기");
      console.log(webRtcPeer.current);

      webRtcPeer.current.generateOffer((err, sdpOffer) => {
        if (err) {
          console.error("SDP Offer Gen 에러발생");
          //정지!!
          return;
        }

        //메세지 보내기
        sendMsg({ id: "PROCESS_SDP_OFFER", sdpOffer });

        console.log("됨");
        setState(BEFORE_ACTION);
      });
    });
  };

  const startVideo = (trigger) => {
    if (!trigger) {
      video.current.play().catch((err) => {
        console.error(err);
      });
    } else {
      video2.current.play().catch((err) => {
        console.error(err);
      });
    }
  };

  return (
    <>
      <video ref={video}></video>
      <video ref={video2}></video>
      <div>
        <Button clickEvent={uiStart}>ㅎㅇ</Button>{" "}
      </div>
    </>
  );
};

export default ConsultingMeetPage;
