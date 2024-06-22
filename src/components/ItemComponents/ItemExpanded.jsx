import React, { useState } from "react";
import { ItemTagContainer } from "./ItemTagContainer";
import useDarkMode from "../../hooks/useDarkMode";
import {
  compressImage,
  removeBackground,
  extractDominantColor,
} from "../../utils/imageFunctions";

// Placeholder image for the image when no image is found
const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/150";

export default function ItemExpanded({ clothingItem, onSubmit, buttonText }) {
  const [item, setItem] = useState(clothingItem);
  const [isDarkMode] = useDarkMode();
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => {
    setItem({
      ...item,
      name: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setItem({
      ...item,
      category: e.target.value,
    });
  };

  const toggleTag = (tag) => {
    setItem((prevItem) => ({
      ...prevItem,
      [tag]: !prevItem[tag],
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (upload) => {
        const imageURL = upload.target.result;
        setItem((prevItem) => ({
          ...prevItem,
          imageURL: imageURL,
        }));
        setLoading(true);
        const compressedImageURL = await compressImage(imageURL);
        const bgRemovedImageURL = await removeBackground(compressedImageURL);
        await extractDominantColor(bgRemovedImageURL, setItem);

        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
  };

  const backgroundColor =
    item.dominantColor && item.dominantColor.trim() !== ""
      ? item.dominantColor
      : isDarkMode
      ? "#272626"
      : "#F0F0F0";

  return (
    <main
      className={`modal-box lg:min-w-fit min-h-fit p-6 md:p-12 flex flex-col lg:flex-row gap-4 lg:gap-12 text-primary-tw max-w-[80vw] lg:max-w-[75vw] xl:max-w-[65vw] 2xl:max-w-[60vw] bg-primary-tw dark:bg-dark-foreground`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className="relative w-full lg:w-1/2 min-h-[200px] lg:min-h-full rounded-md overflow-hidden"
        style={{
          backgroundImage: `url(${item.imageURL || PLACEHOLDER_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <label className="absolute inset-0 flex items-center justify-center p-3 text-white bg-black bg-opacity-50 rounded-md opacity-0 cursor-pointer hover:opacity-100 hover:backdrop-blur-sm">
          <span className="px-6 py-2 text-base font-medium rounded-sm bg-background dark:bg-primary-tw-dark text-primary-tw">
            {loading ? "Loading..." : "Add a file"}
          </span>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
      <form
        className="flex flex-col justify-between w-full min-h-full gap-6 px-6 py-6 rounded-md lg:w-1/2 bg-foreground dark:bg-dark-foreground"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            value={item.name}
            placeholder="Enter item name"
            onChange={handleTextChange}
            className="w-full text-3xl font-medium xl:text-2xl 2xl:text-4xl bg-foreground dark:bg-dark-foreground focus:outline-none dark:text-dark-primary-tw text-primary-tw"
            style={{ color: item.textColor }}
          />
          <select
            className="flex w-1/2 p-0 text-xl select bg-foreground dark:bg-dark-foreground focus:outline-none focus:border-transparent dark:text-dark-primary-tw text-secondary-tw"
            value={item.category}
            onChange={handleSelectChange}
            style={{ color: item.textColor }}
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
          className="w-full py-3 rounded-sm bg-primary-tw dark:bg-dark-primary-tw text-background dark:text-dark-background"
        >
          <p>{buttonText}</p>
        </button>
      </form>
    </main>
  );
}
