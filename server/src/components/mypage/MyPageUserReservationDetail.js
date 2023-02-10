import classes from "./MyPageUserReservationDetail.module.scss";
import ListBox from "../../UI/ListBox";
import HouseCardContent2 from "../HouseCardContent2";

const MyPageUserReservationDetail = (props) => {
  const onReservationChangeHandler = () => {
    props.onDetailReservationHandler(true);
  };
  return (
    <div className={classes.reservationdetailuser}>
      <h3>예약 내역</h3>
      <h4>상담 매물</h4>
      <hr />
      <h4>2023-01-25 (수)</h4>
      <div className={classes.contentInline}>
        <ListBox dataArray={[0, 1]} direction={false}>
          <HouseCardContent2 />
        </ListBox>
        <button onClick={onReservationChangeHandler}>되돌아가기</button>
      </div>
    </div>
  );
};

export default MyPageUserReservationDetail;
