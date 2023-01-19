import Button from "../UI/Button";

const MyInfoDetailRealtor = () => {
  return (
    <>
      <h1>안녕 나는 마이페이지 - 중개사 상세</h1>
      <div>
        <form>
          프로필 사진
          <br />
          사업자 번호 : 사업자번호 <br />
          비밀번호 : 비밀번호 <br />
          이름 : 이름 <br />
          이메일 : 이메일 <br />
          전화번호 : 전화번호 <br />
          상호명 : 상호명 <br />
          중개등록번호 : 중개등록번호 <br />
          사무소 주소 : 사무소 주소 <br />
          소개 : 나는 중개사로소이다 <br />
          <Button>수정페이지</Button>
          <Button>회원탈퇴</Button>
        </form>
      </div>
    </>
  );
};

export default MyInfoDetailRealtor;
