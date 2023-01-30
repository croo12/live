import classes from "./Mainpage.css";
import mainback from "../assets/image/MainBackground.png";
import mainpicture from "../assets/image/MainPicture.png";
import sample from "../assets/image/sample.jpg";
import { BiCoffeeTogo, BiRestaurant } from "react-icons/bi";
import { RiStore2Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocalLaundryService } from "react-icons/md";
import { GiHairStrands } from "react-icons/gi";
import Carousel from "./Carousel";

const MainPage = () => {
  return (
    <>
      <section className={classes.intro}>
        <div
          className={classes.inner}
          style={{
            border: "",
            width: "1300px",
            margin: "auto",
            backgroundImage: `url(${mainback})`,
            backgroundPosition: "30% ",
          }}
        >
          <div
            className={classes.introContent}
            style={{ display: "flex", padding: "90px 0px 120px 60px" }}
          >
            <div
              className={classes.desc}
              style={{
                textAlign: "left",
                flex: "2",
                padding: "160px 0 0 120px",
              }}
            >
              <h1
                style={{
                  fontSize: "70px",
                  color: "#42D395",
                  fontWeight: "light",
                }}
              >
                LIVE
              </h1>
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.7em",
                }}
              >
                당신이 원하는 집을 앉아서
                <br />
                쉽고 간편하게
              </p>
            </div>
            <div
              className={classes.photo}
              style={{
                flex: "6",
              }}
            >
              <img src={mainpicture} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.about} style={{ backgroundColor: "#022F1C" }}>
        <div
          className={classes.inner}
          style={{
            border: "",
            width: "1300px",
            margin: "auto",
          }}
        >
          <div
            className={classes.aboutContent}
            style={{ padding: "150px 10px", display: "flex" }}
          >
            <div className={classes.questionBox} style={{ flex: "3" }}>
              <p
                style={{ color: "#FFF", textAlign: "center", fontSize: "20px" }}
              >
                <strong>덕명동</strong>이 궁금하신가요?
              </p>
              <br />
              <div
                className={classes.searchBox}
                style={{ lineHeight: "1.5em" }}
              >
                <div
                  className={classes.inputBox}
                  style={{
                    backgroundColor: "#3D7F63",
                    width: "400px",
                    height: "450px",
                    border: "1px solid #65A489",
                    padding: "40px 30px 0px 30px",
                    borderRadius: "5%",
                    color: "#fff",
                  }}
                >
                  매물 평균가
                  <div style={{ textAlign: "left" }}>
                    <label htmlFor="monthly">월세</label>
                    <div>
                      <input /> <input />
                    </div>
                    <label htmlFor="monthly">투룸</label>
                    <div>
                      <input /> <input />
                    </div>
                    <label htmlFor="monthly">전세</label>
                    <div>
                      <input />
                    </div>
                    <br />
                    편의시설
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ flex: "1.2" }}>
                        <BiCoffeeTogo />
                        <p>카페</p>
                        <p>300</p>
                      </div>
                      <div style={{ flex: "1.2" }}>
                        <RiStore2Line />
                        <p>편의점</p>
                        <p>120</p>
                      </div>
                      <div style={{ flex: "1.2" }}>
                        <AiOutlineShoppingCart />
                        <p>마트</p>
                        <p>3</p>
                      </div>
                      <div style={{ flex: "1.2" }}>
                        <MdLocalLaundryService />
                        <p>세탁소</p>
                        <p>30</p>
                      </div>
                      <div style={{ flex: "1.2" }}>
                        <GiHairStrands />
                        <p>헤어샵</p>
                        <p>20</p>
                      </div>
                      <div style={{ flex: "1.2" }}>
                        <BiRestaurant />
                        <p>음식점</p>
                        <p>200</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: "4", padding: "70px 10px 10px 80px" }}>
              <div>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "left",
                    padding: "0 0 20px 0",
                  }}
                >
                  새로 나온 매물
                </p>
                <div>
                  <Carousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classes.ranking}
        style={{ backgroundColor: "#F3F3F3" }}
      >
        <div
          className={classes.inner}
          style={{
            border: "",
            width: "1300px",
            margin: "auto",
          }}
        >
          <div
            className={classes.rankingContent}
            style={{ padding: "100px 0" }}
          >
            <br />
            <p
              style={{
                marginBottom: "30px",
                textAlign: "left",
                fontSize: "20px",
              }}
            >
              지금 <strong>인기</strong>있는 <strong>공인중개사</strong>
            </p>
            <span style={{ marginRight: "1200px" }}>
              <button>리뷰</button>
              <button>별점</button>
              <button>매물</button>
            </span>
            <div
              className={classes.items}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className={classes.item}
                style={{
                  width: "310px",
                  height: "200px",
                  marginTop: "30px",
                  borderRadius: "30px 30px 30px 30px",
                  backgroundColor: "#42D395",
                  gradientLinear: "",
                  boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
                  padding: "25px 7px",
                }}
              >
                <div className={classes.upCard} style={{ display: "flex" }}>
                  <div
                    className={classes.leftImg}
                    style={{
                      width: "50px",
                      height: "70px",
                      flex: "1",
                      padding: "0 0 0 10px",
                    }}
                  >
                    <img
                      src={sample}
                      style={{
                        width: "100%",
                        borderRadius: "70%",
                      }}
                    ></img>
                  </div>
                  <div
                    className={classes.rightDesc}
                    style={{ flex: "2", padding: "20px 10px 0 0" }}
                  >
                    <p>
                      <strong>김희연 </strong>공인중개사
                    </p>
                  </div>
                </div>
                <div
                  className={classes.downCard}
                  style={{ textAlign: "right", padding: "15px 0 " }}
                >
                  <p>★4.8 | 체결 계약 105건 | 경력 10년</p>
                </div>
              </div>
              <div
                className={classes.item}
                style={{
                  width: "310px",
                  height: "200px",
                  marginTop: "30px",
                  borderRadius: "30px 30px 30px 30px",
                  backgroundColor: "#42D395",
                  boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
                  padding: "25px 7px",
                }}
              >
                <div className={classes.upCard} style={{ display: "flex" }}>
                  <div
                    className={classes.leftImg}
                    style={{
                      width: "50px",
                      height: "70px",
                      flex: "1",
                      padding: "0 0 0 10px",
                    }}
                  >
                    <img
                      src={sample}
                      style={{
                        width: "100%",
                        borderRadius: "70%",
                      }}
                    ></img>
                  </div>
                  <div
                    className={classes.rightDesc}
                    style={{ flex: "2", padding: "20px 10px 0 0" }}
                  >
                    <p>
                      <strong>김희연 </strong>공인중개사
                    </p>
                  </div>
                </div>
                <div
                  className={classes.downCard}
                  style={{ textAlign: "right", padding: "15px 0 " }}
                >
                  <p>★4.8 | 체결 계약 105건 | 경력 10년</p>
                </div>
              </div>
              <div
                className={classes.item}
                style={{
                  width: "310px",
                  height: "200px",
                  marginTop: "30px",
                  borderRadius: "30px 30px 30px 30px",
                  backgroundColor: "#42D395",
                  boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
                  padding: "25px 7px",
                }}
              >
                <div className={classes.upCard} style={{ display: "flex" }}>
                  <div
                    className={classes.leftImg}
                    style={{
                      width: "50px",
                      height: "70px",
                      flex: "1",
                      padding: "0 0 0 10px",
                    }}
                  >
                    <img
                      src={sample}
                      style={{
                        width: "100%",
                        borderRadius: "70%",
                      }}
                    ></img>
                  </div>
                  <div
                    className={classes.rightDesc}
                    style={{ flex: "2", padding: "20px 10px 0 0" }}
                  >
                    <p>
                      <strong>김희연 </strong>공인중개사
                    </p>
                  </div>
                </div>
                <div
                  className={classes.downCard}
                  style={{ textAlign: "right", padding: "15px 0 " }}
                >
                  <p>★4.8 | 체결 계약 105건 | 경력 10년</p>
                </div>
              </div>
              <div
                className={classes.item}
                style={{
                  width: "310px",
                  height: "200px",
                  marginTop: "30px",
                  borderRadius: "30px 30px 30px 30px",
                  backgroundColor: "#42D395",
                  boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
                  padding: "25px 7px",
                }}
              >
                <div className={classes.upCard} style={{ display: "flex" }}>
                  <div
                    className={classes.leftImg}
                    style={{
                      width: "50px",
                      height: "70px",
                      flex: "1",
                      padding: "0 0 0 10px",
                    }}
                  >
                    <img
                      src={sample}
                      style={{
                        width: "100%",
                        borderRadius: "70%",
                      }}
                    ></img>
                  </div>
                  <div
                    className={classes.rightDesc}
                    style={{ flex: "2", padding: "20px 10px 0 0" }}
                  >
                    <p>
                      <strong>김희연 </strong>공인중개사
                    </p>
                  </div>
                </div>
                <div
                  className={classes.downCard}
                  style={{ textAlign: "right", padding: "15px 0 " }}
                >
                  <p>★4.8 | 체결 계약 105건 | 경력 10년</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
