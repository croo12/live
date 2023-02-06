import classes from "./RealtorCardContent.module.scss";
import sample from "../assets/image/sample.jpg";
/* 사진, 사무소 이름, 중개사 이름 리뷰 별점평균? */

const RealtorCardContent = ({
  idx,
  image, //프로필사진
  corpName, //사무소 이름
  name, //중개사 이름
  starNum, //별점 평균
  contactCnt, //계약 건수
}) => {
  return (
    <div
      className={`${classes.realtorCard} ${
        idx === 0 ? classes.isActive0 : ""
      } ${idx === 1 ? classes.isActive1 : ""} ${
        idx === 2 ? classes.isActive2 : ""
      } ${idx === 3 ? classes.isActive3 : ""}`}
    >
      <div className={classes.upCard}>
        <div className={classes.leftImg}>
          <img src={image} alt="realtor-profile" />
        </div>
        <div className={classes.rightDesc}>
          <p>{corpName} 공인중개사</p>
          <p>
            <strong> {name} </strong>
          </p>
        </div>
      </div>
      <div className={classes.downCard}>
        <p>
          ★{starNum} | 체결 계약 {contactCnt}건 | 경력 10년
        </p>
      </div>
    </div>
  );
};

export default RealtorCardContent;

export const DUMMY = [
  {
    idx: 0,
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    idx: 1,
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    idx: 2,
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    idx: 3,
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
];
