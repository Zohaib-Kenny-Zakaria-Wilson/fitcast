import React from "react";

export default function ItemMini({ clothingItem }) {
  return (
    <main
      className={`flex flex-col w-48 h-48 rounded-md`}
      style={{ backgroundColor: clothingItem.dominantColor }}
    >
      <div className="w-full h-5/6">
        <img
          className="object-cover object-center w-full h-full rounded-t-md"
          src={`${process.env.PUBLIC_URL}/assets/${clothingItem.imageURL}`}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center w-full h-2/5">
        <p className="text-center " style={{ color: clothingItem.contrastColor }}>
          {clothingItem.name}
        </p>
      </div>
    </main>
  );
}
