import { useState } from "react";

/**
 * @param {*} props
 * @param { name : String, value : String } dataArray
 * @param { default option name } default
 * @param { onChange Function } changeEvent
 * @returns { conponent : SelectBox }
 */
const SelectBox = (props) => {
  const [datas] = useState(props.dataArray ? props.dataArray : []);

  return (
    <select onChange={props.changeEvent}>
      {props.default && <option value=""> {props.default} </option>}
      {datas.map((el, idx) => {
        return (
          <option key={idx} value={el.value} name={el.name}>
            {el.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBox;
