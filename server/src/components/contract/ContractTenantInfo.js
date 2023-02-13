import { useState, useRef } from "react";
import classes from "./ContractTenantInfo.module.scss";
import Modal from "../../UI/Modal";
import SearchAddress from "../common/SearchAddress";

const ContractTenantInfo = (props) => {
  const [SearchAddressModal, setSearchAddressModal] = useState(false);
  const UserInfo = {
    userName: props.userInfoList.name,
    userPhone: props.userInfoList.phone,
    userGender: props.userInfoList.gender,
  };

  const formData = useRef();

  const searchAddressModalHandler = () => {
    if (SearchAddressModal === false) {
      setSearchAddressModal(true);
      return;
    }
    setSearchAddressModal(false);
  };

  const setAddressInfoHandler = (addressInfo) => {
    formData.current.address.value = addressInfo.address;
    formData.current.addressDetail.value = addressInfo.addressDetail;
  };

  const searchAddressHandler = () => {
    formData.current.address.value = null;
    formData.current.addressDetail.value = null;

    searchAddressModalHandler();
  };

  const insertTenantInfo = (e) => {
    e.preventDefault();

    const tenantInfo = {
      address: formData.current.address.value,
      addressDetail: formData.current.addressDetail.value,
      age: formData.current.age.value,
    };

    props.fx(tenantInfo);
    console.log(tenantInfo);
  };

  return (
    <>
      {SearchAddressModal && (
        <Modal onConfirm={searchAddressModalHandler}>
          <SearchAddress
            onChange={setAddressInfoHandler}
            onClose={searchAddressModalHandler}
          />
        </Modal>
      )}
      <form ref={formData} onSubmit={insertTenantInfo}>
        <div className={classes.tenantInfo}>
          <div className={classes.inner}>
            <div className={classes.tenantInfoContent}>
              <h2>입주자 정보</h2>
              <br />
              <div className={classes.infoBoxList}>
                <div className={classes.contractor}>
                  <strong>계약자명</strong>{" "}
                  <input defaultValue={UserInfo.userName} />
                </div>
                <div className={classes.contractorPhone}>
                  <strong>전화번호</strong>{" "}
                  <input defaultValue={UserInfo.userPhone}></input>
                </div>
                <div className={classes.contractorGender}>
                  <strong>성별</strong>{" "}
                  <div className={classes.genderBox}>
                    <input defaultValue={UserInfo.userGender} />
                  </div>
                </div>
                <div className={classes.contractorAge}>
                  <label htmlFor="age">나이</label>{" "}
                  <input type="text" id="age" name="age"></input>
                </div>
                <div className={classes.contractorAddress}>
                  <label htmlFor="address">실거주주소</label>{" "}
                  <div className={classes.searchAddressBox}>
                    <div className={classes.searchAddress}>
                      <input type="text" id="address" name="address"></input>
                    </div>
                    <button type="button" onClick={searchAddressHandler}>
                      주소 검색
                    </button>
                    <div className={classes.detailAdress}>
                      <label htmlFor="detailAddress"></label>
                      <input
                        placeholder="상세주소를 입력해주세요"
                        type="text"
                        id="addressDetail"
                        name="addressDetail"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <button type="submit">입력</button>
      </form>
    </>
  );
};

export default ContractTenantInfo;
