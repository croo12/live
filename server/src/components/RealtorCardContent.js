import classes from "./RealtorCardContent.module.scss";
import sample from "../assets/image/sample.jpg";
/* 사진, 사무소 이름, 중개사 이름 리뷰 별점평균? */

const RealtorCardContent = ({
  image, //프로필사진
  corpName, //사무소 이름
  name, //중개사 이름
  starNum, //별점 평균
  contactCnt, //계약 건수
}) => {
  return (
    <>
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
    </>
  );
};

export default RealtorCardContent;

export const DUMMY = [
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
  {
    image: sample,
    name: "김희연",
    starNum: 4.8,
    contactCnt: 105,
  },
];