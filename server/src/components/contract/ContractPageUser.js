import { useEffect, useState } from "react";
import ContractInfo from "./ContractInfo";
import ContractForSale from "./ContractForSale";
import ContractTenantInfo from "./ContractTenantInfo";
import ContractRequireInfo from "./ContractRequireInfo";
import ContractExpectedCost from "./ContractExpectedCost";
import classes from "./ContractPageUser.module.scss";
import axiosInstance from "../../util/axios";
import { getContractInfoByItemNo } from "../../apis/contractApis";
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

  const [requireInfo, setRequireInfo] = useState({
    numberOfResidents: "",
    specialContract: "",
  });

  const passInfo = {
    userTermOfContract: forSaleInfo.userTermOfContract,
    userMoveOnDate: forSaleInfo.userMoveOnDate,
    address: tenantInfo.address,
    addressDetail: tenantInfo.addressDetail,
    age: tenantInfo.age,
    numberOfResidents: requireInfo.numberOfResidents,
    specialContract: requireInfo.specialContract,
    deposit: data.data.itemInfo.deposit,
    rent: data.data.itemInfo.rent,
  };

  // console.log(data);
  // console.log(forSaleInfo);
  // console.log(tenantInfo);
  console.log(requireInfo);

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
        <ContractRequireInfo fx={setRequireInfo} />
      </section>
      <section>
        <ContractExpectedCost passInfo={passInfo} />
      </section>
    </>
  );
};

export const loader = async ({ params }) => {
  const itemNo = params.itemNo;
  const result = await getContractInfoByItemNo(itemNo);

  return result;
};

export default ContractPageUser;
