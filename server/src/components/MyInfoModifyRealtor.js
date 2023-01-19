import Button from "../UI/Button";
import Input from "../UI/Input";

const MyInfoModifyRealtor = () => {
  return (
    <>
      <h1>안녕 나는 마이페이지 - 중개사 수정</h1>
      <div>
        <form>
          프로필 사진
          <br /> 사업자 번호 : <Input /> <br />
          비밀번호 : <Input /> <br />
          이름 : <Input /> <br />
          이메일 : <Input /> <br />
          전화번호 : <Input /> <br />
          상호명 : <Input /> <br />
          중개등록번호 : <Input /> <br />
          사무소 주소 : <Input /> <br />
          이미지 : <Input /> <br />
          소개 : <Input /> <br />
          <Button isSubmit={true}>수정하기</Button>
          <Button>취소</Button>
        </form>
      </div>
    </>
  );
};

export default MyInfoModifyRealtor;
