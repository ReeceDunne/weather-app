import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import TemperatureAndDetails from "./components/TemperatureAndDetails/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <SearchBar />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}

export default App;
