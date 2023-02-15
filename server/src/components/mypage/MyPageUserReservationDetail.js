import classes from "./MyPageUserReservationDetail.module.scss";
import ListBox from "../../UI/ListBox";
import HouseCardContent2 from "../HouseCardContent2";
import { getReservationDetail } from "../../apis/reservationApis";
import { useLoaderData, useNavigate } from "react-router-dom";

const MyPageUserReservationDetail = (props) => {
  const navigation = useNavigate();
  const onReservationChangeHandler = () => {
    navigation("/mypage/user/user-reservation");
  };
  const getLoaderData = useLoaderData().data;

  return (
    <div className={classes.reservationdetailuser}>
      <h2>예약 내역</h2>
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
          <p>{getLoaderData.requirement}</p>
        </div>
      </div>
      <div className={classes.contentInline}>
        <ListBox dataArray={getLoaderData.itemList} direction={false}>
          <HouseCardContent2 />
        </ListBox>
        <button style={{ cursor: "pointer" }} onClick={onReservationChangeHandler}>
          되돌아가기
        </button>
      </div>
    </div>
  );
};

export default MyPageUserReservationDetail;

export const loader = async ({ params }) => {
  console.log(params.consultingNo);

  const result = await getReservationDetail(params.consultingNo);

  console.log(result);

  return result;
};
