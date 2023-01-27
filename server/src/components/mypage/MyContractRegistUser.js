import RealtorCardContent from "../RealtorCardContent";
import HouseCardContent from "../HouseCardContent";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

const MyContractRegistUser = () => {
  return (
    <>
      <h1> 안녕 나는 마이페이지 - 계약 - 계약 작성/수정 </h1>

      <Card>
        <RealtorCardContent />
      </Card>
      <br />
      <Card>
        <HouseCardContent />
      </Card>

      <br />
      <p>계약기간 / 입주희망일(달력)</p>
      <hr />
      <br />

      <div>
        <h1>입주자 정보</h1>
        <br />
        <div>
          <label htmlFor="contractorName">계약자명 </label>
          <input
            id="contractorName"
            name="contractorName"
            type="text"
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div>
          <label htmlFor="contractorPhone">전화번호 </label>
          <input
            id="contractorPhone"
            name="contractorPhone"
            type="text"
            placeholder="전화번호를 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="contractorGender">성별 </label>
          남자 <input type="radio" />
          여자 <input type="radio" />
        </div>
        <div>
          <label htmlFor="contractorAge">나이 </label>
          <input
            id="contractorAge"
            name="contractorAge"
            type="text"
            placeholder="나이를 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="contractorAddress">실거주 주소 </label>
          <input placeholder="주소를 검색해주세요." />
          <button>주소 검색</button>
          <div>
            <input
              id="contractorAddressDetail"
              name="contractorAddressDetail"
              type="text"
              placeholder="상세주소를 입력해주세요"
            />
          </div>
        </div>
      </div>
      <br />
      <hr />

      <div>
        <h1>요청 정보</h1>
        <br />
        <div>
          <label htmlFor="contractorResidentNumber">거주인원 </label>
          <input
            id="contractorResidentNumber"
            name="contractorResidentNumber"
            type="text"
            placeholder="거주인원을 선택해주세요."
          />
        </div>
        <div>
          <label htmlFor="contractorRequest">
            특약 요청사항
            <input
              id="contractorRequest"
              name="contractorRequest"
              type="text"
              placeholder="위의 조건 외의 특이사항으로 요청하고 싶으신 내용을 입력해주세요. 요청하고 싶으신 내용이 없을 시, '없음'으로 입력해주세요."
            ></input>
          </label>
        </div>
      </div>

      <br />
      <hr />

      <div>
        <h1>예상 비용 안내</h1>
        <br />

        <p>계약금 1,000,000원</p>
        <p>잔금 9,000,000</p>
        <p>중개보수 300,000</p>
        <hr />
        <p>총 예상 비용 10,300,000</p>
      </div>

      <br />
      <div>
        <input type="checkbox" />
        <strong>약관에 모두 동의합니다.</strong>
      </div>
      <hr />
      <div>
        <input type="checkbox" />
        [필수] 비대면 계약 서비스 이용 약관 동의
      </div>
      <div>
        <input type="checkbox" />
        [필수] 개인정보 수집 및 이용동의
      </div>
      <Button> 계약 요청하기 </Button>
    </>
  );
};

export default MyContractRegistUser;
