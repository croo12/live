import HouseCardContent from "../components/HouseCardContent";
import ReservationLeftDiv from "../components/reservation/ReservationLeftDiv";
import ReservationRightDiv from "../components/reservation/ReservationRightDiv";
import ListBox from "../UI/ListBox";
import Button from "../UI/Button";
import ReservationSearchBox from "../components/reservation/ReservationSearchBox";

const ReservationPage = () => {
  return (
    <>
      <h1>안녕 난 예약페이지</h1>

      <ReservationSearchBox />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReservationLeftDiv />
        <ReservationRightDiv />
      </div>

      <ListBox dataArray={[0, 1]} direction={true}>
        <HouseCardContent />
      </ListBox>
      <Button
        clickEvent={() => {
          console.log("ㅎㅇ");
        }}
      >
        반가워용
      </Button>
    </>
  );
};

export default ReservationPage;
