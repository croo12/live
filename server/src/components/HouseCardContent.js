import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import HouseDetailCom from "./HouseDetailCom";

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
      <p> 사진, 보증금 / 월세, 면적 </p>
      <p>층수 주소 설명... </p>
      <button onClick={clickEventHandler}>상세로</button>
      {isModal && (
        <Modal onConfirm={clickEventHandler}>
          <HouseDetailCom houseId={123} />
        </Modal>
      )}
    </>
  );
};

export default HouseCardContent;
