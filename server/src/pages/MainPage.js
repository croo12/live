import classes from "./MainPage.modules.scss";
import background from "../assets/image/MainBackground.png";

const MainPage = () => {
  return (
    <>
      <div>
        <img src={background}></img>
      </div>
      <div
        style={{
          backgroundColor: "#022F1C",
          height: "712px",
          justifyContent: "space-between",
          flexWrap: "nowrap",
        }}
      >
        <div>
          <p style={{ color: "white" }}></p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div style={{ backgroundColor: "#F3F3F3", height: "712px" }}>
        <div></div>
      </div>
    </>
  );
};

export default MainPage;
