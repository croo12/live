import { ReservationHouseCardContent } from "../components/HouseCardContent";
import ReservationLeftDiv from "../components/reservation/ReservationLeftDiv";
import ReservationRightDiv from "../components/reservation/ReservationRightDiv";
import ListBox from "../UI/ListBox";
import Button from "../UI/Button";
import ReservationSearchBox from "../components/reservation/ReservationSearchBox";
import { useState } from "react";

// import sample from "../assets/image/sample.jpg";

import classes from "./ReservationPage.module.scss";
import { CiCircleAlert } from "react-icons/ci";

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState({
    sido: "",
    gugun: "",
    dong: "",
    date: null,
  });

  //리덕스로 수정하는 것도 염두에 둘 수 있음
  const [selectedItems, addItem] = useState([]);

  const clickSearchEventHandler = (sido, gugun, dong, date) => {
    setReserveData({ sido, gugun, dong, date });
  };

  return (
    <>
      <div className={classes.reserveHeader}>
        <h1>예약하기</h1>

        <div className={classes.reservationSearchBoxContainer}>
          <h3>어느 지역을 원하세요?</h3>
          <ReservationSearchBox
            clickSearchEventHandler={clickSearchEventHandler}
          />
        </div>
      </div>

      <div className={classes.content}>
        <ReservationLeftDiv />
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
            <CiCircleAlert />
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
