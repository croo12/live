import classes from "./MyReservationDetailRealtor.module.scss";
import HouseCardContent2 from "../HouseCardContent2";
import ListBox from "../../UI/ListBox";
import MyReservationSearchBox from "./MyReservationSearchBox";

const MyReservationDetailRealtor = () => {
  return (
    <>
      <div className={classes.reservationdetailrealtor}>
        <h3>예약 내역</h3>
        <div className={classes.date}>
          <p>
            <strong>일시</strong>
            <br />
            2023년 1월 25일 (수) 오전 11:00
          </p>
        </div>
        <div className={classes.require}>
          <p>
            <strong>요청사항</strong>
          </p>
          <div className={classes.requestbox}>
            <p>
              저는 대전시 유성구 덕명동 매물을 원해요. 추가로 좋은 매물이 있다면
              추천해주세요.
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
              <ListBox dataArray={[1, 2]} direction={false}>
                <HouseCardContent2 />
              </ListBox>
            </div>
            <div className={classes.addedforsale}>
              <p>
                <strong>추가한 매물</strong>
              </p>
              <ListBox dataArray={[1, 2]} direction={false}>
                <HouseCardContent2 />
              </ListBox>
            </div>
          </div>
          <button className={classes.btn2}>적용하기</button>
        </div>
      </div>
    </>
  );
};

export default MyReservationDetailRealtor;
