import kurentoUtils from "kurento-utils";

//============================================================================
//==============Participant 객체 생성기========================================
//============================================================================
class Participant {
  constructor(name, sendMessage) {
    this.name = name;

    this.offerToReceiveVideo = function (error, offerSdp, wp) {
      if (error) return console.error("sdp offer error");

      console.log(`Invoking SDP offer callback function`);

      sendMessage({
        id: "receiveVideoFrom",
        sender: name,
        sdpOffer: offerSdp,
      });
    };

    this.onIceCandidate = function (candidate, wp) {
      console.log("Local candidate" + JSON.stringify(candidate));

      sendMessage({
        id: "onIceCandidate",
        candidate: candidate,
        name,
      });
    };
    this.rtcPeer = null;
    this.dispose = function () {
      console.log("Disposing participant " + this.name);
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
  audio, //오디오 보낼지말지 정하기
  sessionId,
}) => {
  const receiveVideo = (sender) => {
    const participant = new Participant(sender, sendMessage);
    participants.current[sender] = participant;

    //상대가 고객이라면 -> 소리만 받음
    //상대가 중개사라면 -> 화면과 소리 다 받기
    let constraints;

    if (isRealtor) {
      constraints = {
        audio: true,
        video: true,
      };
    } else {
      constraints = {
        audio: true,
        video: true,
      };
    }

    const options = {
      remoteVideo: isRealtor ? remoteVideo.current : localVideo.current,
      onicecandidate: participant.onIceCandidate.bind(participant),
      mediaConstraints: constraints,
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
    //상대가 연결되었습니다
    onNewParticipant(request) {
      console.log("누가 왔고 무슨 요청인가요 이게", request);
      if (!request.data) receiveVideo(request.name);
    },

    //비디오가 온다네
    receiveVideoResponse(result) {
      console.log("난 뭘까...");

      participants.current[result.name].rtcPeer.processAnswer(
        result.sdpAnswer,
        function (error) {
          if (error) return console.error(error);
        }
      );
    },

    //나 자신과의 연결임 이거
    onExistingParticipants(msg) {
      console.log(`onExistingParticipants 작동중...`, isRealtor);

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

    //상대가 떠남
    onParticipantLeft(request) {
      console.log(`상대 ${request.name}가 나가버림`);
      const participant = participants.current[request.name];
      participant.dispose();
      delete participants.current[request.name];
    },
    register() {
      console.log("등록시도합니다...");
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
