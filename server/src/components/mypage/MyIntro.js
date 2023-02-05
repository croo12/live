import classes from "./MyIntro.module.scss";
import sample from "../../assets/image/sample.jpg";

const MyIntro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.inner}>
        <div className={classes.introContent}>
          <div className={classes.info}>
            <div className={classes.leftImg}>
              <img src={sample}></img>
            </div>
            <div className={classes.rightDesc}>
              <p>
                안녕하세요, <strong>박세준</strong>님<br />
                <span>일반 회원</span>
              </p>
              <div className={classes.temperature}>온도그래프</div>
              <progress
                className={classes.progress}
                value="36.5"
                min="0"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIntro;
