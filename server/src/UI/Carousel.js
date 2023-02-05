import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import CarouselData from "../pages/CarouselData";
import classes from "./Carousel.module.scss";

const num = [{ a: 0 }, { a: 0 }, { a: 0 }];

function Carousel() {
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    setList(num);
  }, [num]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current > list.length - 2 ? 0 : current + 1);
      handleClick(current > list.length - 2 ? 0 : current + 1);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [current, list?.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current > list.length - 2 ? 0 : current + 1);
      handleClick(current > list.length - 2 ? 0 : current + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current, list?.length]);

  const handleClick = (i) => {
    if (current === list.length - 1) {
      sliderRef.current.slickGoTo(current + 1);
      setCurrent(i);
    } else {
      sliderRef.current.slickGoTo(i);
      setCurrent(i);
    }
  };

  const settings = {
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: false,
    variableWidth: true,
    afterChange: (current) => setCurrent(current),
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Slider {...settings} ref={sliderRef}>
        {/* <Card />
        <Card /> */}

        {num.map((item, i) => {
          return (
            <div key={i}>
              <CarouselData data={i} key={i} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
