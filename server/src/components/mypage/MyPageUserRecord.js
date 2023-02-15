import classes from "./MyPageUserRecord.module.scss";
import MyPageUser from "./MyPageUser";
import { useLoaderData } from "react-router-dom";
import axiosInstance from "../../util/axios";

const MyPageUserRecord = (props) => {
  const recordsData = useLoaderData();
  console.log(recordsData);

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

export const recordUrlsLoader = async () => {
  const response = await axiosInstance.get("consultings/2/records");

  return response;
};
