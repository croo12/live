import { useCallback, useEffect, useRef, useState } from "react";

const BEFORE_START = 0;
const BEFORE_ACTION = 1;
const NOW_ACTION = 2;

const ConsultingMeetPage = (props) => {
  const video = useRef();
  const state = useState(BEFORE_START);

  //일단 나 중개사임
  const isRealtor = useRef(true);

  const [sessionId, setSession] = useState(props.sessionId);
  const [wsocket, setSocket] = useState(
    new WebSocket(`ws://localhost:8443/helloworld`)
  );
  const [webRtcPeer, setWebRtcPeer] = useState(null);

  //로딩시 일어날 일들
  useEffect(() => {
    console.log("로오딩");

    setSocket(new WebSocket(`백엔드 주소/${sessionId}`));

    wsocket.onmessage = (msg) => {
      console.log(`메세지가 왔다네 ${msg}`);
    };

    window.onbeforeunload = () => {
      wsocket.close();
    };

    webRtcPeer.addIceCandidate(`ㅁㄹ`);
  }, [wsocket, sessionId, webRtcPeer]);

  //서버통신용 명령어 마구 선언하기

  //서버로 메세지 전송
  const sendMsg = useCallback((msg) => {
    if (wsocket.readyState !== wsocket.OPEN) {
      console.warn(`웹소켓 세션 안열림 : ${wsocket.readyState}`);
      return;
    }

    const jsonMsg = JSON.stringify(msg);
    wsocket.send(jsonMsg);
  });

  //웹소켓 시그널링하기 위한 선언들
  const handlerProcessSdpAnswer = (jsonMsg) => {
    console.log(`kms에서 답장이 왔으니 WEBRTC 진행 해버릴까...`);

    if (webRtcPeer == null) {
      console.log("상대가 없는데?");
      return;
    }

    //에러남
    webRtcPeer.processAnswer(jsonMsg.sdpAnswer, (err) => {
      if (err) {
        new Error(err);
        // stop(); 중지
        return;
      }

      //비디오 시작하기
      //
    });
  };

  //그럴싸한 후보 추가하기
  const handleAddIceCandidate = (jsonMsg) => {
    if (webRtcPeer == null) {
      console.warn("상대가 없는데 경로를 왜 찾아");
      return;
    }

    webRtcPeer.addIceCandidate(jsonMsg.candidate, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  };

  //시-작
  // new KurentoUtils();

  //메시지 받았습니다
  wsocket.onmessage = (msg) => {
    const jsonMsg = JSON.parse(msg);
    console.log(`당신이 받은 메시지 : `, jsonMsg);

    switch (jsonMsg.id) {
      case `PROCESS_SDP_ANSWER`:
        handlerProcessSdpAnswer(jsonMsg);
        break;

      default:
        break;
    }
  };

  return <video ref={video}></video>;
};

export default ConsultingMeetPage;
