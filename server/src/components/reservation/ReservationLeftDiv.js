import ListBox from "../../UI/ListBox";
import RealtorCardContent from "../RealtorCardContent";

const ReservationLeftDiv = () => {
  //검색결과에 따라서 중개사 리스트가 나옴
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
