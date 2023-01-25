import ListBox from "../../UI/ListBox";
import AlertCardContent from "../AlertCardContent";

const MyAlert = () => {
  return (
    <>
      <h1> 안녕 나는 마이페이지 - 알림</h1>
      {/*
      내가 받은 알림들 마구 출력 
      */}
      <ListBox dataArray={[1, 2, 3]}>
        <AlertCardContent />
      </ListBox>
    </>
  );
};

export default MyAlert;
