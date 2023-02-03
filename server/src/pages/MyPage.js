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
                    padding: "0 0 0 15px",
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
                    }}
                  >
                    일반회원
                  </span>
                </p>
              </div>
            </div>
            <div
              className={classes.temperature}
              style={{ flex: "3", padding: "50px 0 0 0" }}
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
                  border: "0.3px solid #008A4F",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                  value: 1,
                }}
                onClick={privacyOnclickHandler}
              >
                <div className={classes.leftLogo} style={{ flex: "1" }}>
                  <BsPersonLinesFill style={{ color: "42D395" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{ flex: "2", padding: "0 0 0 30px" }}
                >
                  개인정보
                </div>
              </button>
            </div>
            <div className={classes.alarm}>
              <button
                style={{
                  border: "0.3px solid #008A4F",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                }}
                onClick={alarmonClickHandler}
              >
                <div className={classes.leftLogo} style={{ flex: "1" }}>
                  <BsSearch style={{ color: "42D395" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{ flex: "2", padding: "0 0 0 30px" }}
                >
                  알람
                </div>
              </button>
            </div>
            <div className={classes.review}>
              <button
                style={{
                  border: "0.3px solid #008A4F",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                }}
                onClick={reviewonClickHandler}
              >
                <div className={classes.leftLogo} style={{ flex: "1" }}>
                  <BsFillBellFill style={{ color: "42D395" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{ flex: "2", padding: "0 0 0 50px" }}
                >
                  리뷰조회
                </div>
              </button>
            </div>
            <div className={classes.reservation}>
              <button
                style={{
                  border: "0.3px solid #008A4F",
                  backgroundColor: "white",
                  display: "flex",
                  width: "300px",
                  height: "70px",
                  padding: "20px 5px",
                }}
                onClick={reservationonClickHandler}
              >
                <div className={classes.leftLogo} style={{ flex: "1" }}>
                  <TfiWrite style={{ color: "42D395" }} />
                </div>
                <div
                  className={classes.rightDesc}
                  style={{ flex: "2", padding: "0 0 0 30px" }}
                >
                  예약현황
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {btnActive === 1 && (
        <div>
          <h3 style={{ textAlign: "left", padding: "0 0 20px 200px" }}>
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
              </div>
            </div>
          </div>
        </div>
      )}
      {btnActive === 2 && (
        <div>
          <h3 style={{ textAlign: "left", padding: "0 0 20px 200px" }}>알람</h3>
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
                style={{ padding: "100px 0 100px 0" }}
              >
                <table>
                  <thead>
                    <tr>
                      <td>작성자 |</td>
                      <td>날짜 |</td>
                      <td>시간 |</td>
                      <td>알람내용</td>
                    </tr>
                  </thead>
                  <tbody>
                    {DUMMY3.map((item) => {
                      return (
                        <tr>
                          <td>
                            <img
                              src={item.image}
                              style={{ width: "10px", height: "auto" }}
                            />
                          </td>
                          <td>{item.writer}</td>
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
          <h3 style={{ textAlign: "left", padding: "0 0 20px 200px" }}>
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
          <h3 style={{ textAlign: "left", padding: "0 0 20px 200px" }}>
            예약현황
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
    </>
  );
};

export default MyPage;
