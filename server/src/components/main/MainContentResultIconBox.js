import classes from "./MainContentResultIconBox.module.scss";

const MainContentResultIconBox = (props) => {
  return (
    <div className={classes.iconBox}>
      {props.icon}
      {/* <p className={classes.name}> {props.name} </p> */}
      <p className={classes.content}> {props.content} </p>
    </div>
  );
};

export default MainContentResultIconBox;
