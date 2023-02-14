import classes from "./HouseCardContent2.module.scss";
import { useNavigate } from "react-router-dom";

const HouseCardContent2 = ({
  address,
  addressDetail,
  buildingName,
  deposit,
  description,
  imageSrc,
  maintenanceFee,
  rent,
  consultingNo,
  exclusivePrivateArea,
  itemNo
}) => {
  const navigation = useNavigate();
  const onContractHandler = () => {
    navigation(`/contract/user-contract/${itemNo}`);
  };
  return (
    <>
      <div className={classes.HouseCardContent2}>
        <div className={classes.houseContent}>
          <div className={classes.leftContent}>
            <img src={imageSrc}></img>
            <button onClick={onContractHandler}>계약하기</button>
          </div>
          <div className={classes.rightContent}>
            <p>원룸</p>
            <p>{buildingName}</p>
            <h2>월세 {deposit}/{rent}</h2>
            <p>
              방 {exclusivePrivateArea}㎡ . 관리비 {
                maintenanceFee === 0 ? ("없음") : (maintenanceFee)
              }
              <br /> {address} 
              <br /> {addressDetail}
              <br /> {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseCardContent2;
