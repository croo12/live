import { useState } from "react";
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

export const ConsultingHouseCardContent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);

  const clickEventHandler = () => {
    console.log(location);

    if (props.clickHandler) {
      props.clickHandler();
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
