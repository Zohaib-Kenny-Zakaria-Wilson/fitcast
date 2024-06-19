import React, { useState } from "react";
import { ItemTagContainer } from "./ItemTagContainer";
import ColorThief from 'colorthief';
import chroma from 'chroma-js';
import useDarkMode from "../../hooks/useDarkMode";


// Placeholder image for the image when no image is found
const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/150";

export default function ItemExpanded({
  clothingItem,
  onSubmit,
  buttonText
}) {
  // State to store the item being created/edited
  const [item, setItem] = useState(clothingItem);
  const [isDarkMode] = useDarkMode();

  /**
   * handles the text change event
   * @param {event} e
   */
  const handleTextChange = (e) => {
    setItem({
      ...item,
      name: e.target.value,
    });
  };

  /**
   * handles the category change event
   * @param {event} e
   */
  const handleSelectChange = (e) => {
    setItem({
      ...item,
      category: e.target.value,
    });
  };

  /**
   * handles the tag toggle event
   * @param {event} tag
   */
  const toggleTag = (tag) => {
    setItem((prevItem) => ({
      ...prevItem,
      [tag]: !prevItem[tag],
    }));
  };

  /**
   * Handles the file change event
   * @param {event} e
   * @returns {void}
   */
  const handleFileChange = (e) => {
    // Get the file from the event
    const file = e.target.files[0];
    // If a file is found, read the file and set the item image
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        const imageURL = upload.target.result;
        setItem((prevItem) => ({
          ...prevItem,
          imageURL,
        }));
        // Extract the dominant color from the image
        extractDominantColor(imageURL);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Extracts the dominant color from the image and sets the item's dominant color and contrast color
   * @param {event} imageURL
   */
  const extractDominantColor = (imageURL) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageURL;
    img.onload = () => {
      // Create a new ColorThief instance and extract the dominant color from the image
      const colorThief = new ColorThief();
      const dominantColor = colorThief.getColor(img);

      // Create a chroma color from the dominant color and determine the contrasting color (To match the hue of the dominant color)
      const dominantChromaColor = chroma(dominantColor);

      // Determine the contrasting color based on the luminance of the dominant color
      const contrastingColor = dominantChromaColor.luminance() > 0.5 ? dominantChromaColor.darken(3) : dominantChromaColor.brighten(3);

      // Set the item's dominant color and contrast color
      setItem((prevItem) => ({
        ...prevItem,
        dominantColor: `rgb(${dominantColor.join(',')})`,
        contrastColor: contrastingColor.hex(),
      }));
    };
  };

  /**
   * handles the form submission event
   * @param {event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
  };

  // NOTICE: The backgroundColor is set to the item's dominant color if it exists, otherwise it is set to the dark mode or light mode background color
  const backgroundColor = item.dominantColor && item.dominantColor.trim() !== "" ? item.dominantColor : (isDarkMode ? "#272626" : "#F0F0F0");


  return (
    <main
      className={`modal-box lg:min-w-fit min-h-fit p-6 md:p-12 flex flex-col lg:flex-row gap-4 lg:gap-12 text-primary-tw max-w-[80vw] lg:max-w-[75vw] xl:max-w-[65vw] 2xl:max-w-[60vw] bg-primary-tw dark:bg-dark-foreground`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div 
        className="relative w-full lg:w-1/2 min-h-[200px] lg:min-h-full rounded-lg overflow-hidden" 
        style={{ 
          backgroundImage: `url(${item.imageURL || PLACEHOLDER_IMAGE_URL})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <label className="absolute inset-0 flex items-center justify-center p-3 text-white bg-black bg-opacity-50 rounded-lg opacity-0 cursor-pointer hover:opacity-100 hover:backdrop-blur-sm">
          <span className="px-6 py-2 text-base font-medium rounded-lg bg-primary-tw dark:bg-primary-tw-dark text-background">Add a file</span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <form
        className="flex flex-col justify-between w-full min-h-full gap-6 px-6 py-6 rounded-lg lg:w-1/2 bg-foreground dark:bg-dark-foreground"
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
          className="w-full py-3 rounded-md bg-primary-tw dark:bg-dark-primary-tw text-background dark:text-dark-background"
        >
          <p>{buttonText}</p>
        </button>
      </form>
    </main>
  );
}
