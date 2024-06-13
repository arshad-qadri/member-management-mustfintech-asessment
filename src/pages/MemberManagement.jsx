import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import MemberManagementHeader from "../components/header/MemberManagementHeader";
import MemberManagementTable from "../components/Tables/MemberManagementTable";

const MemberManagement = () => {
  return (
    <DashboardLayout>
      <MemberManagementHeader/>
      <MemberManagementTable/>
    </DashboardLayout>
  );
};

export default MemberManagement;
