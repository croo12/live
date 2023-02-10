import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import FindBrokerOfficeModalOverlay from "./FindBrokerOfficeModalOverlay";
import { Link } from "react-router-dom";
import AuthenticityModalOverlay from "./AuthenticityModalOverlay";
import classes from "./SignUpPageRealtor.module.scss";
import ImageInput from "./common/ImageInput";
import blankImage from "../assets/image/blank_profile.png";
import Card from "../UI/Card";

const SignUpPageRealtor = () => {
  const [realtorEmail, setRealtorEmail] = useState("");
  const [realtorPass, setRealtorPass] = useState("");
  const [realtorPassCheck, setRealtorPassCheck] = useState("");

  const [realtorEmailError, setRealtorEmailError] = useState(false);
  const [realtorPassError, setRealtorPassError] = useState(false);
  const [realtorPassCheckError, setRealtorPassCheckError] = useState(false);

  const [profile, setProfile] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");

  const [authenticity, setAuthenticity] = useState(null);

  const onChangeHanldler = (e) => {
    e.preventDefault();

    console.log(e.target.phone.value);
  };

  const onChangeRealtorEmail = (e) => {
    if (e.target.value.includes("@")) setRealtorEmailError(false);
    else setRealtorEmailError(true);

    setRealtorEmail(e.target.value);
  };

  const onChangeRealtorPass = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$^*+=-])(?=.*[0-9]){9,16}/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setRealtorPassError(false);
    else setRealtorPassError(true);

    if (!realtorPassCheck || e.target.value === realtorPassCheck) {
      setRealtorPassCheckError(false);
    } else setRealtorPassCheckError(true);

    setRealtorPass(e.target.value);
  };

  const onChangeRealtorPassCheck = (e) => {
    if (e.target.value === realtorPass) setRealtorPassCheckError(false);
    else setRealtorPassCheckError(true);

    setRealtorPassCheck(e.target.value);
  };

  const [findBrokerOffice, setFindBrokerOffice] = useState(null);

  const FindBrokerOfficeChangeHandler = () => {
    if (findBrokerOffice === null) {
      setFindBrokerOffice(true);
      return;
    }

    setFindBrokerOffice(null);
  };

  const profileHandler = (data) => {
    setProfile(data);
  };

  useEffect(() => {
    if (!profile) {
      setPreviewProfile(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(profile);

    reader.onload = () => {
      const preview = reader.result;

      setPreviewProfile(preview);
    };
  }, [profile]);

  const AuthenticityChangeHandler = (e) => {
    e.preventDefault();

    if (authenticity === null) {
      setAuthenticity(true);
      return;
    }
    setAuthenticity(null);
  };

  useEffect(() => {
    // 화면나올때 스크롤 맨위로 올려주는 용도로 작성
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <>
        {authenticity && (
          <Modal onConfirm={AuthenticityChangeHandler}>
            <AuthenticityModalOverlay
              onModalStateChange={AuthenticityChangeHandler}
            />
          </Modal>
        )}
      </>
      <>
        {findBrokerOffice && (
          <Modal onConfirm={FindBrokerOfficeChangeHandler}>
            <FindBrokerOfficeModalOverlay
              onModalStateChange={FindBrokerOfficeChangeHandler}
            />
          </Modal>
        )}
      </>
      <form className={classes.signupRealtor}>
        <div className={classes.signupFieldSet}>
          <div className={classes.formInner}>
            <h1>중개사 회원 가입</h1>
            <div className={classes.profile}>
              {previewProfile ? (
                <img src={previewProfile} alt="User Profile" />
              ) : (
                <img src={blankImage} alt="Blank Profile" />
              )}
              <div className={classes.profileBtn}>
                <ImageInput
                  setImage={profileHandler}
                  addButton={
                    previewProfile ? (
                      <div className={classes.modBtn}>변경</div>
                    ) : (
                      <div className={classes.modBtn}>프로필 등록</div>
                    )
                  }
                  delButton={
                    previewProfile ? (
                      <div className={classes.delBtn}>삭제</div>
                    ) : (
                      false
                    )
                  }
                />
              </div>
            </div>
            <div className={classes.findBrokerBox}>
              <Card>
                <div className={classes.boxInner}>
                  <h3>중개사무소 조회</h3>
                  <p>
                    ㆍ 중개사무소를 개설 등록한 대표자(개업공인중개사)가
                    회원가입 가능합니다.
                  </p>
                  <p>
                    ㆍ '조회하기'버튼 클릭 후, 중개사무소를 검색하면 관련 정보가
                    자동입력 됩니다.
                  </p>
                  <button type="button" onClick={FindBrokerOfficeChangeHandler}>
                    조회하기
                  </button>
                </div>
              </Card>
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="businessCorp">사업자 상호 </label>
              <input id="businessCorp" name="businessCorp" type="text" />
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="realtorName">사업자 대표명 </label>
              <input id="realtorName" name="realtorName" type="text" />
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="field">중개등록번호</label>
              <input id="field" name="field" type="text" />
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="businessAddress">주소</label>
              <input id="businessAddress" name="businessAddress" type="text" />
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="realtorPhone">전화번호</label>
              <input id="realtorPhone" name="realtorPhone" type="text" />
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="realtorEmail">이메일</label>
              <input
                id="realtorEmail"
                name="realtorEmail"
                type="email"
                value={realtorEmail}
                onChange={onChangeRealtorEmail}
              />
              {realtorEmailError && (
                <div style={{ color: "red" }}>
                  올바른 이메일 형식이 아닙니다!
                </div>
              )}
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="businessNumber">사업자 등록번호</label>
              <div className={classes.inputButton}>
                <input id="businessNumber" name="businessNumber" type="text" />
                <button type="button" onClick={AuthenticityChangeHandler}>
                  중복확인
                </button>
              </div>
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="realtorPass">비밀번호</label>
              <input
                id="realtorPass"
                name="realtorPass"
                type="text"
                value={realtorPass}
                onChange={onChangeRealtorPass}
              />
              {realtorPassError && (
                <div style={{ color: "red" }}>
                  비밀번호는 문자,숫자,특수문자를 조합하여 9자이상 16자
                  이내이어야 합니다.
                </div>
              )}
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="realtorPassCheck">비밀번호 확인</label>
              <input
                id="realtorPassCheck"
                name="realtorPassCheck"
                type="text"
                value={realtorPassCheck}
                onChange={onChangeRealtorPassCheck}
              />
            </div>
            {realtorPassCheckError && (
              <div style={{ color: "red" }}>비밀번호 입력값이 다릅니다!</div>
            )}
            <div className={classes.signUpBtn}>
              <button type="submit">중개사 가입</button>
            </div>
          </div>
          <div className={classes.userLink}>
            <Link to="/signup/user">일반 회원이신가요?</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpPageRealtor;
