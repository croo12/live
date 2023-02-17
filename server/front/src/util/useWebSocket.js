import { useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";

const JAVA_SERVER_URL = `wss://live-live.store:8080/groupcall`;

const useWebSocket = (sessionId) => {
  const [responseMsg, setResponseMsg] = useState("");
  const socket = useRef(null);
  const isRealtor = useSelector((state) => state.user.userInfo.isRealtor);

  useEffect(() => {
    socket.current = new WebSocket(JAVA_SERVER_URL);

    socket.current.onmessage = (event) => {
      const data = event.data;
      setResponseMsg(JSON.parse(data));
    };

    socket.current.onopen = () => {
      if (!isRealtor) {
        const message = {
          id: "joinRoom",
          name: "user",
          room: sessionId,
        };
        socket.current.send(JSON.stringify(message));
      }
    };

    socket.current.onclose = () => {};

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
