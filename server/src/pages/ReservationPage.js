import HouseCardContent from "../components/HouseCardContent";
import ReservationLeftDiv from "../components/reservation/ReservationLeftDiv";
import ReservationRightDiv from "../components/reservation/ReservationRightDiv";
import ListBox from "../UI/ListBox";
import Button from "../UI/Button";
import ReservationSearchBox from "../components/reservation/ReservationSearchBox";
import { useState } from "react";

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState({
    sido: "",
    gugun: "",
    dong: "",
    date: null,
  });

  const clickSearchEventHandler = (sido, gugun, dong, date) => {
    setReserveData({ sido, gugun, dong, date });
  };

  return (
    <>
      <h1>안녕 난 예약페이지</h1>

      <ReservationSearchBox clickSearchEventHandler={clickSearchEventHandler} />

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
