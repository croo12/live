import classes from "./ContractCardContent.module.scss";
import sample from "../assets/image/sample.jpg";

const ContractCardContent = () => {
  return (
    <>
      <div className={classes.contractContent}>
        <div className={classes.upCardContent} style={{ display: "flex" }}>
          <div
            className={classes.leftImg}
            style={{ width: "200px", flex: "1" }}
          >
            <img
              src={sample}
              style={{ width: "100%", borderRadius: "70%" }}
            ></img>
          </div>
          <div className={classes.middleDesc} style={{ flex: "3" }}>
            <strong>김지수</strong>
            <p>26세 / 여</p>
            <p>010-1111-2222</p>
          </div>
          <div className={classes.contractState} style={{ flex: "1" }}>
            <p>승인 대기 중</p>
          </div>
        </div>
        <hr />
        <div className={classes.downCardContent} style={{ display: "flex" }}>
          <div
            className={classes.contractLeftInfo}
            style={{ flex: "1", textAlign: "left", marginTop: "7%" }}
          >
            <p>매물번호 258-1470</p>
            <strong>대전 유성구 수통골로 55번길 127</strong>
            <p>방 1/ 26㎡ </p>
            <div className={classes.priceInfo}>
              <div className={classes.forSalePrice} style={{ display: "flex" }}>
                <p style={{ flex: "1" }}>매물 가격</p>
                <strong style={{ flex: "1" }}>월세 1000/90 만원</strong>
              </div>
              <div
                className={classes.maintenanceFee}
                style={{ display: "flex" }}
              >
                <p style={{ flex: "1" }}>관리비</p>
                <strong style={{ flex: "1" }}>10 만원</strong>
              </div>
            </div>
          </div>
          <div
            className={classes.contractRightImg}
            style={{ flex: "0.5", width: "10px" }}
          >
            <img src={sample} style={{ width: "100%" }}></img>
          </div>
        </div>
        <button>계약 상세보기</button>
      </div>
    </>
  );
};

export default ContractCardContent;
