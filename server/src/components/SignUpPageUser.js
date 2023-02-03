import React, { useState, useRef, useEffect } from "react";
import classes from "./SignUpPageUser.module.scss";
import ImageInput from "./common/ImageInput";

import blankImage from "../assets/image/blank_profile.png";

const SignUpPageUser = () => {
  const onChange = (e) => {
    console.log(e.target.value.user_id);
  };

  const [userId, setUserId] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassCheck, setUserPassCheck] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // 에러 메세지
  const [userIdError, setUserIdError] = useState(false);
  const [userPassError, setUserPassError] = useState(false);
  const [userPassCheckError, setUserPassCheckError] = useState(false);
  const [userEmailError, setUserEmailError] = useState(false);

  const onChangeUserId = (e) => {
    if (e.target.value.length > 16 || e.target.value.length < 3)
      setUserIdError(true);
    else setUserIdError(false);

    setUserId(e.target.value);
  };

  const onChangeUserPass = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$^*+=-])(?=.*[0-9]){9,16}/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setUserPassError(false);
    else setUserPassError(true);

    if (!userPassCheck || e.target.value === userPassCheck)
      setUserPassCheckError(false);
    else setUserPassCheckError(true);

    setUserPass(e.target.value);
  };

  const onChangeUserPassCheck = (e) => {
    if (userPass === e.target.value) setUserPassCheckError(false);
    else setUserPassCheckError(true);

    setUserPassCheck(e.target.value);
  };

  const onChangeEmail = (e) => {
    if (e.target.value.includes("@")) setUserEmailError(false);
    else setUserEmailError(true);

    setUserEmail(e.target.value);
  };

  const [profile, setProfile] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");

  const profileHandler = (data) => {
    setProfile(data);
  };

  useEffect(() => {
    if (!profile) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(profile);

    reader.onload = () => {
      const preview = reader.result;

      setPreviewProfile(preview);
    };
  }, [profile]);

  const deleteProfile = () => {
    setProfile("");
  };

  return (
    <form className={classes.signupUser}>
      <div className={classes.signupFieldSet}>
        <h1>일반 회원 가입</h1>
        <div className={classes.formInner}>
          <div className={classes.profile}>
            <ImageInput
              setImage={profileHandler}
              setText={
                previewProfile ? (
                  <div>
                    <img src={previewProfile} alt="User Profile" />
                    <p>변경</p>
                  </div>
                ) : (
                  <div>
                    <img src={blankImage} alt="Blank Profile" />
                    <p>프로필 등록</p>
                  </div>
                )
              }
            />
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="userId">아이디 </label>
            <div className={classes.inputButton}>
              <input
                id="userId"
                name="userId"
                type="text"
                value={userId}
                onChange={onChangeUserId}
              />
              <button>중복확인</button>
            </div>
            {userIdError && (
              <div className={classes.errorText}>
                최소 3자부터 최대 16자까지 입력가능합니다.
              </div>
            )}
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="userPass">비밀번호 </label>
            <input
              id="userPass"
              name="userPass"
              type="password"
              value={userPass}
              onChange={onChangeUserPass}
            />
            {userPassError && (
              <div className={classes.errorText}>
                비밀번호는 문자,숫자,특수문자를 조합하여 9자이상 16자 이내이어야
                합니다.
              </div>
            )}
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="userPassCheck">비밀번호 확인 </label>
            <input
              id="userPassCheck"
              name="userPassCheck"
              type="password"
              value={userPassCheck}
              onChange={onChangeUserPassCheck}
            />
            {userPassCheckError && (
              <div className={classes.errorText}>
                비밀번호 입력값이 다릅니다!
              </div>
            )}
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="userName">이름 </label>
            <input id="userName" name="userName" type="text" />
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="userEmail">이메일 </label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              value={userEmail}
              onChange={onChangeEmail}
            />
            {userEmailError && (
              <div className={classes.errorText}>
                올바른 이메일 형식이 아닙니다!
              </div>
            )}
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="userPhone">전화번호 </label>
            <input id="userPhone" name="userPhone" type="text" />
          </div>
        </div>
        <button>회원가입</button>
      </div>
    </form>
  );
};

export default SignUpPageUser;
