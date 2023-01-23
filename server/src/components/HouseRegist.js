import { BsFillExclamationCircleFill } from "react-icons/bs";
import Button from "../UI/Button";
import DaumPostcode from "react-daum-postcode";
import Modal from "../UI/Modal";
import { useState } from "react";

const HouseRegist = () => {
  const [postcodeModalState, setPostcodeModalState] = useState(null);

  const findPostcodeModalStateHandler = () => {
    // 주소 검색 모달 띄우기
    if (postcodeModalState === null) {
      setPostcodeModalState(true);
      return;
    }
    setPostcodeModalState(null);
  };

  const completePostHandler = (data) => {
    // 주소 검색 모달에서 주소 고른 후 처리 함수

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
        <h3>주소</h3>
        <input type="text" id="postcodeInputRef" placeholder="우편번호" />
        <Button clickEvent={findPostcodeModalStateHandler}>
          우편 번호 찾기
        </Button>
        <br />
        <input type="text" id="roadAddressInputRef" placeholder="도로명주소" />
        <input type="text" id="jibunAddressInputRef" placeholder="지번주소" />
        <input type="text" id="detailAddressInputRef" placeholder="상세주소" />
        <input type="text" id="extraAddressInputRef" placeholder="참고항목" />
      </div>
    </>
  );
};

export default HouseRegist;
