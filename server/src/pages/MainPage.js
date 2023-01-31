import classes from "./MainPage.modules.scss";

import MainBanner from "../components/main/MainBanner";
import MainContent from "../components/main/MainContent";
import MainRanking from "../components/main/MainRanking";

const MainPage = () => {
  return (
    <>
      <section className={classes.intro}>
        <MainBanner />
      </section>
      <section className={classes.about} style={{ backgroundColor: "#022F1C" }}>
        <MainContent />
      </section>
      <section className={classes.ranking}>
        <MainRanking />
      </section>
    </>
  );
};

export default MainPage;
