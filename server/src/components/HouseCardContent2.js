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
  itemNo,
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
            <div className={classes.imgContainer}>
              <img src={imageSrc}></img>
            </div>
          </div>
          <div className={classes.rightContent}>
            <h3>
              월세 {deposit}/{rent}
            </h3>
            <p>{buildingName}</p>
            <p>
              방 {exclusivePrivateArea}㎡ . 관리비 {maintenanceFee === 0 ? "없음" : maintenanceFee}
            </p>
            <p>
              {address} {addressDetail}
            </p>
          </div>
        </div>
      </div>
      <button className={classes.consultBtn} onClick={onContractHandler}>계약하기</button>
    </>
  );
};

export default HouseCardContent2;
