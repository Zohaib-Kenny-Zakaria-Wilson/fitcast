import { useContext, createContext, useState } from "react";
import { clothingItem } from "../components/models/clothingItem";

export const AppContext = createContext(null);
export default function useAppContext() {
  return useContext(AppContext);
}
export function AppProvider(props) {
  const [clothingItems, setClothingItems] = useState([
    new clothingItem("1", "1", "White T-Shirt", "#9E9E9E", "#262626", "Shirt", "t-shirt.jpeg", true, false, true, false, true, false, true, false)
  ]);

  return (
    <AppContext.Provider value={{ clothingItems, setClothingItems }}>
      {props.children}
    </AppContext.Provider>
  );
}
