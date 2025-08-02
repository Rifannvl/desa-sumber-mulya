import React from "react";

const Heading = ({ level = 2, children, className = "" }) => {
  const Tag = `h${level}`;
  const sizes = {
    1: "text-3xl font-bold",
    2: "text-2xl font-semibold",
    3: "text-xl font-medium",
    4: "text-lg font-medium",
  };

  return <Tag className={`${sizes[level]} ${className}`}>{children}</Tag>;
};

export default Heading;
