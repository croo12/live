import classes from "./MyPageRealtorReservationDetail.module.scss";

import ListBox from "../../UI/ListBox";
import MyReservationSearchBox from "./MyReservationSearchBox";
import HouseCardContent from "../HouseCardContent";
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

    console.log(newArray);

    newArray.forEach((element) => {
      itemList.push(element.itemNo);
    });

    console.log(itemList);

    const data = { itemList };

    if (confirm("정말로 수정하시겠습니까?")) {
      registConsultingItems(consultingNo, data);
      navigation("/mypage/realtor/realtor-reservation");
    }
  };

  return (
    <>
      <div className={classes.reservationdetailrealtor}>
        <h2>예약 내역</h2>
        <div className={classes.date}>
          <p>
            <strong>일시</strong>
            <br />
            {reservationDetail.consultingDate.substring(0, 10)}
          </p>
        </div>
        <div className={classes.require}>
          <p>
            <strong>요청사항</strong>
          </p>
          <div className={classes.requestbox}>
            <p>{reservationDetail.requirement}</p>
          </div>
          <br />
          <hr />
        </div>
        <div className={classes.forsale}>
          <h3>상담 매물</h3>
          <button className={classes.btn1}>매물등록</button>
          <div className={classes.selectlocation}>
            <h4>어떤 매물을 원하세요?</h4>
            <div>
              <MyReservationSearchBox
                sidoList={sidoList}
                searchedListClickHander={searchedListClickHander}
              />
            </div>
          </div>
          <div className={classes.forsalelist}>
            <div className={classes.requireforsale}>
              <p>
                <strong>현재 요청된 매물</strong>
              </p>
              <ListBox dataArray={selectedList} direction={false}>
                <HouseCardContent
                  searchedListClickHandler={removeSelectedItemClickHandler}
                />
              </ListBox>
            </div>
            <div className={classes.addedforsale}>
              <p>
                <strong>추가한 매물</strong>
              </p>
              <ListBox dataArray={wantAddList} direction={false}>
                <HouseCardContent
                  searchedListClickHandler={removeItemClickHandler}
                />
              </ListBox>
            </div>
          </div>
          <button className={classes.btn2} onClick={adjustConsulting}>
            적용하기
          </button>
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