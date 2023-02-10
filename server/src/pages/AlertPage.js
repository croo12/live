import classes from "./AlertPage.module.scss";
import { DUMMY3 } from "../components/AlarmCardContent";
import { getAlertList } from "../apis/noticeApis";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AlertPage = () => {
  const alertList = useLoaderData();
  const userInfo = useSelector((state) => state.user.userInfo);
  const navi = useNavigate();

  console.log(userInfo);

  if (!userInfo.auth)
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

export default AlertPage;

export const alertLoader = async () => {
  try {
    const alertList = await getAlertList();
    console.log(alertList);

    if (alertList.data) {
      return alertList;
    } else {
      console.log("야 나 여기야");
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
