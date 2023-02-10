import classes from "./ContractRequireInfo.module.scss";

const ContractRequireInfo = () => {
  return (
    <div className={classes.requireInfo}>
      <div className={classes.inner}>
        <div className={classes.requireInfoContent}>
          <h2>요청 정보</h2>
          <div className={classes.resident}>
            <strong>거주인원</strong>{" "}
            <input placeholder="거주 인원을 선택해주세요." />
          </div>
          <div className={classes.requirement}>
            <strong>특약 요청사항</strong>{" "}
            <textarea placeholder="위의 조건 외 특약사항으로 요청하고 싶으신 내용을 입력해주세요.&#13;요청하고 싶으신 내용이 없을 시, '없음'으로 입력해주세요." />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ContractRequireInfo;
