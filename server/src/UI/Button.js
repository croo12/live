import classes from "./Button.module.scss";

/**
 *
 * @param { isSubmit : boolean} true면 submit type 버튼이됨
 * @param { clickEvent : function } onClickEvent
 * @param { children : String } 걍 글자다 마
 *
 * @returns
 */
const Button = ({ isSubmit, clickEvent, children }) => {
  //bool isSubmit을 true로 받으면 버튼은 submit 버튼이 된다

  //받은 클릭 이벤트를 감싼 이벤트
  const clickEventHandler = (e) => {
    e.preventDefault();
    clickEvent();
  };

  //버튼 컴포넌트 리턴
  return (
    <button type={isSubmit ? "submit" : "button"} onClick={clickEventHandler}>
      {children}
    </button>
  );
};

export default Button;
