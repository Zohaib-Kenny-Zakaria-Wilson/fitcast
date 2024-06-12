import React, { useState } from "react";
import { ItemTagContainer } from "./ItemTagContainer";

export default function ItemExpanded({
  clothingItem,
  onSubmit,
  buttonText
}) {
  // State to store the item being edited
  const [item, setItem] = useState(clothingItem);

  /**
   * updates the item name in the state
   * @param {event} e
   * 
   * @returns {void}
   */
  const handleTextChange = (e) => {
    setItem({
      ...item,
      name: e.target.value,
    });
  };

  /**
   * updates the selectChange in the state  
   * @param {event} e
   * 
   * @returns {void}
   */
  const handleSelectChange = (e) => {
    setItem({
      ...item,
      category: e.target.value,
    });
  };

  /**
   * updates the tag in the state
   * @param {event} e
   * 
   * @returns {void}
   */
  const toggleTag = (tag) => {
    setItem((prevItem) => ({
      ...prevItem,
      [tag]: !prevItem[tag],
    }));
  };

  /**
   * Handles the form submission and calls the onSubmit function
   * @param {event} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
  };

  return (
    <div
      className={`modal-box min-w-[75vw] min-h-[50vw] xl:min-w-[60vw] xl:min-h-[35vw] p-12 flex gap-12 text-primary-tw`}
      style={{ backgroundColor: item.dominantColor }}
    >
      <div className="flex w-full min-h-full">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
          alt=""
        />
      </div>
      <form
        className="flex flex-col justify-between w-full min-h-full px-6 py-6 rounded-lg bg-foreground"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            value={item.name}
            placeholder="Enter item name"
            onChange={handleTextChange}
            className="text-xl font-medium xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw"
          />
          <select
            className="flex w-full max-w-xs p-0 text-lg select"
            value={item.category}
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
        <ItemTagContainer tagsState={item} toggleTag={toggleTag} />
        <button
          type="submit"
          className="py-3 rounded-md full bg-primary-tw text-background"
        >
          <p>{buttonText}</p>
        </button>
      </form>
    </div>
  );
}
