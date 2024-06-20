import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";
import useAppContext from "../../context/useAppContext";
import useWeather from "../../hooks/useWeather";

export default function Outfit() {
  const { clothingItems } = useAppContext();
  const { data } = useWeather();
  const temperature = data?.current.temp_f;
  const filteredClothingItems = clothingItems?.filter((item) => (temperature > 60 && item?.hotWeather === true) || (temperature <= 60 && item?.coldWeather === true));

  return (
    <>
      <main className="flex justify-evenly">
        {filteredClothingItems?.map((item) => (<ClothingItem clothingItem={item} />))}
      </main>
    </>
  );
}