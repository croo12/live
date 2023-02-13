import { useState, useEffect, useCallback, useRef } from "react";

const JAVA_SERVER_URL = `wss://live-live.store:8080/groupcall`;

const useWebSocket = () => {
  const [responseMsg, setResponseMsg] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    socket.current = new WebSocket(JAVA_SERVER_URL);

    socket.current.onmessage = (event) => {
      const data = event.data;
      setResponseMsg(JSON.parse(data));
    };

    socket.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.current.onclose = () => {
      console.log("WebSocket connection closed");
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
