import { useState } from "react";
import React, { useRef } from "react";

import { useParams } from "react-router-dom";
import ConsultingMeetPage from "../components/ConsultingMeetPage";
import ConsultingRightBox from "../components/ConsultingRightBox";
import { usePrompt } from "../util/usePrompt";

import classes from "./ConsultingPage.module.scss";

export const REALTOR_STATUS = {
  BEFORE_START: 0,
  START_BUT_NOT_CONNECT: 1,
  CONNECTING: 2,
};

export const USER_STATUS = {
  ENTER_SESSION: 3,
  CONNECTING: 4,
  END: 5,
};

//화상통화
const ConsultingPage = (props) => {
  const { sessionId } = useParams();
  const [isRealtor, toggleRealtor] = useState(true);
  const [status, setStatus] = useState(isRealtor ? 0 : 3);

  const statusChangeHandler = (status) => {
    console.log(status);

    if (isRealtor) {
      switch (status) {
        case REALTOR_STATUS.BEFORE_START:
          console.log(`처음으로 돌아가기`);
          //예약목록 보기
          //현재 접속 중이 아니지롱 표시
          //webrtc Peer 초기화
          break;

        case REALTOR_STATUS.START_BUT_NOT_CONNECT:
          const confirm = window.confirm;

          if (confirm(`정말로 함? 상담 시작함`)) {
            setStatus(REALTOR_STATUS.START_BUT_NOT_CONNECT);
          } else {
            setStatus(REALTOR_STATUS.BEFORE_START);
          }

          break;

        case REALTOR_STATUS.CONNECTING:
          //webrtc통신하기
          break;

        default:
          console.log(`없는 상태임 ${status}`);
          break;
      }
    } else {
      switch (status) {
        case USER_STATUS.ENTER_SESSION:
          //중개사에게 연락 요청 보내기
          //응답을 기다리는 중 띄우기
          break;

        case USER_STATUS.CONNECTING:
          //반갑연결하기
          //통화 진행하기
          //내 오디오를 상대에게 보내면서
          //상대 영상과 오디오 받아오기

          //녹화버튼 활성화하기
          break;

        case USER_STATUS.END:
          //끗, webrtc초기화
          //리뷰 활성화하기
          //신고 활성화하기
          break;

        default:
          break;
      }
    }
    setStatus(status);
  };

  usePrompt({
    when: true,
    message: `페이지 이동으로 통화가 종료될 수 있습니다. \n 정말로 나가시겠습니까?`,
  });

  const toggleTest = () => {
    toggleRealtor(!isRealtor);
  };

  return (
    <>
      {/* <h1> 안녕 나는 통화 페이지</h1> */}
      {/*중단
        왼쪽 박스는 통화 화면임
        오른쪽 박스는 예약 목록, 매물 목록 혹은 매물 세부 (어쩌면 채팅창 추가도 가능성)
      */}
      <div className={classes.consulting_page}>
        <div className={classes.video_box}>
          <ConsultingMeetPage
            isRealtor={isRealtor}
            toggleTest={toggleTest}
            status={status}
            statusChangeHandler={statusChangeHandler}
            sessionId={sessionId}
          />
        </div>
        <div className={classes.lists}>
          <ConsultingRightBox
            isRealtor={isRealtor}
            statusChangeHandler={statusChangeHandler}
            status={status}
          />
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;

export const VideoCallPage = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [peerConnection, setPeerConnection] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callActive, setCallActive] = useState(false);

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setLocalStream(stream);
      localVideoRef.current.srcObject = stream;

      const peer = new RTCPeerConnection();
      setPeerConnection(peer);

      peer.addEventListener("icecandidate", (event) => {
        if (event.candidate) {
          console.log("New ICE candidate:", event.candidate);
        }
      });

      peer.addEventListener("track", (event) => {
        console.log("Remote track added:", event.streams[0]);
        setRemoteStream(event.streams[0]);
        remoteVideoRef.current.srcObject = event.streams[0];
      });

      stream.getTracks().forEach((track) => peer.addTrack(track, stream));

      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      console.log("Offer created:", offer);

      // here you would send the offer to a signaling server
      // for the purpose of this example, we'll just log it
      console.log("Sending offer:", offer);
    } catch (error) {
      console.error("Failed to start call:", error);
    }
  };

  const endCall = () => {
    peerConnection.close();
    setPeerConnection(null);
    setLocalStream(null);
    setRemoteStream(null);
    setCallActive(false);
  };

  return (
    <div className="video-call-page">
      <video
        ref={localVideoRef}
        autoPlay
        className="local-video"
        width="300"
        height="300"
      />
      <video
        ref={remoteVideoRef}
        autoPlay
        className="remote-video"
        width="300"
        height="300"
      />
      <div className="controls">
        {callActive ? (
          <button onClick={endCall}>End Call</button>
        ) : (
          <button onClick={startCall}>Start Call</button>
        )}
      </div>
    </div>
  );
};
