import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-green-600 hover:bg-green-700 text-white",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md transition duration-300 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
