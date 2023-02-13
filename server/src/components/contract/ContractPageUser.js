import { useEffect, useState } from "react";
import ContractInfo from "./ContractInfo";
import ContractForSale from "./ContractForSale";
import ContractTenantInfo from "./ContractTenantInfo";
import ContractRequireInfo from "./ContractRequireInfo";
import ContractExpectedCost from "./ContractExpectedCost";
import classes from "./ContractPageUser.module.scss";
import axiosInstance from "../../util/axios";
import { getContractInfoByItemNo } from "../../apis/ContractApis";
import { useLoaderData } from "react-router-dom";

const ContractPageUser = () => {
  const data = useLoaderData();

  const [forSaleInfo, setForSaleInfo] = useState({
    userTermOfContract: "",
    userMoveOnDate: "",
  });

  const [tenantInfo, setTeanatInfo] = useState({
    address: "",
    addressDetail: "",
    age: "",
  });

  const [requireInfo, setRequireInfo] = useState({});

  // console.log(data);
  // console.log(forSaleInfo);
  console.log(tenantInfo);

  return (
    <>
      <section>
        <ContractInfo realtorInfoList={data.data.realtorInfo} />
      </section>
      <section>
        <ContractForSale
          itemInfoList={data.data.itemInfo}
          fx={setForSaleInfo}
        />
      </section>
      <section>
        <ContractTenantInfo
          userInfoList={data.data.userInfo}
          fx={setTeanatInfo}
        />
      </section>
      <section>
        <ContractRequireInfo />
      </section>
      <section>
        <ContractExpectedCost />
      </section>
    </>
  );
};

export const loader = async () => {
  const itemNo = 1;
  const result = await getContractInfoByItemNo(itemNo);

  return result;
};

export default ContractPageUser;
