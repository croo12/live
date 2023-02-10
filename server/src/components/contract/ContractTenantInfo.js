import classes from "./ContractTenantInfo.module.scss";

const ContractTenantInfo = () => {
  return (
    <div className={classes.tenantInfo}>
      <div className={classes.inner}>
        <div className={classes.tenantInfoContent}>
          <h2>입주자 정보</h2>
          <br />
          <div className={classes.infoBoxList}>
            <div className={classes.contractor}>
              <strong>계약자명</strong> <input></input>
            </div>
            <div className={classes.contractorPhone}>
              <strong>전화번호</strong> <input></input>
            </div>
            <div className={classes.contractorGender}>
              <strong>성별</strong>{" "}
              <div className={classes.genderBox}>
                <input type="radio"></input>
                <label>남자</label>
                <input type="radio"></input>
                <label>여자</label>
              </div>
            </div>
            <div className={classes.contractorAge}>
              <strong>나이</strong> <input></input>
            </div>
            <div className={classes.contractorAddress}>
              <strong>실거주주소</strong>{" "}
              <div className={classes.searchAddressBox}>
                <div className={classes.searchAddress}>
                  <input></input>
                  <button>주소검색</button>
                </div>
                <div className={classes.detailAdress}>
                  <input placeholder="상세주소를 입력해주세요"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ContractTenantInfo;
