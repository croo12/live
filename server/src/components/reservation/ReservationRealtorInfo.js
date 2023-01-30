import { useState } from "react";
import ListBox from "../../UI/ListBox";
import HouseCardContent from "../HouseCardContent";
import ReviewCardContent from "../ReviewCardContent";

const ReservationRealtorInfo = () => {
  const [items, setItems] = useState([1, 3]);
  const [reviews, setReviews] = useState([1, 4, 5]);
  return (
    <>
      <div>
        <p>사진</p>
        <p>사무소 이름</p>
        <p>사무소 주소</p>
        <p>중개사 이름</p>
        <p>전화번호</p>
        <p>중개사 소개</p>
      </div>
      <div>
        {items?.length && (
          <>
            <h1>매물 리스트임</h1>
            <ListBox dataArray={items}>
              <HouseCardContent />
            </ListBox>
          </>
        )}
      </div>
      <div>
        {reviews?.length && (
          <>
            <h3>리뷰 수 ㅣ{reviews.length}</h3>
            <ListBox dataArray={reviews}>
              <ReviewCardContent />
            </ListBox>
          </>
        )}
        {!reviews?.length && <h1> 현재 등록된 리뷰가 없습니다</h1>}
      </div>
    </>
  );
};

export default ReservationRealtorInfo;
