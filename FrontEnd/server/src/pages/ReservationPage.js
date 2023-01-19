import HouseCardContent from "../components/HouseCardContent";
import ReservationLeftDiv from "../components/reservation/ReservationLeftDiv";
import ReservationRightDiv from "../components/reservation/ReservationRightDiv";
import ListBox from "../UI/ListBox";
import Button from "../UI/Button";

const ReservationPage = () => {
  return (
    <>
      <h1>안녕 난 예약페이지</h1>

      <div> 검색상자 </div>
      {/* 
        검색 컴포넌트 (UI)
        ㄴ 시, 구, 동, 날짜, 검색 버튼
        ㄴ 시, 구, 동 : 셀렉트 박스
        ㄴ 날짜 : 인풋 캘린더 (일착)
        ㄴ 검색버튼 오른쪽 끝에 있음
      */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReservationLeftDiv />
        <ReservationRightDiv />
      </div>

      <ListBox dataArray={[0, 1]}>
        <HouseCardContent />
      </ListBox>
      <Button></Button>
    </>
  );
};

export default ReservationPage;
