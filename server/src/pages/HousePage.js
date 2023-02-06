import { Outlet } from "react-router-dom";
import classes from "./HousePage.module.scss";

const HousePage = () => {
  return (
    <div className={classes.house}>
      <Outlet />
    </div>
  );
};

export default HousePage;
