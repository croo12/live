import ListBox from "../../UI/ListBox";
import RealtorCardContent, {
  DUMMY,
  ReservationRealtorCardContent,
} from "../RealtorCardContent";
import classes from "./ReservationLeftDiv.module.scss";

const ReservationLeftDiv = ({ realtors, clickEventHandler }) => {
  console.log(realtors);

  return (
    <div className={classes.leftContainer}>
      <h2>공인 중개사 목록</h2>
      <div>
        {realtors?.length ? (
          <ListBox dataArray={realtors}>
            <ReservationRealtorCardContent
              clickEventHandler={clickEventHandler}
            />
          </ListBox>
        ) : (
          <ul>
            <li>현재 조회된 공인중개사가 없습니다</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReservationLeftDiv;
