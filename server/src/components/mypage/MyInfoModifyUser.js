import Button from "../../UI/Button";
import Input from "../../UI/Input";

const MyInfoModifyUser = () => {
  return (
    <>
      <h1>안녕 나는 마이페이지 - 유저 수정</h1>
      <div>
        <form>
          {/* 정보 전달해주기 */}
          프로필 사진 맨 <br />
          아이디 : <Input /> <br />
          이름 : <Input /> <br />
          비밀번호 : <Input /> <br />
          이메일 : <Input /> <br />
          전화번호 : <Input /> <br />
        </form>
        <Button isSubmit={true}>수정하기</Button>
        <Button>취소</Button>
      </div>
    </>
  );
};

export default MyInfoModifyUser;
