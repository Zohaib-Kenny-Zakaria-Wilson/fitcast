import { useCallback } from "react";
import useAppContext from "../context/useAppContext";

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Filter clothing items by weather conditions
 * @param {clothingItem[]} items the list of clothing items
 * @param {wthrConditions} conditions the weather conditions
 * @returns the filtered list of clothing items
 */
function filterItemsByConditions(items, conditions) {
  // If conditions are undefined, return all items
  if (!conditions) {
    return items;
  }

  // Filter items by conditions
  return items.filter((item) => {
    return (
      // Match hot or cold weather
      ((conditions.hotWeather && item.hotWeather) ||
        (conditions.coldWeather && item.coldWeather)) &&
      // Match high or low wind
      ((conditions.highWind && item.highWind) ||
        (conditions.lowWind && item.lowWind)) &&
      // Match high or low rain
      ((conditions.highRain && item.highRain) ||
        (conditions.lowRain && item.lowRain)) &&
      // Match high or low humidity
      ((conditions.highHumidity && item.highHumidity) ||
        (conditions.lowHumidity && item.lowHumidity))
    );
  });
}

/**
 * categorizeItems - Categorizes items into different categories
 * @param {*} items the list of clothing items
 * @returns the categorized items
 */
function categorizeItems(items) {
  // Initialize categories
  const itemCategories = {
    shirt: [],
    pants: [],
    accessories: [],
    shoes: [],
  };

  // Categorize items
  items.forEach((item) => {
    const normalizedCategory = item.type.toLowerCase(); // Normalize category name
    if (itemCategories[normalizedCategory]) {
      itemCategories[normalizedCategory].push(item);
    } else {
    }
  });

  // Return categorized items
  return itemCategories;
}

/**
 * generateRandomOutfit - Generates a random outfit from the given categories
 * @param {itemCategories[]} categories item categories
 * @returns the generated outfit
 */
function generateRandomOutfit(categories) {
  // Initialize outfit
  const outfit = [];

  // Generate outfit (ChatGPT code snippet)
  Object.keys(categories).forEach((category) => {
    if (categories[category].length > 0) {
      outfit.push(getRandomItem(categories[category]));
    }
  });

  // Return outfit
  return outfit;
}

/**
 * getFallbackOutfit - Generates a random outfit from all items
 * @param {clothingItem[]} items
 * @returns the generated outfit
 */
function getFallbackOutfit(items) {
  // Categorize full list of items
  const categories = categorizeItems(items);
  // Generate random outfit
  return generateRandomOutfit(categories);
}

/**
 * useOutfitGenerator - Custom hook to generate an outfit based on weather conditions
 * @returns the outfit generator function
 */
export default function useOutfitGenerator() {
  // Get clothing items and weather conditions from context
  const { clothingItems, wthrConditions } = useAppContext();

  // Return outfit generator function
  return useCallback(() => {
    // calls the getFallbackOutfit function if wthrConditions is undefined
    if (!wthrConditions) {
      return getFallbackOutfit(clothingItems);
    }

    // Filter, categorize, and generate outfit
    const filteredItems = filterItemsByConditions(
      clothingItems,
      wthrConditions
    );
    const categorizedItems = categorizeItems(filteredItems);
    const outfit = generateRandomOutfit(categorizedItems);

    // If outfit is not complete, generate a fallback outfit. Otherwise, return the outfit
    if (outfit.length < 4) {
      const fallbackOutfit = getFallbackOutfit(clothingItems);
      return fallbackOutfit;
    } else {
      return outfit;
    }
  }, [clothingItems, wthrConditions]);
}
