import classes from "./MainRanking.module.scss";
import ListBox from "../../UI/ListBox";
import sample from "../../assets/image/sample.jpg";
import { MainRealtorCardContent } from "../RealtorCardContent";

const dummy = [
  {
    image: sample,
    name: "김희연",
    startNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    startNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    startNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    startNum: 4.8,
    contactCnt: 105,
  },
];

const MainRanking = () => {
  return (
    <div className={classes.inner}>
      <div className={classes.rankingContent}>
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
        <ListBox dataArray={dummy} direction={true}>
          <MainRealtorCardContent />
        </ListBox>
        <div
          className={classes.items}
          style={{ display: "flex", justifyContent: "space-between" }}
        ></div>
      </div>
    </div>
  );
};

export default MainRanking;
