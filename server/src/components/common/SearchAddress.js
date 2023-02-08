/**
 * 주소 검색(SearchAddress) 컴포넌트
 *
 * props
 *  - onChange(), 주소를 반환받을 함수
 *  - onClose(), 완료 후 모달 창 닫는 함수
 */

import DaumPostcode from "react-daum-postcode";
import classes from "./SearchAddress.module.scss";
import Logo from "../../assets/image/liveLogo.png";

const SearchAddress = (props) => {
  // 주소 선택 시 주소 정보를 반환하는 함수
  const PostHandler = (data) => {
    console.log(data);
    let roadAddr = data.roadAddress; // 도로명 주소 변수
    let extraRoadAddr = ""; // 참고 항목 변수
    let postcode = "";
    let roadAddress = "";
    let jibunAddress = "";
    let extraAddress = "";

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
    postcode = data.zonecode;
    roadAddress = data.roadAddress;
    jibunAddress = data.jibunAddress;

    // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
    if (roadAddr !== "") {
      extraAddress = extraRoadAddr;
    } else {
      extraAddress = "";
    }

    // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소를 넣어주도록 설정했습니다.
    if (data.autoRoadAddress) {
      let expRoadAddr = data.autoRoadAddress + extraRoadAddr;
      roadAddress = expRoadAddr;
    } else if (data.autoJibunAddress) {
      let expJibunAddr = data.autoJibunAddress;
      jibunAddress = expJibunAddr;
    }

    const addressInfo = {
      postcode,
      roadAddress,
      jibunAddress,
      extraAddress,
    };

    props.onChange(addressInfo); //주소 정보 반환

    props.onClose(); // 완료 후 모달 창 닫기
  };

  return (
    <div className={classes.addressContent}>
      <header>
        <img src={Logo} alt="Live Logo" />
        <button>
          <strong onClick={props.onClose}>✖</strong>
        </button>
      </header>
      <div>
        <DaumPostcode onComplete={PostHandler} classNam />
      </div>
    </div>
  );
};

export default SearchAddress;
