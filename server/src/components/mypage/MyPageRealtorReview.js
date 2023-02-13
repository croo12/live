import classes from "./MyPageRealtorReview.module.scss";
import ListBox from "../../UI/ListBox";
import ReviewCardContent from "../ReviewCardContent";

const MyPageRealtorReview = () => {
  return (
    <>
      중개사 리뷰
      {/* <>
        <div className={classes.review}>
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
        </div>
      </> */}
    </>
  );
};

export default MyPageRealtorReview;
