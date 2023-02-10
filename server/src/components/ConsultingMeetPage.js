import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import { makeUUID } from "../util/UUID";

import classes from "./ConsultingMeetPage.module.scss";
import { REALTOR_STATUS, USER_STATUS } from "../pages/ConsultingPage";
import { BsRecordCircle } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { IoExitOutline, IoVolumeMuteOutline } from "react-icons/io5";
import useWebSocket from "../util/useWebSocket";
import useWebRTC from "../util/useWebRTC";
import { useNavigate } from "react-router-dom";
import useRecording from "../util/useRecording";

const ConsultingMeetPage = ({
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

  //이름 만들기용 현재 무작위지만 나중에 실제 닉네임으로 변경 필요
  const [name] = useState(makeUUID());

  //녹화 관리용 [녹화 상태인가? , 녹화시작, 녹화종료]
  const [recording, startRecording, stopRecording] = useRecording({
    stream: localVideo.current?.srcObject,
    recordingFiles,
    setRecordingFiles,
  });

  const [audio, setAudio] = useState(true);
  // const [record, setRecord] = useState(false);

  const participants = useRef({});
  const { socket, responseMsg, sendMessage } = useWebSocket();
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
    name,
    audio,
    sessionId,
  });

  useEffect(() => {
    console.info(`Received message: `, responseMsg);

    switch (responseMsg.id) {
      //누가 있음
      case "existingParticipants":
        setInfo(`내 기기 연결 중...`);
        onExistingParticipants(responseMsg);
        if (isRealtor) {
          // statusChangeHandler(REALTOR_STATUS.START_BUT_NOT_CONNECT);
        } else {
          // statusChangeHandler(USER_STATUS.)
        }
        break;

      //상대가 왔다.
      case "newParticipantArrived":
        onNewParticipant(responseMsg);
        break;

      //상대가 나갔다
      case "participantLeft":
        onParticipantLeft(responseMsg);
        break;

      case "receiveVideoAnswer":
        console.log("잘되용");
        setInfo(``);
        if (isRealtor) {
          statusChangeHandler(REALTOR_STATUS.CONNECTING);
        } else {
          statusChangeHandler(USER_STATUS.CONNECTING);
        }

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

  useEffect(() => {
    switch (status) {
      case REALTOR_STATUS.BEFORE_START:
        break;
      case REALTOR_STATUS.START_BUT_NOT_CONNECT:
        //유저에게 알람을 보낸다
        setInfo(`유저의 접속을 기다리고 있습니다...`);
        //방에 들어아고 내 화면 틀기
        console.log(`이건 댐`);
        register();
        break;
      case REALTOR_STATUS.CONNECTING:
        break;

      case USER_STATUS.ENTER_SESSION:
        setInfo(`중개사에게 연결 중입니다...`);
        register();
        break;

      case USER_STATUS.CONNECTING:
        setInfo(``);
        break;

      case USER_STATUS.END:
        setInfo(`통화 종료`);
        localVideo.current.pause();
        break;

      default:
        console.log("몰루");
    }
  }, [isRealtor, status]);

  const toggleAudio = () => {
    setAudio(!audio);
  };

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
