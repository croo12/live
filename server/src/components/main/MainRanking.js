import classes from "./MainRanking.module.scss";
import ListBox from "../../UI/ListBox";

import RealtorCardContent, { DUMMY } from "../RealtorCardContent";
import { useState } from "react";

const MainRanking = () => {
  const [data, setData] = useState(DUMMY);

  return (
    <div className={classes.inner}>
      <div className={classes.rankingContent}>
        <h2>
          지금 <strong>인기</strong>있는 <strong>공인중개사</strong>
        </h2>
        <div className={classes.buttonBox}>
          <button>리뷰</button>
          <button>별점</button>
          <button>매물</button>
        </div>
        <ListBox
          style={{ "justify-content": "space-between" }}
          dataArray={data}
          direction={true}
        >
          <RealtorCardContent />
        </ListBox>
      </div>
    </div>
  );
};

export default MainRanking;
