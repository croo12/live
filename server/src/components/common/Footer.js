import classes from "./Footer.module.scss";
import { SiYoutubemusic } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      className={classes.set}
      style={{ backgroundColor: "#EDEDED", padding: "50px 0" }}
    >
      <div
        className={classes.inner}
        style={{ border: "", width: "1300px", margin: "auto" }}
      >
        <div
          className={classes.footerContent}
          style={{ display: "flex", padding: "20px" }}
        >
          <p style={{ flex: "3", textAlign: "left" }}>
            회사소개 이용약관 개인정보처리방침 매물관리규정 <br />{" "}
            <strong style={{ lineHeight: "1.7em" }}>
              © SSAFY Corp.Live.All rights Reserved
            </strong>
          </p>
          <div style={{ flex: "0.5" }}>
            <span style={{ padding: "1px 2px 3px 4px" }}>
              <SiYoutubemusic />
            </span>
            <span style={{ padding: "1px 2px 3px 4px" }}>
              <BsFacebook />
            </span>
            <span style={{ padding: "1px 2px 3px 4px" }}>
              <AiFillTwitterCircle />
            </span>
            <span style={{ padding: "1px 2px 3px 4px" }}>
              <FiInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
