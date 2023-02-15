import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axiosInstance, { getAuthHeader } from "../../util/axios";
import classes from "./ContractExpectedCost.module.scss";

const ContractExpectedCost = (props) => {
  const deposit = props.passInfo.deposit;
  const rent = props.passInfo.rent;

  let balance = deposit * 0.9;
  let downPayment = deposit * 0.1;

  let transactionAmount = deposit + rent * 100;
  let commission = 0;
  transactionAmount = deposit + rent * 100;
  if (transactionAmount < 50000000) {
    transactionAmount = deposit + rent * 70;
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

  const [allCheck, setAllCheck] = useState(false);
  const [nonContactContract, setnonContactContract] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const onClickHandler = async () => {
    const totInfoData = {
      termOfContract: props.passInfo.userTermOfContract,
      moveOnDate: props.passInfo.userMoveOnDate,
      tenantAddress: props.passInfo.address,
      tenantDetailAddress: props.passInfo.addressDetail,
      tenantAge: props.passInfo.age,
      numberOfResidents: props.passInfo.numberOfResidents,
      specialContract: props.passInfo.specialContract,
      downPayment: downPayment,
      balance: balance,
      commission: commission,
      realtorNo: props.passInfo.realtorNo,
      userNo: props.passInfo.userNo,
      itemNo: props.passInfo.itemNo,
    };

    try {
      if (
        allCheck === true ||
        (nonContactContract === true && privacy === true)
      ) {
        const result = await axiosInstance.post("contracts", totInfoData, {
          headers: {
            Authorization: getAuthHeader().Authorization,
            "Content-Type": "application/json",
          },
        });
        alert("계약 요청이 완료되었습니다!");
      } else {
        alert("필수 약관에 모두 동의해주세요!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const allBtnCheck = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setnonContactContract(true);
      setPrivacy(true);
    } else {
      setAllCheck(false);
      setnonContactContract(false);
      setPrivacy(false);
    }
  };

  const nonContactCheck = () => {
    if (nonContactContract === false) {
      setnonContactContract(true);
    } else {
      setnonContactContract(false);
    }
  };

  const privacyCheck = () => {
    if (privacy === false) {
      setPrivacy(true);
    } else {
      setPrivacy(false);
    }
  };

  useEffect(() => {
    if (nonContactContract === true && privacy === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [nonContactContract, privacy]);

  downPayment *= 10000;
  balance *= 10000;
  commission *= 10000;

  return (
    <>
      <div className={classes.expectedCost}>
        <div className={classes.inner}>
          <div className={classes.expectedCostContent}>
            <h2>예상 비용 안내</h2>
            <div className={classes.costBox}>
              <div className={classes.downPayment}>
                <p>계약금</p>
                <input
                  defaultValue={
                    downPayment
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
                  }
                  readOnly
                />
              </div>
              <div className={classes.balance}>
                <p>잔금</p>
                <input
                  defaultValue={
                    balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    "원"
                  }
                  readOnly
                />
              </div>
              <div className={classes.brokerageFee}>
                <p>중개보수</p>
                <input
                  defaultValue={
                    commission
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
                  }
                  readOnly
                />
              </div>
            </div>
            <hr className={classes.costLine} />
            <div className={classes.cost}>
              <div className={classes.totalEstimatedCost}>
                <h5>총 예상 비용</h5>
                <strong>
                  {(downPayment + balance + commission)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </strong>
              </div>
            </div>
            <br />
            <div className={classes.agreeCondition}>
              <div className={classes.checkBox}>
                <input
                  type="checkbox"
                  checked={allCheck}
                  onChange={allBtnCheck}
                />{" "}
                <strong>약관에 모두 동의합니다.</strong>
                <hr className={classes.costLine} />
                <div className={classes.agreeCheck}>
                  <div className={classes.serviceAgree}>
                    <input
                      type="checkbox"
                      checked={nonContactContract}
                      onChange={nonContactCheck}
                    />{" "}
                    <p> [필수] 비대면 계약 서비스 이용 약관 동의</p>
                  </div>
                  <div className={classes.personalInfoAgree}>
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={privacyCheck}
                    />{" "}
                    <p> [필수] 개인정보 수집 및 이용동의 </p>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={onClickHandler}>계약 요청하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractExpectedCost;

export const ContractExpectedCostDetailUser = (props) => {
  const expectedCost = {
    balance: props.contractInfoList.balance * 10000,
    commission: props.contractInfoList.commission,
    downPayment: props.contractInfoList.downPayment * 10000,
  };

  console.log(expectedCost);

  return (
    <>
      <div className={classes.expectedCost}>
        <div className={classes.inner}>
          <div className={classes.expectedCostContent}>
            <h2>예상 비용 안내</h2>
            <div className={classes.costBox}>
              <div className={classes.downPayment}>
                <p>계약금</p>
                <input
                  defaultValue={
                    expectedCost.downPayment
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
                  }
                  readOnly
                />
              </div>
              <div className={classes.balance}>
                <p>잔금</p>
                <input
                  defaultValue={
                    expectedCost.balance
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
                  }
                  readOnly
                />
              </div>
              <div className={classes.brokerageFee}>
                <p>중개보수</p>
                <input
                  defaultValue={
                    expectedCost.commission
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
                  }
                  readOnly
                />
              </div>
            </div>
            <hr className={classes.costLine} />
            <div className={classes.cost}>
              <div className={classes.totalEstimatedCost}>
                <h5>총 예상 비용</h5>
                <strong>
                  {(
                    expectedCost.downPayment +
                    expectedCost.balance +
                    expectedCost.commission
                  )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ContractExpectedCostDetailRealtor = (props) => {
  const formData = useRef();
  const data = useLoaderData();

  let downPayment = props.contractInfoList.downPayment;
  let balance = props.contractInfoList.balance;
  let commission = props.contractInfoList.commission;

  balance *= 10000;
  downPayment *= 10000;
  commission;

  const statusNum = data.data.contractInfo.status;

  const [allCheck, setAllCheck] = useState(false);
  const [nonContactContract, setnonContactContract] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const onChangeHandler = async () => {
    const totInfoData = {
      contractNo: props.passInfo.itemNo,
      deposit: props.passInfo.deposit,
      mainteneceFee: props.passInfo.mainteneceFee,
      termOfContract: props.passInfo.termOfContract,
      moveOnDate: props.passInfo.moveOnDate,
      specialContract: props.passInfo.specialContract,
      commission: commission,
    };

    try {
      if (
        allCheck === true ||
        (nonContactContract === true && privacy === true)
      ) {
        const result = await axiosInstance.patch(
          `contracts/${totInfoData.contractNo}`,
          totInfoData,
          {
            headers: {
              Authorization: getAuthHeader().Authorization,
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        alert("필수 약관에 모두 동의해주세요!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const url = "https://irts.molit.go.kr/";
  const onApproveHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.patch(
        `contracts/${props.passInfo.itemNo}/${1}`,
        {
          headers: {
            Authorization: getAuthHeader().Authorization,
            "Content-Type": "application/json",
          },
        }
      );
      alert(
        "계약이 승인되었습니다. 부동산 거래 전자 계약 시스템으로 이동합니다!"
      );
      alert(window.open(url));
    } catch (error) {
      console.log(error);
    }
  };

  const onConfirmHandler = async (e) => {
    e.preventDefault();
    if (window.confirm("정말로 계약을 진행하시겠습니까?")) {
      try {
        const result = await axiosInstance.patch(
          `contracts/${props.passInfo.itemNo}/${2}`,
          {
            headers: {
              Authorization: getAuthHeader().Authorization,
              "Content-Type": "application/json",
            },
          }
        );
        alert("계약이 완료되었습니다!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onQuitHandler = async (e) => {
    e.preventDefault();
    if (window.confirm("정말로 계약을 취소하시겠습니까?")) {
      try {
        const result = await axiosInstance.patch(
          `contracts/${props.passInfo.itemNo}/${3}`,
          {
            headers: {
              Authorization: getAuthHeader().Authorization,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [value, setValue] = useState(0);

  const onCommissionChangeHandler = (e) => {
    e.preventDefault();
    setValue(formData.current.commission.value);
  };

  const allBtnCheck = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setnonContactContract(true);
      setPrivacy(true);
    } else {
      setAllCheck(false);
      setnonContactContract(false);
      setPrivacy(false);
    }
  };

  const nonContactCheck = () => {
    if (nonContactContract === false) {
      setnonContactContract(true);
    } else {
      setnonContactContract(false);
    }
  };

  const privacyCheck = () => {
    if (privacy === false) {
      setPrivacy(true);
    } else {
      setPrivacy(false);
    }
  };

  useEffect(() => {
    if (nonContactContract === true && privacy === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [nonContactContract, privacy]);

  return (
    <form ref={formData}>
      <div className={classes.expectedCostRealtor}>
        <div className={classes.inner}>
          <div className={classes.expectedCostContent}>
            <h2>예상 비용 안내</h2>
            <div className={classes.costBox}>
              <div className={classes.downPayment}>
                <p>계약금</p>
                <strong>
                  {!props.passInfo.deposit
                    ? downPayment
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"
                    : (parseInt(props.passInfo.deposit * 0.1) * 10000)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"}
                </strong>
              </div>
              <div className={classes.balance}>
                <p>잔금</p>
                <strong>
                  {!props.passInfo.deposit
                    ? balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                      "원"
                    : (parseInt(props.passInfo.deposit * 0.9) * 10000)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"}
                </strong>
              </div>
              <div className={classes.brokerageFee}>
                <p>중개보수</p>
                <input
                  defaultValue={commission + "원"}
                  id="commission"
                  name="commission"
                  onChange={onCommissionChangeHandler}
                  ref={formData}
                />
              </div>
            </div>
            <hr className={classes.costLine} />
            <div className={classes.cost}>
              <div className={classes.totalEstimatedCost}>
                <h5>총 예상 비용</h5>
                <strong>
                  {!props.passInfo.deposit
                    ? (
                        downPayment +
                        balance +
                        (!value ? commission : Number(value))
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"
                    : (
                        parseInt(props.passInfo.deposit * 0.1) * 10000 +
                        parseInt(props.passInfo.deposit * 0.9) * 10000 +
                        (!value ? commission : Number(value))
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"}
                </strong>
              </div>
            </div>
            <br />
            <div className={classes.agreeCondition}>
              <div className={classes.checkBox}>
                <input
                  type="checkbox"
                  checked={allCheck}
                  onChange={allBtnCheck}
                />{" "}
                <strong>약관에 모두 동의합니다.</strong>
                <hr />
                <div className={classes.agreeCheck}>
                  <div className={classes.serviceAgree}>
                    <input
                      type="checkbox"
                      checked={nonContactContract}
                      onChange={nonContactCheck}
                    />{" "}
                    <p> [필수] 비대면 계약 서비스 이용 약관 동의</p>
                  </div>
                  <div className={classes.personalInfoAgree}>
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={privacyCheck}
                    />{" "}
                    <p> [필수] 개인정보 수집 및 이용동의 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.buttonList}>
              <button onClick={onChangeHandler} className={classes.btn1}>
                정보 수정
              </button>
              {statusNum === 0 && (
                <button onClick={onApproveHandler} className={classes.btn2}>
                  승인
                </button>
              )}
              {statusNum === 1 && (
                <button onClick={onConfirmHandler} className={classes.btn3}>
                  계약 완료
                </button>
              )}
              <button onClick={onQuitHandler} className={classes.btn4}>
                계약 취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
