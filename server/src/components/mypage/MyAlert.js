import { DUMMY3 } from "../AlarmCardContent";
import classes from "./MyAlert.module.scss";

const MyAlert = () => {
  return (
    <>
      <div className={classes.alarm}>
        <div className={classes.alarmContent}>
          <div className={classes.inner}>
            <h3>알람</h3>
            <div className={classes.alarmTable}>
              <table>
                <thead>
                  <tr className={classes.tableHead}>
                    <td> 작성자</td>
                    <td> 날짜 </td>
                    <td> 시간 </td>
                    <td> 알람내용</td>
                  </tr>
                </thead>
                <tbody className={classes.tableBody}>
                  {DUMMY3.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          <img src={item.image} />
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
    </>
  );
};

export default MyAlert;
