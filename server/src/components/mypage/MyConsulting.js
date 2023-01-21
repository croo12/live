import { useState } from "react";
import Button from "../../UI/Button";
import ListBox from "../../UI/ListBox";
import ConsultingCardContent from "../ConsultingCardContent";

const MyConsulting = () => {
  const [tabIndex, setIndex] = useState(0);

  const onClickHandler = (num) => {
    setIndex(num);
  };

  return (
    <>
      <h1> 안녕 나는 마이페이지 - 상담관리</h1>
      <div>
        {"//안녕 나는 탭 "}

        <div>
          <Button
            clickEvent={() => {
              onClickHandler(0);
            }}
          >
            버튼0
          </Button>
          <Button
            clickEvent={() => {
              onClickHandler(1);
            }}
          >
            버튼1
          </Button>
          <Button
            clickEvent={() => {
              onClickHandler(2);
            }}
          >
            버튼2
          </Button>
        </div>
        <div>
          왼쪽놈
          {tabIndex === 0 && (
            <div>
              탭0
              <ListBox dataArray={[0, 1, 2, 3, 4]}>
                <ConsultingCardContent />
              </ListBox>
            </div>
          )}
          {tabIndex === 1 && (
            <div>
              탭1
              <ListBox dataArray={[0, 1, 2]}>
                <ConsultingCardContent />
              </ListBox>
            </div>
          )}
          {tabIndex === 2 && (
            <div>
              탭2
              <ListBox dataArray={[0, 1, 2, 3, 4, 5, 6]}>
                <ConsultingCardContent />
              </ListBox>
            </div>
          )}
        </div>
      </div>
      {/*
        리스트
        ㄴ 예약 대강 컴포넌트
            ㄴ 상태에 따라 배경 | 테두리 | 상태 문구가 달라진다
            ㄴ 상대의 프로필 && 상담일 && 대강 목록 ~ 외 n건
            ㄴ 상태에 따라 버튼이 달라짐
            ㄴ 클릭하면 예약상세 열람 가능
                ㄴ 녹화버튼
                ㄴ Fix전일 경우 중개사는 매물 리스트 수정 가능

        
      */}
    </>
  );
};

export default MyConsulting;
