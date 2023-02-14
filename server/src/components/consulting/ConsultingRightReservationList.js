import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getReservationList } from "../../apis/reservationApis";
import ListBox from "../../UI/ListBox";
import { ConsultingReservationCardContent } from "../ReservationCardContent";

const ConsultingRightReservationList = () => {
  const { sessionId, statusChangeHandler } = useOutletContext();

  const [reservationRealtor, setReservationRealtor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getReservationList(1);
      setReservationRealtor(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {reservationRealtor.length !== 0 ? (
        <ListBox toStart={true} dataArray={reservationRealtor}>
          <ConsultingReservationCardContent
            isConsulting={true}
            sessionId={sessionId}
            statusChangeHandler={statusChangeHandler}
          />
        </ListBox>
      ) : (
        <div>현재 상담일정이 없습니다</div>
      )}
    </>
  );
};

export default ConsultingRightReservationList;
