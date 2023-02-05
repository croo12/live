import sample from "../assets/image/sample.jpg";
import classes from "./CarouselData.module.scss";

const CarouselData = ({ data }) => {
  // console.log(data);
  return (
    <div className={classes.carouseldata}>
      <img src={sample} alt="test" className={classes.upImg}></img>
      <div className={classes.downDesc}>
        <p>
          <strong>월세 200/30</strong>
        </p>
        <p>분리형 원룸</p>
        <p>한마을 주택</p>
      </div>
    </div>
  );
};

export default CarouselData;
