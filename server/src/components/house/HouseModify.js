import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useState } from "react";
import ImageInput from "../common/ImageInput";

const HouseModify = () => {
  const [images, setImages] = useState([]); // 매물 이미지 파일

  const setImageHandler = (data) => {
    setImages(data);
  };

  const modifyHouseInfo = () => {
    console.log(images);
  };

  return (
    <>
      <h1>매물 정보 수정</h1>
      <div style={{ background: "rgba(90, 183, 191, 0.17)" }}>
        <BsFillExclamationCircleFill />
        <p>
          * 등록하신 방은 방 정보와 계정 정보&#40;등록된 ID, 이름, 연락처 정보
          등&#41;가 함께 노출됩니다.
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
                  id="postcode"
                  placeholder="우편번호"
                  readOnly
                />
                <br />
                <input
                  type="text"
                  id="roadAddress"
                  placeholder="도로명주소"
                  readOnly
                />
                <input
                  type="text"
                  id="jibunAddress"
                  placeholder="지번주소"
                  readOnly
                />
                <input
                  type="text"
                  id="detailAddress"
                  placeholder="상세주소"
                  readOnly
                />
                <input
                  type="text"
                  id="extraAddress"
                  placeholder="참고항목"
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
                <input type="number" id="room" min={0} readOnly></input>개
              </td>
              <td>
                <h3>욕실 개수</h3>
              </td>
              <td>
                <input type="number" id="bathroom" min={0} readOnly></input>개
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <h3>층 수</h3>
              </td>
              <td>
                <label htmlFor="floor">해당층</label>
                <input type="number" id="floor" readOnly></input>층
              </td>
              <td rowSpan={2}>
                <h3>평수</h3>
              </td>
              <td>
                <label htmlFor="supplyArea">공급면적</label>
                <input type="number" id="supplyArea" readOnly></input>㎡
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="totalFloor">전체층</label>
                <input type="number" id="totalFloor" readOnly></input>층
              </td>
              <td>
                <label htmlFor="exclusivePrivateArea">전용면적</label>
                <input type="number" id="exclusivePrivateArea" readOnly></input>
                ㎡
              </td>
            </tr>
            <tr>
              <td>
                <h3>건축물 용도</h3>
              </td>
              <td colSpan={3}>
                <input type="text" id="purpose" readOnly />
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
        <ImageInput
          setImage={setImageHandler}
          maxFileNum={10}
          isPreview={true}
        />
      </div>
      <button onClick={modifyHouseInfo}>수정</button>
    </>
  );
};

export default HouseModify;
