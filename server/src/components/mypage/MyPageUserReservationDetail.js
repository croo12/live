import classes from "./MyPageUserReservationDetail.module.scss";
import ListBox from "../../UI/ListBox";
import HouseCardContent2 from "../HouseCardContent2";
import { getReservationDetail } from "../../apis/reservationApis"
import { useLoaderData, useNavigate } from "react-router-dom";

const MyPageUserReservationDetail = (props) => {
  const navigation = useNavigate();
  const onReservationChangeHandler = () => {
    navigation("/mypage/user/user-reservation");
  };
  const getLoaderData = useLoaderData().data;

  return (
    <div className={classes.reservationdetailuser}>
      <h3>예약 내역</h3>
      <h4>상담 매물</h4>
      <hr />
      <h4>{getLoaderData.consultingDate.substring(0, 10)}</h4>
      <h4>요청 사항</h4>
      <h4>{getLoaderData.requirement}</h4>
      <div className={classes.contentInline}>
        <ListBox dataArray={getLoaderData.itemList} direction={false}>
          <HouseCardContent2 />
        </ListBox>
        <button onClick={onReservationChangeHandler}>되돌아가기</button>
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