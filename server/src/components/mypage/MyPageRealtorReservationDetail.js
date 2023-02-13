import classes from "./MyPageRealtorReservationDetail.module.scss";

import ListBox from "../../UI/ListBox";
import MyReservationSearchBox from "./MyReservationSearchBox";
import HouseCardContent from "../HouseCardContent";
import { useLoaderData } from "react-router-dom";

const MyPageRealtorReservationDetail = () => {
  const getLoaderData = useLoaderData().data;
  return (
    <>
      중개사 예약 상세
      <div className={classes.reservationdetailrealtor}>
        <h3>예약 내역</h3>
        <div className={classes.date}>
          <p>
            <strong>일시</strong>
            <br />
            {getLoaderData.consultingDate.substring(0, 10)}
          </p>
        </div>
        <div className={classes.require}>
          <p>
            <strong>요청사항</strong>
          </p>
          <div className={classes.requestbox}>
            <p>
            {getLoaderData.requirement}
            </p>
          </div>
          <br />
          <hr />
        </div>
        <div className={classes.forsale}>
          <h3>상담 매물</h3>
          <button className={classes.btn1}>매물등록</button>
          <div className={classes.selectlocation}>
            <h4>어떤 매물을 원하세요?</h4>
            <div>
              <ListBox dataArray={[1]}>
                <MyReservationSearchBox />
              </ListBox>
            </div>
          </div>
          <div className={classes.forsalelist}>
            <div className={classes.requireforsale}>
              <p>
                <strong>현재 요청된 매물</strong>
              </p>
              <ListBox dataArray={getLoaderData.itemList} direction={false}>
                <HouseCardContent />
              </ListBox>
            </div>
            <div className={classes.addedforsale}>
              <p>
                <strong>추가한 매물</strong>
              </p>
              <ListBox dataArray={[1, 2]} direction={false}>
                <HouseCardContent />
              </ListBox>
            </div>
          </div>
          <button className={classes.btn2}>적용하기</button>
        </div>
      </div>
    </>
  );
};

export default MyPageRealtorReservationDetail;