import HouseDetailCom from "./HouseDetailCom";

const HouseDetail = () => {
  return (
    <>
      <h1>안녕 나는 매물 - 매물 상세</h1>
      {/*
        /// 공인중개사들 탭 -> 유저가 매물 검색으로 들어갔을 때만 -> 다른 컴포넌트로 이사가기
      */}
      <HouseDetailCom />
    </>
  );
};

export default HouseDetail;
