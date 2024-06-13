import React from "react";
import TableRow from "./TableRow";
import Pagination from "../pagination/Pagination";
const tableData = [
  {
    NO: "1",
    memberNumber: "Abc123",
    memberName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "hong@example.com",
    category: "CategoryA",
    type: "Type1",
    GUID: "abcd-1234-efgh-5678",
    investmentLoanCount: "5",
    repaymentCount: "3",
    overdueCount: "0",
    investmentApprovalStatus: "Approved",
    dormantStatus: "Active",
    blacklistStatus: "No",
    registrationDate: "2024-01-01 12:00:00",
  },
  {
    NO: "2",
    memberNumber: "Def456",
    memberName: "김철수",
    phoneNumber: "010-9876-5432",
    email: "kim@example.com",
    category: "CategoryB",
    type: "Type2",
    GUID: "ijkl-5678-mnop-1234",
    investmentLoanCount: "10",
    repaymentCount: "8",
    overdueCount: "1",
    investmentApprovalStatus: "Pending",
    dormantStatus: "Inactive",
    blacklistStatus: "Yes",
    registrationDate: "2023-12-15 08:30:00",
  },
  {
    NO: "3",
    memberNumber: "Ghi789",
    memberName: "박영희",
    phoneNumber: "010-1111-2222",
    email: "park@example.com",
    category: "CategoryC",
    type: "Type3",
    GUID: "qrst-9101-uvwx-3456",
    investmentLoanCount: "3",
    repaymentCount: "3",
    overdueCount: "0",
    investmentApprovalStatus: "Approved",
    dormantStatus: "Active",
    blacklistStatus: "No",
    registrationDate: "2024-02-20 14:45:00",
  },
  {
    NO: "4",
    memberNumber: "Jkl012",
    memberName: "이민호",
    phoneNumber: "010-3333-4444",
    email: "lee@example.com",
    category: "CategoryD",
    type: "Type4",
    GUID: "yzab-5678-cdef-9012",
    investmentLoanCount: "7",
    repaymentCount: "6",
    overdueCount: "0",
    investmentApprovalStatus: "Pending",
    dormantStatus: "Inactive",
    blacklistStatus: "No",
    registrationDate: "2024-03-10 09:15:00",
  },
  {
    NO: "5",
    memberNumber: "Mno345",
    memberName: "최지우",
    phoneNumber: "010-5555-6666",
    email: "choi@example.com",
    category: "CategoryE",
    type: "Type5",
    GUID: "ghij-1234-klmn-5678",
    investmentLoanCount: "12",
    repaymentCount: "11",
    overdueCount: "2",
    investmentApprovalStatus: "Rejected",
    dormantStatus: "Active",
    blacklistStatus: "Yes",
    registrationDate: "2024-04-05 16:20:00",
  },
  {
    NO: "6",
    memberNumber: "Pqr678",
    memberName: "강동원",
    phoneNumber: "010-7777-8888",
    email: "kang@example.com",
    category: "CategoryF",
    type: "Type6",
    GUID: "opqr-9101-stuv-3456",
    investmentLoanCount: "8",
    repaymentCount: "7",
    overdueCount: "1",
    investmentApprovalStatus: "Approved",
    dormantStatus: "Inactive",
    blacklistStatus: "No",
    registrationDate: "2024-05-01 10:40:00",
  },
  {
    NO: "7",
    memberNumber: "Stu901",
    memberName: "송중기",
    phoneNumber: "010-9999-0000",
    email: "song@example.com",
    category: "CategoryG",
    type: "Type7",
    GUID: "wxyz-5678-abcd-1234",
    investmentLoanCount: "15",
    repaymentCount: "14",
    overdueCount: "3",
    investmentApprovalStatus: "Pending",
    dormantStatus: "Active",
    blacklistStatus: "Yes",
    registrationDate: "2024-06-01 13:55:00",
  },
  {
    NO: "8",
    memberNumber: "Vwx234",
    memberName: "전지현",
    phoneNumber: "010-1122-3344",
    email: "jeon@example.com",
    category: "CategoryH",
    type: "Type8",
    GUID: "cdef-1234-ghij-5678",
    investmentLoanCount: "9",
    repaymentCount: "8",
    overdueCount: "0",
    investmentApprovalStatus: "Approved",
    dormantStatus: "Inactive",
    blacklistStatus: "No",
    registrationDate: "2024-07-15 11:25:00",
  },
];

const MemberManagementTable = () => {
  return (
    <>
      <div className="member-management-table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>NO</th>
              <th>회원번호</th>
              <th>회원명/법인명</th>
              <th>휴대폰 번호</th>
              <th>이메일ID</th>
              <th>구분</th>
              <th>유형</th>
              <th>GUID</th>
              <th>투자/대출건수</th>
              <th>상환건수</th>
              <th>연체건수</th>
              <th>투자유형승인여부</th>
              <th>휴면상태</th>
              <th>블랙리스트상태</th>
              <th>가입일시</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <TableRow item={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default MemberManagementTable;
