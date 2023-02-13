import classes from "./ReviewCardContent.module.scss";

const ReviewCardContent = (data) => {
  console.log(data);

  return (
    <div className={classes.content}>
      <h3>
        {data.name} ★ {data.ratingScore}
      </h3>
      <p>{data.personalInfo}</p>
      <br />
      <hr style={{ backgroundColor: "white", height: "1px", border: "0" }} />
      <br />
      <p>{data.time}</p>
      <p>{data.reviewInfo}</p>
    </div>
  );
};

export default ReviewCardContent;
