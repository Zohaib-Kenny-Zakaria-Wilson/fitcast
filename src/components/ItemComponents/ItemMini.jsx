import React from "react";

const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/1170x2532";

export default function ItemMini({ clothingItem }) {
  return (
    <main
      className={`flex flex-col rounded-md shadow-md hover:shadow-none hover:translate-y-0.5 transition-all duration-75`}
      style={{}}
    >
      <div
        className="w-full h-52 rounded-t-md"
        style={{
          backgroundImage: `url(${
            clothingItem.image_url || PLACEHOLDER_IMAGE_URL
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="flex items-center justify-center w-full py-5 bg-opacity-50 rounded-b-md h-fit"
        style={{
          backgroundColor: clothingItem.dominantColor,
        }}
      >
        <p
          className="text-center"
          style={{ color: clothingItem.contrastColor }}
        >
          {clothingItem.name}
        </p>
      </div>
    </main>
  );
}
