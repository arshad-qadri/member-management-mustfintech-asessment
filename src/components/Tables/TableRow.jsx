import React from "react";

const TableRow = ({ item }) => {
  return (
    <tr>
      <td style={{ padding: "0 5px", textAlign: "center" }}>
        <input type="checkbox" />
      </td>
      <td style={{ padding: "0 5px", textAlign: "center" }}>{item.NO}</td>
      <td>{item.memberNumber}</td>
      <td>{item.memberName}</td>
      <td>{item.phoneNumber}</td>
      <td>{item.email}</td>
      <td>{item.category}</td>
      <td>{item.type}</td>
      <td>{item.GUID}</td>
      <td>{item.investmentLoanCount}</td>
      <td>{item.repaymentCount}</td>
      <td>{item.overdueCount}</td>
      <td>{item.investmentApprovalStatus}</td>
      <td>{item.dormantStatus}</td>
      <td>{item.blacklistStatus}</td>
      <td>{item.registrationDate}</td>
    </tr>
  );
};

export default TableRow;
