import { useState } from "react";
import ListBox from "../../UI/ListBox";
import ReservationCardContent2 from "../ReservationCardContent2";
import ReservationCardContent3, { DUMMY6 } from "../ReservationCardContent3";
import { DUMMY5 } from "../ReservationCardContent2";
import classes from "./MyReservation.module.scss";
import MyReservationDetailRealtor from "./MyReservationDetailRealtor";
import { getReservationList } from "../../apis/reservationApis"
// import MyReservationDetailUser from "./MyReservationDetailUser";

const data = ["신청된 상담", "확정된 상담", "종료된 상담"];

const MyReservation = () => {
  // 중개사 회원, 일반 회원 구분
  // 중개사 회원일 경우 --> reservationUser, ReservationContent3, MyReservationDetailRealtor 사용
  // 일반 회원일 경우 --> reservationRealtor, ReservationContent2, MyReservationDetailUser 사용
  const [reservationUser, setreservationUser] = useState(DUMMY5);
  const [reservationRealtor, setReservationRealtor] = useState(DUMMY6);
  const [tabActive, setTabActive] = useState(0);


  const toggleActive = (e) => {
    setTabActive(Number.parseInt(e.target.value));
  }

  const [detailInfo, setDetailInfo] = useState(true);
  const onDetailReservationHandler = (detailInfo) => {
    setDetailInfo(detailInfo);
  };

  const [userInfo, setUserInfo] = useState("REALTOR");
  const onSwitchUserHandler = (userInfo) => {
    setUserInfo(userInfo);
  };

  return (
    <div className={classes.consultBox}>
      <div className={classes.consulting}>
        <div className={classes.consultingContent}>
          <div className={classes.inner}>
            {detailInfo === true ? (
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
                      <ListBox dataArray={reservationUser} direction={false}>
                        <ReservationCardContent3
                          onDetailReservationHandler={
                            onDetailReservationHandler
                          }
                          tabActive={tabActive}
                          userInfo={userInfo}
                        />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 1 && (
                    <div>
                      <p>확정된 상담</p>
                      <ListBox dataArray={reservationUser} direction={false}>
                        <ReservationCardContent3
                          onDetailReservationHandler={
                            onDetailReservationHandler
                          }
                          tabActive={tabActive}
                          userInfo={userInfo}
                        />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 2 && (
                    <div>
                      <p>종료된 상담</p>
                      <ListBox dataArray={reservationUser} direction={false}>
                        <ReservationCardContent3
                          onDetailReservationHandler={
                            onDetailReservationHandler
                          }
                          tabActive={tabActive}
                          userInfo={userInfo}
                        />
                      </ListBox>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <MyReservationDetailRealtor
                onDetailReservationHandler={onDetailReservationHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// export const myReservationLoader = async () => {
//   const response = await getReservationList(0);
//   if (response.data) return response.data;
//   else return null;
// };

export default MyReservation;
