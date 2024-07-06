import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { supabase } from "../supabase/supabaseClient";

export const AppContext = createContext(null);
export default function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider(props) {
  const [globalCurrentData, setGlobalCurrentData] = useState(null);
  const [globalForecastData, setGlobalForecastData] = useState(null);
  const [wthrConditions, setWthrConditions] = useState();
  const [clothingItems, setClothingItems] = useState([]);
  const [globalOutfits, setGlobalOutfits] = useState([]);
  const [session, setSession] = useState(null);

  // Load clothingItems on start
  useEffect(() => {
    // Get all data from the clothing items table where the user_id is the current user
    const loadClothingItems = async () => {
      if (session) {
        let { data: ClothingItems, error } = await supabase
          .from("ClothingItems")
          .select("*")
          .eq("user_id", session.user.id);

        if (error) {
          console.error(error);
        } else if (ClothingItems) {
        }
        setClothingItems(ClothingItems || []);
      }
    };
    loadClothingItems();
  }, [session]);

  const addItem = useCallback(
    async (clothingItem) => {
      if (session) {
        const { data, error } = await supabase
          .from("ClothingItems")
          .insert([
            {
              user_id: session.user.id,
              name: clothingItem.name,
              image_url: clothingItem.image_url,
              type: clothingItem.type,
            },
          ])
          .select();
        if (error) {
          console.log(error);
        }
        if (data) {
          setClothingItems((prev) => [...prev, clothingItem]);
        }
      }
    },
    [session]
  );

  const editItem = useCallback(
    async (updatedClothingItem) => {
      console.log(updatedClothingItem);
      if (session) {
        const { data, error } = await supabase
          .from("ClothingItems")
          .update({
            name: updatedClothingItem.name,
            image_url: updatedClothingItem.image_url,
            type: updatedClothingItem.type,
          })
          .eq("id", updatedClothingItem.id)
          .select();
        if (error) {
          console.log(error);
        }
        if (data) {
          setClothingItems((prevItems) =>
            prevItems.map((item) =>
              item.id === updatedClothingItem.id ? updatedClothingItem : item
            )
          );
        }
      }
    },
    [session]
  );

  const updateClothingItemsInOutfits = (updatedItem) => {
    setGlobalOutfits((prevOutfits) =>
      prevOutfits.map((outfit) =>
        outfit.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        editItem,
        addItem,
        session,
        setSession,
        clothingItems,
        setClothingItems,
        wthrConditions,
        setWthrConditions,
        globalCurrentData,
        setGlobalCurrentData,
        globalForecastData,
        setGlobalForecastData,
        globalOutfits,
        setGlobalOutfits,
        updateClothingItemsInOutfits,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
