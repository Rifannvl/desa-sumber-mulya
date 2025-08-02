import React from "react";

const Image = ({ src, alt, className = "" }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover ${className}`}
      />
    </div>
  );
};

export default Image;
