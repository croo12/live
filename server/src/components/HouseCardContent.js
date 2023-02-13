import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import HouseDetailCom from "./HouseDetailCom";
import classes from "./HouseCardContent.module.scss";

import sample from "../assets/image/sample.jpg";

const HouseCardContent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);

  const clickEventHandler = () => {
    console.log(location);

    if (location.pathname !== "/house") {
      setModal(!isModal);
    } else {
      navigate("/house/detail/대충 번호");
    }
  };

  return (
    <>
      <div className={classes.houseCardContent}>
        <div className={classes.upperCard}>
          <div className={classes.leftBox}>
            <h3> 월세 500/ 60 </h3>
            <p> 크기 35 /관리비 n만 </p>
            <p> 대전 서구 갈마로... </p>
          </div>
          <div className={classes.rightBox}>
            <img src={sample} alt={"토토로"}></img>
          </div>
        </div>
        <div className={classes.downCard}>
          <button onClick={clickEventHandler}>상세 정보 보기 </button>
        </div>
      </div>
      {isModal && (
        <Modal onConfirm={clickEventHandler}>
          <HouseDetailCom houseId={123} />
        </Modal>
      )}
    </>
  );
};

export default HouseCardContent;

//통화 페이지용
export const ConsultingHouseCardContent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);

  const clickEventHandler = () => {
    console.log(location);

    if (props.clickHandler) {
      props.clickHandler(props.idx);
      return;
    }

    if (location.pathname !== "/house") {
      setModal(!isModal);
    } else {
      navigate("/house/detail/대충 번호");
    }
  };

  return (
    <>
      <div
        className={`${classes.houseCardContent} ${classes.consulting_inner}`}
      >
        <div className={classes.upperCard}>
          <div className={classes.leftBox}>
            <h3> 월세 500/ 60 </h3>
            <p> 크기 35 /관리비 n만 </p>
            <p> 대전 서구 갈마로... </p>
          </div>
          <div className={classes.rightBox}>
            <img src={sample} alt={"토토로"} />
          </div>
        </div>
        <div className={classes.downCard}>
          <button onClick={clickEventHandler}>상세 정보 보기 </button>
        </div>
        {props.detail === props.idx && (
          <div className={classes.badge}>
            <HouseDetailCom isConsulting={true} />
          </div>
        )}
      </div>
      {isModal && (
        <Modal onConfirm={clickEventHandler}>
          <HouseDetailCom houseId={123} />
        </Modal>
      )}
    </>
  );
};

//예약 매물 리스트용
export const ReservationHouseCardContent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);

  const clickEventHandler = () => {
    console.log(location);

    if (props.clickHandler) {
      props.clickHandler(props.idx);
      return;
    }

    if (location.pathname !== "/house") {
      setModal(!isModal);
    } else {
      navigate("/house/detail/대충 번호");
    }
  };

  return (
    <div
      onClick={() => {
        props.setHighlightEventHandler(props.idx);
      }}
      className={`${classes.reservationItem}``${
        props.highlightNumber === props.idx ? classes.active : ""
      }`}
    >
      <div className={classes.image}>
        <img src={sample} alt="선택한 매물 목록" />
      </div>
      <div>
        <h3>월세 1,000 / 49</h3>
        <p>방1 29m. 관리비 3</p>
        <p>대전 서구 도산로 253</p>
      </div>
      <button onClick={clickEventHandler}>상세 정보 보기</button>
      {isModal && (
        <Modal onConfirm={clickEventHandler}>
          <HouseDetailCom houseId={123} />
        </Modal>
      )}
    </div>
  );
};

//중개사 상세에 나오는 매물카드
export const RealtorHousesCardContent = ({
  itemNo,
  imageSrc,
  deposit,
  monthlyRent,
  address,
}) => {
  const [isModal, toggleModal] = useState(false);

  const onConfirm = () => {
    toggleModal(!isModal);
  };

  return (
    <div className={classes.houseItem}>
      <div className={classes.houseImg}>
        <img src={imageSrc} alt={address} />
      </div>
      <div className={classes.houseInfo}>
        <h3>
          월세 {deposit}/ {monthlyRent}
        </h3>
        <p>{`area`}</p>
        <p>{address}</p>
        <button onClick={onConfirm}>매물 상세보기 </button>
      </div>
      {isModal && (
        <Modal onConfirm={onConfirm}>
          <HouseDetailCom houseId={itemNo} />
        </Modal>
      )}
    </div>
  );
};

// 계약 매물 정보

export const ContractHouseCardContent = (props) => {
  const forSale = props.ContractInfo;
  const formData = useRef();

  const insertInfo = (e) => {
    e.preventDefault();
    const info = {
      userTermOfContract: formData.current.userTermOfContract.value,
      userMoveOnDate: formData.current.userMoveOnDate.value,
    };
    props.fx2(info);
  };

  return (
    <form onSubmit={insertInfo} ref={formData}>
      <div className={classes.contractForSale}>
        <div className={classes.inner}>
          <h2>매물 정보</h2>
          <br />
          <div className={classes.contractContent}>
            <div className={classes.leftDesc}>
              <p>매물번호 {forSale.houseNumber}</p>

              <h4>{forSale.houseAddress}</h4>
              <h4>{forSale.houseName}</h4>
              <p>{forSale.houseArea}</p>
              <p> {forSale.houseSupplyArea}㎡(전용 면적)</p>
              <div className={classes.infoBoxList}>
                <div className={classes.forSale}>
                  <strong>매물가격</strong>{" "}
                  <input
                    type="text"
                    value={
                      "월세 " +
                      forSale.houseDeposit +
                      "/" +
                      forSale.houseMonthlyFee
                    }
                    readOnly
                  />
                </div>
                <div className={classes.extraFee}>
                  <strong>추가 비용</strong>{" "}
                  <input
                    value={"관리비 " + forSale.houseExtraFee}
                    readOnly
                  ></input>
                </div>
                <div className={classes.term}>
                  <label htmlFor="userTermOfContract">
                    <strong>계약 기간</strong>
                  </label>{" "}
                  <input
                    defaultValue={"12개월"}
                    id="userTermOfContract"
                    name="userTermOfContract"
                  ></input>
                </div>
                <div className={classes.moveDate}>
                  <label htmlFor="userMoveOnDate">
                    <strong>입주 희망일</strong>
                  </label>{" "}
                  <input
                    defaultValue={"2023-01-13"}
                    id="userMoveOnDate"
                    name="userMoveOnDate"
                  ></input>
                </div>
              </div>
            </div>
            <div className={classes.rightImg}>
              <img src={forSale.houseImage}></img>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <button>입력</button>
    </form>
  );
};
