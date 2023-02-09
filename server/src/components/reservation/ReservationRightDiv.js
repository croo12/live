import ReservationRealtorInfo from "./ReservationRealtorInfo";
import classes from "./ReservationRightDiv.module.scss";

const ReservationRightDiv = ({ realtorDetail }) => {
  return (
    <div className={classes.rightContainer}>
      <h2>상세정보</h2>
      <div>
        {!realtorDetail?.realtorInfo.name ? (
          <span>중개사를 선택해주세요</span>
        ) : (
          <ReservationRealtorInfo realtorDetail={realtorDetail} />
        )}
      </div>
    </div>
  );
};

export default ReservationRightDiv;
