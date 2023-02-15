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
        console.log(result);
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
                <input defaultValue={downPayment + "원"} readOnly />
              </div>
              <div className={classes.balance}>
                <p>잔금</p>
                <input defaultValue={balance + "원"} readOnly />
              </div>
              <div className={classes.brokerageFee}>
                <p>중개보수</p>
                <input defaultValue={commission + "원"} readOnly />
              </div>
            </div>
            <hr className={classes.costLine} />
            <div className={classes.cost}>
              <div className={classes.totalEstimatedCost}>
                <h5>총 예상 비용</h5>
                <strong>{downPayment + balance + commission}원</strong>
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
    balance: props.contractInfoList.balance,
    commission: props.contractInfoList.commission,
    downPayment: props.contractInfoList.downPayment,
  };
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
                  defaultValue={expectedCost.downPayment + "원"}
                  readOnly
                />
              </div>
              <div className={classes.balance}>
                <p>잔금</p>
                <input defaultValue={expectedCost.balance + "원"} readOnly />
              </div>
              <div className={classes.brokerageFee}>
                <p>중개보수</p>
                <input defaultValue={expectedCost.commission + "원"} readOnly />
              </div>
            </div>
            <hr className={classes.costLine} />
            <div className={classes.cost}>
              <div className={classes.totalEstimatedCost}>
                <h5>총 예상 비용</h5>
                <strong>
                  {expectedCost.downPayment +
                    expectedCost.balance +
                    expectedCost.commission}
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
