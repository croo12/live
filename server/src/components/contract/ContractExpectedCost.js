import { useState } from "react";
import axiosInstance, { getAuthHeader } from "../../util/axios";
import classes from "./ContractExpectedCost.module.scss";

const ContractExpectedCost = (props) => {
  const deposit = props.passInfo.deposit;
  const rent = props.passInfo.rent;

  const balance = deposit * 0.1;
  const downPayment = deposit * 0.9;

  let transactionAmount = deposit * (rent * 100);
  let commission = 0;
  if (transactionAmount < 50000000) {
    transactionAmount = deposit * (rent * 70);
  }

  if (transactionAmount < 50000000) {
    commission = transactionAmount * 0.005;
    if (commission > 200000) {
      commission = 200000;
    }
  } else if (transactionAmount < 100000000) {
    commission = transactionAmount * 0.004;
    if (commission > 300000) {
      commission = 300000;
    }
  } else if (transactionAmount < 600000000) {
    commission = transactionAmount * 0.003;
  } else if (transactionAmount < 1200000000) {
    commission = transactionAmount * 0.004;
  } else if (transactionAmount < 1500000000) {
    commission = transactionAmount * 0.005;
  } else {
    commission = transactionAmount * 0.006;
  }

  const onClickHandler = async () => {
    const totInfoData = {
      termOfContract: props.passInfo.userTermOfContract,
      moveOnDate: props.passInfo.userMoveOnDate,
      tenantAddress: props.passInfo.address,
      addressDetail: props.passInfo.addressDetail,
      tenantAge: props.passInfo.age,
      numberOfResidents: props.passInfo.numberOfResidents,
      specialContract: props.passInfo.specialContract,
      downPayment: downPayment,
      balance: balance,
      commission: commission,
    };

    console.log(totInfoData);

    const infoTotHandler = JSON.stringify(totInfoData);
    console.log(infoTotHandler);

    try {
      const result = await axiosInstance.post("contracts", infoTotHandler, {
        headers: {
          Authorization: getAuthHeader().Authorization,
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.expectedCost}>
      <div className={classes.inner}>
        <div className={classes.expectedCostContent}>
          <h2>예상 비용 안내</h2>
          <div className={classes.costBox}>
            <div className={classes.downPayment}>
              <p>계약금</p>
              <input type="text" defaultValue={downPayment + "원"} />
            </div>
            <div className={classes.balance}>
              <p>잔금</p>
              <input type="text" defaultValue={balance + "원"} />
            </div>
            <div className={classes.brokerageFee}>
              <p>중개보수</p>
              <input type="text" defaultValue={commission + "원"} />
            </div>
          </div>
          <hr />
          <div className={classes.cost}>
            <div className={classes.totalEstimatedCost}>
              <h5>총 예상 비용</h5>
              <strong>{downPayment + balance + commission}원</strong>
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
          <button onClick={onClickHandler}>계약 요청하기</button>
        </div>
      </div>
    </div>
  );
};

export default ContractExpectedCost;
