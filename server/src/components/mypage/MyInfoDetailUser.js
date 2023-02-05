import Button from "../../UI/Button";
import classes from "./MyInfoDetailUser.module.scss";

const MyInfoDetailUser = () => {
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
                  <strong>지역</strong>
                  <span>대전</span>
                </div>
                <div>
                  <strong>이메일</strong>
                  <span>qkr0000@gmail.com</span>
                </div>
                <div>
                  <strong>휴대폰 번호</strong>
                  <span>010-1111-2222</span>
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

export default MyInfoDetailUser;
