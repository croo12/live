import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../UI/Button";

import classes from "./ConsultingMeetPage.module.scss";
import { REALTOR_STATUS, USER_STATUS } from "../pages/ConsultingPage";
import { BsRecordCircle } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { IoExitOutline, IoVolumeMuteOutline } from "react-icons/io5";
import useWebSocket from "../util/useWebSocket";
import useWebRTC from "../util/useWebRTC";

const ConsultingMeetPage = ({
  isRealtor,
  toggleTest,
  status,
  statusChangeHandler,
  sessionId,
}) => {
  const localVideo = useRef();
  const remoteVideo = useRef();

  const [info, setInfo] = useState("준비중...");
  const [name, setName] = useState(isRealtor ? "중개사맨" : "고객");

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
    sessionId,
  });

  const setStatus = (action) => {
    statusChangeHandler(action);
  };

  useEffect(() => {
    console.info(`Received message: `, responseMsg);

    switch (responseMsg.id) {
      //누가 있음
      case "existingParticipants":
        onExistingParticipants(responseMsg);
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
        //오른쪽 리스트를 매물 목록으로 전환

        //유저에게 알람을 보낸다
        //유저의 접속을 기다리고 있습니다...
        //방에 들어아고 내 화면 틀기
        console.log(`이건 댐`);
        register();
        break;
      case REALTOR_STATUS.CONNECTING:
        break;

      case USER_STATUS.ENTER_SESSION:
        register();
        break;

      case USER_STATUS.CONNECTING:
        break;

      case USER_STATUS.END:
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
        <Button
          clickEvent={() => {
            toggleTest();
          }}
        >
          {!isRealtor ? "중개사" : "고객"} 해보기
        </Button>
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
                console.log("recording start");
              }}
            >
              <BsRecordCircle />
            </Button>
          </div>
          <div>
            <Button
              clickEvent={() => {
                leaveRoom();
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
