import React from "react";

const Button = ({
  textSize = "text-md",
  bg = "bg-blue-600 hover:bg-blue-500",
  children,
}) => {
  return (
    <>
      <button
        className={`${textSize} font-medium py-2 px-6 ${bg} duration-100 text-white rounded-full`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
