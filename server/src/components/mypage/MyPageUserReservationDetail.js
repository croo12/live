import classes from "./MyPageUserReservationDetail.module.scss";
import ListBox from "../../UI/ListBox";
import HouseCardContent2 from "../HouseCardContent2";
import { getReservationDetail } from "../../apis/reservationApis"
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";


const MyPageUserReservationDetail = (props) => {
  // const {state} = useLocation();
  // console.log(state);
  const onReservationChangeHandler = () => {
    props.onDetailReservationHandler(true);
  };
  const getLoaderData = useLoaderData();
  alert("예약 상세보기 "+getLoaderData)

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

export const loader = async ({ params }) => {
  console.log(params.consultingNo);

  const result = await getReservationDetail(params.consultingNo);

  console.log(result);

  return result;
};