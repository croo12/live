import { useEffect } from "react";
import axiosInstance, { getAuthHeader } from "../../util/axios";
import classes from "./MyPageUserReview.module.scss";
import ListBox from "../../UI/ListBox";
import ReviewCardContent from "../ReviewCardContent";

const MyPageUserReview = () => {
  // useEffect(() => {
  //   try {
  //     const result = axiosInstance.get("reviews", {
  //       headers: getAuthHeader(),
  //     });
  //     if (result) console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  return (
    <>
      일반회원 리뷰 조회
      {/* <div className={classes.review}>
        <div className={classes.viewReview}>
          <div className={classes.inner}>
            <h3>리뷰조회</h3>
            <div className={classes.reviewContent}>
              <ListBox
                style={{ "justify-content": "space-between" }}
                // dataArray={reviewList}
                direction={true}
              >
                <ReviewCardContent />
              </ListBox>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MyPageUserReview;
