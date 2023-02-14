import { useLoaderData, useNavigate } from "react-router-dom";
import classes from "./MyPageUserDetail.module.scss";
import MyPageUser from "./MyPageUser";
import { getUserInfo } from "../../apis/MemberService";
import axiosInstance, { getAuthHeader } from "../../util/axios";
import { useAuth } from "../common/AuthProtector";

const MyPageUserDetail = () => {
  const navigate = useNavigate();
  const { doLogout } = useAuth();
  const onQuitHandler = async () => {
    alert("정말로 탈퇴하시겠습니까?");
    try {
      const result = await axiosInstance.delete("users", {
        headers: getAuthHeader(),
      });
      if (result) {
        alert("탈퇴되었습니다!");
        doLogout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userDetail = useLoaderData();
  console.log("유저디테일:",userDetail);

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
                  <img alt="이미지" src={userDetail.imageSrc}></img>
                </div>
                <div className={classes.privacyDetail}>
                  <div>
                    <strong>이름</strong>
                    <span>{userDetail.name}</span>
                  </div>
                  <div>
                    <strong>이메일</strong>
                    <span>{userDetail.email}</span>
                  </div>
                  <div>
                    <strong>휴대폰 번호</strong>
                    <span>{userDetail.phone}</span>
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

export const userDetailInfoLoader = async () => {
  const response = await getUserInfo();
  return response;

};

export default MyPageUserDetail;
