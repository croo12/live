import sample from "../assets/image/sample.jpg";
import classes from "./CarouselData.module.scss";

const CarouselData = ({ data }) => {
  return (
    <div className={`${data !== 2 ? classes.carouseldata : classes.carouseldataLast}`}>
      <div alt="test" className={classes.upImg}></div>
      <div className={classes.downDesc}>
        <p>
          <strong>월세 200/30</strong>
        </p>
        <div className={classes.downDescInfo}>
          <p>분리형 원룸</p>
          <p>한마을 주택</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselData;
