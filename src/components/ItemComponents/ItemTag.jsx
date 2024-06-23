import React from "react";

export default function ItemTag({
  onClick,
  text,
  color,
  textColor,
  borderColor,
  hoverColor,
  hoverTextColor,
}) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center gap-2 py-1 px-2 md:py-2 transition-all transform duration-150 border-2 rounded-sm cursor-pointer w-fit hover:scale-105 hover:shadow-md`}
      style={{
        backgroundColor: color,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      <p
        className="text-xs transition-colors duration-150 md:text-base user-select-none"
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        {text}
      </p>
    </div>
  );
}
