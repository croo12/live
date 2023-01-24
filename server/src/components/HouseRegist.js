import { BsFillExclamationCircleFill } from "react-icons/bs";
import Button from "../UI/Button";
import DaumPostcode from "react-daum-postcode";
import Modal from "../UI/Modal";
import { useRef, useState } from "react";

const HouseRegist = () => {
  const [postcodeModalState, setPostcodeModalState] = useState(null);

  const postcodeInputRef = useRef();
  const roadAddressInputRef = useRef();
  const jibunAddressInputRef = useRef();
  const detailAddressInputRef = useRef();
  const extraAddressInputRef = useRef();

  const findPostcodeModalStateHandler = () => {
    // 주소 검색 모달 띄우기
    if (postcodeModalState === null) {
      setPostcodeModalState(true);
      return;
    }
    setPostcodeModalState(null);
  };

  const completePostHandler = (data) => {
    let roadAddr = data.roadAddress; // 도로명 주소 변수
    let extraRoadAddr = ""; // 참고 항목 변수

    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
      extraRoadAddr += data.bname;
    }

    // 건물명이 있고, 공동주택일 경우 추가한다.
    if (data.buildingName !== "" && data.apartment === "Y") {
      extraRoadAddr +=
        extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
    }

    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    if (extraRoadAddr !== "") {
      extraRoadAddr = " (" + extraRoadAddr + ")";
    }

    // 우편번호와 주소 정보를 해당 필드에 넣는다.
    postcodeInputRef.current.value = data.zonecode;
    roadAddressInputRef.current.value = data.roadAddress;
    jibunAddressInputRef.current.value = data.jibunAddress;

    // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
    if (roadAddr !== "") {
      extraAddressInputRef.current.value = extraRoadAddr;
    } else {
      extraAddressInputRef.current.value = "";
    }

    // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소를 넣어주도록 설정했습니다.
    if (data.autoRoadAddress) {
      let expRoadAddr = data.autoRoadAddress + extraRoadAddr;
      roadAddressInputRef.current.value = expRoadAddr;
    } else if (data.autoJibunAddress) {
      let expJibunAddr = data.autoJibunAddress;
      jibunAddressInputRef.current.value = expJibunAddr;
    }
    console.log(data);

    findPostcodeModalStateHandler();
  };

  return (
    <>
      <h1> 안녕 나는 매물 - 매물 등록/수정</h1>
      {/*
        수정으로 on/off 되야함

        주소 검색 api
        사항들 입력
        옵션들
        세부사항
        그림 여러개 넣기 (미리보기 가능 / 최대 10개)

        유효성 검사
      */}
      {postcodeModalState && (
        <Modal onConfirm={findPostcodeModalStateHandler}>
          <DaumPostcode onComplete={completePostHandler} />
        </Modal>
      )}
      <h1>매물 등록하기</h1>
      <div style={{ background: "rgba(90, 183, 191, 0.17)" }}>
        <BsFillExclamationCircleFill />
        <p>
          * 등록 하신 방은 방 정보와 계정 정보&#40;가입된 ID, 이름, 연락처 정보
          등&#41;가 함께 노출 됩니다.
        </p>
        <p>
          * 허위 매물&#40;계약이 완료된 매물, 허위 정보가 기재된 매물&#41; 등록
          시 서비스 이용이 제한될 수 있습니다.
        </p>
      </div>
      <div>
        <h2>기본 정보</h2>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <h3>주소</h3>
              </td>
              <td colSpan={3}>
                <input
                  type="text"
                  ref={postcodeInputRef}
                  id="postcode"
                  placeholder="우편번호"
                />
                <Button clickEvent={findPostcodeModalStateHandler}>
                  우편 번호 찾기
                </Button>
                <br />
                <input
                  type="text"
                  ref={roadAddressInputRef}
                  id="roadAddress"
                  placeholder="도로명주소"
                />
                <input
                  type="text"
                  ref={jibunAddressInputRef}
                  id="jibunAddress"
                  placeholder="지번주소"
                />
                <input
                  type="text"
                  ref={detailAddressInputRef}
                  id="detailAddress"
                  placeholder="상세주소"
                />
                <input
                  type="text"
                  ref={extraAddressInputRef}
                  id="extraAddress"
                  placeholder="참고항목"
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>가격 정보</h3>
              </td>
              <td colSpan={3}>
                <label htmlFor="deposit">보증금</label>
                <input type="number" id="deposit"></input>
                <label htmlFor="rent">월세</label>
                <input type="number" id="rent"></input>
                <label htmlFor="maintenanceFee">관리비</label>
                <input type="number" id="maintenanceFee"></input>
              </td>
            </tr>
            <tr>
              <td>
                <h3>방 개수</h3>
              </td>
              <td>
                <input type="number" id="room"></input>개
              </td>
              <td>
                <h3>욕실 개수</h3>
              </td>
              <td>
                <input type="number" id="bathroom"></input>개
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <h3>층 수</h3>
              </td>
              <td>
                <label htmlFor="floor">해당층</label>
                <input type="number" id="floor"></input>층
              </td>
              <td rowSpan={2}>
                <h3>평수</h3>
              </td>
              <td>
                <label htmlFor="supplyArea">공급면적</label>
                <input type="number" id="supplyArea"></input>㎡
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="totalFloor">전체층</label>
                <input type="number" id="totalFloor"></input>층
              </td>
              <td>
                <label htmlFor="exclusivePrivateArea">전용면적</label>
                <input type="number" id="exclusivePrivateArea"></input>㎡
              </td>
            </tr>
            <tr>
              <td>
                <h3>계약 여부</h3>
              </td>
              <td colSpan={3}>
                <input type="checkbox" id="contractStatus" />
                <label htmlFor="contractStatus">계약 완료</label>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ---------------- 추가정보 ------------- */}

        <h2>추가정보</h2>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <h3>방향</h3>
              </td>
              <td colSpan={3}>
                <input type="radio" name="direction" value="동" />동
                <input type="radio" name="direction" value="서" />서
                <input type="radio" name="direction" value="남" />남
                <input type="radio" name="direction" value="북" />북
                <input type="radio" name="direction" value="남동" />
                남동
                <input type="radio" name="direction" value="남서" />
                남서
                <input type="radio" name="direction" value="북동" />
                북동
                <input type="radio" name="direction" value="북서" />
                북서
              </td>
            </tr>
            <tr>
              <td>
                <h3>현관구조</h3>
              </td>
              <td>
                <input type="radio" name="entrance" value="남서" />
                계단식
                <input type="radio" name="entrance" value="북동" />
                복도식
                <input type="radio" name="entrance" value="북서" />
                복합식
              </td>
            </tr>
            <tr>
              <td>
                <h3>난방방식</h3>
              </td>
              <td>
                <input type="radio" name="heating" value="남서" />
                개별난방
                <input type="radio" name="heating" value="북동" />
                중앙난방
                <input type="radio" name="heating" value="북서" />
                지역난방
              </td>
            </tr>
            <tr>
              <td>
                <h3>입주가능일</h3>
              </td>
              <td>
                <input
                  type="date"
                  id="moveInDate"
                  defaultValue={new Date().toISOString().substring(0, 10)}
                />
                <input type="radio" name="moveInDateInfo" value="즉시입주" />
                즉시입주???????????????
                <input type="radio" name="moveInDateInfo" value="협의가능" />
                협의가능??????????????
              </td>
            </tr>
            <tr>
              <td>
                <h3>옵션</h3>
              </td>
              <td>
                <input type="checkbox" id="bed" />
                <label htmlFor="bed">침대</label>
                <input type="checkbox" id="desk" />
                <label htmlFor="desk">책상</label>
                <input type="checkbox" id="closet" />
                <label htmlFor="closet">옷장</label>
                <input type="checkbox" id="bulitInCloset" />
                <label htmlFor="bulitInCloset">붙박이장</label>
                <input type="checkbox" id="table" />
                <label htmlFor="table">식탁</label>
                <input type="checkbox" id="sofa" />
                <label htmlFor="sofa">소파</label>
                <input type="checkbox" id="shoeRack" />
                <label htmlFor="shoeRack">신발장</label>

                <br />

                <input type="checkbox" id="refrigerator" />
                <label htmlFor="refrigerator">냉장고</label>
                <input type="checkbox" id="washingMachine" />
                <label htmlFor="washingMachine">세탁기</label>
                <input type="checkbox" id="dryingMachine" />
                <label htmlFor="dryingMachine">건조기</label>
                <input type="checkbox" id="showerBooth" />
                <label htmlFor="showerBooth">샤워부스</label>
                <input type="checkbox" id="bath" />
                <label htmlFor="bath">욕조</label>
                <input type="checkbox" id="bidet" />
                <label htmlFor="bidet">비데</label>

                <br />

                <input type="checkbox" id="sink" />
                <label htmlFor="sink">싱크대</label>
                <input type="checkbox" id="dishWasher" />
                <label htmlFor="dishWasher">식기세척기</label>
                <input type="checkbox" id="gasStore" />
                <label htmlFor="gasStore">가스레인지</label>
                <input type="checkbox" id="inductionCooktop" />
                <label htmlFor="inductionCooktop">인덕션레인지</label>
                <input type="checkbox" id="microwave" />
                <label htmlFor="microwave">전자레인지</label>
                <input type="checkbox" id="gasOven" />
                <label htmlFor="gasOven">가스오븐</label>

                <br />

                <input type="checkbox" id="ownSecurity" />
                <label htmlFor="ownSecurity">자체경비</label>
                <input type="checkbox" id="intercom" />
                <label htmlFor="intercom">인터폰</label>
                <input type="checkbox" id="keycard" />
                <label htmlFor="keycard">카드키</label>
                <input type="checkbox" id="cctv" />
                <label htmlFor="cctv">CCTV</label>
                <input type="checkbox" id="privateSecurity" />
                <label htmlFor="privateSecurity">사설경비</label>
                <input type="checkbox" id="entranceSecurity" />
                <label htmlFor="entranceSecurity">현관보안</label>
                <input type="checkbox" id="securityWindow" />
                <label htmlFor="securityWindow">방범창</label>

                <br />

                <input type="checkbox" id="elevator" />
                <label htmlFor="elevator">엘리베이터</label>
                <input type="checkbox" id="fireAlarm" />
                <label htmlFor="fireAlarm">화재경보기</label>
                <input type="checkbox" id="veranda" />
                <label htmlFor="veranda">베란다</label>
                <input type="checkbox" id="terrace" />
                <label htmlFor="terrace">테라스</label>
                <input type="checkbox" id="garden" />
                <label htmlFor="garden">마당</label>
                <input type="checkbox" id="parkingLot" />
                <label htmlFor="parkingLot">주차장</label>
              </td>
            </tr>
          </tbody>
        </table>

        {/* -----------상세정보------------- */}
        <h2>상세정보</h2>
        <table border={1}>
          <tbody>
            <tr>
              <td colSpan={4}>
                * 해당 방에 대한 자세한 설명을 입력해주세요.
                <br />
                * 방 정보, 가격협의내용, 교통 등 자세한 내용을 작성하시면 거래가
                성사될 가능성이 높습니다.
                <br />* 한글, 영어, 숫자 ㎡을 제외한 특수문자(괄호포함)는 입력할
                수 없습니다.
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <h2>상세설명</h2>
              </td>
              <td colSpan={3}>
                <textarea
                  style={{ width: "100%" }}
                  placeholder="방 구조, 교통, 주변 편의시설 등 구체적인 방 정보를 작성해 주세요."
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>사진등록</h2>
        <div>
          <input type="file" id="image" accept="img/*" multiple={true} />
        </div>
        <div id="img__box">미리보기</div>
      </div>
      <button>등록</button>
    </>
  );
};

export default HouseRegist;
