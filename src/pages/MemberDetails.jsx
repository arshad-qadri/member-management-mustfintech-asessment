import React from "react";
import MemberManagementTable from "../components/Tables/MemberManagementTable";
import MemberManagementDetailsHeader from "../components/header/MemberManagementDetailsHeader";

const MemberDetails = () => {
  return (
    <div className="member-details">
      <MemberManagementDetailsHeader/>
      <MemberManagementTable />
    </div>
  );
};

export default MemberDetails;
