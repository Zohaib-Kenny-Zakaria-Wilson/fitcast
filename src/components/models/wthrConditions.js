export class wthrConditions {
    /**
     * 
     * @param {boolean} hotWeather if the wheather is hot
     * @param {boolean} coldWeather if the wheather is cold
     * @param {boolean} highWind if the wind is high
     * @param {boolean} lowWind if the wind is low
     * @param {boolean} highRain if the rain is high
     * @param {boolean} lowRain if the rain is low
     * @param {boolean} highHumidity if the humidity is high
     * @param {boolean} lowHumidity if the humidity is lo
     */
    constructor(hotWeather, coldWeather, highWind, lowWind, highRain, lowRain, highHumidity, lowHumidity) {
        this.hotWeather = hotWeather;
        this.coldWeather = coldWeather;
        this.highWind = highWind;
        this.lowWind = lowWind;
        this.highRain = highRain;
        this.lowRain = lowRain;
        this.highHumidity = highHumidity;
        this.lowHumidity = lowHumidity;
    }
}