import classes from "./RealtorCardContent.module.scss";

// const RealtorCardContent = () => {
//   return <></>;
// };

/* 사진, 사무소 이름, 중개사 이름 리뷰 별점 평균? */

const RealtorCardContent = ({
  image,
  corpName,
  name,
  starNum,
  contactCnt,
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
            <strong>{name} </strong>
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
