import React from "react";

const CommonButton = ({ onClick, title }) => {
  return (
    <button
      className="text-white  cursor-pointer capitalize z-10 py-2  bg-mainDarkText rounded-lg px-8 bg-opacity-50 hover:bg-opacity-100"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CommonButton;
