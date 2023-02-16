import kurentoUtils from "kurento-utils";

class Participant {
  constructor(name, sendMessage) {
    this.name = name;

    this.offerToReceiveVideo = function (error, offerSdp, wp) {
      if (error) return console.error("sdp offer error");

      sendMessage({
        id: "receiveVideoFrom",
        sender: name,
        sdpOffer: offerSdp,
      });
    };

    this.onIceCandidate = function (candidate, wp) {
      sendMessage({
        id: "onIceCandidate",
        candidate: candidate,
        name,
      });
    };
    this.rtcPeer = null;
    this.dispose = function () {
      this.rtcPeer.dispose();
    };
  }
}

const useWebRTC = ({
  isRealtor,
  participants,
  sendMessage,
  localVideo,
  remoteVideo,
  name,
  audio,
  sessionId,
}) => {
  const receiveVideo = (sender) => {
    const participant = new Participant(sender, sendMessage);
    participants.current[sender] = participant;

    let constraints;

    constraints = {
      audio: true,
      video: true,
    };

    const options = {
      remoteVideo: isRealtor ? remoteVideo.current : localVideo.current,
      onicecandidate: participant.onIceCandidate.bind(participant),
      mediaConstraints: constraints,
      configuration: { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] },
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
  };

  return {
    onNewParticipant(request) {
      receiveVideo(request.name);
    },

    receiveVideoResponse(result) {
      participants.current[result.name].rtcPeer.processAnswer(
        result.sdpAnswer,
        function (error) {
          if (error) return console.error(error);
        }
      );
    },

    onExistingParticipants(msg) {
      const constraints = {
        audio: true,
        video: true,
      };

      const participant = new Participant(name, sendMessage);
      participants.current[name] = participant;

      var options = {
        localVideo: isRealtor ? localVideo.current : remoteVideo.current,
        mediaConstraints: constraints,
        onicecandidate: participant.onIceCandidate.bind(participant),
        configuration: {
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        },
      };
      participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(
        options,
        function (error) {
          if (error) {
            return console.error(error);
          }
          this.generateOffer(participant.offerToReceiveVideo.bind(participant));
        }
      );

      msg.data.forEach(receiveVideo);
    },

    onParticipantLeft(request) {
      const participant = participants.current[request.name];
      participant.dispose();
      delete participants.current[request.name];
    },

    register() {
      const message = {
        id: "joinRoom",
        name: name,
        room: sessionId,
      };
      sendMessage(message);
    },

    leaveRoom() {
      sendMessage({
        id: "leaveRoom",
      });

      for (let key in participants.current) {
        participants.current[key].dispose();
      }
    },
  };
};

export default useWebRTC;
