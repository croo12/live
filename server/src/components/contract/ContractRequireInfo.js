import { useRef } from "react";
import classes from "./ContractRequireInfo.module.scss";

const ContractRequireInfo = (props) => {
  const formData = useRef();
  const insertRequireInfo = (e) => {
    e.preventDefault();
    const requireInfo = {
      numberOfResidents: formData.current.usernumberOfResidents.value,
      specialContract: formData.current.userSpecialContract.value,
    };
    props.fx(requireInfo);
  };
  return (
    <form ref={formData} onSubmit={insertRequireInfo}>
      <div className={classes.requireInfo}>
        <div className={classes.inner}>
          <div className={classes.requireInfoContent}>
            <h2>요청 정보</h2>
            <div className={classes.resident}>
              <strong>거주인원</strong>{" "}
              <input
                placeholder="거주 인원을 선택해주세요."
                id="usernumberOfResidents"
                name="usernumberOfResidents"
              />
            </div>
            <div className={classes.requirement}>
              <strong>특약 요청사항</strong>{" "}
              <textarea
                placeholder="위의 조건 외 특약사항으로 요청하고 싶으신 내용을 입력해주세요.&#13;요청하고 싶으신 내용이 없을 시, '없음'으로 입력해주세요."
                id="userSpecialContract"
                name="userSpecialContract"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <button type="submit">입력</button>
    </form>
  );
};

export default ContractRequireInfo;
