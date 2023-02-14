import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";

import classes from "./ConsultingMeetPage.module.scss";
import { STATUS } from "../../pages/ConsultingPage";
import { BsRecordCircle } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { IoExitOutline, IoVolumeMuteOutline } from "react-icons/io5";
import useWebSocket from "../../util/useWebSocket";
import useWebRTC from "../../util/useWebRTC";
import { useNavigate } from "react-router-dom";
import useRecording from "../../util/useRecording";
import { usePrompt } from "../../util/usePrompt";

const ConsultingMeetPage = ({
  userInfo,
  isRealtor,
  status,
  statusChangeHandler,
  sessionId,
  recordingFiles,
  setRecordingFiles,
}) => {
  const navi = useNavigate();

  const localVideo = useRef();
  const remoteVideo = useRef();

  //비디오 가운데에 나오는 문구 세팅용
  const [info, setInfo] = useState("준비중...");

  //이름 만들기용
  const name = useRef(isRealtor ? "중개사" : "고객");

  //녹화 관리용 [녹화 상태인가? , 녹화시작, 녹화종료]
  const [recording, startRecording, stopRecording] = useRecording({
    stream: localVideo.current?.srcObject,
    recordingFiles,
    setRecordingFiles,
  });

  const [audio, setAudio] = useState(true);

  const participants = useRef({});
  const { socket, responseMsg, sendMessage } = useWebSocket(sessionId);
  const {
    onNewParticipant,
    receiveVideoResponse,
    onExistingParticipants,
    onParticipantLeft,
    register,
    leaveRoom,
  } = useWebRTC({
    isRealtor,
    participants,
    socket,
    sendMessage,
    localVideo,
    remoteVideo,
    name: name.current,
    audio,
    sessionId,
  });

  useEffect(() => {
    return () => {
      console.log(`헤헷, 들켰네요....`);
      leaveRoom();
    };
  }, []);

  useEffect(() => {
    switch (status) {
      case STATUS.REALTOR_ENTER:
        setInfo(`준비중...`);
        break;

      case STATUS.REALTOR_START_CONSULTING:
        //유저에게 알람을 보낸다

        //로딩 돌리기?
        setInfo(`유저의 접속을 기다리기`);

        //방에 들어아고 내 화면 틀기
        register();
        break;

      case STATUS.USER_ENTER:
        //들어왔져염
        break;

      default:
        console.log("몰루");
    }
  }, [status]);

  const toggleAudio = () => {
    setAudio(!audio);
  };

  usePrompt({
    when: localVideo.current?.srcObject,
    message: `페이지 이동으로 통화가 종료될 수 있습니다. \n 정말로 나가시겠습니까?`,
  });

  useEffect(() => {
    console.info(`Received message: `, responseMsg);

    switch (responseMsg.id) {
      //나 연결하면서 원래 있던놈 죄다 연결하기
      case "existingParticipants":
        setInfo(`내 기기 연결 중...`);
        onExistingParticipants(responseMsg);

      //상대가 왔다.
      case "newParticipantArrived":
        onNewParticipant(responseMsg);
        break;

      //상대가 나갔다
      case "participantLeft":
        onParticipantLeft(responseMsg);
        setInfo(`상대의 연결이 끊어졌습니다`);
        setTimeout(() => setInfo(""), 2000);
        break;

      case "receiveVideoAnswer":
        console.log("잘되용");
        setInfo(``);

        receiveVideoResponse(responseMsg);
        break;
      case "iceCandidate":
        participants.current[responseMsg.name].rtcPeer.addIceCandidate(
          responseMsg.candidate,
          function (error) {
            if (error) {
              console.error("Error adding candidate: " + error);
              return;
            }
          }
        );
        break;
      case undefined:
        console.log(`???`);
        break;
      default:
        console.error("Unrecognized message", responseMsg);
    }
  }, [responseMsg]);

  return (
    <>
      <video autoPlay={true} ref={localVideo}></video>
      <video autoPlay={true} width={0} height={0} ref={remoteVideo}></video>
      <div className={classes.msgBox}>
        <h1>{info}</h1>
      </div>

      <div className={classes.controllerBox}>
        <div className={classes.controllerBox_inner}>
          <div>
            <Button clickEvent={toggleAudio}>
              {audio ? <AiOutlineSound /> : <IoVolumeMuteOutline />}
            </Button>
          </div>
          <div className={"recordBtn"}>
            <Button
              clickEvent={() => {
                if (recording) {
                  console.log("recording stop");
                  stopRecording();
                  return;
                } else {
                  console.log("recording start");
                  startRecording();
                }
              }}
            >
              <BsRecordCircle />
            </Button>
          </div>
          <div>
            <Button
              clickEvent={() => {
                navi("/");
              }}
            >
              <IoExitOutline />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultingMeetPage;
