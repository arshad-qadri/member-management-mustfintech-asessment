import React, { useState } from "react";
import Header from "../components/header/Header";
import LeftSideMenu from "../components/menu/LeftSideMenu";
import { FaAngleRight } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className={toggleMenu ? "main-container" : ""} style={{overflow:"hidden",height:"100vh"}}>
        {toggleMenu && (
          <div className="left-section">
            <FaAngleRight
              size={25}
              color="gray"
              onClick={() => setToggleMenu(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
        <div className="right-section">
          <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <div className={!toggleMenu ? "layout-container" : ""}>
            {!toggleMenu && <LeftSideMenu />}
            <div
              className="hero"
              style={{
                padding: !toggleMenu ? "0 30px 0 30px" : "0 30px 0 52px",
                width:!toggleMenu? "calc(100vw - 253px)":"calc(100vw - 30px"
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
