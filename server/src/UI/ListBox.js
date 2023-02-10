import React from "react";
import Card from "./Card";
import classes from "./ListBox.module.scss";

const ListBox = ({ dataArray, children, direction, toStart, active }) => {
  /**
   * 1. 배열과 컴포넌트(contextBox)를 props로 받는다.
   * 2. contextBox를 <Card>와 <li>로 감싼다.
   * 3. 배열의 데이터를 contextBox의 props로 주입한다
   * 4. 배열 길이만큼 반복한다
   */

  // const [data] = useState(dataArray ? dataArray : []);

  //가로세로 props로 받기 그래서 플렉스 박스 방향 바꾸기
  return (
    <>
      {dataArray?.length !== 0 && (
        <ul
          className={`${classes.list_box} ${direction ? classes.row : ""} ${
            toStart ? classes.toStart : ""
          }`}
        >
          {dataArray.length &&
            dataArray.map((element, idx) => {
              return (
                <li key={idx}>
                  <Card>
                    {React.cloneElement(children, { ...element, idx })}
                  </Card>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default ListBox;
