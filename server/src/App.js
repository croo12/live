import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <hr />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default App;
