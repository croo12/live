import { useState } from "react";
import classes from "./ContractExpectedCost.module.scss";

const ContractExpectedCost = () => {
  const [downPayment] = useState(10000000); // 계약금
  const [balance] = useState(9000000); // 잔금
  const [brokerageFee] = useState(300000);
  return (
    <div className={classes.expectedCost}>
      <div className={classes.inner}>
        <div className={classes.expectedCostContent}>
          <h2>예상 비용 안내</h2>
          <div className={classes.costBox}>
            <div className={classes.downPayment}>
              <p>계약금</p>
              <input type="text" value={downPayment + "원"} />
            </div>
            <div className={classes.balance}>
              <p>잔금</p>
              <input type="text" value={balance + "원"} />
            </div>
            <div className={classes.brokerageFee}>
              <p>중개보수</p>
              <input type="text" value={brokerageFee + "원"} />
            </div>
          </div>
          <hr />
          <div className={classes.cost}>
            <div className={classes.totalEstimatedCost}>
              <h5>총 예상 비용</h5>
              <strong>1,030,000원</strong>
            </div>
            <div className={classes.totalCost}>
              <strong>일금 일천만삼십만원정</strong>
            </div>
          </div>
          <br />
          <div className={classes.agreeCondition}>
            <div className={classes.checkBox}>
              <input type="checkbox" /> <strong>약관에 모두 동의합니다.</strong>
              <hr />
              <div className={classes.agreeCheck}>
                <div className={classes.serviceAgree}>
                  <input type="checkbox" />{" "}
                  <p> [필수] 비대면 계약 서비스 이용 약관 동의</p>
                </div>
                <div className={classes.personalInfoAgree}>
                  <input type="checkbox" />{" "}
                  <p> [필수] 개인정보 수집 및 이용동의 </p>
                </div>
              </div>
            </div>
          </div>
          <button>계약 요청하기</button>
        </div>
      </div>
    </div>
  );
};

export default ContractExpectedCost;
