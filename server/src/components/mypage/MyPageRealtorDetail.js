import { useLoaderData,useNavigate } from "react-router-dom";
import classes from "./MyPageRealtorDetail.module.scss";
import { getRealtorInfo } from "../../apis/MemberService";
import axiosInstance, { getAuthHeader } from "../../util/axios";
import { useAuth } from "../common/AuthProtector";

const MyPageRealtorDetail = () => {
  const navigate = useNavigate();
  const { doLogout } = useAuth();
  const onQuitHandler = async () => {
    alert("정말로 탈퇴하시겠습니까?");
    try {
      const result = await axiosInstance.delete("realtors", {
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

  const realtorDetail = useLoaderData();
  console.log("중개사디테일:",realtorDetail);

  const onChangeHandler = () => {
    navigate("/mypage/realtor-modify-info");
  };
  return (
    <>
      {/* <MyPageRealtor /> */}
      <div>
        <div className={classes.viewPrivacy}>
          <div className={classes.inner}>
            <div className={classes.privacyContent}>
              <div className={classes.privacyInfo}>
                <div className={classes.privacyImg}>
                  <img alt="이미지" src={realtorDetail.imageSrc}></img>
                </div>
                <div className={classes.privacyDetail}>
                  <div>
                    <strong>이름</strong>
                    <span>{realtorDetail.name}</span>
                  </div>
                  <div>
                    <strong>사무소 주소</strong>
                    <span>{realtorDetail.business_address}</span>
                  </div>
                  <div>
                    <strong>이메일</strong>
                    <span>{realtorDetail.email}</span>
                  </div>
                  <div>
                    <strong>휴대폰 번호</strong>
                    <span>{realtorDetail.phone}</span>
                  </div>
                  <div>
                    <strong>소개글</strong>
                    <span>{realtorDetail.description}</span>
                  </div>
                  <div>
                    <strong>평가점수</strong>
                    <span>{realtorDetail.ratingScore}</span>
                  </div>
                </div>
              </div>
              <br />
              <div className={classes.buttonItem}>
                <button onClick={onQuitHandler}>회원탈퇴</button>
                <button onClick={onChangeHandler}>정보수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const realtorDetailInfoLoader = async () => {
  const response = await getRealtorInfo();
  return response;
};

export default MyPageRealtorDetail;
