import classes from "./MyPageRealtorModify.module.scss";
import { useRef, useState, useEffect } from "react";
import blankImage from "../../assets/image/blank_profile.png";
import axiosInstance from "../../util/axios";
import { useLoaderData } from "react-router-dom";
import ImageInput from "../common/ImageInput";
import { getRealtorInfo } from "../../apis/MemberService";
import { getAuthHeader } from "../../util/axios";
import { useNavigate } from "react-router-dom";

const MyPageRealtorModify = () => {
  const formData = useRef();
  const navigate = useNavigate();

  const [profile, setProfile] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");

  const profileImgHandler = (data) => {
    setProfile(data);
  };

  const realtorDetail = useLoaderData();

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

  const onChangeRealtor = async (e) => {
    e.preventDefault();

    const changeData = {
      password: formData.current.realtorPass.value,
      email: formData.current.realtorEmail.value,
      phone: formData.current.realtorPhone.value,
      description: formData.current.realtorDescription.value,
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

      const result = await axiosInstance.post("realtors/info", frm, {
        headers: {
          Authorization: getAuthHeader().Authorization,
          "Content-Type": "multipart/form-data",
        },
      });

      if (result) {
        navigate("/mypage/realtor-detail-info");
      }
    } catch (error) {
      console.error("중개사 정보 수정 과정에서 에러가 발생하였습니다.");
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onChangeRealtor} ref={formData}>
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
                      <span>{realtorDetail.id}</span>
                    </div>
                    <div>
                      <strong>이름</strong>
                      <span>{realtorDetail.name}</span>
                    </div>
                    <div>
                      <strong>사무소 주소</strong>
                      <span>{realtorDetail.business_address}</span>
                    </div>
                    <div>
                      <label>
                        <strong>비밀번호</strong>
                      </label>
                      <input
                        type="password"
                        id="realtorPass"
                        name="realtorPass"
                      ></input>
                    </div>
                    <div>
                      <label>
                        <strong>이메일</strong>
                      </label>
                      <input
                        type="text"
                        id="realtorEmail"
                        name="realtorEmail"
                      ></input>
                    </div>
                    <div>
                      <label>
                        <strong>휴대폰 번호</strong>
                      </label>
                      <input
                        type="text"
                        id="realtorPhone"
                        name="realtorPhone"
                      ></input>
                    </div>
                  </div>
                  <div>
                      <label>
                        <strong>소개글</strong>
                      </label>
                      <input
                        type="text"
                        id="realtorDescription"
                        name="realtorDescription"
                      ></input>
                  </div>
                  <div>
                    <strong>평가점수</strong>
                    <span>{realtorDetail.ratingScore}</span>
                  </div>
                </div>
                <br />
                <div className={classes.buttonItem}>
                  <button onClick={onChangeRealtor}>정보수정</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export const realtorInfoLoader = async () => {
  const response = await getRealtorInfo();
  return response;
};


export default MyPageRealtorModify;
