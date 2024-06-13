import React from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Header = ({toggleMenu,setToggleMenu}) => {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          {" "}
          <img src="/logo.webp" alt="Logo" />
         {!toggleMenu && <div className="arror-right-for-toggle-menu" onClick={()=>setToggleMenu(true)}>
          <FaAngleLeft size={25} color="gray" />
          </div>}
        </div>
        <div className="profile">
          <img src="/avatar.png" alt="User Profile" />
          <div className="name"><span style={{fontSize:"15px", fontWeight:"bold"}}>김관리님</span> <br /> <span style={{fontSize:"15px", opacity:.5}}>대출관리팀</span></div>
        </div>
      </div>
      <div className="right">
        <button className="bell">
          <HiOutlineBell size={25} />
        </button>
        <div className="search">
          <div className="serach-icon">
            <FiSearch size={25} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <button className="right-arrow-square">
        <BsBoxArrowUpRight size={25} />
        </button>
        <button className="setting">
          <IoSettingsOutline size={25} />
        </button>
      </div>
    </div>
  );
};

export default Header;
