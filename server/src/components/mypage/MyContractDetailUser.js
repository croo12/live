import RealtorCardContent from "../RealtorCardContent";
import Card from "../../UI/Card";
import HouseCardContent from "../HouseCardContent";

const MyContractDetailUser = () => {
  return (
    <>
      <div>
        <h1>계약 정보</h1>
        <Card>
          <RealtorCardContent />
        </Card>
        <br />
        <Card>
          <HouseCardContent />
        </Card>
        <br />
        <p>계약 기간 12개월 입주희망일 2023.01.13</p>
        <br />
        <hr />
        <div>
          <h1>입주자 정보</h1>
          <br />
          <div>계약자명 김싸피</div>
          <div>전화번호 010-1234-5678</div>
          <div>
            성별
            <input type="radio" />
            남자
            <input type="radio" />
            여자
          </div>
          <div>나이 25</div>
          <div>
            <div>실거주 주소 </div>
            <div>
              <div>
                <input />
              </div>
              <div>
                <input />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div>
          <h1>요청 정보</h1>
          <br />
          <div>
            <label htmlFor=""></label>
          </div>
          <div>
            <label>거주인원 </label>
            <input />
          </div>
          <div>
            <label>특약 요청사항 </label>
            <input />
          </div>
        </div>
        <div>
          <br />
          <hr />
          <h1>예상 비용 안내</h1>
          <br />
          <p>계약금 1,000,000원</p>
          <p>계약금 1,000,000원</p>
          <p>계약금 1,000,000원</p>
          <br />
          <hr />
          <p>
            <strong>총 예상 비용</strong> 10,300,000원
          </p>
        </div>
      </div>
      <button>계약 요청 취소</button>
    </>
  );
};

export default MyContractDetailUser;
