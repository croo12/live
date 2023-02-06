import classes from "./MainContentInputBox.module.scss";

const MainContentInputBox = () => {
  return (
    <div className={classes.inputbox}>
      <label htmlFor="singleroom" style={{ fontSize: "1.1rem" }}>
        원룸
      </label>
      <div className={classes.singleroom}>
        <input /> <input />
      </div>
      <label htmlFor="tworoom" style={{ fontSize: "1.1rem" }}>
        투룸
      </label>
      <div className={classes.tworoom}>
        <input /> <input />
      </div>
      <label htmlFor="houselease" style={{ fontSize: "1.1rem" }}>
        전세
      </label>
      <div className={classes.houselease}>
        <input />
      </div>
    </div>
  );
};

export default MainContentInputBox;
