import classes from "./ReviewCardContent.module.scss";

const ReviewCardContent = ({
  realtorName,
  starNum,
  location,
  date,
  review,
}) => {
  return (
    <div className={classes.content}>
      <h3>
        {realtorName} ★ {starNum}
      </h3>
      <p>{location}</p>
      <br />
      <hr style={{ backgroundColor: "white", height: "1px", border: "0" }} />
      <br />
      <p>{date}</p>
      <p>{review}</p>
    </div>
  );
};

export default ReviewCardContent;

export const DUMMY2 = [
  {
    realtorName: "스타 공인중개사",
    starNum: 4.5,
    location: "장대동",
    date: "2022-12-20 12:30",
    review: "좋은 집 잘 보여주셔서 좋았습니다.",
  },
  {
    realtorName: "스타 공인중개사",
    starNum: 4.5,
    location: "장대동",
    date: "2022-12-20 12:30",
    review: "좋은 집 잘 보여주셔서 좋았습니다.",
  },
  {
    realtorName: "스타 공인중개사",
    starNum: 4.5,
    location: "장대동",
    date: "2022-12-20 12:30",
    review: "좋은 집 잘 보여주셔서 좋았습니다.",
  },
  {
    realtorName: "스타 공인중개사",
    starNum: 4.5,
    location: "장대동",
    date: "2022-12-20 12:30",
    review: "좋은 집 잘 보여주셔서 좋았습니다.",
  },
];
