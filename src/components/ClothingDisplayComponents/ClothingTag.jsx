import React from "react";

export default function ClothingTag({ onClick, text, color, textColor }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center w-full gap-2 px-1 py-2 rounded-lg xl:px-2 xl:py-3 2xl:px-4 2xl:py-3 bg-background dark:bg-dark-background text-primary-tw dark:text-dark-primary-tw"
    >
      <p className="text-xs xl:text-sm 2xl:text-base">{text}</p>
    </div>
  );
}
