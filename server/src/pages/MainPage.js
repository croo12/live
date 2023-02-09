import classes from "./MainPage.module.scss";

import MainBanner from "../components/main/MainBanner";
import MainContent from "../components/main/MainContent";
import MainRanking from "../components/main/MainRanking";

// 메인페이지

const MainPage = () => {
  return (
    <>
      <section>
        <MainBanner /> {/*메인 배너*/}
      </section>
      <section className={classes.about} style={{ backgroundColor: "#022F1C" }}>
        <MainContent /> {/*매물 평균가, 새로 나온 매물*/}
      </section>
      <section className={classes.ranking}>
        <MainRanking /> {/*지금 인기있는 공인중개사*/}
      </section>
    </>
  );
};

export default MainPage;
