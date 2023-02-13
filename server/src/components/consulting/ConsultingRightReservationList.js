import { useOutletContext } from "react-router-dom";
import ListBox from "../../UI/ListBox";
import { ConsultingReservationCardContent } from "../ReservationCardContent";

const ConsultingRightReservationList = () => {
  const { sessionId, statusChangeHandler } = useOutletContext();

  return (
    <ListBox toStart={true} dataArray={[{ idx: 0 }, { idx: 1 }, { idx: 2 }]}>
      <ConsultingReservationCardContent
        isConsulting={true}
        sessionId={sessionId}
        statusChangeHandler={statusChangeHandler}
      />
    </ListBox>
  );
};

export default ConsultingRightReservationList;
