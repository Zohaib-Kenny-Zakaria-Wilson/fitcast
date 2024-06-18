import React from "react";
import ItemTag from "./ItemTag";

export function ItemTagContainer({ tagsState, toggleTag }) {
  return (
    <>
      <p className="text-xl">Great For</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('coldWeather')}
            text={"Cold Weather"}
            color={tagsState.coldWeather ? "#A4DEFF" : "#FFFFFF"}
            textColor={tagsState.coldWeather ? "#2477B2" : "#2477B2"}
            borderColor={tagsState.coldWeather ? "#A4DEFF" : "#A4DEFF"}
          />
          <ItemTag
            onClick={() => toggleTag('hotWeather')}
            text={"Hot Weather"}
            color={tagsState.hotWeather ? "#FFA4A4" : "#FFFFFF"}
            textColor={tagsState.hotWeather ? "#690A0A" : "#690A0A"}
            borderColor={tagsState.hotWeather ? "#FFA4A4" : "#FFA4A4"}
          />
        </div>
        <div className="flex gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('lowWind')}
            text={"Low Wind"}
            color={tagsState.lowWind ? "#FFD59D" : "#FFFFFF"}
            textColor={tagsState.lowWind ? "#4D3206" : "#4D3206"}
            borderColor={tagsState.lowWind ? "#FFD59D" : "#FFD59D"}
          />
          <ItemTag
            onClick={() => toggleTag('highWind')}
            text={"High Wind"}
            color={tagsState.highWind ? "#FF9243" : "#FFFFFF"}
            textColor={tagsState.highWind ? "#4D3206" : "#4D3206"}
            borderColor={tagsState.highWind ? "#FF9243" : "#FF9243"}
          />
        </div>
        <div className="flex gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('lowRain')}
            text={"Low Rain %"}
            color={tagsState.lowRain ? "#B6EEBC" : "#FFFFFF"}
            textColor={tagsState.lowRain ? "#374151" : "#374151"}
            borderColor={tagsState.lowRain ? "#B6EEBC" : "#B6EEBC"}
          />
          <ItemTag
            onClick={() => toggleTag('highRain')}
            text={"High Rain %"}
            color={tagsState.highRain ? "#FFA4A4" : "#FFFFFF"}
            textColor={tagsState.highRain ? "#374151" : "#374151"}
            borderColor={tagsState.highRain ? "#FFA4A4" : "#FFA4A4"}
          />
        </div>
        <div className="flex gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('lowHumidity')}
            text={"Low Humidity"}
            color={tagsState.lowHumidity ? "#EAB6EE" : "#FFFFFF"}
            textColor={tagsState.lowHumidity ? "#6314C9" : "#690A0A"}
            borderColor={tagsState.lowHumidity ? "#EAB6EE" : "#EAB6EE"}
          />
          <ItemTag
            onClick={() => toggleTag('highHumidity')}
            text={"High Humidity"}
            color={tagsState.highHumidity ? "#FFB7E2" : "#FFFFFF"}
            textColor={tagsState.highHumidity ? "#B60D72" : "#690A0A"}
            borderColor={tagsState.highHumidity ? "#FFB7E2" : "#FFB7E2"}
          />
        </div>
      </div>
    </>
  );
}
