import { useState } from "react";

import { useParams } from "react-router-dom";
import ConsultingMeetPage from "../components/consulting/ConsultingMeetPage";
import ConsultingRightBox from "../components/consulting/ConsultingRightBox";
import { usePrompt } from "../util/usePrompt";

import classes from "./ConsultingPage.module.scss";
import { useAuth } from "../components/common/AuthProtector";

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

  const { userInfo } = useAuth();
  const [isRealtor, toggleRealtor] = useState(userInfo.isRealtor);

  const [status, setStatus] = useState(
    isRealtor ? REALTOR_STATUS.BEFORE_START : USER_STATUS.ENTER_SESSION
  );
  const [viewList, toggleList] = useState(false, true);
  const [recordingFiles, setRecordingFiles] = useState([]);

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
            return;
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
    // setStatus(status);
  };

  const toggleTest = () => {
    toggleRealtor(!isRealtor);
  };

  const toggleListInMobile = () => {
    toggleList(!viewList);
  };

  return (
    <>
      {/*중단
        왼쪽 박스는 통화 화면임
        오른쪽 박스는 예약 목록, 매물 목록 혹은 매물 세부
      */}
      <h1>{isRealtor ? `너 중개사` : `너 유저`} </h1>
      <div className={classes.consulting_page}>
        <div className={classes.video_box}>
          <ConsultingMeetPage
            userInfo={userInfo}
            isRealtor={isRealtor}
            status={status}
            statusChangeHandler={statusChangeHandler}
            sessionId={sessionId}
            recordingFiles={recordingFiles}
            setRecordingFiles={setRecordingFiles}
          />
        </div>
        <div className={`${classes.lists} ${viewList ? classes.isActive : ""}`}>
          <ConsultingRightBox
            isRealtor={isRealtor}
            statusChangeHandler={statusChangeHandler}
            toggleListInMobile={toggleListInMobile}
            status={status}
            viewList={viewList}
            sessionId={sessionId}
          />
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;
