import classes from "./MyReservation.module.scss";
import { DUMMY4 } from "../ReservationCardContent";

const MyReservation = () => {
  return (
    <div>
      <h3 style={{ textAlign: "left", padding: "0 0 20px 115px" }}>예약현황</h3>
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
  );
};

export default MyReservation;
