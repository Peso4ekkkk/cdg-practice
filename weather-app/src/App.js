
import React, { useState, useEffect } from 'react';
const API_KEY = '6368168625a9116481d42369235bc9f0';

function WeatherApp() {
  const [cities, setCities] = useState([]);

  const handleAddCity = (city) => {
    setCities([...cities, city]);
  };

  const handleRemoveCity = (city) => {
    setCities(cities.filter((c) => c !== city));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center text-white">Weather App</h1>
      <AddCityForm onAddCity={handleAddCity} />
      <ul className="mt-4 text-white text-xl">
        {cities.map((city) => (
          <CityWeather key={city} city={city} onRemoveCity={handleRemoveCity} />
        ))}
      </ul>
    </div>
  );
}

function AddCityForm({ onAddCity }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity(city);
    setCity('');
  };

  return (
    <form className='flex justify-end' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border px-2 py-1 rounded-10px mr-2  "
      />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded flex justify-end focus:bg-purple-500">
        Add City
      </button>
    </form>
  );
}

function CityWeather({ city, onRemoveCity }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, [city]);

  return (
    <li className="flex justify-between items-center mb-2">
      <div>
        <div>{city}</div>
        {weather && (
          <div>
            {Math.round(weather.main.temp - 273.15)}°C, {weather.weather[0].main}
          </div>
        )}
      </div>
      <button
        className="bg-purple-300 text-white px-2 py-1 rounded"
        onClick={() => onRemoveCity(city)}
      >
        Remove
      </button>
    </li>
  );
}

export default WeatherApp;