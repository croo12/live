import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import {
  getConsultingDetail,
  registConsultingRoomLink,
} from "../../apis/consultingApi";
import ListBox from "../../UI/ListBox";
import { ConsultingHouseCardContent } from "../HouseCardContent";

const ConsultingRightReservationHouseList = () => {
  const { clickHandler, detail } = useOutletContext();

  const datas = useLoaderData();
  const params = useParams();
  // console.log("안녕 파람", params);

  const userInfo = useSelector((state) => state.user.userInfo);

  const dataArray = datas.itemList;

  useEffect(() => {
    if (userInfo.isRealtor) {
      const linkUrl = `/consulting/${params.sessionId}/${params.consultingNo}/${params.realtorNo}/${params.userNo}`;
      console.log(`링크주소 ${linkUrl}`);

      registConsultingRoomLink(params.consultingNo, linkUrl);
    }
  }, []);

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
