import { useState } from "react";
import ListBox from "../../UI/ListBox";
import ReservationCardContent2 from "../ReservationCardContent2";
import { DUMMY5 } from "../ReservationCardContent2";
import classes from "./MyReservation.module.scss";

const data = ["신청된 상담", "확정된 상담", "종료된 상담"];

const MyReservation = () => {
  const [consultingList, setConsultingList] = useState(DUMMY5);
  const [tabActive, setTabActive] = useState(0);

  const toggleActive = (e) => {
    setTabActive(Number.parseInt(e.target.value));
  };

  return (
    <div className={classes.consultBox}>
      <div className={classes.consulting}>
        <div className={classes.consultingContent}>
          <div className={classes.inner}>
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
                  <ListBox dataArray={consultingList} direction={false}>
                    <ReservationCardContent2 />
                  </ListBox>
                </div>
              )}
              {tabActive === 1 && (
                <div>
                  <p>확정된 상담</p>
                  <ListBox dataArray={consultingList} direction={false}>
                    <ReservationCardContent2 />
                  </ListBox>
                </div>
              )}
              {tabActive === 2 && (
                <div>
                  <p>종료된 상담</p>
                  <ListBox dataArray={consultingList} direction={false}>
                    <ReservationCardContent2 />
                  </ListBox>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
