import { useState } from "react";
import ListBox from "../../UI/ListBox";
import ReviewCardContent from "../ReviewCardContent";

import classes from "./ReservationRealtorInfo.module.scss";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { RealtorHousesCardContent } from "../HouseCardContent";

const ReservationRealtorInfo = ({ realtorDetail }) => {
  // const [items, setItems] = useState(DUMMY_HOUSE_DATA);
  const [reviews, setReviews] = useState([1, 4, 5]);

  const realtorInfo = realtorDetail.realtorInfo;
  const reviewsList = realtorDetail.reviewsList;

  return (
    <>
      <div className={classes.realtorInfoContainer}>
        <div className={classes.realtorUpper}>
          <div>
            <img src={realtorInfo.imageSrc} alt="중개사 리스트" />
          </div>
          <div>
            <h3> {realtorInfo.corp} </h3>
            <p>
              {realtorInfo.name} <span>공인중개사</span>
            </p>
            <p>{realtorInfo.description}</p>
            <p>
              <FiMapPin /> {realtorInfo.businessAddress}
            </p>
            <p>
              <BsTelephone /> {realtorInfo.phone}
            </p>
          </div>
        </div>
        <div className={classes.realtorItems}>
          <h3>매물 목록</h3>
          {realtorDetail.itemsList?.length ? (
            <ListBox dataArray={realtorDetail.itemsList}>
              <RealtorHousesCardContent />
            </ListBox>
          ) : (
            <p>이 중개사는 현재 거래 가능한 매물이 없습니다!</p>
          )}
        </div>
        <div>
          <h3>리뷰 수 ㅣ{reviewsList.length}</h3>
          {reviewsList?.length ? (
            <>
              <ListBox dataArray={reviewsList}>
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
