import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ListBox from "../../UI/ListBox";
import HouseCardContent from "../HouseCardContent";

const MyContractViewRealtor = () => {
  const [tabIndex, setIndex] = useState(0);
  const onClickHandler = (num) => {
    setIndex(num);
  };

  const [] = useState("INFO");

  return (
    <>
      <div>
        <h3>계약 관리</h3>
        <aside>
          <ul style={{ float: "left" }}>
            <li
              onClick={() => {
                onClickHandler(1);
              }}
            >
              전체 계약
            </li>
            <li
              onClick={() => {
                onClickHandler(2);
              }}
            >
              대기중 계약
            </li>
            <li
              onClick={() => {
                onClickHandler(3);
              }}
            >
              진행중 계약
            </li>
            <li
              onClick={() => {
                onClickHandler(4);
              }}
            >
              완료된 계약
            </li>
            <li
              onClick={() => {
                onClickHandler(5);
              }}
            >
              취소된 계약
            </li>
          </ul>
        </aside>
      </div>
      <div>
        {tabIndex === 1 && (
          <ListBox dataArray={[0]}>
            <div>
              승인 대기 중 || 고객 사진 || 고객 정보
              <HouseCardContent />
              <NavLink to="contract-detail-realtor">계약 상세보기▶</NavLink>
            </div>
          </ListBox>
        )}
      </div>
      <div>
        {tabIndex === 2 && (
          <ListBox dataArray={[0, 1]}>
            <div>
              승인 대기 중 || 고객 사진 || 고객 정보
              <HouseCardContent />
              <NavLink to="contract-detail-realtor">계약 상세보기▶</NavLink>
            </div>
          </ListBox>
        )}
      </div>
      <div>
        {tabIndex === 3 && (
          <ListBox dataArray={[0, 1, 2]}>
            <div>
              승인 대기 중 || 고객 사진 || 고객 정보
              <HouseCardContent />
              <NavLink to="contract-detail-realtor">계약 상세보기▶</NavLink>
            </div>
          </ListBox>
        )}
      </div>
      <div>
        {tabIndex === 4 && (
          <ListBox dataArray={[0, 1, 2, 3]}>
            <div>
              승인 대기 중 || 고객 사진 || 고객 정보
              <HouseCardContent />
              <NavLink to="contract-detail-realtor">계약 상세보기▶</NavLink>
            </div>
          </ListBox>
        )}
      </div>
      <div>
        {tabIndex === 5 && (
          <ListBox dataArray={[0, 1, 2, 3, 4]}>
            <div>
              승인 대기 중
              <HouseCardContent />
              <NavLink to="contract-detail-realtor">계약 상세보기▶</NavLink>
            </div>
          </ListBox>
        )}
      </div>
    </>
  );
};

export default MyContractViewRealtor;
