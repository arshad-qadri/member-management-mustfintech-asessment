import React from "react";
import DropDown from "../DropDown";

const MemberManagementDetailsHeader = () => {
  return (
    <div className="member-details-header">
      <div className="title">
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>회원상세 </span>{" "}
        <span className="red-dot">필수항목</span>
      </div>
      <div className="tabs">
        <div className="tab">기본정보 관리</div>
        <div className="tab selected">투자유형 관리</div>
        <div className="tab">입출금내역 조회</div>
        <div className="tab">영업내역 조회</div>
        <div className="tab">투자내역 조회</div>
        <div className="tab">SMS 관리</div>
        <div className="tab">상담내역 관리</div>
        <div className="tab">1:1문의내역 조회</div>
      </div>
      <div className="table-header">
        <div className="left-sec">
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            신청 목록{" "}
          </span>{" "}
          <span style={{ fontSize: "15px", opacity: 0.7, marginLeft: "10px" }}>
            (총 100명 | 승인대기 1건)
          </span>
        </div>
        <div className="right-sec">
          <DropDown />
          <DropDown />
          <DropDown />
        </div>
      </div>
      <div className="table-headre-bottom">
        <div className="left-sec">
          <button className="btn color">등록</button>
        </div>
        <div className="right-sec">
          <button className="btn">선택한 이건</button>
          <DropDown />
          <button className="btn color">저장</button>
        </div>
      </div>
    </div>
  );
};

export default MemberManagementDetailsHeader;
