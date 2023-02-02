//웹소켓 연결
//내가 받는 웹소켓 메시지 status인 responseMsg (백엔드 메시지)

import { useCallback, useEffect, useRef, useState } from "react";
const BACK_SERVER_URL = `wss://localhost:8443/groupcall`;

//웹소켓 메시지를 보내는 sendMsg 함수 리턴
const useWebSocket = () => {
  const [responseMsg, setMsg] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(BACK_SERVER_URL);

    ws.current.onmessage = (e) => {
      // console.log("메세지 받음", e);
      const data = e.data;

      setMsg(JSON.parse(data));
    };

    ws.current.onopen = () => {
      console.log("웹소켓 연결됨");
      // setMsg({ id: "WEBSOCKET_CONNECTION_OK" });
    };

    ws.current.onclose = () => {
      console.log("웹소켓 연결안댐");
    };

    window.onbeforeunload = () => {
      // ws.current.close();
    };
  }, []);

  const sendMsg = useCallback(
    (msg) => {
      const data = JSON.stringify(msg);
      console.log(`메시지 보내기 : ${data}`);
      ws.current.send(data);
    },
    [ws]
  );

  return { responseMsg, sendMsg };
};

export default useWebSocket;
