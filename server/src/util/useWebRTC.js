import { useCallback, useEffect, useRef, useState } from "react";
import kurentoUtils from "kurento-utils";
import { useFetcher } from "react-router-dom";

const BACK_SERVER_URL = `wss://localhost:8443/call`;

const useWebRtcPeer = (options, sdpOfferFunc) => {
  const webRtcPeer = useRef(null);

  const callbackFunc = useCallback(
    (err) => {
      if (err) console.error(err);
      else kurentoUtils.generateOffer(sdpOfferFunc);
    },
    [sdpOfferFunc]
  );

  useEffect(() => {
    const WEBRTCPEER = kurentoUtils.WebRtcPeer;

    if (options)
      webRtcPeer.current = options.localVideo
        ? new WEBRTCPEER.WebRtcPeerSendrecv(options, callbackFunc)
        : new WEBRTCPEER.WebRtcPeerRecvonly(options, callbackFunc);
    else webRtcPeer.current = null;
  }, [options, callbackFunc]);

  return webRtcPeer;
};

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
    };

    ws.current.onclose = () => {
      console.log("웹소켓 연결안댐");
    };
  });

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

const useWebRTC = ({ localVideo, remoteVideo, sessionId }) => {
  // const [wsocket, setSocket] = useState(new WebSocket(BACK_SERVER_URL));

  const [options, setOptions] = useState(null);
  const [callbackFunc, setCallbackFunc] = useState(null);

  const { responseMsg, sendMsg } = useWebSocket();

  const webRtcPeer = useWebRtcPeer(options, callbackFunc);

  const webRtcInterface = useCallback(() => {
    return {
      iceCandidate(jsonMsg) {
        webRtcPeer.current?.addIceCandidate(jsonMsg.candidate, (err) => {
          if (err) return console.error(err);
        });
      },
      processAnswer(jsonMsg) {
        webRtcPeer.current?.processAnswer(jsonMsg.sdpAnswer, (err) => {
          if (err) return console.error(err);
        });
      },
      clear(jsonMsg) {
        const stopMessageId = true ? "stop" : "stopPlay";
        if (webRtcPeer.current) {
          webRtcPeer.current?.dispose();
          setOptions(null);
          setCallbackFunc(null);

          if (!jsonMsg) {
            let jsonMsg = {
              id: stopMessageId,
            };
            sendMsg(jsonMsg);
          }
        }
      },
    };
  }, [webRtcPeer, sendMsg]);

  const callResponse = useCallback(
    (responseMsg) => {
      if (responseMsg.response !== "accepted") {
        // console.log("소환 실패");
        // stop();
        alert("소환실패");
      } else {
        webRtcInterface.processAnswer(responseMsg);
      }
    },
    [webRtcInterface]
  );

  const onIceCandidate = useCallback(
    (candidate) => {
      console.log("Local candidate " + JSON.stringify(candidate));

      let message = {
        id: "onIceCandidate",
        candidate: candidate,
      };
      sendMsg(message);
    },
    [sendMsg]
  );

  const incomingCall = useCallback(
    (responseMsg) => {
      if (false) {
        let response = {
          id: "incomingCallResponse",
          from: responseMsg.from,
          callResponse: "reject",
          message: "bussy",
        };
        return sendMsg(response);
      }

      //전화 못하게하기
      const confirm = window.confirm;

      if (confirm(`${responseMsg.from}로부터 연락`)) {
        setOptions({
          localVideo,
          remoteVideo,
          onicecandidate: onIceCandidate,
        });
      } else {
        var response = {
          id: "incomingCallResponse",
          from: responseMsg.from,
          callResponse: "reject",
          message: "user declined",
        };
        sendMsg(response);
        // stop();
      }
    },
    [localVideo, remoteVideo, onIceCandidate, sendMsg]
  );

  const startCommunication = useCallback(
    (responseMsg) => {
      webRtcInterface.processAnswer(responseMsg);
    },
    [webRtcInterface]
  );

  const stop = useCallback(
    (bool) => {
      var stopMessageId = true ? "stop" : "stopPlay";
      // setCallState(POST_CALL);
      if (webRtcPeer.current) {
        webRtcPeer.current.dispose();
        webRtcPeer.current = null;

        if (!bool) {
          var message = {
            id: stopMessageId,
          };
          sendMsg(message);
        }
      }
      // hideSpinner(videoInput, videoOutput);
    },
    [webRtcPeer, sendMsg]
  );

  const playResponse = useCallback(
    (responseMsg) => {
      if (responseMsg.response !== "accepted") {
        //   hideSpinner(videoOutput);
        // document.getElementById('videoSmall').style.display = 'block';
        alert(responseMsg.error);
        // document.getElementById('peer').focus();
        // setCallState(POST_CALL);
      } else {
        // setCallState(IN_PLAY);
        webRtcInterface.processAnswer(responseMsg);
      }
    },
    [webRtcInterface]
  );

  const playEnd = useCallback(() => {
    //   setCallState(POST_CALL);
    // hideSpinner(videoInput, videoOutput);
    // document.getElementById('videoSmall').style.display = 'block';
  }, []);

  useEffect(() => {
    console.log(`받은 메시지 ${responseMsg}`);
    switch (responseMsg.id) {
      // case "registerResponse":
      //   registerResponse(parsedMessage);
      //   break;
      case "callResponse":
        callResponse(responseMsg);
        break;
      case "incomingCall":
        incomingCall(responseMsg);
        break;
      case "startCommunication":
        startCommunication(responseMsg);
        break;
      case "stopCommunication":
        console.info("Communication ended by remote peer");
        stop(true);
        break;
      case "playResponse":
        playResponse(responseMsg);
        break;
      case "playEnd":
        playEnd();
        break;
      case "iceCandidate":
        webRtcInterface.iceCandidate(responseMsg);
        break;

      default:
        console.log(`뭔지 모를 메세지인데? ${responseMsg}`);
        break;
    }
  }, [
    responseMsg,
    callResponse,
    incomingCall,
    startCommunication,
    stop,
    playResponse,
    playEnd,
    webRtcInterface,
  ]);
};

export default useWebRTC;
