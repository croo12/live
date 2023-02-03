import { useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./MyPage.module.scss";
import sample from "../assets/image/sample.jpg";
import { BsPersonLinesFill, BsFillBellFill, BsSearch } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import ListBox from "../UI/ListBox";
import ReviewCardContent from "../components/ReviewCardContent";
import { DUMMY2 } from "../components/ReviewCardContent";
import AlarmCardContent, { DUMMY3 } from "../components/AlarmCardContent";
import ReservationCardContent, {
  DUMMY4,
} from "../components/ReservationCardContent";

const MyPage = () => {

  const routerView = useRef(null);
  const [reviewList, setReviewList] = useState(DUMMY2);
  const [alarmList, setAlarmList] = useState(DUMMY3);
  const [btnActive, setBtnActive] = useState(0);

  const privacyOnclickHandler = () => {
    setBtnActive(1);
  };

  const alarmonClickHandler = () => {
    setBtnActive(2);
  };

  const reviewonClickHandler = () => {
    setBtnActive(3);
  };

  const reservationonClickHandler = () => {
    setBtnActive(4);
  };

  return (
    <>
      <div className={classes.intro} style={{ backgroundColor: "#FAFAFA" }}>
        <div
          className={classes.inner}
          style={{ border: "0", width: "1300px", margin: "auto" }}
        >
          <div
            className={classes.introContent}
            style={{
              padding: "100px 0",
              display: "flex",
            }}
          >
            <div
              className={classes.info}
              style={{ flex: "1.5", display: "flex" }}
            >
              <div
                className={classes.leftImg}
                style={{
                  flex: "1.5",
                  width: "30px",
                  height: "120px",
                  padding: "0",
                }}
              >
                <img
                  src={sample}
                  style={{
                    width: "95%",
                    height: "100%",
                    borderRadius: "70%",
                    padding: "0 0 0 ",
                  }}
                ></img>
              </div>
              <div
                className={classes.rightDesc}
                style={{
                  flex: "2",
                  textAlign: "left",
                  padding: "40px 0 0 70px",
                }}
              >
                <p>
                  안녕하세요,{" "}
                  <strong style={{ fontSize: "large" }}>박세준</strong>님<br />
                  <span
                    style={{
                      backgroundColor: "#42d395",
                      color: "white",
                      borderRadius: "3px",
                      padding: "3px",
                      fontSize: "small",
                    }}
                  >
                    일반 회원
                  </span>
                </p>
              </div>
            </div>
            <div
              className={classes.temperature}
              style={{ flex: "3", padding: "50px 50px 0 0" }}
            >
              온도그래프
            </div>
          </div>
        </div>
      </div>
      <div className={classes.itemBox}>
        <div
          className={classes.inner}
          style={{ border: "0", width: "1300px", margin: "auto" }}
        >
          <div
            className={classes.itemBoxContent}
            style={{
              padding: "100px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.privacy}>
              <button
                style={{
                  border: "0.3px solid rgba(66, 211, 149, 1)",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                  borderRadius: "5px",
                }}
                onClick={privacyOnclickHandler}
              >
                <div
                  className={classes.leftLogo}
                  style={{ flex: "1", fontSize: "1.9rem" }}
                >
                  <BsPersonLinesFill style={{ color: "42D395" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{ flex: "2", padding: "3px 0 0 50px" }}
                >
                  <strong
                    style={{ fontSize: "1.1rem", color: "rgba(85, 85, 85, 1)" }}
                  >
                    개인정보
                  </strong>
                </div>
              </button>
            </div>
            <div className={classes.alarm}>
              <button
                style={{
                  border: "0.3px solid rgba(66, 211, 149, 1)",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                  borderRadius: "5px",
                }}
                onClick={alarmonClickHandler}
              >
                <div
                  className={classes.leftLogo}
                  style={{ flex: "1", fontSize: "1.8rem" }}
                >
                  <BsFillBellFill style={{ color: "42D395" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{
                    flex: "2",
                    padding: "3px 0 0 50px",
                    fontSize: "1.1rem",
                    color: "rgba(85, 85, 85, 1)",
                  }}
                >
                  <strong>알람</strong>
                </div>
              </button>
            </div>
            <div className={classes.review}>
              <button
                style={{
                  border: "0.3px solid rgba(66, 211, 149, 1)",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                  borderRadius: "5px",
                }}
                onClick={reviewonClickHandler}
              >
                <div className={classes.leftLogo} style={{ flex: "1" }}>
                  <BsSearch style={{ color: "42D395", fontSize: "1.8rem" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{
                    flex: "2",
                    padding: "0 0 0 50px",
                    fontSize: "1.1rem",
                    color: "rgba(85, 85, 85, 1)",
                  }}
                >
                  <strong>리뷰조회</strong>
                </div>
              </button>
            </div>
            <div className={classes.reservation}>
              <button
                style={{
                  border: "0.3px solid rgba(66, 211, 149, 1)",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                  borderRadius: "5px",
                }}
                onClick={reservationonClickHandler}
              >
                <div className={classes.leftLogo} style={{ flex: "1" }}>
                  <TfiWrite style={{ color: "42D395", fontSize: "1.8rem" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{
                    flex: "2",
                    padding: "0 0 0 30px",
                    fontSize: "1.1rem",
                    color: "rgba(85, 85, 85, 1)",
                  }}
                >
                  <strong>예약현황</strong>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {btnActive === 1 && (
        <div>
          <h3 style={{ textAlign: "left", padding: "0 0 20px 115px" }}>
            개인정보
          </h3>
          <div className={classes.viewPrivacy}>
            <div
              className={classes.inner}
              style={{
                border: "0",
                width: "1300px",
                margin: "auto",
              }}
            >
              <div
                className={classes.privacyContent}
                style={{ padding: "0 0 100px 0" }}
              >
                <div
                  className={classes.privacyInfo}
                  style={{
                    backgroundColor: "#65DE96",
                    display: "flex",
                    padding: "20px 10px 20px 10px",
                    borderRadius: "3px",
                  }}
                >
                  <div
                    style={{
                      flex: "1.5",
                      border: "1px solid white",
                      backgroundColor: "white",
                      display: "flex",
                      padding: "10px 0",
                      marginRight: "10px",
                      borderRadius: "3px",
                    }}
                  >
                    <strong style={{ textAlign: "left", flex: "1" }}>
                      아이디
                    </strong>
                    <span
                      style={{ textAlign: "right", flex: "1", color: "gray" }}
                    >
                      parksj0230
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid white",
                      backgroundColor: "white",
                      display: "flex",
                      padding: "10px 0",
                      marginRight: "10px",
                      borderRadius: "3px",
                    }}
                  >
                    <strong style={{ textAlign: "left", flex: "1" }}>
                      이름
                    </strong>
                    <span
                      style={{ textAlign: "right", flex: "1", color: "gray" }}
                    >
                      박세준
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid white",
                      backgroundColor: "white",
                      display: "flex",
                      padding: "10px 0",
                      marginRight: "10px",
                      borderRadius: "3px",
                    }}
                  >
                    <strong style={{ textAlign: "left", flex: "1" }}>
                      지역
                    </strong>
                    <span
                      style={{ textAlign: "right", flex: "1", color: "gray" }}
                    >
                      대전
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "1.5",
                      border: "1px solid white",
                      backgroundColor: "white",
                      display: "flex",
                      padding: "10px 0",
                      marginRight: "10px",
                      borderRadius: "3px",
                    }}
                  >
                    <strong style={{ textAlign: "left", flex: "1" }}>
                      이메일
                    </strong>
                    <span
                      style={{ textAlign: "right", flex: "1", color: "gray" }}
                    >
                      qkr0000@gmail.com
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "1.5",
                      border: "1px solid white",
                      backgroundColor: "white",
                      display: "flex",
                      padding: "10px 0",
                      marginRight: "10px",
                      borderRadius: "3px",
                    }}
                  >
                    <strong style={{ textAlign: "left", flex: "1" }}>
                      휴대폰 번호
                    </strong>
                    <span
                      style={{ textAlign: "right", flex: "1", color: "gray" }}
                    >
                      010-1111-2222
                    </span>
                  </div>
                </div>
                <br />
                <div style={{ textAlign: "right" }}>
                  <button
                    style={{
                      backgroundColor: "#F5F5F5",
                      border: "0.3px solid rgba(85, 85, 85, 1)",
                      padding: "5px",
                      borderRadius: "2px",
                      marginRight: "5px",
                    }}
                  >
                    회원탈퇴
                  </button>
                  <button
                    style={{
                      backgroundColor: "#F5F5F5",
                      border: "0.3px solid rgba(85, 85, 85, 1)",
                      padding: "5px",
                      borderRadius: "2px",
                    }}
                  >
                    정보수정
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {btnActive === 2 && (
        <div>
          <h3 style={{ textAlign: "left", padding: "0 0 20px 115px" }}>알람</h3>
          <div className={classes.viewReview}>
            <div
              className={classes.inner}
              style={{
                border: "0",
                width: "1300px",
                margin: "auto",
              }}
            >
              <div
                className={classes.reviewContent}
                style={{ padding: "0 0 100px 0" }}
              >
                <table
                  style={{
                    width: "100%",
                    height: "200px",
                    border: "1px solid #42D395",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead
                    style={{
                      color: "rgba(250, 250, 250, 1)",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                    }}
                  >
                    <tr className={classes.abx} style={{ height: "40px" }}>
                      <td style={{ border: "1px solid white" }}> 작성자</td>
                      <td style={{ border: "1px solid white" }}> 날짜 </td>
                      <td style={{ border: "1px solid white" }}> 시간 </td>
                      <td style={{ border: "1px solid white" }}> 알람내용</td>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
                    {DUMMY3.map((item) => {
                      return (
                        <tr
                          style={{
                            border: "2px solid white",
                            fontSize: "0.9rem",
                            color: "rgba(85, 85, 85, 1)",
                          }}
                        >
                          <td>
                            <img
                              src={item.image}
                              style={{
                                width: "50px",
                                height: "auto",
                                borderRadius: "70%",
                              }}
                            />
                            <span>{item.writer}</span>
                          </td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>
                          <td>{item.content}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {btnActive === 3 && (
        <div>
          <h3 style={{ textAlign: "left", padding: "0 0 20px 115px" }}>
            리뷰조회
          </h3>
          <div
            className={classes.viewReview}
            style={{ backgroundColor: "#022F1C" }}
          >
            <div
              className={classes.inner}
              style={{
                border: "0",
                width: "1300px",
                margin: "auto",
              }}
            >
              <div
                className={classes.reviewContent}
                style={{ padding: "100px 0 100px 0" }}
              >
                <ListBox
                  style={{ "justify-content": "space-between" }}
                  dataArray={reviewList}
                  direction={true}
                >
                  <ReviewCardContent />
                </ListBox>
              </div>
            </div>
          </div>
        </div>
      )}
      {btnActive === 4 && (
        <div>
          <h3 style={{ textAlign: "left", padding: "0 0 20px 115px" }}>
            예약현황
          </h3>
          <div className={classes.viewReview}>
            <div
              className={classes.inner}
              style={{
                border: "0",
                width: "1300px",
                margin: "auto",
              }}
            >
              <div
                className={classes.reviewContent}
                style={{ padding: "0 0 100px 0" }}
              >
                <table
                  style={{
                    width: "100%",
                    height: "200px",
                    border: "1px solid #42D395",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead
                    style={{
                      color: "rgba(250, 250, 250, 1)",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                    }}
                  >
                    <tr className={classes.abx} style={{ height: "40px" }}>
                      <td style={{ border: "1px solid white" }}>이름</td>
                      <td style={{ border: "1px solid white" }}>날짜</td>
                      <td style={{ border: "1px solid white" }}>시간</td>
                      <td style={{ border: "1px solid white" }}>지역</td>
                      <td style={{ border: "1px solid white" }}>상태</td>
                      <td style={{ border: "1px solid white" }}>예약상세</td>
                      <td style={{ border: "1px solid white" }}>예약취소</td>
                      <td style={{ border: "1px solid white" }}>예약확정</td>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
                    {DUMMY4.map((item) => {
                      return (
                        <tr
                          style={{
                            border: "2px solid white",
                            fontSize: "0.9rem",
                            color: "rgba(85, 85, 85, 1)",
                          }}
                        >
                          <td>
                            <img
                              src={item.image}
                              style={{
                                width: "50px",
                                height: "auto",
                                borderRadius: "70%",
                              }}
                            />
                            <span>{item.name}</span>
                          </td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>
                          <td>{item.location}</td>
                          <td>{item.state}</td>
                          <td>{item.detail}</td>
                          <td>{item.cancel}</td>
                          <td>{item.confirm}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPage;
