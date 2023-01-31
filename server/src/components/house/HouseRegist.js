import { BsFillExclamationCircleFill } from "react-icons/bs";
import Button from "../../UI/Button";
import DaumPostcode from "react-daum-postcode";
import Modal from "../../UI/Modal";
import { useEffect, useRef, useState } from "react";
import Card from "../../UI/Card";
import HousePurpose from "./HousePurpose";

const HouseRegist = () => {
  const [postcodeModalState, setPostcodeModalState] = useState(null); // 주소 검색 모달창 상태 관리용
  const [purpopseModalState, setPurpopseModalState] = useState(null); // 매물 이미지 미리보기
  const [imageState, setImageState] = useState([]); // 매물 이미지 파일
  const [imagePreviewState, setImagePreviewState] = useState([]); // 매물 이미지 미리보기

  const postcodeInputRef = useRef(); // 우편번호
  const roadAddressInputRef = useRef(); //도로명주소
  const jibunAddressInputRef = useRef(); //지번주소
  const detailAddressInputRef = useRef(); //상세주소
  const extraAddressInputRef = useRef(); //추가사항

  const purposeModalHandler = () => {
    if (purpopseModalState === null) {
      setPurpopseModalState(true);
      return;
    }
    setPurpopseModalState(null);
  };

  // postcodeModalState를 통해 모달 창 열고 닫는 함수
  const findPostcodeModalStateChangeEventHandler = () => {
    if (postcodeModalState === null) {
      setPostcodeModalState(true);
      return;
    }
    setPostcodeModalState(null);
  };

  // 모달창에서 주소 선택 시 주소 등록 칸에 채워주는 함수
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

    findPostcodeModalStateChangeEventHandler(); // 완료 후 모달 창 닫기
  };

  // --------- 매물이미지등록 store에 reducer로 빼야할거 같음 ------------//

  // 매물 이미지 변경 이벤트 함수
  const ImageChangeEventHandler = async (data) => {
    const images = data.target.files; // 입력받은 이미지 파일

    const removeDupl = [...imageState, ...images]; // 이미지 파일 중복 제거용 배열

    data.target.value = ""; // 다음 이미지 선택을 고려해 input 값 초기화

    // 이미지 파일 정보는 객체 배열이므로 -> 파일 이름 속성으로 객체 중복 제거
    const nonDuplImages = removeDupl.filter((item) => {
      let idx; // 중복되는 객체의 인덱스 정보를 담을 변수

      for (let i = 0; i < removeDupl.length; i++) {
        // 반복문을 통해 중복 객체의 인덱스 정보를 찾음
        if (item.name === removeDupl[i].name) {
          idx = i;
          break;
        }
      }

      // 찾은 인덱스(idx)와 일치하는 가장 가까운 이미지 객체들을 필터함수로 배열 형태로 반환
      return idx === removeDupl.indexOf(item);
    });

    // 이미지 파일 수 유효성 검사 ( 10개 이하 ), 5개 이상은 등록, 수정 버튼 클릭 시 활성화
    if (nonDuplImages.length > 10) {
      alert("이미지 등록은 최대 10개까지만 가능합니다.");
      return;
    }

    // 유효성 검사를 통과 시 imageState에 중복제거된 배열 복사
    await setImageState([...nonDuplImages]);

    // 이건 Set으로 중복제거해보려 했는데, 객체 배열은 중복제거가 안되더라..
    // await setImageState([...new Set([...imageState, ...images])]);
  };

  // 매물 이미지 미리보기 처리 ( imageState 변경 시 실행 )
  useEffect(() => {
    let imagePreview = []; // 미리보기 데이터 담을 임시 변수

    if (imageState.length === 0) {
      // imageState 길이가 0 이면 previewState를 빈 배열로하고 리턴(삭제 시 마지막 남는 값 제거용)
      setImagePreviewState([]);
      return;
    }

    imageState.forEach((image) => {
      const reader = new FileReader(); // 이미지 파일 읽어줄 친구
      reader.readAsDataURL(image); // 이미지 URL 변환

      // onload : 읽기 성공 시, onloadend : 읽기 성공 실패 여부 상관 없음
      reader.onload = () => {
        imagePreview = [...imagePreview, { image, url: reader.result }]; // 데이터 담아줌

        setImagePreviewState([...imagePreview]); // previewImageState에 넣어줌
      };
    });
  }, [imageState]);

  // 이미지 제거용 함수
  const imageRemoveEventHandler = (event) => {
    const targetName = event.target.value;

    const resultSet = imageState.filter((image) => {
      return image.name !== targetName;
    });

    setImageState([...resultSet]);
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
        <Modal onConfirm={findPostcodeModalStateChangeEventHandler}>
          <DaumPostcode onComplete={completePostHandler} />
        </Modal>
      )}
      {purpopseModalState && (
        <Modal onConfirm={purposeModalHandler}>
          <HousePurpose onComplete={purposeModalHandler} />
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
      <div style={{ width: "70%" }}>
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
                  onClick={findPostcodeModalStateChangeEventHandler}
                  readOnly
                />
                <Button clickEvent={findPostcodeModalStateChangeEventHandler}>
                  우편 번호 찾기
                </Button>
                <br />
                <input
                  type="text"
                  ref={roadAddressInputRef}
                  id="roadAddress"
                  placeholder="도로명주소"
                  onClick={findPostcodeModalStateChangeEventHandler}
                  readOnly
                />
                <input
                  type="text"
                  ref={jibunAddressInputRef}
                  id="jibunAddress"
                  placeholder="지번주소"
                  onClick={findPostcodeModalStateChangeEventHandler}
                  readOnly
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
                  onClick={findPostcodeModalStateChangeEventHandler}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>가격 정보</h3>
              </td>
              <td colSpan={3}>
                <label htmlFor="deposit">보증금</label>
                <input type="number" id="deposit" min={0}></input>
                <label htmlFor="rent">월세</label>
                <input type="number" id="rent" min={0}></input>
                <label htmlFor="maintenanceFee">관리비</label>
                <input type="number" id="maintenanceFee" min={0}></input>
              </td>
            </tr>
            <tr>
              <td>
                <h3>방 개수</h3>
              </td>
              <td>
                <input type="number" id="room" min={0}></input>개
              </td>
              <td>
                <h3>욕실 개수</h3>
              </td>
              <td>
                <input type="number" id="bathroom" min={0}></input>개
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
                <h3>건축물 용도</h3>
              </td>
              <td colSpan={3}>
                <input type="text" id="purpose" />
                <button onClick={purposeModalHandler}>작성법보기</button>
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
              <td>
                <input type="radio" name="direction" value="동" id="east" />
                <label htmlFor="east">동</label>
                <input type="radio" name="direction" value="서" id="west" />
                <label htmlFor="west">서</label>
                <input type="radio" name="direction" value="남" id="south" />
                <label htmlFor="south">남</label>
                <input type="radio" name="direction" value="북" id="north" />
                <label htmlFor="north">북</label>
                <input
                  type="radio"
                  name="direction"
                  value="남동"
                  id="southEast"
                />
                <label htmlFor="southEast">남동</label>
                <input
                  type="radio"
                  name="direction"
                  value="남서"
                  id="southWest"
                />
                <label htmlFor="southWest">남서</label>
                <input
                  type="radio"
                  name="direction"
                  value="북동"
                  id="northEast"
                />
                <label htmlFor="northEast">북동</label>
                <input
                  type="radio"
                  name="direction"
                  value="북서"
                  id="northWest"
                />
                <label htmlFor="northWest">북서</label>
              </td>
            </tr>
            <tr>
              <td>
                <h3>현관구조</h3>
              </td>
              <td>
                <input type="radio" name="entrance" value="계단식" />
                계단식
                <input type="radio" name="entrance" value="복도식" />
                복도식
                <input type="radio" name="entrance" value="복합식" />
                복합식
              </td>
            </tr>
            <tr>
              <td>
                <h3>난방방식</h3>
              </td>
              <td>
                <input type="radio" name="heating" value="개별난방" />
                개별난방
                <input type="radio" name="heating" value="중앙난방" />
                중앙난방
                <input type="radio" name="heating" value="지역난방" />
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
                <br />* 즉시입주나 협의가능 등 입주가능일 관련 내용은 상세
                설명에 작성바랍니다.
              </td>
            </tr>
            <tr>
              <td>
                <h3>옵션</h3>
              </td>
              <td>
                <input type="checkbox" id="bed" />
                <label htmlFor="bed">침대</label>
                <input type="checkbox" id="washingMachine" />
                <label htmlFor="washingMachine">세탁기</label>
                <input type="checkbox" id="airConditioner" />
                <label htmlFor="airConditioner">에어컨</label>
                <input type="checkbox" id="desk" />
                <label htmlFor="desk">책상</label>
                <input type="checkbox" id="closet" />
                <label htmlFor="closet">옷장</label>
                <input type="checkbox" id="sink" />
                <label htmlFor="sink">싱크대</label>
                <input type="checkbox" id="cctv" />
                <label htmlFor="cctv">CCTV</label>
                <input type="checkbox" id="table" />
                <label htmlFor="table">식탁</label>
                <input type="checkbox" id="sofa" />
                <label htmlFor="sofa">소파</label>
                <input type="checkbox" id="shoeRack" />
                <label htmlFor="shoeRack">신발장</label>
                <input type="checkbox" id="refrigerator" />
                <label htmlFor="refrigerator">냉장고</label>
                <input type="checkbox" id="dryingMachine" />
                <label htmlFor="dryingMachine">건조기</label>
                <input type="checkbox" id="bathtub" />
                <label htmlFor="bathtub">욕조</label>
                <input type="checkbox" id="bidet" />
                <label htmlFor="bidet">비데</label>
                <input type="checkbox" id="dishWasher" />
                <label htmlFor="dishWasher">식기세척기</label>
                <input type="checkbox" id="gasStore" />
                <label htmlFor="gasStore">가스레인지</label>
                <input type="checkbox" id="inductionCooktop" />
                <label htmlFor="inductionCooktop">인덕션</label>
                <input type="checkbox" id="microwave" />
                <label htmlFor="microwave">전자레인지</label>
                <input type="checkbox" id="oven" />
                <label htmlFor="gasOven">오븐</label>
                <input type="checkbox" id="guard" />
                <label htmlFor="guard">경비원</label>
                <input type="checkbox" id="intercom" />
                <label htmlFor="intercom">인터폰</label>
                <input type="checkbox" id="keycard" />
                <label htmlFor="keycard">카드키</label>
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
                * 방 정보, 가격 협의내용, 입주일 협의내용, 교통 등 자세한 내용을
                작성하시면 거래가 성사될 가능성이 높습니다.
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
          <input
            type="file"
            id="houseImage"
            accept="image/*"
            multiple={true}
            onChange={ImageChangeEventHandler}
            style={{ display: "none" }}
          />
          <label htmlFor="houseImage">
            <strong style={{ color: "blue" }}>사진 업로드하기</strong>
          </label>
        </div>
        <div id="img__box">
          미리보기
          {imagePreviewState.map((data) => {
            const image = data.image;
            const imageURL = data.url;
            return (
              <Card key={image.name}>
                <input
                  width="100px"
                  height="100px"
                  type="image"
                  src={imageURL}
                  alt={image.name}
                  id={image.name}
                />
                <button onClick={imageRemoveEventHandler} value={image.name}>
                  X[삭제버튼]
                </button>
              </Card>
            );
          })}
        </div>
      </div>
      <button>등록</button>
    </>
  );
};

export default HouseRegist;
