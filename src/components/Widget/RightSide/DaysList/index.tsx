import React, { FC } from 'react';
import { DaysListItem } from './DaysListItem';
import { nanoid } from 'nanoid';
import { IForecastItem } from '../../../../types/types';
import dataStore from '../../../../store/dataStore';
import { observer } from 'mobx-react-lite';
import './style.scss';

export const DaysList: FC = observer(() => {
  const { dataForecast } = dataStore;
  return (
    <ul className="forecastDayList">
      {dataForecast.map((item: IForecastItem) => (
        <DaysListItem item={item} key={nanoid()} />
      ))}
    </ul>
  );
});
