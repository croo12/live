import classes from "./Footer.module.scss";
import { SiYoutubemusic } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerInner}>
        <div className={classes.item}>
          <ul className={classes.partList}>
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>매물관리규정</li>
          </ul>
          <div className={classes.footerDesc}>
            © SSAFY Corp.Live.All rights Reserved
          </div>
        </div>
        <div className={classes.snsIcon}>
          <span>
            <SiYoutubemusic />
          </span>
          <span>
            <BsFacebook />
          </span>
          <span>
            <AiFillTwitterCircle />
          </span>
          <span>
            <FiInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
