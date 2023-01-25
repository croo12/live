import { Outlet } from "react-router-dom";

//매물 페이지는 중개사 전용임
const HousePage = () => {
  return (
    <>
      <h1> 안녕 나는 매물페이지 </h1>
      {/*
        

        목록 등록 세부 수정라우터가 있다 
      
      
      
      */}
      <Outlet />
    </>
  );
};

export default HousePage;
