import classes from "./MyInfoDetail.module.scss";
import { useNavigate, useState } from "react-router-dom";
import MyInfoModifyUser from "./MyInfoModifyUser";

const MyInfoDetail = () => {
  const navigate = useNavigate();

  const [infoState, setInfoState] = useState(null);

  const onQuitHandler = () => {
    alert("정말로 탈퇴하시겠습니까?");
  };
  const onModifyHandler = (props) => {
    // 일반 회원인지, 중개사 회원인지에 따라 구분
    navigate("/mypage/info-modify-user");

    if (infoState === null) {
      setInfoState(true);
      return;
    }

    setInfoState(null);
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
                  <strong>주소</strong>
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
                <button onClick={onQuitHandler}>회원탈퇴</button>
                <button onClick={onModifyHandler}>정보수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInfoDetail;
