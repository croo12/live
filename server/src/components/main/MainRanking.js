import classes from "./MainRanking.module.scss";
import ListBox from "../../UI/ListBox";
import sample from "../../assets/image/sample.jpg";
import RealtorCardContent from "../RealtorCardContent";
import { useState } from "react";

const dummy = [
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
];

const MainRanking = () => {
  const [data, setData] = useState(dummy);

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
