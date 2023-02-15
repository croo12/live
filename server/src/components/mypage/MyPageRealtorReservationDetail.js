import classes from "./MyPageRealtorReservationDetail.module.scss";

import ListBox from "../../UI/ListBox";
import MyReservationSearchBox from "./MyReservationSearchBox";
import HouseCardContent2 from "../HouseCardContent2";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getReservationDetail } from "../../apis/reservationApis";
import axiosInstance from "../../util/axios";
import { useEffect, useState } from "react";
import { registConsultingItems } from "../../apis/consultingApi";

const MyPageRealtorReservationDetail = () => {
  const { reservationDetail, sidoList } = useLoaderData();
  const [selectedList, setSelectedList] = useState(reservationDetail.itemList);
  const [wantAddList, setWantAddList] = useState([]);

  const navigation = useNavigate();

  const searchedListClickHander = (data) => {
    console.log(data);
    setWantAddList([...wantAddList, data]);
  };

  const removeItemClickHandler = ({ idx }) => {
    if (window.confirm("선택한 매물을 정말로 삭제하시겠습니까? ")) {
      setWantAddList(wantAddList.filter((el, index) => index !== idx));
    }
  };

  const removeSelectedItemClickHandler = ({ idx }) => {
    if (window.confirm("고객이 선택한 매물을 정말로 삭제하시겠습니까?"))
      setSelectedList(selectedList.filter((el, index) => index !== idx));
  };

  const { consultingNo } = useParams();

  const adjustConsulting = () => {
    const newArray = [...selectedList, ...wantAddList];
    const itemList = [];

    newArray.forEach((element) => {
      itemList.push(element.itemNo);
    });

    const data = { itemList };

    if (confirm("정말로 수정하시겠습니까?")) {
      registConsultingItems(consultingNo, data);
      navigation("/mypage/realtor/realtor-reservation");
    }
  };

  return (
    <>
      <div className={classes.reservationdetailrealtor}>
        <div className={classes.date}>
          <h2>예약 내역</h2>
          <p>
            <strong>일시</strong>
            <br />
            {reservationDetail.consultingDate.substring(0, 4) +
              "년 " +
              (reservationDetail.consultingDate.substring(5, 6) === "0"
                ? reservationDetail.consultingDate.substring(6, 7)
                : reservationDetail.consultingDate.substring(5, 7)) +
              "월 " +
              reservationDetail.consultingDate.substring(8, 10) +
              "일"}
          </p>
        </div>
        <div className={classes.require}>
          <p>
            <strong>요청사항</strong>
          </p>
          <div className={classes.requestbox}>
            <pre>{reservationDetail.requirement}</pre>
          </div>
        </div>
        <div className={classes.forsale}>
          <div className={classes.saleHeader}>
            <h2>상담 매물</h2>
            <button className={classes.btn1}>매물등록</button>
          </div>
          <div className={classes.selectlocation}>
            <h4>어떤 매물을 원하세요?</h4>
            <div className={classes.searchBox}>
              <MyReservationSearchBox sidoList={sidoList} searchedListClickHander={searchedListClickHander} />
            </div>
          </div>
          <div className={classes.forsalelist}>
            <div className={classes.requireforsale}>
              <p>
                <strong>현재 요청된 매물</strong>
              </p>
              <ListBox dataArray={selectedList} direction={false} toStart={true}>
                <HouseCardContent2 searchedListClickHandler={removeSelectedItemClickHandler} />
              </ListBox>
            </div>
            <div className={classes.addedforsale}>
              <p>
                <strong>추가한 매물</strong>
              </p>
              <ListBox dataArray={wantAddList} direction={false} toStart={true}>
                <HouseCardContent2 searchedListClickHandler={removeItemClickHandler} />
              </ListBox>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.btn2} onClick={adjustConsulting}>
              적용하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageRealtorReservationDetail;

export const realtorReservationLoader = async ({ params }) => {
  console.log(params.consultingNo);

  const reservationDetail = await getReservationDetail(params.consultingNo);
  const sidoList = await axiosInstance.get("regions", {
    params: {
      regionCode: "",
    },
  });

  const result = {
    reservationDetail: reservationDetail.data,
    sidoList: sidoList.data.data,
  };

  return result;
};
