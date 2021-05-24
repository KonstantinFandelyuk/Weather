import React, { FC } from 'react';
// import { getMeIcon } from '../../helpers/iconHelpers';
import { getCurrentDate, geCurrentDay } from '../../helpers/timeWork';
import dataStore from '../../../store/dataStore';
import { observer } from 'mobx-react-lite';
import './style.scss';

export const LeftSide: FC = observer(() => {
  const { currentWeather, locationInfo } = dataStore;

  return (
    <div className="leftSide">
      <div className="dateContainer">
        <span className="day">
          {geCurrentDay('', false)}
          <span className="date">{getCurrentDate()}</span>
        </span>
        <span className="location">
          {locationInfo?.name}, {locationInfo?.country}
        </span>
      </div>

      <div className="LilInfoContainer">
        <span className="WeatherIcon">
          <img src={currentWeather?.condition.icon} alt="pic weather" />
          {/* {data && <img src={getMeIcon(data?.condition.text)} alt="img" />} */}
        </span>
        <span className="MainDeg">{currentWeather?.temp_c}°</span>
        <span className="Description">{currentWeather?.condition.text}</span>
      </div>
    </div>
  );
});
