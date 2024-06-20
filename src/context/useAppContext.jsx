import { useContext, createContext, useState } from "react";

export const AppContext = createContext(null);
export default function useAppContext() {
  return useContext(AppContext);
}
export function AppProvider(props) {
  const [clothingItems, setClothingItems] = useState([]);

  return (
    <AppContext.Provider value={{ clothingItems, setClothingItems }}>
      {props.children}
    </AppContext.Provider>
  );
}