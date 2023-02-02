import { useCallback, useEffect, useRef, useState } from "react";
import kurentoUtils from "kurento-utils";
import { useNavigate } from "react-router-dom";
import useWebSocket from "./useWebSocket";

export const getWebRtcPeer = ({ options, sdpOfferFunc }) => {
  let webRtcPeer = null;

  const WEBRTCPEER = kurentoUtils.WebRtcPeer;

  // console.log(WEBRTCPEER);

  function callbackFunc(err) {
    if (err) console.error(err);
    else this.generateOffer(sdpOfferFunc);
  }

  if (options)
    webRtcPeer = options.mediaConstraints
      ? new WEBRTCPEER.WebRtcPeerSendonly(options, callbackFunc)
      : new WEBRTCPEER.WebRtcPeerRecvonly(options, callbackFunc);
  else webRtcPeer = null;

  return webRtcPeer;
};

const useWebRTC = ({
  localVideo,
  remoteVideo,
  sessionId,
  isRealtor,
  responseMsg,
  sendMsg,
}) => {
  const navi = useNavigate();

  const participants = useRef({});

  // const { responseMsg, sendMsg } = useWebSocket();

  //============================================================================
  //==============Participant 객체 생성기========================================
  //============================================================================
  const Participant = useCallback(
    (name) => {
      return {
        name,
        offerToReceiveVideo(error, offerSdp, wp) {
          if (error) return console.error("sdp offer error");

          console.log("Invoking SDP offer callback function");

          sendMsg({
            id: "receiveVideoFrom",
            sender: name,
            sdpOffer: offerSdp,
          });
        },
        onIceCandidate(candidate, wp) {
          console.log("Local candidate" + JSON.stringify(candidate));

          sendMsg({
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
    },
    [sendMsg]
  );

  //============================================================================
  //======================Send Message Action===================================
  //============================================================================

  //방 만들어줘요, 날 등록해줘용
  const register = () => {
    const name = isRealtor ? `중개사님` : `고갱님`;
    const room = sessionId;

    sendMsg({
      id: "joinRoom",
      name,
      room,
    });
  };

  const leaveRoom = () => {
    sendMsg({ id: "leaveRoom" });

    for (let key in participants) {
      participants[key].dispose();
    }

    navi("/");
  };

  const receiveVideo = useCallback(
    (sender) => {
      const participant = new Participant(sender);
      participants[sender] = participant;
      const video = remoteVideo;

      const options = {
        remoteVideo: video,
        onicecandidate: participant.onIceCandidate.bind(participant),
      };

      participant.rtcPeer = getWebRtcPeer({
        options,
        sdpOfferFunc: participant.offerToReceiveVideo.bind(participant),
      });
    },
    [Participant, remoteVideo]
  );

  const onNewParticipant = useCallback(
    (request) => {
      receiveVideo(request.name);
    },
    [receiveVideo]
  );

  const receiveVideoResponse = (result) => {
    participants[result.name].rtcPeer.processAnswer(
      result.sdpAnswer,
      (error) => {
        if (error) return console.error(error);
      }
    );
  };

  const onExistingParticipants = useCallback(
    (msg) => {
      const constraints = {
        audio: true,
        video: {
          mandatory: {
            maxWidth: 320,
            maxFrameRate: 15,
            minFrameRate: 15,
          },
        },
      };

      const name = "고객";

      console.log(name + " registered in room " + sessionId);
      const participant = Participant(name);
      participants[name] = participant;
      const video = localVideo;

      const options = {
        localVideo: video,
        mediaConstraints: constraints,
        onicecandidate: participant.onIceCandidate.bind(participant),
      };
      participant.rtcPeer = getWebRtcPeer({
        options,
        sdpOfferFunc: participant.offerToReceiveVideo.bind(participant),
      });

      msg.data.forEach(receiveVideo);
    },
    [Participant, localVideo, receiveVideo, sessionId]
  );

  const onParticipantLeft = (request) => {
    console.log("Participant " + request.name + " left");
    const participant = participants[request.name];
    participant.dispose();
    delete participants[request.name];
  };

  useEffect(() => {
    console.log(`받은 메시지 ${responseMsg}`);
    switch (responseMsg.id) {
      case "WEBSOCKET_CONNECTION_OK":
        register();
        break;

      case "existingParticipants":
        onExistingParticipants(responseMsg);
        break;
      case "newParticipantArrived":
        onNewParticipant(responseMsg);
        break;
      case "participantLeft":
        onParticipantLeft(responseMsg);
        break;
      case "receiveVideoAnswer":
        receiveVideoResponse(responseMsg);
        break;
      case "iceCandidate":
        participants[responseMsg.name].rtcPeer.addIceCandidate(
          responseMsg.candidate,
          function (error) {
            if (error) {
              console.error("Error adding candidate: " + error);
              return;
            }
          }
        );
        break;
      default:
        if (responseMsg) console.error("Unrecognized message", responseMsg);
    }
  }, [responseMsg, onExistingParticipants, onNewParticipant]);

  return { register, leaveRoom };
};

export default useWebRTC;
