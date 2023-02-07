import classes from "./MyInfoModify.module.scss";

const MyInfoModify = (props) => {
  const onInfoStateChangeHanler = () => {
    props.onInfoChangeHandler(null);
  };
  return (
    <>
      <div>
        <div className={classes.viewPrivacy}>
          <div className={classes.inner}>
            <div className={classes.privacyContent}>
              <div className={classes.privacyInfo}>
                <div>
                  <strong>아이디</strong>
                  <span>parksj0230</span>
                </div>
                <div>
                  <strong>이름</strong>
                  <span>박세준</span>
                </div>
                <div>
                  <label>
                    <strong>비밀번호 </strong>
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>
                    <strong>이메일</strong>
                  </label>
                  <input type="text" />
                </div>
                <div style={{ flex: "1.6" }}>
                  <label>
                    <strong>휴대폰 번호 </strong>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <br />
              <div className={classes.buttonItem}>
                <button onClick={onInfoStateChangeHanler}>회원정보</button>
                <button>정보수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInfoModify;
