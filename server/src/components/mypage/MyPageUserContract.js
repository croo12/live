import { useState } from "react";
import classes from "./MyPageUserContract.module.scss";
import ListBox from "../../UI/ListBox";
import ContractCardContent from "../ContractCardContent";

const data = ["전체 계약", "대기중 계약", "진행중 계약", "완료된 계약"];

const MyPageUserContract = () => {
  const [tabActive, setTabActive] = useState(0);

  const toggleActive = (e) => {
    setTabActive(Number.parseInt(e.target.value));
  };

  return (
    <>
      <div className={classes.consultBox}>
        <div className={classes.consulting}>
          <div className={classes.consultingContent}>
            <div className={classes.inner}>
              <div>
                <h3>계약 관리</h3>
                <span>
                  {data.map((item, idx) => {
                    return (
                      <button
                        key={idx}
                        value={idx}
                        className={`${classes.btn} ${
                          idx === tabActive ? classes.active : ""
                        }`}
                        onClick={toggleActive}
                      >
                        {item}
                      </button>
                    );
                  })}
                </span>
                <div className={classes.consultingList}>
                  {tabActive === 0 && (
                    <div>
                      <p>전체 계약</p>
                      <ListBox dataArray={[0, 1]} direction={false}>
                        <ContractCardContent tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 1 && (
                    <div>
                      <p>대기중 계약</p>
                      <ListBox dataArray={[0, 1]} direction={false}>
                        <ContractCardContent tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 2 && (
                    <div>
                      <p>진행중 계약</p>
                      <ListBox dataArray={[0, 1]} direction={false}>
                        <ContractCardContent tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                  {tabActive === 3 && (
                    <div>
                      <p>완료된 계약</p>
                      <ListBox dataArray={[0, 1]} direction={false}>
                        <ContractCardContent tabActive={tabActive} />
                      </ListBox>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageUserContract;
