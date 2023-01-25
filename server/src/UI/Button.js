import { useRef } from "react";

const Button = (props) => {
  //bool isSubmit을 true로 받으면 버튼은 submit 버튼이 된다
  const isSubmit = useRef(props.isSubmit);

  //받은 클릭 이벤트를 감싼 이벤트
  const clickEventHandler = (e) => {
    e.preventDefault();
    props.clickEvent();
  };

  //버튼 컴포넌트 리턴
  return (
    <button
      type={isSubmit.current ? "submit" : "button"}
      onClick={clickEventHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
