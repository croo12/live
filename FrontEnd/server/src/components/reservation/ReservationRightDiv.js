import HouseCardContent from "../HouseCardContent";
import ReservationRealtorInfo from "./ReservationRealtorInfo";
import ListBox from "../../UI/ListBox";
import ReviewCardContent from "../ReviewCardContent";

const ReservationRightDiv = () => {
  return (
    <div>
      오른쪽 박스
      <ReservationRealtorInfo />
      <div>
        <ListBox dataArray={[1, 3]}>
          <HouseCardContent />
        </ListBox>
      </div>
      <div>
        <ListBox dataArray={[1, 4, 5]}>
          <ReviewCardContent />
        </ListBox>
      </div>
    </div>
  );
};

export default ReservationRightDiv;
