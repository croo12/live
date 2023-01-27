import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.set}>
      <hr />
      <br />
      <div>
        <br />
        <div className={classes.pos}>
          <p>회사 소개 이용약관 개인정보 처리방침 매물관리 규정</p>
          <p>
            <strong>©SSAFY Corp. Live. All rights Reserved</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
