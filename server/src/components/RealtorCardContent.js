import classes from "./RealtorCardContent.module.scss";

const RealtorCardContent = () => {
  return (
    <>
      <p> 사진, 사무소 이름, 중개사 이름 </p>
      <p>리뷰 별점 평균? </p>
    </>
  );
};

export const MainRealtorCardContent = (props) => {
  return (
    <>
      <div className={classes.upCard}>
        <div className={classes.leftImg} style={{}}>
          <img src={props.image} alt="realtor-profile" />
        </div>
        <div className={classes.rightDesc}>
          <p>
            <strong>{props.name} </strong>공인중개사
          </p>
        </div>
      </div>
      <div className={classes.downCard}>
        <p>
          ★{props.starNum} | 체결 계약 {props.contactCnt}건 | 경력 10년
        </p>
      </div>
    </>
  );
};

export default RealtorCardContent;
