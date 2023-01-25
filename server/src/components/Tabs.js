import React, { useState } from "react";
import SignUpPageUser from "./SignUpPageUser";
import SignUpPageRealtor from "./SignUpPageRealtor";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <>
      <ul>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          일반 회원 가입
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          중개사 회원 가입
        </li>
      </ul>
      {activeTab === "tab1" ? <SignUpPageUser /> : <SignUpPageRealtor />}
    </>
  );
};

export default Tabs;
