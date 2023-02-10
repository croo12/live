import { useNavigate } from "react-router-dom";
import classes from "./MyPageUserDetail.module.scss";
import MyPageUser from "./MyPageUser";

const MyPageUserDetail = () => {
  const navigate = useNavigate();
  const onQuitHandler = () => {
    alert("정말로 탈퇴하시겠습니까?");
  };

  const onClickHandler = () => {
    navigate("/mypage/user-modify-info");
  };
  return (
    <>
      {/* <MyPageUser /> */}
      <div>
        <div className={classes.viewPrivacy}>
          <div className={classes.inner}>
            <div className={classes.privacyContent}>
              <div className={classes.privacyInfo}>
                <div className={classes.privacyImg}>
                  <img alt="이미지"></img>
                </div>
                <div className={classes.privacyDetail}>
                  <div>
                    <strong>아이디</strong>
                    <span>parksj0230</span>
                  </div>
                  <div>
                    <strong>이름</strong>
                    <span>박세준</span>
                  </div>
                  <div>
                    <strong>이메일</strong>
                    <span>qkr0000@gmail.com</span>
                  </div>
                  <div>
                    <strong>휴대폰 번호</strong>
                    <span>010-1111-2222</span>
                  </div>
                  <div>
                    <strong>지역</strong>
                    <span>장대동</span>
                  </div>
                  <div>
                    <strong>성별</strong>
                    <span>남</span>
                  </div>
                  <div>
                    <strong>평가점수</strong>
                    <span>3</span>
                  </div>
                </div>
              </div>
              <br />
              <div className={classes.buttonItem}>
                <button onClick={onQuitHandler}>회원탈퇴</button>
                <button onClick={onClickHandler}>정보수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageUserDetail;
