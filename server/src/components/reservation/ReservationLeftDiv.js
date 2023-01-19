import ListBox from "../../UI/ListBox";
import RealtorCardContent from "../RealtorCardContent";

const ReservationLeftDiv = () => {
  return (
    <div>
      왼쪽 박스
      <ListBox dataArray={[0, 1, 2, 3, 4]}>
        <RealtorCardContent />
      </ListBox>
    </div>
  );
};

export default ReservationLeftDiv;
