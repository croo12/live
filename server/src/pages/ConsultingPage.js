import { useState } from "react";
import { useParams } from "react-router-dom";
import ConsultingMeetPage from "../components/ConsultingMeetPage";
import ConsultingRightBox from "../components/ConsultingRightBox";
import { usePrompt } from "../util/usePrompt";
import classes from "./ConsultingPage.module.scss";

//화상통화
const ConsultingPage = (props) => {
  const { sessionId } = useParams();
  const [isRealtor, toggleRealtor] = useState(true);

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
          <ConsultingMeetPage isRealtor={isRealtor} toggleTest={toggleTest} />
        </div>
        <div className={classes.lists}>
          <ConsultingRightBox isRealtor={isRealtor} />
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;
