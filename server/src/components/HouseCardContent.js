import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import HouseDetailCom from "./HouseDetailCom";
import classes from "./HouseCardContent.module.scss";

import sample from "../assets/image/sample.jpg";
import ResponsiveText from "./common/ResponsiveText";

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

//통화 페이지용 컨텐트
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
            <img src={sample} alt={"토토로"}></img>
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

//예약 페이지용 하우스 카드 컨텐트
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
    <div className={classes.reservationItem}>
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

export const RealtorHousesCardContent = (props) => {
  const house = props;

  return (
    <div className={classes.houseItem}>
      <div className={classes.houseImg}>
        <img src={house.image} alt={house.address} />
      </div>
      <div className={classes.houseInfo}>
        <h3>{house.price}</h3>
        <p>{house.area}</p>
        <p>{house.address}</p>
        <button>매물 상세보기 </button>
      </div>
    </div>
  );
};