import SelectBox from "../../UI/SelectBox";
import { useRef, useState, useEffect } from "react";
import axiosInstance from "../../util/axios";

import classes from "./MyReservationSearchBox.module.scss";

const MyReservationSearchBox = (props) => {
  const [sido, setSido] = useState();
  const [gugun, setGugun] = useState();
  const [dong, setDong] = useState();
  const buildingName = useRef();

  const [sidoList, setSidoList] = useState([]);
  const [gugunList, setGugunList] = useState([]);
  const [dongList, setDongList] = useState([]);

  const changeEventHandler = (e, setter) => {
    if (e.target) {
      if (e.target.id === "sidoSelector") {
        setGugun("");
        setDong("");
      }

      if (e.target.id === "gugunSelector") {
        setDong("");
      }

      setter(e.target.value);
    } else {
      console.log("뭥미");
    }
  };

  useEffect(() => {
    (async () => {  
      try {
        const result = await axiosInstance.get("regions", {
          params: {
            regionCode: "",
          },
        });
  
        const dataArray = result.data.data;
        setSidoList(dataArray);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

useEffect(() => {
  (async () => {
    if (!sido) {
      setGugunList([]);
      setDongList([]);
      return;
    }

    try {
      const result = await axiosInstance.get("regions", {
        params: {
          regionCode: sido.substring(0, 2),
        },
      });

      const dataArray = result.data.data;
      dataArray.shift();
      setGugunList(dataArray);
    } catch (err) {
      throw new Error(err);
    }
  })();
}, [sido]);

useEffect(() => {
  (async () => {
    if (!gugun) {
      setDongList([]);
      return;
    }

    try {
      const result = await axiosInstance.get("regions", {
        params: {
          regionCode: gugun.substring(0, 5),
        },
      });

      const dataArray = result.data.data;
      dataArray.shift();
      setDongList(dataArray);
    } catch (err) {
      throw new Error(err);
    }
  })();
}, [gugun]);


  return (
    <div className={classes.searchBox}>
      {/* <p>안녕 나는 검색상자</p> */}
      <div className={classes.selectBox}>
      <SelectBox
          dataArray={sidoList}
          first={"시를 선택해 주세요"}
          defaultValue={sido}
          value={"regionCode"}
          name={"sidoName"}
          id={"sidoSelector"}
          changeEventHandler={(e) => {
            changeEventHandler(e, setSido);
          }}
        />
        <SelectBox
          dataArray={gugunList}
          first={"구를 선택해 주세요"}
          defaultValue={gugun}
          value={"regionCode"}
          name={"gugunName"}
          id={"gugunSelector"}
          changeEventHandler={(e) => {
            changeEventHandler(e, setGugun);
          }}
        />
        <SelectBox
          dataArray={dongList}
          first={"동을 선택해 주세요"}
          defaultValue={dong}
          value={"regionCode"}
          name={"dongName"}
          id={"dongSelector"}
          changeEventHandler={(e) => {
            changeEventHandler(e, setDong);
          }}
        />
      </div>
      <div className={classes.searchInput}>
        <input 
        placeholder="건물명을 입력해주세요."
        id="buildingName" 
        ref={buildingName}
        />
        <button
          onClick={() =>
            props.clickSearchEventHandler(sido, gugun, dong, buildingName.current.value)
          }
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default MyReservationSearchBox;
