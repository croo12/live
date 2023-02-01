import classes from "./MainRanking.module.scss";
import ListBox from "../../UI/ListBox";

import RealtorCardContent, { DUMMY } from "../RealtorCardContent";
import { useState } from "react";

const data = ["리뷰", "별점", "매물"];

const MainRanking = () => {
  const [realtorList, setRealtorList] = useState(DUMMY);
  const [btnActive, setBtnActive] = useState(0);

  const toggleActive = (e) => {
    setBtnActive(Number.parseInt(e.target.value));
  };

  return (
    <div className={classes.inner}>
      <div className={classes.rankingContent}>
        <h2>
          지금 <strong>인기</strong>있는 <strong>공인중개사</strong>
        </h2>
        <div className={classes.buttonBox}>
          {data.map((item, idx) => {
            return (
              <button
                key={idx}
                value={idx}
                className={`${classes.btn} ${
                  idx === btnActive ? classes.active : ""
                }`}
                onClick={toggleActive}
              >
                {item}
              </button>
            );
          })}
        </div>
        <ListBox
          style={{ "justify-content": "space-between" }}
          dataArray={realtorList}
          direction={true}
        >
          <RealtorCardContent />
        </ListBox>
      </div>
    </div>
  );
};

export default MainRanking;
