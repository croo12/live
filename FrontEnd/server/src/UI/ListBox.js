import React, { useState } from "react";
import Card from "./Card";

const ListBox = (props) => {
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
