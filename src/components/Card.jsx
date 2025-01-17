import React from "react";

const Card = ({ style, children, p = "p-4" }) => {
  return (
    <div
      className={`border-[2px] border-slate-300 shadow-sm rounded-2xl ${style} ${p}`}
    >
      {children}
    </div>
  );
};

export default Card;
