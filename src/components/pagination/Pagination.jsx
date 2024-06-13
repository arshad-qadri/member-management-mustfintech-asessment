import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pagination">
      <div className="icon">
        <MdOutlineKeyboardDoubleArrowLeft size={30} color="gray" />
      </div>
      <div className="icon">
        <MdOutlineKeyboardArrowLeft size={30} color="gray" />
      </div>

      {pages.map((num) => (
        <div className={`page-num ${num === 1 ? "selected" : ""}`}>{num}</div>
      ))}
      <div className="icon">
        <MdOutlineKeyboardArrowRight size={30} color="gray" />
      </div>
      <div className="icon">
        <MdOutlineKeyboardDoubleArrowRight size={30} color="gray" />
      </div>
    </div>
  );
};

export default Pagination;
