import Button from "../../UI/Button";
import DateSelector from "./DateSelector";
import SelectBox from "../../UI/SelectBox";

const ReservationSearchBox = () => {
  const dummyMaker = (str) => {
    return [
      { name: `${str}이름 1`, value: `${str} value 1` },
      { name: `${str}이름 2`, value: `${str} value 1` },
      { name: `${str}이름 3`, value: `${str} value 1` },
    ];
  };

  const onChangeHandler = (msg) => {
    console.log(`짜잔 ${msg}`);
  };

  return (
    <div>
      안녕 나는 검색상자
      <SelectBox
        dataArray={dummyMaker("시")}
        default={"시 이름"}
        changeEvent={() => {
          onChangeHandler("시시시");
        }}
      />
      <SelectBox
        dataArray={dummyMaker("구")}
        default={"구 이름"}
        changeEvent={() => {
          onChangeHandler("구구구");
        }}
      />
      <SelectBox
        dataArray={dummyMaker("동")}
        default={"동 이름"}
        changeEvent={() => {
          onChangeHandler("동동동");
        }}
      />
      <DateSelector />
      <Button clickEvent={() => console.log("작동하고 있어요")}>적용</Button>
    </div>
  );
};

export default ReservationSearchBox;
