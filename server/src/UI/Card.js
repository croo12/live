import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <p>카드 UI</p>
      {props.children}
    </div>
  );
};

export default Card;
