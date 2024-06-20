export const weatherIcons = {
    1000: { day: "assets/clear-day.svg", night: "assets/clear-night.svg" },
    1003: { day: "assets/partly-cloudy-day.svg", night: "assets/partly-cloudy-night.svg" },
    1006: { day: "assets/cloudy.svg", night: "assets/cloudy.svg" },
    1009: { day: "assets/overcast.svg", night: "assets/overcast.svg" },
    1030: { day: "assets/fog.svg", night: "assets/fog.svg" },
    1063: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1066: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1069: { day: "assets/sleet.svg", night: "assets/sleet.svg" },
    1072: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1087: { day: "assets/thunderstorms.svg", night: "assets/thunderstorms.svg" },
    1114: { day: "assets/fog.svg", night: "assets/fog.svg" },
    1117: { day: "assets/hurricane.svg", night: "assets/hurricane.svg" },
    1135: { day: "assets/fog.svg", night: "assets/fog.svg" },
    1147: { day: "assets/fog.svg", night: "assets/fog.svg" },
    1150: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1153: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1168: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1171: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1180: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1183: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1186: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1189: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1192: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1195: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1198: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1201: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1204: { day: "assets/sleet.svg", night: "assets/sleet.svg" },
    1207: { day: "assets/sleet.svg", night: "assets/sleet.svg" },
    1210: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1213: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1216: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1219: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1222: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1225: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1237: { day: "assets/hail.svg", night: "assets/hail.svg" },
    1240: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1243: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1246: { day: "assets/drizzle.svg", night: "assets/drizzle.svg" },
    1249: { day: "assets/sleet.svg", night: "assets/sleet.svg" },
    1252: { day: "assets/sleet.svg", night: "assets/sleet.svg" },
    1255: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1258: { day: "assets/snow.svg", night: "assets/snow.svg" },
    1261: { day: "assets/hail.svg", night: "assets/hail.svg" },
    1264: { day: "assets/hail.svg", night: "assets/hail.svg" },
    1273: { day: "assets/thunderstorms-drizzle.svg", night: "assets/thunderstorms-drizzle.svg" },
    1276: { day: "assets/thunderstorms-drizzle.svg", night: "assets/thunderstorms-drizzle.svg" },
    1279: { day: "assets/thunderstorms.svg", night: "assets/thunderstorms.svg" },
    1282: { day: "assets/thunderstorms.svg", night: "assets/thunderstorms.svg" }
}

/**
 * Function to get the weather icon path based on condition code and time of day
 * @param {number} conditionCode - The weather condition code
 * @param {number} is_day - Whether it is day (1) or night (0)
 * @returns {string} - The path to the corresponding weather icon
 */
export function getWeatherIcon(conditionCode, is_day) {
    const condition = weatherIcons[conditionCode];
    console.log("Condition code:", conditionCode)
    if (!condition) {
        console.log("Condition code not found:", conditionCode);
        return "assets/not-available.svg"; // Default icon if condition code is not found
    }
    console.log("Condition:", condition);

    const iconPath = is_day === 1 ? condition.day : condition.night;
    console.log("Icon path:", iconPath);

    return iconPath;
}