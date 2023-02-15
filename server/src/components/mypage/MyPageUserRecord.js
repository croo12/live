import classes from "./MyPageUserRecord.module.scss";
import MyPageUser from "./MyPageUser";
import { useLoaderData } from "react-router-dom";
import axiosInstance from "../../util/axios";
import { useEffect, useState } from "react";

const MyPageUserRecord = (props) => {
  const [recordsList, setRecordsList] = useState([]);
  const [consultNo, setConsultNo] = useState(-1);
  const consultsData = useLoaderData();
  console.log(consultsData);

  useEffect(() => {
    if (consultNo !== -1) {
      (async () => {
        const response = await axiosInstance.get(
          `consultings/${consultNo}/records`
        );

        console.log(response);
      })();
    }
  }, [consultNo]);

  return (
    <>
      <div>
        <h1>녹화페이지 맨</h1>
        <div>
          <video></video>
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

export const recordUrlsLoader = async () => {
  const response = await axiosInstance.get("consultings/2/records");

  return response;
};
