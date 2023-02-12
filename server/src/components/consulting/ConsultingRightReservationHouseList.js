import { useOutletContext } from "react-router-dom";
import ListBox from "../../UI/ListBox";
import { ConsultingHouseCardContent } from "../HouseCardContent";

const ConsultingRightReservationHouseList = () => {
  const { clickHandler, detail } = useOutletContext();

  return (
    <ListBox toStart={true} dataArray={[{ idx: 0 }, { idx: 1 }]}>
      <ConsultingHouseCardContent clickHandler={clickHandler} detail={detail} />
    </ListBox>
  );
};

export default ConsultingRightReservationHouseList;
