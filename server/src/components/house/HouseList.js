/**
 * 중개사 회원 등록 매물 목록
 */

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import { GiConversation } from "react-icons/gi";

import classes from "./HouseList.module.scss";
import HouseListContent from "./HouseListContent";

import tempImg from "../../assets/image/sample.jpg";
import Pagination from "../common/Pagination";

const DUMMY_HOUSE_DATA = [
  {
    itemNo: "1",
    image: tempImg,
    price: "월세 1,000/501",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가1",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "2",
    image: tempImg,
    price: "월세 1,000/502",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가2",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "3",
    image: tempImg,
    price: "월세 1,000/503",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가3",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "4",
    image: tempImg,
    price: "월세 1,000/504",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가4",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "5",
    image: tempImg,
    price: "월세 1,000/505",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가5",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "6",
    image: tempImg,
    price: "월세 1,000/506",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가6",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "7",
    image: tempImg,
    price: "월세 1,000/507",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가7",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "8",
    image: tempImg,
    price: "월세 1,000/508",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가8",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
  {
    itemNo: "9",
    image: tempImg,
    price: "월세 1,000/509",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가9",
    description:
      "여유있는면적오픈형/지층이지만삭가가가가가가가가가가가가가여유있는면적오픈형/지층이지만삭가가가가가가가가가가가가가여유있는면적오픈형/지층이지만삭가가가가가가가가가가가가가여유있는면적오픈형/지층이지만삭가가가가가가가가가가가가가",
  },
  {
    itemNo: "10",
    image: tempImg,
    price: "월세 1,000/5010",
    area: "23.14m²ㆍ반지하",
    address: "용산구 청파동2가0",
    description: "여유있는면적오픈형/지층이지만삭...",
  },
];

const HouseList = () => {
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

  const [houseList, setHouseList] = useState([]);

  const paginateHandler = (pageNum) => {
    let tempArr = [];
    const itemsPerPage = 10;
    let endNum = pageNum * itemsPerPage;
    const srtNum = endNum - itemsPerPage;
    endNum =
      endNum > DUMMY_HOUSE_DATA.length ? DUMMY_HOUSE_DATA.length : endNum;

    for (let i = srtNum; i < endNum; i++) {
      tempArr.push(DUMMY_HOUSE_DATA[i]);
    }

    setHouseList(tempArr);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  //매물 페이지의 index
  return (
    <div className={classes.houseList}>
      <div className={classes.listInner}>
        <h1>보유 매물 목록 </h1>
        <div className={classes.listDescription}>
          <div className={classes.descIcon}>
            <GiConversation className={classes.icon} />
          </div>
          <div className={classes.descText}>
            <h4>
              ‘나의 매물 목록’ 을 통해 등록한 매물을 확인하고 관리할 수
              있습니다.
            </h4>
            <p>원하는 매물을 클릭하여 상세 화면으로 이동할 수 있습니다.</p>
            <p>
              새로운 매물을 등록하고 싶으면 `매물 등록` 버튼을 통해 등록하실 수
              있습니다.
            </p>
          </div>
        </div>
        <div className={classes.registContent}>
          <Button clickEvent={houseRegistHandler}>매물 등록</Button>
        </div>
        <div>
          <HouseListContent houses={houseList} />
        </div>
        <Pagination
          itemsPerPage={3}
          totalItems={DUMMY_HOUSE_DATA.length}
          paginate={paginateHandler}
        />
        <div className={classes.inputButton}>
          <input
            type="text"
            ref={searchInputRef}
            placeholder="지역명을 입력해주세요"
          />
          <Button clickEvent={searchEventHandler}>검 색</Button>
        </div>
      </div>
    </div>
  );
};

export default HouseList;
