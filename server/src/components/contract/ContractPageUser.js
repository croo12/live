import { useState } from "react";
import ContractInfo from "./ContractInfo";
import ContractForSale from "./ContractForSale";
import ContractTenantInfo from "./ContractTenantInfo";
import ContractRequireInfo from "./ContractRequireInfo";
import ContractExpectedCost from "./ContractExpectedCost";
import classes from "./ContractPageUser.module.scss";

const ContractPageUser = () => {
  return (
    <>
      <section>
        <ContractInfo />
      </section>
      <section>
        <ContractForSale />
      </section>
      <section>
        <ContractTenantInfo />
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

export default ContractPageUser;
