import { useEffect, useRef, useState } from "react";

const BEFORE_START = 0;
const BEFORE_ACTION = 1;
const NOW_ACTION = 2;

const ConsultingMeetPage = (props) => {
  const video = useRef();
  // const state = useState(BEFORE_START);

  // const [sessionId, setSession] = useState(props.sessionId);
  // const [wsocket, setSocket] = useState(
  //   new WebSocket(`백엔드 주소/${props.sessionId}`)
  // );
  // const [webRtcPeer, setWebRtcPeer] = useState(null);

  // window.onbeforeunload = () => {
  //   wsocket.close();
  // };

  // useEffect(() => {
  //   setSocket(new WebSocket(`백엔드 주소/${sessionId}`));

  //   wsocket.onmessage = (msg) => {
  //     console.log(`메세지가 왔다네 ${msg}`);
  //   };

  //   webRtcPeer.addIceCandidate(`ㅁㄹ`);
  // }, [wsocket, sessionId]);

  return <video ref={video}></video>;
};

export default ConsultingMeetPage;
