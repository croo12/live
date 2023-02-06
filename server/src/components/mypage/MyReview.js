import { useState } from "react";
import classes from "./MyReview.module.scss";
import ListBox from "../../UI/ListBox";
import { DUMMY2 } from "../ReviewCardContent";
import ReviewCardContent from "../ReviewCardContent";

const MyReview = () => {
  const [reviewList, setReviewList] = useState(DUMMY2);
  return (
    <div className={classes.review}>
      <div className={classes.viewReview}>
        <div className={classes.inner}>
          <h3>리뷰조회</h3>
          <div className={classes.reviewContent}>
            <ListBox
              style={{ "justify-content": "space-between" }}
              dataArray={reviewList}
              direction={true}
            >
              <ReviewCardContent />
            </ListBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
