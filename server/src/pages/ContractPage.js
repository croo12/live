import { useState } from "react";
import classes from "./ContractPage.module.scss";
import ContractInfo from "../components/contract/ContractInfo";
import ContractForSale from "../components/contract/ContractForSale";
import ContractTenantInfo from "../components/contract/ContractTenantInfo";
import ContractRequireInfo from "../components/contract/ContractRequireInfo";
import ContractExpectedCost from "../components/contract/ContractExpectedCost";

const ContractPage = () => {
  const [btnActive, setBtnActive] = useState(0);
  const [isRealtor, toggleRealtor] = useState(null);

  return (
    <>
      <section>
        <ContractInfo />
      </section>
      <section>
        <ContractForSale isRealtor={isRealtor} />
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

export default ContractPage;
