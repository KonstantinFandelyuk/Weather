import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import './style.scss';
import dataStore from '../../../../store/dataStore';
import { observer } from 'mobx-react-lite';

export const WeatherInfo: FC = observer(() => {
  const {
    currentWeather,
    searchList,
    inputSearch,
    updateCurrentCity,
    submitSearchCity,
    isShowList,
  } = dataStore;
  return (
    <div className="weather-info">
      <div className="header">
        <div>Some info</div>
        <div className="search">
          <input
            type="text"
            id="search"
            placeholder=" "
            onChange={(e) => inputSearch(e.target.value)}
          />
          <label htmlFor="search"> Search City</label>
          <button type="button" onClick={() => submitSearchCity()}></button>
        </div>
      </div>
      {isShowList ? (
        <div className="city">
          <ul className="city__list">
            {searchList &&
              searchList?.map((item, i) => (
                <li
                  key={nanoid()}
                  onClick={() => updateCurrentCity(item.name)}
                  className="city__list-item"
                >
                  {i + 1}. {item.name}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="cards">
          <div className="cards-item">
            <span>Precipitation</span>
            <span>{currentWeather?.precip_mm}mm</span>
          </div>
          <div className="cards-item">
            <span>Humidity</span>
            <span>{currentWeather?.humidity}%</span>
          </div>
          <div className="cards-item">
            <span>Wind</span>
            <span>{currentWeather?.wind_mph}ms</span>
          </div>
          <div className="cards-item">
            <span>Dir of the wind</span>
            <span>{currentWeather?.wind_dir}</span>
          </div>
          <div className="cards-item">
            <span>Feels</span>
            <span>{currentWeather?.feelslike_c}°C</span>
          </div>
          <div className="cards-item">
            <span>Lowest</span>
            <span>22°</span>
          </div>
        </div>
      )}
    </div>
  );
});
