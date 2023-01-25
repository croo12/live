import Button from "../../UI/Button";

const MyInfoDetailUser = () => {
  return (
    <>
      <h1>안녕 나는 마이페이지 - 유저 상세</h1>
      <div>
        <form>
          {/* 정보 전달해주기 */}
          프로필 사진 맨 <br />
          아이디 : 아이디 <br />
          이름 : 이름 <br />
          비밀번호 : 비밀번호 <br />
          이메일 : 이메일 <br />
          전화번호 : 전화번호 <br />
        </form>
        <Button>수정페이지</Button>
        <Button>회원탈퇴</Button>
      </div>
    </>
  );
};

export default MyInfoDetailUser;
