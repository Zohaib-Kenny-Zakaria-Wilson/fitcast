import React from "react";
import { ClothingTagContainer } from "./ClothingTagContainer";

export default function ClothingExpandedDisplay({
  link,
  text,
  color,
  textColor,
}) {
  return (
    <div
      className={`modal-box min-w-[75vw] min-h-[50vw] xl:min-w-[60vw] xl:min-h-[35vw] p-12 flex gap-12 text-primary-tw`}
      style={{ backgroundColor: color }}
    >
      <div className="flex w-full min-h-full">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={`${process.env.PUBLIC_URL}/assets/${link}`}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-full min-h-full px-6 py-6 rounded-lg bg-foreground">
        <div>
          <p className="text-xl font-medium xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw">
            {text}
          </p>
          <p className=" text-2xl text-[#7A7A7A] dark:text-dark-primary-tw">
            {/* NOTE: This will have to be changed later as it will pass in the clothing category */}
            Shirt
          </p>
        </div>
        {/* Weather Conditions */}
        <ClothingTagContainer />
        <button className="full bg-primary-tw text-background py-3 rounded-md">
          <p>Add Item</p>
        </button>
      </div>
    </div>
  );
}
