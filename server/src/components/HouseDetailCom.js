import tempImage from "../assets/image/sample.jpg";
import tempImage2 from "../assets/image/liveLogo.png";
import tempImage3 from "../assets/image/MainBackground.png";
import tempImage4 from "../assets/image/MainPicture.png";
import CarouselTemp from "./house/CarouselTemp";
import Map from "../UI/Map";
import Icons from "../assets/Icons";
import { useDispatch } from "react-redux";
import { reservedItemAction } from "../store/reserved-item-slice";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const HouseDetailCom = (props) => {
  //예약 아이템 추가하기
  const dispatch = useDispatch();

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

  //상상속의 하우스 자료
  const [houseInfo, setHouseInfo] = useState({});

  const seeMore = () => {
    document.getElementById("moreInfoBtn").style.display = "none";
    document.getElementById("houseInfo").style.display = "";
  };

  const foldHandler = () => {
    document.getElementById("moreInfoBtn").style.display = "";
    document.getElementById("houseInfo").style.display = "none";
  };

  // 등록 번호 같은거 필요
  // 유저 입장 -> 매물 검색으로 접근 -> 동일 매물에 여러 중개사가 있는 경우 ->
  return (
    <div style={{ overflow: "scroll" }}>
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
        대전시 유성구 덕명동( 동까지만 ) - 상세주소는 매물 정보에
      </div>
      <div>
        <p> 월세/보증금/관리비 -&gt; 유저가 매물 검색으로 들어갔을 때만</p>
      </div>
      <div>
        <p> 계약버튼, 담기 -&gt; 유저만 </p>
        <div>
          <button>계약</button>
          <button
            onClick={() => {
              dispatch(reservedItemAction.addItem(houseInfo));
            }}
          >
            담기
          </button>
          <button>수정</button>
        </div>
        <hr />
      </div>
      <div>
        <p> 매물정보 -&gt; 고정</p>
        <p>간단 설명 : 2층 복층 풀옵션 귀한 방</p>
        <div>{Icons.area} 전용 33.33m² / 공급 33.33m²</div>
        <div>{Icons.room} 방 2개( 욕실 1개 ) - 원룸 투룸??</div>
        <div>{Icons.buildingFloor} 2층/7층 (층수/전체층수)</div>
        <div>{Icons.parking} 주차 가능/주차 불가능 (주차여부)</div>
        <div>{Icons.calendar} 2023.2.17/즉시 입주 가능 (입주가능일)</div>
        <button id="moreInfoBtn" onClick={seeMore}>
          더보기
        </button>
        <div id="houseInfo" style={{ display: "none" }}>
          <div>{Icons.compass} 동 서 남 북 북동 북서..(방향)</div>
          <div>{Icons.elevator} 엘리베이터 있음/없음</div>
          <div>{Icons.purpose} 다세대주택(건축물 용도)</div>
          <div>{Icons.marker} 유성구 덕명동 12-34</div>
          <button onClick={foldHandler}>접기</button>
        </div>
        <hr />
      </div>
      <div>
        <p> 옵션들 -&gt; 유저가 매물 검색으로 들어갔을 때만</p>
        <div>{Icons.bed} 침대</div>
        <div>{Icons.washingMachine} 세탁기</div>
        <div>{Icons.airConditioner} 에어컨</div>
        <div>{Icons.desk} 책상</div>
        <div>{Icons.closet} 옷장</div>
        <div>{Icons.bathtub} 욕조</div>
        <div>{Icons.sink} 싱크대</div>
        <div>{Icons.cctv} CCTV</div>
        <div>{Icons.table} 식탁</div>
        <div>{Icons.sofa} 소파</div>
        <div>{Icons.shoeRack} 신발장</div>
        <div>{Icons.refrigerator} 냉장고</div>
        <div>{Icons.dryingMachine} 건조기</div>
        <div>{Icons.bidet} 비데</div>
        <div>{Icons.dishWasher} 식기세척기</div>
        <div>{Icons.gasStore} 가스레인지</div>
        <div>{Icons.inductionCooktop} 인덕션</div>
        <div>{Icons.microwave} 전자레인지</div>
        <div>{Icons.gasOven} 오븐</div>
        <div>{Icons.guard} 경비원</div>
        <div>{Icons.intercom} 인터폰</div>
        <div>{Icons.keycard} 카드키</div>
        <div>{Icons.fireAlarm} 화재경보기</div>
        <div>{Icons.veranda} 베란다</div>
        <div>{Icons.terrace} 테라스</div>
        <div>{Icons.garden} 마당</div>
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
