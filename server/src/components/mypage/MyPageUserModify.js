import { useRef, useState, useEffect } from "react";

import classes from "./MyPageUserModify.module.scss";
import MyPageUser from "./MyPageUser";
import blankImage from "../../assets/image/blank_profile.png";
import axiosInstance from "../../util/axios";
import ImageInput from "../common/ImageInput";

const MyPageUserModify = () => {
  const formData = useRef();

  const [profile, setProfile] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");

  const profileImgHandler = (data) => {
    setProfile(data);
  };

  useEffect(() => {
    if (!profile) {
      setPreviewProfile(null);
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(profile);

      reader.onload = () => {
        const preview = reader.result;

        setPreviewProfile(preview);
      };
    }
  }, [profile]);

  const onChangeUser = async (e) => {
    e.preventDefault();

    const changeData = {
      password: formData.current.userPass.value,
      email: formData.current.userEmail.value,
      phone: formData.current.userPhone.value,
      region: "봉명동",
    };

    const frm = new FormData();

    frm.append(frm, "profile");
    frm.append(
      "ModifyUser",
      new Blob([JSON.stringify(changeData)], { type: "application/json" })
    );

    try {
      const result = await axiosInstance.post("users/info", frm);

      if (result) {
        alert("회원 정보 수정");
      }
    } catch (error) {
      console.error("회원 정보 수정 과정에서 에러가 발생하였습니다.");
    }
  };

  return (
    <>
      {/* <MyPageUser /> */}
      <form onSubmit={onChangeUser} ref={formData}>
        <div>
          <div className={classes.viewPrivacy}>
            <div className={classes.inner}>
              <div className={classes.privacyContent}>
                <div className={classes.privacyInfo}>
                  <div className={classes.privacyImg}>
                    {previewProfile ? (
                      <img src={previewProfile} />
                    ) : (
                      <img
                        src={blankImage}
                        style={{ width: "50px", borderRadius: "70%" }}
                      />
                    )}
                    <div>
                      <ImageInput
                        setImage={profileImgHandler}
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
                      ></ImageInput>
                    </div>
                  </div>
                  <div className={classes.privacyDetail}>
                    <div>
                      <label>아이디</label>
                      <span>parksj0230</span>
                    </div>
                    <div>
                      <strong>이름</strong>
                      <span>박세준</span>
                    </div>
                    <div>
                      <label>비밀번호</label>
                      <input
                        type="password"
                        id="userPass"
                        name="userPass"
                      ></input>
                    </div>
                    <div>
                      <label>이메일</label>
                      <input
                        type="text"
                        id="userEmail"
                        name="userEmail"
                      ></input>
                    </div>
                    <div>
                      <strong>휴대폰 번호</strong>
                      <input
                        type="text"
                        id="userPhone"
                        name="userPhone"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <strong>지역</strong>
                    <span>시/군/구</span>
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
                <br />
                <div className={classes.buttonItem}>
                  <button onClick={onChangeUser}>정보수정</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MyPageUserModify;
