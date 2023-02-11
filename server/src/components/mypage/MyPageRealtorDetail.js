import classes from "./MyPageRealtorDetail.module.scss";

const MyPageRealtorDetail = () => {
  const onQuitHandler = () => {
    alert("정말 탈퇴하시겠습니까?");
  };

  const onClickHandler = () => {};
  return (
    <>
      {" "}
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
                    <span>dfdfdfdf</span>
                  </div>
                  <div>
                    <strong>이름</strong>
                    <span>ddfdfdfdf</span>
                  </div>
                  <div>
                    <strong>이메일</strong>
                    <span>dfdfdfdf</span>
                  </div>
                  <div>
                    <strong>휴대폰 번호</strong>
                    <span>dfdfdfdfdf</span>
                  </div>
                  <div>
                    <strong>지역</strong>
                    <span>dfdfdfdf</span>
                  </div>
                  <div>
                    <strong>성별</strong>
                    <span>dfdfdfdfdf</span>
                  </div>
                  <div>
                    <strong>평가점수</strong>
                    <span>dfdfd</span>
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

export default MyPageRealtorDetail;
