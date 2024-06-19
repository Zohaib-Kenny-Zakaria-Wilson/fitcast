import React from "react";

export default function ItemTag({ onClick, text, color, textColor, borderColor }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center gap-2 px-2 py-2 border-2 rounded-lg cursor-pointer w-fit"
      style={{ backgroundColor: color, color: textColor, borderColor: borderColor }}
    >
      <p className="text-xs md:text-base">{text}</p>
    </div>
  );
}
