# FitCast

Welcome to **FitCast**, your personal digital wardrobe assistant! FitCast helps you decide what to wear by combining the clothes you own with the latest weather forecast. Simply upload images of your clothing items, and FitCast will suggest the perfect outfit for any weather condition, all from the comfort of your web browser.

## Features

- **Wardrobe Management**: Upload and categorize images of your clothing items.
- **Weather Integration**: Retrieves current weather conditions via a RESTful API.
- **Outfit Suggestions**: Provides daily outfit suggestions based on real-time weather data.

## Getting Started

### Prerequisites

To get started with FitCast, you'll need:

- A modern web browser.
- Node.js and npm installed for frontend setup.
- Java JDK and Gradle installed for backend setup.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/zohaib-kenny-zakaria-wilson/fitcast.git
    ```

2. **Set up the React frontend:**
    ```bash
    cd fitcast/frontend
    npm install
    npm start
    ```

3. **Set up the Java backend:**
    ```bash
    cd ../backend
    gradlew build
    gradlew bootRun
    ```

### Configuration

1. **Obtain a weather API key** from providers like OpenWeatherMap and set it as an environment variable:

    **Windows:**
    ```bash
    set WEATHER_API_KEY=your_api_key
    ```

    **macOS/Linux:**
    ```bash
    export WEATHER_API_KEY=your_api_key
    ```

### Usage

- **Upload your wardrobe**: Navigate to `http://localhost:3000` on your web browser and use the interface to upload images of your clothes.
- **Receive outfit suggestions**: FitCast automatically fetches the weather forecast and suggests outfits based on the current weather.

### Development

- **Frontend (React):** Edit components in `frontend/src` to modify the web interface.
- **Backend (Java):** The server-side logic in `backend/src` can be modified to adjust API interactions and data processing.

## Contributing

Contributions are very welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Questions or comments? Hit one of us up on the repo!

---

**FitCast** - Dress smartly every day, whatever the weather!
