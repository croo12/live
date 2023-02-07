import Button from "../../UI/Button";
import HousePurpose from "./HousePurpose";
import ImageInput from "../common/ImageInput";
import Modal from "../../UI/Modal";
import SearchAddress from "../common/SearchAddress";
import classes from "./HouseRegist.module.scss";

import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";

const HouseRegist = () => {
  const [SearchAddressModal, setSearchAddressModal] = useState(false); // 주소 검색 모달창 상태 관리용
  const [PurposeModal, setPurposeModal] = useState(false); // 건축물 용도 모달창 상태
  const [images, setImages] = useState([]); // 매물 이미지 파일

  const postcodeInputRef = useRef(); // 우편번호
  const roadAddressInputRef = useRef(); //도로명주소
  const jibunAddressInputRef = useRef(); //지번주소
  const detailAddressInputRef = useRef(); //상세주소
  const extraAddressInputRef = useRef(); //추가사항

  const setImageHandler = (data) => {
    setImages(data);
  };

  const registHouseInfo = () => {
    console.log(images);
  };

  // 건축물 용도 모달 on/off 함수
  const purposeModalHandler = () => {
    PurposeModal ? setPurposeModal(false) : setPurposeModal(true);
  };

  // 주소 검색 모달 on/off 함수
  const searchAddressModalHandler = () => {
    if (SearchAddressModal === false) {
      setSearchAddressModal(true);
      return;
    }
    setSearchAddressModal(false);
  };

  // 주소 검색 결과 값 설정
  const setAddressInfoHandler = (addressInfo) => {
    postcodeInputRef.current.value = addressInfo.postcode;
    roadAddressInputRef.current.value = addressInfo.roadAddress;
    jibunAddressInputRef.current.value = addressInfo.jibunAddress;
    detailAddressInputRef.current.value = addressInfo.extraAddress;
  };

  const inputNumBlurHandler = (event) => {
    event.target.value = event.target.value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const inputNumFocusHandler = (event) => {
    event.target.value = event.target.value.replaceAll(",", "");
  };

  return (
    <>
      {/*
        그림 여러개 넣기 (미리보기 가능 / 최대 10개)

        유효성 검사
      */}
      {SearchAddressModal && (
        <Modal onConfirm={searchAddressModalHandler}>
          <SearchAddress
            onChange={setAddressInfoHandler}
            onClose={searchAddressModalHandler}
          />
        </Modal>
      )}

      {PurposeModal && (
        <Modal onConfirm={purposeModalHandler}>
          <HousePurpose onClose={purposeModalHandler} />
        </Modal>
      )}

      <form className={classes.houseRegist} onSubmit={registHouseInfo}>
        <div className={classes.registFieldSet}>
          <h1>매물 등록하기</h1>
          <div className={classes.registDescription}>
            <div className={classes.descIcon}>
              <BsFillExclamationCircleFill className={classes.icon} />
            </div>
            <div className={classes.descText}>
              <p>
                ㆍ 등록하신 방은 방 정보와 계정 정보&#40;가입된 아이디, 이름,
                연락처 정보 등&#41;가 함께 노출됩니다.
              </p>
              <p>
                ㆍ 허위 매물&#40;계약이 완료된 매물, 허위 정보가 기재된
                매물&#41; 등록 시 서비스 이용이 제한될 수 있습니다.
              </p>
            </div>
          </div>
          <div className={classes.formInner}>
            <div className={classes.defaultInfo}>
              <h2>기본 정보</h2>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>주소</h3>
                    </td>
                    <td>
                      <div>
                        <input
                          type="text"
                          ref={postcodeInputRef}
                          id="postcode"
                          placeholder="우편번호"
                          onClick={searchAddressModalHandler}
                          readOnly
                          style={{ display: "none" }}
                        />
                        <input
                          type="text"
                          ref={roadAddressInputRef}
                          id="roadAddress"
                          placeholder="도로명주소"
                          onClick={searchAddressModalHandler}
                          className={classes.mainAddress}
                          readOnly
                        />
                        <input
                          type="text"
                          ref={jibunAddressInputRef}
                          id="jibunAddress"
                          placeholder="지번주소"
                          onClick={searchAddressModalHandler}
                          readOnly
                          style={{ display: "none" }}
                        />
                        <button
                          type="button"
                          onClick={searchAddressModalHandler}
                          className={classes.searchBtn}
                        >
                          주소 검색
                        </button>
                      </div>
                      <input
                        type="text"
                        ref={detailAddressInputRef}
                        id="detailAddress"
                        className={classes.subAddress}
                        placeholder="나머지주소를 입력해주세요"
                      />
                      <input
                        type="text"
                        ref={extraAddressInputRef}
                        id="extraAddress"
                        placeholder="참고항목"
                        onClick={searchAddressModalHandler}
                        readOnly
                        style={{ display: "none" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>가격 정보</h3>
                    </td>
                    <td>
                      <label htmlFor="deposit">보증금</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="deposit"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          min={0}
                        />
                        <p>만원</p>
                      </div>
                      <label htmlFor="rent">월세</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="rent"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          step={0.1}
                          min={0}
                        />
                        <p>만원</p>
                      </div>
                      <label htmlFor="maintenanceFee">관리비</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="maintenanceFee"
                          step={0.1}
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          min={0}
                        />
                        <p>만원</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>방 개수</h3>
                    </td>
                    <td>
                      <label>방</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="room"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          min={0}
                        />
                        <p>개</p>
                      </div>
                      <label>욕실</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="bathroom"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          min={0}
                        />
                        <p>개</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>층 수</h3>
                    </td>
                    <td>
                      <label htmlFor="floor">해당층</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="floor"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          step={0.1}
                        />
                        <p>층</p>
                      </div>
                      <label htmlFor="totalFloor">전체층</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="totalFloor"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          step={0.1}
                        />
                        <p>층</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>평수</h3>
                    </td>
                    <td>
                      <label htmlFor="supplyArea">공급면적</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="supplyArea"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          step={0.001}
                        />
                        <p>㎡</p>
                      </div>
                      <label htmlFor="exclusivePrivateArea">전용면적</label>
                      <div className={classes.unitInput}>
                        <input
                          type="text"
                          id="exclusivePrivateArea"
                          onBlur={inputNumBlurHandler}
                          onFocus={inputNumFocusHandler}
                          step={0.001}
                        />
                        <p>㎡</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>건축물 용도</h3>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="purpose"
                        className={classes.purpose}
                      />
                      <button
                        className={classes.purposeBtn}
                        onClick={purposeModalHandler}
                      >
                        작성법보기
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>계약 여부</h3>
                    </td>
                    <td className={classes.constract}>
                      <input type="checkbox" id="contractStatus" />
                      <label htmlFor="contractStatus">계약 완료</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ---------------- 추가정보 ------------- */}

            <div className={classes.additionalInfo}>
              <h2>추가정보</h2>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>방향</h3>
                    </td>
                    <td>
                      <input
                        type="radio"
                        name="direction"
                        value="동"
                        id="east"
                      />
                      <label htmlFor="east">동</label>
                      <input
                        type="radio"
                        name="direction"
                        value="서"
                        id="west"
                      />
                      <label htmlFor="west">서</label>
                      <input
                        type="radio"
                        name="direction"
                        value="남"
                        id="south"
                      />
                      <label htmlFor="south">남</label>
                      <input
                        type="radio"
                        name="direction"
                        value="북"
                        id="north"
                      />
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
                    <td className={classes.infoTitle}>
                      <h3>현관구조</h3>
                    </td>
                    <td>
                      <input
                        type="radio"
                        name="entrance"
                        id="stair"
                        value="계단식"
                      />
                      <label htmlFor="stair">계단식</label>
                      <input
                        type="radio"
                        name="entrance"
                        id="corridor"
                        value="복도식"
                      />
                      <label htmlFor="corridor">복도식</label>
                      <input
                        type="radio"
                        name="entrance"
                        id="complex"
                        value="복합식"
                      />
                      <label htmlFor="complex">복합식</label>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
                      <h3>난방방식</h3>
                    </td>
                    <td>
                      <input
                        type="radio"
                        name="heating"
                        id="individual"
                        value="개별난방"
                      />
                      <label htmlFor="individual">개별난방</label>
                      <input
                        type="radio"
                        name="heating"
                        id="center"
                        value="중앙난방"
                      />
                      <label htmlFor="center">중앙난방</label>
                      <input
                        type="radio"
                        name="heating"
                        id="district"
                        value="지역난방"
                      />
                      <label htmlFor="district">지역난방</label>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.infoTitle}>
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
                    <td className={classes.infoTitle}>
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
                      <input type="checkbox" id="gasStove" />
                      <label htmlFor="gasStove">가스레인지</label>
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
            </div>
            {/* -----------상세정보------------- */}
            <h2>상세정보</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    * 해당 방에 대한 자세한 설명을 입력해주세요.
                    <br />
                    * 방 정보, 가격 협의내용, 입주일 협의내용, 교통 등 자세한
                    내용을 작성하시면 거래가 성사될 가능성이 높습니다.
                    <br />* 한글, 영어, 숫자 ㎡을 제외한 특수문자(괄호포함)는
                    입력할 수 없습니다.
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>상세설명</h2>
                  </td>
                  <td>
                    <textarea placeholder="방 구조, 교통, 주변 편의시설 등 구체적인 방 정보를 작성해 주세요."></textarea>
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
          <button type="submit">등록</button>
        </div>
      </form>
    </>
  );
};

export default HouseRegist;
