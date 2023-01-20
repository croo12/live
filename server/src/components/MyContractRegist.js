import RealtorCardContent from "./RealtorCardContent";
import HouseCardContent from "./HouseCardContent";
import Button from "../UI/Button";
import Card from "../UI/Card";

const MyContractRegist = () => {
  return (
    <>
      <h1> 안녕 나는 마이페이지 - 계약 - 계약 작성/수정 </h1>

      <Card>
        <RealtorCardContent />
      </Card>

      <Card>
        <HouseCardContent />
      </Card>

      <p>계약기간 / 입주희망일</p>

      <div>
        입주자 정보 입력
        <br />
        <p> 계약자명 전화번호 성별 나이 실거주 주소</p>
      </div>

      <div>요청 정보 거주인원 특약요청사항</div>

      <p>예상비용안내</p>

      <p>약관동의</p>
      <Button> 계약 요청하기 </Button>
    </>
  );
};

export default MyContractRegist;
