import MainContentInputBox from "./MainContentInputBox";
import MainContentResultBox from "./MainContentResultBox";

import classes from "./MainContentLeftBox.module.scss";

const MainContentLeftBox = () => {
  return (
    <div className={classes.questionBox}>
      <p>
        <strong>덕명동</strong>이 궁금하신가요?
      </p>
      <br />
      <div className={classes.searchBox}>
        <div className={classes.inputBox}>
          <MainContentInputBox />
          매물 평균가
          <MainContentResultBox />
        </div>
      </div>
    </div>
  );
};

export default MainContentLeftBox;
