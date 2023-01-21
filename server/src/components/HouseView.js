/**
 * 중개사 회원 등록 매물 목록
 */

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import ListBox from "../UI/ListBox";
import HouseCardContent from "./HouseCardContent";
import { GiConversation } from "react-icons/gi";

const HouseView = () => {
  const searchInputRef = useRef(); // 매물 검색 입력 Ref
  const navigate = useNavigate(); // 페이지 이동을 위해 navigate 사용

  const searchEventHandler = () => {
    // 매물 검색 이벤트 함수
    console.log(searchInputRef.current.value);

    searchInputRef.current.value = "";
  };

  const houseRegistHandler = () => {
    // 매물 등록 페이지 이동 함수
    navigate("/house/regist");
  };

  //매물 페이지의 index
  return (
    <>
      <h1>안녕 나는 매물 - 매물 목록</h1>
      <div style={{ background: "rgba(90, 183, 191, 0.17)" }}>
        <GiConversation />
        <p>
          ‘나의 매물 목록’ 을 통해 등록한 매물을 확인하고 관리할 수 있습니다.
        </p>
        <p>
          원하는 매물을 클릭하여 상세 화면으로 이동할 수 있습니다.
          <br /> 새로운 매물을 등록하고 싶으면 `매물 등록` 버튼을 통해 등록하실
          수 있습니다.
        </p>
      </div>
      <Button clickEvent={houseRegistHandler}>매물 등록</Button>
      <ListBox dataArray={[1, 2, 3, 4]}>
        <HouseCardContent />
      </ListBox>
      <p>페이지네이션</p>
      <input
        type="text"
        ref={searchInputRef}
        placeholder="지역명을 입력해주세요"
      ></input>
      <Button clickEvent={searchEventHandler}>검 색</Button>
    </>
  );
};

export default HouseView;
