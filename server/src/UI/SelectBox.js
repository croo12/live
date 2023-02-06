import { useState } from "react";
import classes from "./SelectBox.module.scss";

/**
 * @param {*} props
 * @param { name : String, value : String } dataArray
 * @param { default option name } default
 * @param { onChange Function } changeEventHandler
 * @returns { conponent : SelectBox }
 */
const SelectBox = (props) => {
  const [datas] = useState(props.dataArray ? props.dataArray : []);

  return (
    <div className={classes.customSelector}>
      <select className={classes.select} onChange={props.changeEventHandler}>
        {props.default && <option value=""> {props.default} </option>}
        {datas.map((el, idx) => {
          return (
            <option key={idx} value={el.value} name={el.name}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
