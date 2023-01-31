import Button from "../../UI/Button";
import DateSelector from "./DateSelector";
import SelectBox from "../../UI/SelectBox";
import { useRef } from "react";
const dummyMaker = (str) => {
  return [
    { name: `${str}이름 1`, value: `${str} value 1` },
    { name: `${str}이름 2`, value: `${str} value 2` },
    { name: `${str}이름 3`, value: `${str} value 3` },
  ];
};

const ReservationSearchBox = (props) => {
  const sido = useRef("");
  const gugun = useRef("");
  const dong = useRef("");
  const refDate = useRef(new Date());

  const regionsSido = "/regions/sidos로 얻은 데이터";
  const regionsGugun = "/regions/guguns로 얻은 데이터";
  const regionsDong = "/regions/dongs로 얻은 데이터";

  const changeEventHandler = (e, refs) => {
    console.log(e);
    if (e.target) {
      refs.current = e.target.value;
    } else {
      refs.current = e;
    }
  };

  return (
    <div>
      안녕 나는 검색상자
      <SelectBox
        dataArray={dummyMaker("시")}
        default={"시 이름"}
        changeEventHandler={(e) => {
          changeEventHandler(e, sido);
        }}
      />
      <SelectBox
        dataArray={dummyMaker("구")}
        default={"구 이름"}
        changeEventHandler={(e) => {
          changeEventHandler(e, gugun);
        }}
      />
      <SelectBox
        dataArray={dummyMaker("동")}
        default={"동 이름"}
        changeEventHandler={(e) => {
          changeEventHandler(e, dong);
        }}
      />
      <DateSelector
        changeEventHandler={(e) => {
          changeEventHandler(e, refDate);
        }}
      />
      <Button
        clickEvent={() =>
          props.clickSearchEventHandler(
            sido.current,
            gugun.current,
            dong.current,
            refDate.current
          )
        }
      >
        적용
      </Button>
    </div>
  );
};

export default ReservationSearchBox;
