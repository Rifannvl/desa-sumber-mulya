import React from "react";

const Card = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-white rounded-lg shadow-md",
    primary: "bg-blue-50 border border-blue-100",
    secondary: "bg-gray-50 border border-gray-100",
  };

  return (
    <div className={`p-4 md:p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
