import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { IoMdInformationCircleOutline } from "react-icons/io";

const LeftSideMenu = () => {
  const menu = [
    { label: "대시보드", icon: <FaHome size={20} />, url: "/" },
    { label: "회원 관리", icon: <FaUser size={20} />, url: "/member-management" },
    { label: "회원 세부정보", icon: <IoMdInformationCircleOutline size={20} /> , url: "/member-details" },
  ];
  return (
    <div className="left-menu-container">
      {menu.map((item, index) => (
       <MenuItem item={item} key={index} />
      ))}
    </div>
  );
};

export default LeftSideMenu;
