import React from "react";

const CommonButton = ({ onClick, title }) => {
  return (
    <button
      className="text-white  cursor-pointer capitalize  py-2  bg-mainDarkText rounded-lg px-8 "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CommonButton;
