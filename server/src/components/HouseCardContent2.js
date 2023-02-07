import classes from "./HouseCardContent2.module.scss";
import sample from "../assets/image/sample.jpg";

const HouseCardContent2 = () => {
  return (
    <>
      <div className={classes.HouseCardContent2}>
        <div className={classes.houseContent}>
          <div className={classes.leftContent}>
            <img src={sample}></img>
          </div>
          <div className={classes.rightContent}>
            <p>원룸</p>
            <h2>월세 1,000/49</h2>
            <p>
              방 1.29㎡ . 관리비 없음
              <br /> 대전 서구 도산로 253
              <br /> 여유있는 면적 오픈형/ 반려동물과 함께...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseCardContent2;
