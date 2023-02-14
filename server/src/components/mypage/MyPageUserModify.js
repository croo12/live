import { useRef, useState, useEffect } from "react";

import classes from "./MyPageUserModify.module.scss";
import blankImage from "../../assets/image/blank_profile.png";
import axiosInstance from "../../util/axios";
import { useLoaderData } from "react-router-dom";
import ImageInput from "../common/ImageInput";
import { getUserInfo } from "../../apis/MemberService";
import { getAuthHeader } from "../../util/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user-slice";

const MyPageUserModify = () => {
  const formData = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [profile, setProfile] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");

  const profileImgHandler = (data) => {
    setProfile(data);
  };

  const userDetail = useLoaderData();

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

  const onChangeUser = async (e) => {
    e.preventDefault();

    const changeData = {
      password: formData.current.userPass.value,
      email: formData.current.userEmail.value,
      phone: formData.current.userPhone.value,
      region: "봉명동",
    };

    const frm = new FormData();

    frm.append("file", profile);
    frm.append(
      "Update",
      new Blob([JSON.stringify(changeData)], { type: "application/json" })
    );

    try {
      console.log("file", ":", frm.get("file"));
      console.log("Update", ":", frm.get("Update"));
      console.log(getAuthHeader().Authorization);

      const result = await axiosInstance.post("users/info", frm, {
        headers: {
          Authorization: getAuthHeader().Authorization,
          "Content-Type": "multipart/form-data",
        },
      });

      if (result) {
        alert("회원 정보 수정 !!");
        const data = {
          id: userDetail.id,
          name: userDetail.name,
          isRealtor: false,
          profile: userDetail.imageSrc,
          score: userDetail.score,
        };
        dispatch(userAction.setInfo(data));
        alert(data.score);
        navigate("/");
      }
    } catch (error) {
      console.error("회원 정보 수정 과정에서 에러가 발생하였습니다.");
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onChangeUser} ref={formData}>
        <div>
          <div className={classes.viewPrivacy}>
            <div className={classes.inner}>
              <div className={classes.privacyContent}>
                <div className={classes.privacyInfo}>
                  <div className={classes.privacyImg}>
                    {previewProfile ? (
                      <img src={previewProfile} alt="User Profile" />
                    ) : (
                      <img
                        src={blankImage}
                        alt="Blank Profile"
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
                      <strong>아이디</strong>
                      <span>{userDetail.id}</span>
                    </div>
                    <div>
                      <strong>이름</strong>
                      <span>{userDetail.name}</span>
                    </div>
                    <div>
                      <label>
                        <strong>비밀번호</strong>
                      </label>
                      <input
                        type="password"
                        id="userPass"
                        name="userPass"
                      ></input>
                    </div>
                    <div>
                      <label>
                        <strong>이메일</strong>
                      </label>
                      <input
                        type="text"
                        id="userEmail"
                        name="userEmail"
                      ></input>
                    </div>
                    <div>
                      <label>
                        <strong>휴대폰 번호</strong>
                      </label>
                      <input
                        type="text"
                        id="userPhone"
                        name="userPhone"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <strong>지역</strong>
                    <span>{userDetail.region}</span>
                  </div>
                  <div>
                    <strong>성별</strong>
                    <span>{userDetail.gender}</span>
                  </div>
                  <div>
                    <strong>평가점수</strong>
                    <span>{userDetail.score}</span>
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

export const userInfoLoader = async () => {
  const response = await getUserInfo(getAuthHeader());
  return response;
};

export default MyPageUserModify;
