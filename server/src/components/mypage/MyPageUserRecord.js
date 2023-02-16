import classes from "./MyPageUserRecord.module.scss";
import { useLoaderData } from "react-router-dom";
import axiosInstance from "../../util/axios";
import { useEffect, useState } from "react";
import { getReservationList } from "../../apis/reservationApis";
import ListBox from "../../UI/ListBox";
import ReservationCardContent3 from "../ReservationCardContent3";

const MyPageUserRecord = (props) => {
  const [recordsList, setRecordsList] = useState([]);
  const [consultNo, setConsultNo] = useState(-1);
  const consultsData = useLoaderData();

  useEffect(() => {
    if (consultNo !== -1) {
      (async () => {
        const response = await axiosInstance.get(
          `consultings/${consultNo}/records`
        );

        //녹화리스트 저장함
        setRecordsList(response.data.data);
      })();
    }
  }, [consultNo]);

  return (
    <>
      <div>
        <h1>녹화페이지 맨</h1>
        <div>
          <ListBox dataArray={consultsData.data}>
            <ReservationCardContent3 tabActive={2} isRecord={setConsultNo} />
          </ListBox>
        </div>
      </div>
    </>
  );
};

export default MyPageUserRecord;

export const endConsultingsLoader = async () => {
  const response = await getReservationList(2);
  return response;
};
