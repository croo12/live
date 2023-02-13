import classes from "./MainPage.module.scss";

import MainBanner from "../components/main/MainBanner";
import MainContent from "../components/main/MainContent";
import MainRanking from "../components/main/MainRanking";
import CustomAlert from "../UI/Alert";
import { useState } from "react";

// 메인페이지

const MainPage = () => {
  const [isVisible, setVisible] = useState(false);

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
      {isVisible && (
        <CustomAlert
          title={`나 강림`}
          content={`내용? 그런건 딱히 없지만...`}
          link={`/login`}
          linkName={`로그인페이지로`}
          setter={setVisible}
        />
      )}
    </>
  );
};

export default MainPage;
