import React from "react";

const Button = ({
  textSize = "text-md",
  bg = "bg-blue-600 hover:bg-blue-500",
}) => {
  return (
    <>
      <button
        className={`${textSize} font-medium py-2 px-6 ${bg} duration-100 text-white rounded-2xl`}
      >
        <span>Button</span>
      </button>
    </>
  );
};

export default Button;
