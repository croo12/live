import classes from "./MyInfoModifyUser.module.scss";

const MyInfoModifyUser = () => {
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
                    <strong>주소 </strong>
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>
                    <strong>이메일</strong>
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>
                    <strong>휴대폰 번호 </strong>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <br />
              <div className={classes.buttonItem}>
                <button>회원탈퇴</button>
                <button>정보수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInfoModifyUser;
