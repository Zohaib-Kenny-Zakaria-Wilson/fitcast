export class clothingItem {
    /**
     * 
     * @param {String} id the id of the clothing item
     * @param {String} userId the id of the user who owns the clothing item
     * @param {String} name the name of the clothing item
     * @param {String} dominantColor the dominant color of the clothing item
     * @param {String} contrastColor the contrasting color to the dominant color
     * @param {String} category the category of the clothing item
     * @param {String} image the image of the clothing item
     * @param {Boolean} hotWeather  if the clothing item is suitable for hot weather
     * @param {Boolean} coldWeather if the clothing item is suitable for cold weather
     * @param {Boolean} highWind if the clothing item is suitable for high wind
     * @param {Boolean} lowWind if the clothing item is suitable for low wind
     * @param {Boolean} highRain if the clothing item is suitable for high rain chance
     * @param {Boolean} lowRain if the clothing item is suitable for low rain chance
     * @param {Boolean} highHumidity if the clothing item is suitable for high humidity
     * @param {Boolean} lowHumidity if the clothing item is suitable for low humidity
     */
    constructor(id, userId, name, dominantColor, contrastColor, category, image, hotWeather, coldWeather, highWind, lowWind, highRain, lowRain, highHumidity, lowHumidity) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.dominantColor = dominantColor;
        this.contrastColor = contrastColor;
        this.category = category;
        this.image = image;
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