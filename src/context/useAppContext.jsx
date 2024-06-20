import { useContext, createContext, useState } from "react";
import { clothingItem } from "../components/models/clothingItem";

export const AppContext = createContext(null);
export default function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider(props) {
  //TODO: Create const for current weather and forecast.
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  
  const [wthrConditions, setWthrConditions] = useState();

  const [clothingItems, setClothingItems] = useState([
    new clothingItem("1", "", "Red T-Shirt", "Red", "White", "shirt", "", true, false, false, true, false, true, false, true),
    new clothingItem("2", "", "Blue Polo", "Blue", "White", "shirt", "", true, false, false, true, false, true, false, true),
    new clothingItem("3", "", "Green Tank Top", "Green", "Black", "shirt", "", true, false, false, true, false, true, false, true),
    new clothingItem("4", "", "Yellow Hoodie", "Yellow", "Black", "shirt", "", false, true, true, false, true, false, true, false),
    new clothingItem("5", "", "White Shirt", "White", "Blue", "shirt", "", true, false, false, true, false, true, false, true),

    new clothingItem("6", "", "Black Jeans", "Black", "Gray", "pants", "", false, true, true, false, true, false, true, false),
    new clothingItem("7", "", "Blue Shorts", "Blue", "White", "pants", "", true, false, false, true, false, true, false, true),
    new clothingItem("8", "", "Green Cargo Pants", "Green", "Black", "pants", "", false, true, true, false, true, false, true, false),
    new clothingItem("9", "", "Brown Trousers", "Brown", "White", "pants", "", true, false, false, true, false, true, false, true),
    new clothingItem("10", "", "Gray Sweatpants", "Gray", "Black", "pants", "", false, true, true, false, true, false, true, false),

    new clothingItem("11", "", "Leather Belt", "Black", "Silver", "accessories", "", true, true, false, false, false, false, true, true),
    new clothingItem("12", "", "Gold Necklace", "Gold", "None", "accessories", "", true, true, false, false, false, false, true, true),
    new clothingItem("13", "", "Silver Watch", "Silver", "None", "accessories", "", true, true, false, false, false, false, true, true),
    new clothingItem("14", "", "Blue Scarf", "Blue", "White", "accessories", "", false, true, true, false, true, false, true, false),
    new clothingItem("15", "", "Black Hat", "Black", "Gray", "accessories", "", true, true, false, false, false, false, true, true),

    new clothingItem("16", "", "White Sneakers", "White", "Black", "shoes", "", true, false, false, true, false, true, false, true),
    new clothingItem("17", "", "Black Boots", "Black", "Gray", "shoes", "", false, true, true, false, true, false, true, false),
    new clothingItem("18", "", "Brown Sandals", "Brown", "None", "shoes", "", true, false, false, true, false, true, false, true),
    new clothingItem("19", "", "Gray Running Shoes", "Gray", "Blue", "shoes", "", true, false, false, true, false, true, false, true),
    new clothingItem("20", "", "Red Heels", "Red", "Black", "shoes", "", true, false, false, true, false, true, false, true),
  ]);

  return (
    <AppContext.Provider value={{ clothingItems, setClothingItems, wthrConditions, setWthrConditions, currentData, setCurrentData, forecastData, setForecastData }}>
      {props.children}
    </AppContext.Provider>
  );
}
