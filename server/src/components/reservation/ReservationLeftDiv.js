import ListBox from "../../UI/ListBox";
import RealtorCardContent, { DUMMY } from "../RealtorCardContent";
import classes from "./ReservationLeftDiv.module.scss";

const ReservationLeftDiv = ({ realtors }) => {
  //검색결과에 따라서 중개사 리스트가 나옴
  // const [realtorList] = useState(DUMMY);

  return (
    <div className={classes.leftContainer}>
      <h2>공인 중개사 목록</h2>
      <div>
        {realtors?.length ? (
          <ListBox dataArray={realtors}>
            <RealtorCardContent />
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
