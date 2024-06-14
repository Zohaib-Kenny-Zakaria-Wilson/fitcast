import React from "react";

export default function ItemTag({ onClick, text, color, textColor, borderColor }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center gap-2 px-1 py-1 border-2 rounded-lg cursor-pointer w-fit xl:px-2 xl:py-2 2xl:px-4 2xl:py-3"
      style={{ backgroundColor: color, color: textColor, borderColor: borderColor }}
    >
      <p className="text-xs 2xl:text-base">{text}</p>
    </div>
  );
}
