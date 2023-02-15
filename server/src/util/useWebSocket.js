import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/user-slice";

const JAVA_SERVER_URL = `wss://live-live.store:8080/groupcall`;

const useWebSocket = (sessionId) => {
  const [responseMsg, setResponseMsg] = useState("");
  const socket = useRef(null);
  const dispatch = useDispatch();
  const isRealtor = useSelector((state) => state.user.userInfo.isRealtor);

  useEffect(() => {
    socket.current = new WebSocket(JAVA_SERVER_URL);

    socket.current.onmessage = (event) => {
      const data = event.data;
      setResponseMsg(JSON.parse(data));
    };

    socket.current.onopen = () => {
      console.log("WebSocket connection established");
      dispatch(userAction.connectedWebsocket(socket.current));

      if (!isRealtor) {
        console.log("등록시도합니다...", isRealtor);
        const message = {
          id: "joinRoom",
          name: isRealtor ? "중개사" : "고객",
          room: sessionId,
        };
        socket.current.send(JSON.stringify(message));
      }
    };

    socket.current.onclose = () => {
      console.log("WebSocket connection closed");
      dispatch(userAction.disconnectWebsocket());
    };

    return () => {
      socket.current.close();
    };
  }, []);

  const sendMessage = useCallback((message) => {
    const data = JSON.stringify(message);
    socket.current.send(data);
  }, []);

  return { responseMsg, sendMessage, socket };
};

export default useWebSocket;
