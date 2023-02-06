import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

// 캐러셀 화살표 커스텀
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "3%",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
};

// 캐러셀 화살표 커스텀
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "3%", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

// 캐러셀
const CarouselTemp = (props) => {
  const mySettings = props.settings;
  const items = props.items;

  const dotClickHandler = (i) => {
    sliderRef.current.slickGoTo(i);
  };

  const sliderRef = useRef();

  const settings = mySettings.appendDots
    ? {
        dots: mySettings.dots ? mySettings.dots : false, // 개수 표시 점
        infinite: mySettings.infinite ? mySettings.infinite : false, // 무한 캐러셀
        speed: mySettings.speed ? mySettings.speed : 500, // 다음 컨텐츠 까지의 속도
        slidesToShow: mySettings.slidesToShow ? mySettings.slidesToShow : 1, // 화면에 보이는 컨텐츠 수
        slidesToScroll: mySettings.slidesToScroll
          ? mySettings.slidesToScroll
          : 1, // 스크롤 시 넘어가는 컨텐츠 수
        centerMode: mySettings.centerMode ? mySettings.centerMode : false, // 현재 컨텐츠 가운데 정렬
        centerPadding: mySettings.centerPadding
          ? mySettings.centerPadding
          : "0px",
        autoplay: mySettings.autoplay ? mySettings.autoplay : false, // 자동 캐러셀
        autoplaySpeed: mySettings.autoplaySpeed
          ? mySettings.autoplaySpeed
          : 2000, // 자동 캐러셀 속도
        draggable: mySettings.draggable ? mySettings.draggable : false, // 드래그
        fade: mySettings.fade ? mySettings.fade : false, // 사라졌다 나타나는 효과
        arrows: mySettings.arrows ? mySettings.arrows : false, // 좌,우 버튼
        nextArrow: mySettings.customArrow && <NextArrow />, //customArrow 사용 원할 시
        prevArrow: mySettings.customArrow && <PrevArrow />,
        vertical: mySettings.vertical ? mySettings.vertical : false, // 세로 캐러셀
        initialSlide: mySettings.initialSlide ? mySettings.initialSlide : 0, // 첫 컨텐츠 번호
        pauseOnFocus: mySettings.pauseOnFocus ? mySettings.pauseOnFocus : false, // focus시 정지
        pauseOnHover: mySettings.pauseOnHover ? mySettings.pauseOnHover : false, // hover시 정지
        appendDots:
          mySettings.appendDots &&
          (() => {
            return (
              <div
                style={{
                  display: "flex",
                  position: "static",
                  justifyContent: "center",
                }}
              >
                <ul>
                  {items.map((item, idx) => {
                    return (
                      <li
                        style={{
                          width: "10%",
                          height: "3rem",
                          border: "1px solid",
                          marginRight: "1px",
                        }}
                        key={idx}
                        onClick={() => dotClickHandler(idx)}
                      >
                        <img
                          src={item.imgSrc}
                          alt={idx}
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.1)",
                          }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }),
      }
    : {
        dots: mySettings.dots ? mySettings.dots : false, // 개수 표시 점
        infinite: mySettings.infinite ? mySettings.infinite : false, // 무한 캐러셀
        speed: mySettings.speed ? mySettings.speed : 500, // 다음 컨텐츠 까지의 속도
        slidesToShow: mySettings.slidesToShow ? mySettings.slidesToShow : 1, // 화면에 보이는 컨텐츠 수
        slidesToScroll: mySettings.slidesToScroll
          ? mySettings.slidesToScroll
          : 1, // 스크롤 시 넘어가는 컨텐츠 수
        centerMode: mySettings.centerMode ? mySettings.centerMode : false, // 현재 컨텐츠 가운데 정렬
        centerPadding: mySettings.centerPadding
          ? mySettings.centerPadding
          : "0px",
        autoplay: mySettings.autoplay ? mySettings.autoplay : false, // 자동 캐러셀
        autoplaySpeed: mySettings.autoplaySpeed
          ? mySettings.autoplaySpeed
          : 2000, // 자동 캐러셀 속도
        draggable: mySettings.draggable ? mySettings.draggable : false, // 드래그
        fade: mySettings.fade ? mySettings.fade : false, // 사라졌다 나타나는 효과
        arrows: mySettings.arrows ? mySettings.arrows : false, // 좌,우 버튼
        nextArrow: mySettings.customArrow && <NextArrow />, //customArrow 사용 원할 시
        prevArrow: mySettings.customArrow && <PrevArrow />,
        vertical: mySettings.vertical ? mySettings.vertical : false, // 세로 캐러셀
        initialSlide: mySettings.initialSlide ? mySettings.initialSlide : 0, // 첫 컨텐츠 번호
        pauseOnFocus: mySettings.pauseOnFocus ? mySettings.pauseOnFocus : false, // focus시 정지
        pauseOnHover: mySettings.pauseOnHover ? mySettings.pauseOnHover : false, // hover시 정지
      };

  return (
    <div style={{ width: "700px" }}>
      <Slider {...settings} ref={sliderRef}>
        {items &&
          items.map((item, idx) => {
            console.log(idx);
            return <img src={item.imgSrc} key={idx} alt={idx} />;
          })}
      </Slider>
    </div>
  );
};

export default CarouselTemp;
