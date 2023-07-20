const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
const ICON_URL = process.env.REACT_APP_WEATHER_ICON_URL;
const { DateTime } = require("luxon");

const getWeatherData = (infoType, searchParams) => {
  console.log(BASE_URL);
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    speed,
    details,
    icon,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return { ...formattedCurrentWeather };
};

const formatToLocaleTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (icon) => `${ICON_URL}/${icon}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocaleTime, iconUrlFromCode };
