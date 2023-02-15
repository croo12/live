import { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import ConsultingMeetPage from "../components/consulting/ConsultingMeetPage";
import ConsultingRightBox from "../components/consulting/ConsultingRightBox";

import classes from "./ConsultingPage.module.scss";
import { useAuth } from "../components/common/AuthProtector";
import axiosInstance from "../util/axios";

export const STATUS = {
  REALTOR_ENTER: 100,
  REALTOR_START_CONSULTING: 111,
  REALTOR_END_CALL: 122,

  USER_ENTER: 200,
};

//화상통화
const ConsultingPage = (props) => {
  const { sessionId } = useParams();

  const { userInfo } = useAuth();
  const isRealtor = userInfo.isRealtor;

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

      case STATUS.REALTOR_END_CALL:
        if (confirm("정말로 종료하시겠습니까? \n 상담이 완전히 종료됩니다.")) {
          setStatus(STATUS.REALTOR_END_CALL);
        } else {
          console.log("종료안함");
        }
        break;
    }
  };

  const params = useParams();

  const toggleListInMobile = () => {
    toggleList(!viewList);
  };

  useEffect(() => {
    if (recordingFiles.length !== 0) {
      const frm = new FormData();
      frm.append(
        "records",
        recordingFiles[recordingFiles.length - 1],
        "duckduck2.mp4"
      );

      axiosInstance
        .post(`consultings/${params.consultingNo}/records`, frm, {
          // type
        })
        .then((res) =>
          console.log("Successfully sent recording to server", res)
        )
        .catch((error) => console.error(error));
    }
  }, [recordingFiles]);

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
