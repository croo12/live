import { useState } from "react";
import ListBox from "../../UI/ListBox";
import RealtorCardContent, { DUMMY } from "../RealtorCardContent";

const ReservationLeftDiv = () => {
  //검색결과에 따라서 중개사 리스트가 나옴
  const [realtorList, setRealtorList] = useState(DUMMY);

  return (
    <div>
      <ListBox dataArray={realtorList}>
        <RealtorCardContent />
      </ListBox>
    </div>
  );
};

export default ReservationLeftDiv;
