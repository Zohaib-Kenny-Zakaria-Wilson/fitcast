import React from "react";
import ItemTag from "./ItemTag";
import useDarkMode from "../../hooks/useDarkMode";

export function ItemTagContainer({ tagsState, toggleTag }) {
  const [isDarkMode] = useDarkMode();

  // Define colors based on the dark mode state
  const backgroundColor = isDarkMode ? "#373737" : "#FFFFFF";
  const textColor = isDarkMode ? "#C7C7C7" : "494747";

  return (
    <main className="flex flex-col gap-2 min-w-fit">
      <p className={`text-xl ${isDarkMode ? 'text-dark-primary-tw' : 'text-primary-tw'}`}>Great For:</p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('coldWeather')}
            text={"Cold Weather"}
            color={tagsState.coldWeather ? "#A4DEFF" : backgroundColor}
            textColor={tagsState.coldWeather ? "#2477B2" : textColor}
            borderColor={tagsState.coldWeather ? "#A4DEFF" : "#A4DEFF"}
          />
          <ItemTag
            onClick={() => toggleTag('hotWeather')}
            text={"Hot Weather"}
            color={tagsState.hotWeather ? "#FFA4A4" : backgroundColor}
            textColor={tagsState.hotWeather ? "#690A0A" : textColor}
            borderColor={tagsState.hotWeather ? "#FFA4A4" : "#FFA4A4"}
          />
        </div>
        <div className="flex w-full gap-4 h-fit">
          <ItemTag
            onClick={() => toggleTag('lowWind')}
            text={"Low Wind"}
            color={tagsState.lowWind ? "#FFD59D" : backgroundColor}
            textColor={tagsState.lowWind ? "#4D3206" : textColor}
            borderColor={tagsState.lowWind ? "#FFD59D" : "#FFD59D"}
          />
          <ItemTag
            onClick={() => toggleTag('highWind')}
            text={"High Wind"}
            color={tagsState.highWind ? "#FF9243" : backgroundColor}
            textColor={tagsState.highWind ? "#4D3206" : textColor}
            borderColor={tagsState.highWind ? "#FF9243" : "#FF9243"}
          />
        </div>
        <div className="flex gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('lowRain')}
            text={"Low Rain %"}
            color={tagsState.lowRain ? "#B6EEBC" : backgroundColor}
            textColor={tagsState.lowRain ? "#374151" : textColor}
            borderColor={tagsState.lowRain ? "#B6EEBC" : "#B6EEBC"}
          />
          <ItemTag
            onClick={() => toggleTag('highRain')}
            text={"High Rain %"}
            color={tagsState.highRain ? "#FFA4A4" : backgroundColor}
            textColor={tagsState.highRain ? "#374151" : textColor}
            borderColor={tagsState.highRain ? "#FFA4A4" : "#FFA4A4"}
          />
        </div>
        <div className="flex gap-4 w-fit h-fit">
          <ItemTag
            onClick={() => toggleTag('lowHumidity')}
            text={"Low Humidity"}
            color={tagsState.lowHumidity ? "#EAB6EE" : backgroundColor}
            textColor={tagsState.lowHumidity ? "#6314C9" : textColor}
            borderColor={tagsState.lowHumidity ? "#EAB6EE" : "#EAB6EE"}
          />
          <ItemTag
            onClick={() => toggleTag('highHumidity')}
            text={"High Humidity"}
            color={tagsState.highHumidity ? "#FFB7E2" : backgroundColor}
            textColor={tagsState.highHumidity ? "#B60D72" : textColor}
            borderColor={tagsState.highHumidity ? "#FFB7E2" : "#FFB7E2"}
          />
        </div>
      </div>
    </main>
  );
}
