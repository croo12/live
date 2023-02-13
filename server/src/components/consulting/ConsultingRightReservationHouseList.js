import { useLoaderData, useOutletContext } from "react-router-dom";
import { getConsultingDetail } from "../../apis/consultingApi";
import ListBox from "../../UI/ListBox";
import { ConsultingHouseCardContent } from "../HouseCardContent";

const ConsultingRightReservationHouseList = () => {
  const { clickHandler, detail } = useOutletContext();

  const datas = useLoaderData();
  const dataArray = datas.itemList;

  return (
    <ListBox toStart={true} dataArray={dataArray}>
      <ConsultingHouseCardContent clickHandler={clickHandler} detail={detail} />
    </ListBox>
  );
};

export default ConsultingRightReservationHouseList;

export const consultingDetailLoader = async ({ params }) => {
  console.log(params);

  const response = await getConsultingDetail(params.consultingNo);
  return response.data;
};
