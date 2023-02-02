import { Outlet } from "react-router-dom";
import classes from "./App.module.scss";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <section className={classes.wrapper}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default App;
