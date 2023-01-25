import ListBox from "../../UI/ListBox";
import HouseCardContent from "../HouseCardContent";

const MyConsultingDetail = () => {
  return (
    <div>
      <h3>예약 내역</h3>
      <p>날짜</p>
      <hr />
      <h2>요청사항</h2>
      <div>어쩌구 저쩌구 맨</div>
      <hr />
      <h2>상담매물</h2>
      <div>
        <h3>중개사용 박스</h3>
        <div>매물 검색 상자</div>
      </div>
      <ListBox>
        <HouseCardContent />
      </ListBox>
    </div>
  );
};

export default MyConsultingDetail;
