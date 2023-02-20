import classes from "./ReviewCardContent.module.scss";

const ReviewCardContent = (data) => {
  return (
    <div className={classes.content}>
      <h3>
        {data.name} ★ {data.ratingScore}
      </h3>
      <p>{data.personalInfo}</p>
      <br />
      <hr style={{ backgroundColor: "white", height: "1px", border: "0" }} />
      <br />
      <p>
        {data.time &&
          data.time.slice(0, 4) +
            "년 " +
            (data.time[5] === "0"
              ? data.time.slice(6, 7)
              : data.time.slice(5, 7)) +
            "월 " +
            (data.time[8] === "0"
              ? data.time.slice(9, 10)
              : data.time.slice(8, 10)) +
            "일"}
      </p>
      {data.time ? <pre>{data.reviewInfo}</pre> : <p>{data.reviewInfo}</p>}
    </div>
  );
};

export default ReviewCardContent;
