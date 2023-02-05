import { useState } from "react";
import classes from "./MyReview.module.scss";
import ListBox from "../../UI/ListBox";
import { DUMMY2 } from "../ReviewCardContent";
import ReviewCardContent from "../ReviewCardContent";

const MyReview = () => {
  const [reviewList, setReviewList] = useState(DUMMY2);
  return (
    <div>
      <h3 style={{ textAlign: "left", padding: "0 0 20px 115px" }}>리뷰조회</h3>
      <div
        className={classes.viewReview}
        style={{ backgroundColor: "#022F1C" }}
      >
        <div
          className={classes.inner}
          style={{
            border: "0",
            width: "1300px",
            margin: "auto",
          }}
        >
          <div
            className={classes.reviewContent}
            style={{ padding: "100px 0 100px 0" }}
          >
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
