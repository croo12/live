import tempImage from "../assets/image/sample.jpg";
import tempImage2 from "../assets/image/liveLogo.png";
import tempImage3 from "../assets/image/MainBackground.png";
import tempImage4 from "../assets/image/MainPicture.png";
import CarouselTemp from "./house/CarouselTemp";
import Map from "../UI/Map";

const HouseDetailCom = (props) => {
  // 캐러셀 설정 값
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 0,
    draggable: false,
    fade: true,
    arrows: true,
    customArrow: true,
    vertical: false,
    initialSlide: 0,
    pauseOnFocus: true,
    pauseOnHover: true,
    appendDots: true,
  };

  const itemImages = [
    // 이미지 임시데이터
    { imgSrc: tempImage },
    { imgSrc: tempImage2 },
    { imgSrc: tempImage3 },
    { imgSrc: tempImage },
    { imgSrc: tempImage4 },
    { imgSrc: tempImage2 },
    { imgSrc: tempImage3 },
    { imgSrc: tempImage2 },
    { imgSrc: tempImage4 },
    { imgSrc: tempImage2 },
  ];

  // 등록 번호 같은거 필요
  // 유저 입장 -> 매물 검색으로 접근 -> 동일 매물에 여러 중개사가 있는 경우 ->
  return (
    <div>
      <div>
        <p> 사진보기 컴포넌트 -&gt; 유저가 매물 검색으로 들어갔을 때만 </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CarouselTemp settings={carouselSettings} items={itemImages} />
        </div>
      </div>
      <div>
        <p> 주소 -&gt; 고정</p>
        유성구 덕명동
      </div>
      <div>
        <p> 월세/보증금/관리비 -&gt; 유저가 매물 검색으로 들어갔을 때만</p>
      </div>
      <div>
        <p> 계약버튼, 담기 -&gt; 유저만 </p>
        <div>
          <button>계약</button>
          <button>담기</button>
        </div>
        <hr />
      </div>
      <div>
        <p> 매물정보 -&gt; 고정</p>
        <hr />
      </div>
      <div>
        <p> 옵션들 -&gt; 유저가 매물 검색으로 들어갔을 때만</p>
        <hr />
      </div>
      <div>
        <p> 상세 설명 -&gt; 유저가 매물 검색으로 들어갔을 때만</p>
        <hr />
      </div>
      <div>
        <p> 지도 -&gt; 고정</p>
        <Map address="유성구 봉명동 469-46" houseName="따듯한 우리집" />
        <hr />
      </div>
      <div>
        <p> 수정 / 삭제 -&gt; 중개사 && 내 매물일 때만</p>
      </div>
    </div>
  );
};

export default HouseDetailCom;
