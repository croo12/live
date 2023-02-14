import { useState } from "react";

import { useParams } from "react-router-dom";
import ConsultingMeetPage from "../components/consulting/ConsultingMeetPage";
import ConsultingRightBox from "../components/consulting/ConsultingRightBox";

import classes from "./ConsultingPage.module.scss";
import { useAuth } from "../components/common/AuthProtector";

export const STATUS = {
  REALTOR_ENTER: 100,
  REALTOR_START_CONSULTING: 111,

  USER_ENTER: 200,
};

//화상통화
const ConsultingPage = (props) => {
  const { sessionId } = useParams();

  const { userInfo } = useAuth();
  const [isRealtor, toggleRealtor] = useState(userInfo.isRealtor);

  const [status, setStatus] = useState(
    isRealtor ? STATUS.REALTOR_ENTER : STATUS.USER_ENTER
  );
  const [viewList, toggleList] = useState(false, true);
  const [recordingFiles, setRecordingFiles] = useState([]);

  const orderHandler = (status) => {
    switch (status) {
      case STATUS.REALTOR_ENTER:
        console.log(`중개사 입장`);
        break;

      case STATUS.REALTOR_START_CONSULTING:
        if (confirm("상담을 시작하시겠습니까?")) {
          setStatus(STATUS.REALTOR_START_CONSULTING);
        } else {
          console.log(`연결 안함 ㅇㅋ...`);
        }
        break;
    }

    // console.log(status);

    // if (isRealtor) {
    //   switch (status) {
    //     case REALTOR_STATUS.BEFORE_START:
    //       console.log(`처음으로 돌아가기`);
    //       //예약목록 보기
    //       //현재 접속 중이 아니지롱 표시
    //       //webrtc Peer 초기화
    //       break;

    //     case REALTOR_STATUS.START_BUT_NOT_CONNECT:
    //       const confirm = window.confirm;

    //       if (confirm(`상담을 시작합니다`)) {
    //         setStatus(REALTOR_STATUS.START_BUT_NOT_CONNECT);
    //         return;
    //       } else {
    //         setStatus(REALTOR_STATUS.BEFORE_START);
    //       }

    //       break;

    //     case REALTOR_STATUS.CONNECTING:
    //       //webrtc통신하기
    //       break;

    //     default:
    //       console.log(`없는 상태임 ${status}`);
    //       break;
    //   }
    // } else {
    //   switch (status) {
    //     case USER_STATUS.ENTER_SESSION:
    //       //중개사에게 연락 요청 보내기
    //       //응답을 기다리는 중 띄우기
    //       break;

    //     case USER_STATUS.CONNECTING:
    //       //반갑연결하기
    //       //통화 진행하기
    //       //내 오디오를 상대에게 보내면서
    //       //상대 영상과 오디오 받아오기

    //       //녹화버튼 활성화하기
    //       break;

    //     case USER_STATUS.END:
    //       //끗, webrtc초기화
    //       //리뷰 활성화하기
    //       //신고 활성화하기
    //       break;

    //     default:
    //       break;
    //   }
    // }
    // setStatus(status);
  };

  const toggleListInMobile = () => {
    toggleList(!viewList);
  };

  return (
    <>
      <div className={classes.consulting_page}>
        <div className={classes.video_box}>
          <ConsultingMeetPage
            userInfo={userInfo}
            isRealtor={isRealtor}
            status={status}
            sessionId={sessionId}
            recordingFiles={recordingFiles}
            setRecordingFiles={setRecordingFiles}
            statusChangeHandler={orderHandler}
          />
        </div>
        <div className={`${classes.lists} ${viewList ? classes.isActive : ""}`}>
          <ConsultingRightBox
            isRealtor={isRealtor}
            statusChangeHandler={orderHandler}
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
