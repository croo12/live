import tempImage from "../assets/image/sample.jpg";
import tempImage2 from "../assets/image/liveLogo.png";
import tempImage3 from "../assets/image/MainBackground.png";
import tempImage4 from "../assets/image/MainPicture.png";
import CarouselTemp from "./house/CarouselTemp";
import Map from "../UI/Map";
import Icons from "../assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { reservedItemAction } from "../store/reserved-item-slice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import classes from "./HouseDetailCom.module.scss";
import { useEffect } from "react";
import { getHouseByItemNo } from "../apis/houseApis";
import { houseActions } from "../store/house-slice";

const HouseDetailCom = () => {
  const [houseInfo, setHouseInfo] = useState();
  const [options, setOptions] = useState([]);
  const [isInfoMore, setIsInfoMore] = useState(false);
  const [isOptionMore, setIsOptionMore] = useState(false);
  const [errMessage, setErrMessage] = useState("Loading...");

  const navigate = useNavigate();

  //예약 아이템 추가하기
  const dispatch = useDispatch();

  const params = useParams();

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

  useEffect(() => {
    const response = async () => {
      const itemNo = params.itemNo;

      const result = await getHouseByItemNo(itemNo ? itemNo : props.itemNo);

      if (result.result === "fail") {
        setErrMessage(result.message);
        return;
      }

      setHouseInfo(result.data);
    };

    response();
  }, []);

  useEffect(() => {
    if (houseInfo === undefined) return;

    setOptions(
      Object.entries(houseInfo.itemOption).filter((option) => {
        return option[1] === true;
      })
    );
  }, [houseInfo]);

  console.log(houseInfo);

  // 등록 번호 같은거 필요
  // 유저 입장 -> 매물 검색으로 접근 -> 동일 매물에 여러 중개사가 있는 경우 ->
  return houseInfo ? (
    <div className={classes.houseDetailCom}>
      {houseInfo && (
        <div className={classes.imageBox}>
          <div className={classes.mainImage}>
            <img src={houseInfo.itemImages[0].imageSrc}></img>
          </div>
          <div className={classes.subImage}>
            {houseInfo.itemImages.slice(1, 5).map((image) => {
              return <img src={image.imageSrc} key={image.itemImageNo}></img>;
            })}
          </div>
        </div>
      )}

      <div className={classes.contentBox}>
        <div className={classes.leftBox}>
          <div className={classes.itemDesc}>
            <p>
              {houseInfo.house.sido} {houseInfo.house.gugun}{" "}
              {houseInfo.house.dong}
            </p>
            <div>
              <span>보증금/월세</span>
              <p>
                {houseInfo.deposit
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                /
                {houseInfo.rent
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                만원
              </p>
            </div>
            <div>
              <span>관리비</span>
              <p>
                {houseInfo.maintenanceFee
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                만원
              </p>
            </div>
            {/* <div className={classes.description}>
              <pre>
                {`😀 행복한 집 😀

안녕하세요 .
                
꿀 매물 해피하우스 소개드립니당.
                
상담신청해주세용!`}
              </pre>
            </div> */}
          </div>

          <div className={classes.itemInfo}>
            <h3>매물 정보</h3>
            <div>
              {Icons.area}{" "}
              {houseInfo.house.exclusivePrivateArea
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              m² (전용{" "}
              {Math.round(houseInfo.house.exclusivePrivateArea / 3.3)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              평) /{" "}
              {houseInfo.house.supplyArea
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              m² (공급{" "}
              {Math.round(houseInfo.house.supplyArea / 3.3)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              평)
            </div>
            <div>
              {Icons.room}{" "}
              {houseInfo.house.room === 1
                ? "원룸 "
                : houseInfo.house.room === 2
                ? "투룸 "
                : "방 " + houseInfo.house.room + "개 "}
              (욕실 {houseInfo.house.bathroom}개)
            </div>
            <div>
              {Icons.parking}{" "}
              {houseInfo.itemOption.parkingLot ? "주차 가능" : "주차 불가능"}
            </div>
            <div>
              {Icons.buildingFloor} {houseInfo.house.floor}층 /{" "}
              {houseInfo.house.totalFloor}층
            </div>
            <div>
              {Icons.calendar}{" "}
              {houseInfo.moveInDate.replaceAll("-", "") <
              new Date().toISOString().substring(0, 10).replaceAll("-", "")
                ? "즉시 입주 가능"
                : houseInfo.moveInDate.replaceAll("-", ".") + " 이후 입주 가능"}
            </div>
            {!isInfoMore ? (
              <button
                onClick={() => {
                  setIsInfoMore(true);
                }}
              >
                추가 정보 보기 ▶
              </button>
            ) : (
              <>
                <div>
                  {Icons.compass}{" "}
                  {houseInfo.direction === "EAST"
                    ? "동향"
                    : houseInfo.direction === "WEST"
                    ? "서향"
                    : houseInfo.direction === "SOUTH"
                    ? "남향"
                    : houseInfo.direction === "NORTH"
                    ? "북향"
                    : houseInfo.direction === "SOUTH_EAST"
                    ? "남동향"
                    : houseInfo.direction === "SOUTH_WEST"
                    ? "남서향"
                    : houseInfo.direction === "NORTH_EAST"
                    ? "북동향"
                    : "북서향"}
                  (주실 기준)
                </div>
                <div>
                  {Icons.elevator}{" "}
                  {houseInfo.itemOption.elevator
                    ? "엘리베이터 있음"
                    : "엘리베이터 없음"}
                </div>
                <div>
                  {Icons.purpose} {houseInfo.house.purpose}
                </div>
                <div>
                  {Icons.completionYear} {houseInfo.house.completionYear}년 준공
                </div>
                <div>
                  {Icons.marker} {houseInfo.house.address}
                  {houseInfo.house.buildingName
                    ? "(" + houseInfo.house.buildingName + ")"
                    : ""}
                </div>
                <button
                  onClick={() => {
                    setIsInfoMore(false);
                  }}
                >
                  ◀ 추가 정보 접기
                </button>
              </>
            )}
          </div>

          <hr />

          <div className={classes.optionInfo}>
            <h3>옵션 정보</h3>
            <div>
              {/* 4개만 우선적으로 보여주고... 그담 나머지 보여주는데... 어떻게 아이콘이랑 이름이랑 매칭시키지..?
               */}
              {options.slice(0, 4).map((option) => {
                if (option[0] === "bed") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.bed}</div>
                      <p>침대</p>
                    </div>
                  );
                } else if (option[0] === "bed") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.bed}</div>
                      <p>침대</p>
                    </div>
                  );
                } else if (option[0] === "washingMachine") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.washingMachine}</div> <p>세탁기</p>
                    </div>
                  );
                } else if (option[0] === "airConditioner") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.airConditioner}</div> <p>에어컨</p>
                    </div>
                  );
                } else if (option[0] === "desk") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.desk}</div> <p>책상</p>
                    </div>
                  );
                } else if (option[0] === "closet") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.closet}</div> <p>옷장</p>
                    </div>
                  );
                } else if (option[0] === "bathtub") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.bathtub}</div> <p>욕조</p>
                    </div>
                  );
                } else if (option[0] === "sink") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.sink}</div> <p>싱크대</p>
                    </div>
                  );
                } else if (option[0] === "cctv") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.cctv}</div> <p>CCTV</p>
                    </div>
                  );
                } else if (option[0] === "diningTable") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.diningTable}</div> <p>식탁</p>
                    </div>
                  );
                } else if (option[0] === "sofa") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.sofa}</div> <p>소파</p>
                    </div>
                  );
                } else if (option[0] === "shoeRack") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.shoeRack}</div> <p>신발장</p>
                    </div>
                  );
                } else if (option[0] === "refrigerator") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.refrigerator}</div> <p>냉장고</p>
                    </div>
                  );
                } else if (option[0] === "dryingMachine") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.dryingMachine}</div> <p>건조기</p>
                    </div>
                  );
                } else if (option[0] === "bidet") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.bidet}</div> <p>비데</p>
                    </div>
                  );
                } else if (option[0] === "dishwasher") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.dishwasher}</div> <p>식기세척기</p>
                    </div>
                  );
                } else if (option[0] === "gasStove") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.gasStove}</div> <p>가스레인지</p>
                    </div>
                  );
                } else if (option[0] === "inductionCooktop") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.inductionCooktop}</div> <p>인덕션</p>
                    </div>
                  );
                } else if (option[0] === "microwave") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.microwave}</div> <p>전자레인지</p>
                    </div>
                  );
                } else if (option[0] === "oven") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.oven}</div> <p>오븐</p>
                    </div>
                  );
                } else if (option[0] === "guard") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.guard}</div> <p>경비원</p>
                    </div>
                  );
                } else if (option[0] === "intercom") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.intercom}</div> <p>인터폰</p>
                    </div>
                  );
                } else if (option[0] === "keycard") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.keycard}</div> <p>카드키</p>
                    </div>
                  );
                } else if (option[0] === "fireAlarm") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.fireAlarm}</div> <p>화재경보기</p>
                    </div>
                  );
                } else if (option[0] === "veranda") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.veranda}</div> <p>베란다</p>
                    </div>
                  );
                } else if (option[0] === "terrace") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.terrace}</div> <p>테라스</p>
                    </div>
                  );
                } else if (option[0] === "garden") {
                  return (
                    <div className={classes.optionBox}>
                      <div>{Icons.garden}</div> <p>마당</p>
                    </div>
                  );
                }
              })}

              {isOptionMore && (
                <>
                  {options.slice(4, options.length).map((option) => {
                    if (option[0] === "bed") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.bed}</div>
                          <p>침대</p>
                        </div>
                      );
                    } else if (option[0] === "bed") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.bed}</div>
                          <p>침대</p>
                        </div>
                      );
                    } else if (option[0] === "washingMachine") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.washingMachine}</div> <p>세탁기</p>
                        </div>
                      );
                    } else if (option[0] === "airConditioner") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.airConditioner}</div> <p>에어컨</p>
                        </div>
                      );
                    } else if (option[0] === "desk") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.desk}</div> <p>책상</p>
                        </div>
                      );
                    } else if (option[0] === "closet") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.closet}</div> <p>옷장</p>
                        </div>
                      );
                    } else if (option[0] === "bathtub") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.bathtub}</div> <p>욕조</p>
                        </div>
                      );
                    } else if (option[0] === "sink") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.sink}</div> <p>싱크대</p>
                        </div>
                      );
                    } else if (option[0] === "cctv") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.cctv}</div> <p>CCTV</p>
                        </div>
                      );
                    } else if (option[0] === "diningTable") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.diningTable}</div> <p>식탁</p>
                        </div>
                      );
                    } else if (option[0] === "sofa") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.sofa}</div> <p>소파</p>
                        </div>
                      );
                    } else if (option[0] === "shoeRack") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.shoeRack}</div> <p>신발장</p>
                        </div>
                      );
                    } else if (option[0] === "refrigerator") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.refrigerator}</div> <p>냉장고</p>
                        </div>
                      );
                    } else if (option[0] === "dryingMachine") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.dryingMachine}</div> <p>건조기</p>
                        </div>
                      );
                    } else if (option[0] === "bidet") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.bidet}</div> <p>비데</p>
                        </div>
                      );
                    } else if (option[0] === "dishwasher") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.dishWasher}</div> <p>식기세척기</p>
                        </div>
                      );
                    } else if (option[0] === "gasStove") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.gasStove}</div> <p>가스레인지</p>
                        </div>
                      );
                    } else if (option[0] === "inductionCooktop") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.inductionCooktop}</div> <p>인덕션</p>
                        </div>
                      );
                    } else if (option[0] === "microwave") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.microwave}</div> <p>전자레인지</p>
                        </div>
                      );
                    } else if (option[0] === "oven") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.oven}</div> <p>오븐</p>
                        </div>
                      );
                    } else if (option[0] === "guard") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.guard}</div> <p>경비원</p>
                        </div>
                      );
                    } else if (option[0] === "intercom") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.intercom}</div> <p>인터폰</p>
                        </div>
                      );
                    } else if (option[0] === "keycard") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.keycard}</div> <p>카드키</p>
                        </div>
                      );
                    } else if (option[0] === "fireAlarm") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.fireAlarm}</div> <p>화재경보기</p>
                        </div>
                      );
                    } else if (option[0] === "veranda") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.veranda}</div> <p>베란다</p>
                        </div>
                      );
                    } else if (option[0] === "terrace") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.terrace}</div> <p>테라스</p>
                        </div>
                      );
                    } else if (option[0] === "garden") {
                      return (
                        <div className={classes.optionBox}>
                          <div>{Icons.garden}</div> <p>마당</p>
                        </div>
                      );
                    }
                  })}
                </>
              )}
            </div>
            {!isOptionMore ? (
              <button
                onClick={() => {
                  setIsOptionMore(true);
                }}
              >
                추가 정보 보기 ▶
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOptionMore(false);
                }}
              >
                ◀ 추가 정보 접기
              </button>
            )}
          </div>

          <hr />

          <div className={classes.detailDesc}>
            <h3>상세 설명</h3>
            <div>
              <pre>
                {/* {`😀 행복한 집 😀

안녕하세요 .

꿀 매물 해피하우스 소개드립니당.

상담신청해주세용!`} */}
                {houseInfo.description}
              </pre>
            </div>
          </div>

          <hr />

          <div className={classes.mapBox}>
            <h3>위치</h3>
            <div>
              <p>{houseInfo.house.address}</p>
              <Map
                address={houseInfo.house.address}
                houseName={
                  houseInfo.house.buildingName
                    ? houseInfo.house.buildingName
                    : houseInfo.house.addressDetail
                }
              />
            </div>
          </div>
        </div>

        <div className={classes.rightBox}>
          {" "}
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
            <button id="moreInfoBtn">더보기</button>
            <div id="houseInfo" style={{ display: "none" }}>
              <div>{Icons.compass} 동 서 남 북 북동 북서..(방향)</div>
              <div>{Icons.elevator} 엘리베이터 있음/없음</div>
              <div>{Icons.purpose} 다세대주택(건축물 용도)</div>
              <div>{Icons.marker} 유성구 덕명동 12-34</div>
              <button>접기</button>
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
            <p> 수정 / 삭제 -&gt; 중개사 && 내 매물일 때만</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div>
        <h1>{errMessage}</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </div>
    </>
  );
};

export default HouseDetailCom;
