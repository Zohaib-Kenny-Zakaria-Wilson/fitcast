import { wthrConditions } from "../components/models/wthrConditions";

export default function getWthrConditions(data) {
  //Thresholds
  const hotThreshold = 75;
  const coldThreshold = 32;
  const highWindThreshold = 40;
  const lowWindThreshold = 7;
  const highRainThreshold = 90;
  const lowRainThreshold = 20;
  const highHumidityThreshold = 70;
  const lowHumidityThreshold = 30;

  // Get daily weather conditions
  const avgTemp = data.avgtemp_f;
  const avgWind = data.maxwind_mph;
  const avgRain = data.daily_chance_of_rain;
  const avgHumidity = data.avghumidity;

  // Determine weather conditions
  const hotWeather = avgTemp >= hotThreshold;
  const coldWeather = avgTemp <= coldThreshold;
  const highWind = avgWind >= highWindThreshold;
  const lowWind = avgWind <= lowWindThreshold;
  const highRain = avgRain >= highRainThreshold;
  const lowRain = avgRain <= lowRainThreshold;
  const highHumidity = avgHumidity >= highHumidityThreshold;
  const lowHumidity = avgHumidity <= lowHumidityThreshold;

  return new wthrConditions(
    hotWeather || (avgTemp > coldThreshold && avgTemp < hotThreshold),
    coldWeather || (avgTemp > coldThreshold && avgTemp < hotThreshold),
    highWind || (avgWind > lowWindThreshold && avgWind < highWindThreshold),
    lowWind || (avgWind > lowWindThreshold && avgWind < highWindThreshold),
    highRain || (avgRain > lowRainThreshold && avgRain < highRainThreshold),
    lowRain || (avgRain > lowRainThreshold && avgRain < highRainThreshold),
    highHumidity ||
      (avgHumidity > lowHumidityThreshold &&
        avgHumidity < highHumidityThreshold),
    lowHumidity ||
      (avgHumidity > lowHumidityThreshold &&
        avgHumidity < highHumidityThreshold)
  );
}
