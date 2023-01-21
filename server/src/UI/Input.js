import classes from "./Input.module.scss";

const Input = (props) => {
  //강의 베낌
  return (
    <div className={`${classes.inputBox} ${props.isValid ? "none" : ""}`}>
      <input
        className={classes.slideInput}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Input;
