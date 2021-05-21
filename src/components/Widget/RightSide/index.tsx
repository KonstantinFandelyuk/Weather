import React, { FC } from 'react';
import { WeatherInfo } from './WeatherInfo';
import { DaysList } from './DaysList';
import './style.scss';

export const RightSide: FC = () => {
  return (
    <div className="RightSide">
      <WeatherInfo />
      <DaysList />
    </div>
  );
};
