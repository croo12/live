import { useState, useEffect } from "react";

import classes from "./MyPageRealtorReservation.module.scss";
import ListBox from "../../UI/ListBox";
import { getReservationList } from "../../apis/reservationApis"
import ReservationCardContent3 from "../ReservationCardContent3";
import { Outlet } from "react-router-dom";

const data = ["신청된 상담", "확정된 상담", "종료된 상담"];

const MyPageRealtorReservation = () => {
  const [reservationRealtor, setReservationRealtor] = useState([]);
  const [tabActive, setTabActive] = useState(0);

  useEffect(()=>{
    async function fetchData() {
      const result = await getReservationList(0);
      setReservationRealtor(result.data);
    }
    fetchData();
  }, []);


  const toggleActive = async (e) => {
    let num = Number.parseInt(e.target.value);
    setTabActive(num);
    const result = await getReservationList(num);
    setReservationRealtor(result.data);
  };

  return (
    <>
      중개사 예약
      <div className={classes.consultBox}>
        <div className={classes.consulting}>
          <div className={classes.consultingContent}>
            <div className={classes.inner}>
              <div>
                <h3>예약 목록</h3>
                <span>
                  {data.map((item, idx) => {
                    return (
                      <button
                        key={idx}
                        value={idx}
                        className={`${classes.btn} ${
                          idx === tabActive ? classes.active : ""
                        }`}
                        onClick={toggleActive}
                      >
                        {item}
                      </button>
                    );
                  })}
                </span>
                <div className={classes.consultingList}>
                  {tabActive === 0 && (
                    <div>
                      <p>신청된 상담</p>
                      <ListBox dataArray={reservationRealtor} direction={false}>
                        <ReservationCardContent3 tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 1 && (
                    <div>
                      <p>확정된 상담</p>
                      <ListBox dataArray={reservationRealtor} direction={false}>
                        <ReservationCardContent3 tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 2 && (
                    <div>
                      <p>종료된 상담</p>
                      <ListBox dataArray={reservationRealtor} direction={false}>
                        <ReservationCardContent3 tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageRealtorReservation;
