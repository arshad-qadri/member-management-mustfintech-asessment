import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ item }) => {
  const {pathname} = useLocation();
  console.log("location===", location);
  return (
    <Link to={item.url} style={{textDecoration:"none"}}>
      <div className={`menu-item-container ${pathname===item.url?"selected":""}`}>
        <div className="menu-item-icon">{item.icon}</div>
        <div className={`menu-item-label ${pathname===item.url?"selected":""}`}>{item.label}</div>
      </div>
    </Link>
  );
};

export default MenuItem;
