import React, { useState } from "react";
import { ItemTagContainer } from "./ItemTagContainer";

export default function ItemExpanded({
  link,
  parentText,
  color,
  textColor,
  onSubmit
}) {
  const [text, setText] = useState(parentText || "");
  const [selectedOption, setSelectedOption] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, selectedOption });
  };

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
      <form
        className="flex flex-col justify-between w-full min-h-full px-6 py-6 rounded-lg bg-foreground"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            value={text}
            placeholder="Enter item name"
            onChange={handleTextChange}
            className="text-xl font-medium xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw"
          />
          <select
            className="flex w-full max-w-xs p-0 text-lg select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option disabled value="">
              Category
            </option>
            <option>Shirt</option>
            <option>Pants</option>
            <option>Shoes</option>
            <option>Accessories</option>
          </select>
        </div>
        <ItemTagContainer />
        <button
          type="submit"
          className="py-3 rounded-md full bg-primary-tw text-background"
        >
          <p>Add Item</p>
        </button>
      </form>
    </div>
  );
}
