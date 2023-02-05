import kurentoUtils from "kurento-utils";

const useWebRTC = ({
  isRealtor,
  participants,
  socket,
  sendMessage,
  localVideo,
  remoteVideo,
  name,
  sessionId,
}) => {
  //============================================================================
  //==============Participant 객체 생성기========================================
  //============================================================================
  const Participant = ({ name, sendMessage }) => {
    return {
      name,
      offerToReceiveVideo(error, offerSdp, wp) {
        if (error) return console.error("sdp offer error");

        console.log(`Invoking SDP offer callback function`);

        sendMessage({
          id: "receiveVideoFrom",
          sender: this.name,
          sdpOffer: offerSdp,
        });
      },
      onIceCandidate(candidate, wp) {
        console.log("Local candidate" + JSON.stringify(candidate));

        sendMessage({
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
  };

  const receiveVideo = (sender) => {
    const participant = Participant({ name: sender, sendMessage });
    participants.current[sender] = participant;

    //상대가 고객이라면 -> 소리만 받음
    //상대가 중개사라면 -> 화면과 소리 다 받기
    let constraints;

    if (isRealtor) {
      constraints = {
        audio: true,
        video: false,
      };
    } else {
      constraints = {
        audio: true,
        video: {
          mandatory: {
            maxWidth: 920,
            maxFrameRate: 30,
            minFrameRate: 30,
          },
        },
      };
    }

    const options = {
      remoteVideo: isRealtor ? remoteVideo.current : remoteVideo.current,
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
      // if (isRealtor) {
      //   setInfo("고객이 접속하였습니다");
      // } else {
      //   console.log("중개사가 다시 방에 접속했습니다");
      // }

      receiveVideo(request.name);
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

    //이미 누가 있어용
    onExistingParticipants(msg) {
      // if (!isRealtor) setInfo("중개사와 연결중입니다...");

      const constraints = {
        audio: true,
        video: {
          mandatory: {
            maxWidth: 920,
            maxFrameRate: 30,
            minFrameRate: 30,
          },
        },
      };
      const name = "중개사맨";
      // console.log(name + " registered in sessionID " + sessionId);
      const participant = Participant({ name, sendMessage });
      participants.current[name] = participant;
      // var video = participant.getVideoElement();

      var options = {
        localVideo: localVideo.current,
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
          // setInfo("");
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

      socket.current.close();
    },
  };
};

export default useWebRTC;
