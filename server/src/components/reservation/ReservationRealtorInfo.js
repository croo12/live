import { useState } from "react";
import ListBox from "../../UI/ListBox";
import ReviewCardContent from "../ReviewCardContent";

import sample from "../../assets/image/sample.jpg";

import classes from "./ReservationRealtorInfo.module.scss";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { DUMMY_HOUSE_DATA } from "../house/HouseList";
import { RealtorHousesCardContent } from "../HouseCardContent";

const ReservationRealtorInfo = () => {
  const [items, setItems] = useState(DUMMY_HOUSE_DATA);
  const [reviews, setReviews] = useState([1, 4, 5]);
  return (
    <>
      <div className={classes.realtorInfoContainer}>
        <div className={classes.realtorUpper}>
          <div>
            <img src={sample} alt="토토로" />
          </div>
          <div>
            <h3>SSAFY 공인중개사 사무소</h3>
            <p>
              김희연 <span>공인중개사</span>
            </p>
            <p>오랜 경력과 어쩌구</p>
            <p>
              <FiMapPin /> 사무소 주소
            </p>
            <p>
              <BsTelephone /> 전화번호
            </p>
          </div>
        </div>
        <div className={classes.realtorItems}>
          <h3>매물 목록</h3>
          {items?.length ? (
            <ListBox dataArray={items}>
              <RealtorHousesCardContent />
            </ListBox>
          ) : (
            <p>이 중개사는 현재 거래 가능한 매물이 없습니다!</p>
          )}
        </div>
        <div>
          <h3>리뷰 수 ㅣ{reviews.length}</h3>
          {reviews?.length ? (
            <>
              <ListBox dataArray={reviews}>
                <ReviewCardContent />
              </ListBox>
            </>
          ) : (
            <p>이 중개사는 현재 조회 가능한 리뷰가 없습니다!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ReservationRealtorInfo;
