import { ReservationHouseCardContent } from "../components/HouseCardContent";
import ReservationLeftDiv from "../components/reservation/ReservationLeftDiv";
import ReservationRightDiv from "../components/reservation/ReservationRightDiv";
import ListBox from "../UI/ListBox";
import ReservationSearchBox from "../components/reservation/ReservationSearchBox";
import { useEffect, useRef, useState } from "react";

// import sample from "../assets/image/sample.jpg";

import classes from "./ReservationPage.module.scss";
import { FiAlertCircle } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import axiosInstance from "../util/axios";
import { searchRealtorList } from "../apis/reservationApis";

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState({
    sido: "",
    gugun: "",
    dong: "",
    date: null,
  });

  const isMount = useRef(false);

  const sidos = useLoaderData().data.data;

  const [realtorList, setRealtorList] = useState([]);

  //리덕스로 수정하는 것도 염두에 둘 수 있음
  const [selectedItems, addItem] = useState([]);

  const clickRealtorEventHandler = () => {};

  const clickSearchEventHandler = (sido, gugun, dong, date) => {
    console.log(sido, gugun, dong, date);

    if (!sido) {
      alert(`광역시도는 반드시 입력해야 합니다!`);
    } else if (!date) {
      alert(`날짜는 반드시 입력해야 합니다!`);
    } else {
      setReserveData({ sido, gugun, dong, date });
    }
  };

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    // 뭐 보낼래?
    const params = {};

    if (!reserveData.sido) {
      console.log(`sido is nothing...`);
      return;
    }

    if (!reserveData.gugun) {
      params[`regionCode`] = reserveData.sido.substring(0, 2);
    } else if (!reserveData.dong) {
      params[`regionCode`] = reserveData.gugun.substring(0, 5);
    } else {
      params[`regionCode`] = reserveData.dong;
    }

    (async () => {
      try {
        const result = await searchRealtorList(params);
        console.log(result);
        setRealtorList(result.data.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [reserveData]);

  return (
    <>
      <div className={classes.reserveHeader}>
        <h1>예약하기</h1>

        <div className={classes.reservationSearchBoxContainer}>
          <h3>어느 지역을 원하세요?</h3>
          <ReservationSearchBox
            clickSearchEventHandler={clickSearchEventHandler}
            sidos={sidos}
          />
        </div>
      </div>

      <div className={classes.content}>
        <ReservationLeftDiv realtors={realtorList} />
        <ReservationRightDiv />
      </div>

      <div className={classes.listBox}>
        <h2>내가 선택한 매물</h2>
        <ListBox dataArray={[0, 1]} direction={true} toStart={true}>
          <ReservationHouseCardContent />
        </ListBox>
      </div>

      <div>
        <div className={classes.infomationBox}>
          <div className={classes.iconContainer}>
            <FiAlertCircle />
          </div>
          <div className={classes.ulContainer}>
            <ul>
              <li>
                등록 하신 방은 방 정보와 계정 정보(가입된 아이디, 이름, 연락처
                등)가 함께 노출 됩니다.
              </li>
              <li>
                허위 매물(계약이 완료된 매물, 허위 정보가 기재된 매물) 등록 시
                서비스 이용이 제한될 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.reserveBtnContainer}>
          <button
            onClick={() => {
              console.log("ㅎㅇ");
            }}
          >
            예약하기
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;

export const sidoLoader = async () => {
  try {
    return axiosInstance.get("regions", {
      params: {
        regionCode: "",
      },
    });
  } catch {
    throw new Error("sido Loader Error");
  }
};