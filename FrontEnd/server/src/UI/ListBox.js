import React, { useState } from "react";
import Card from "./Card";

const ListBox = (props) => {
  /**
   * 1. 배열과 컴포넌트(contextBox)를 props로 받는다.
   * 2. contextBox를 <Card>와 <li>로 감싼다.
   * 3. 배열의 데이터를 contextBox의 props로 주입한다
   * 4. 배열 길이만큼 반복한다
   */
  const [data, setData] = useState(props.dataArray);
  const contentBox = props.children;

  //가로세로 props로 받기 그래서 플렉스 박스 방향 바꾸기
  return (
    <ul>
      {data.map((element, idx) => {
        return (
          <li key={idx}>
            <Card>{React.cloneElement(contentBox, element)}</Card>
          </li>
        );
      })}
    </ul>
  );
};

export default ListBox;
