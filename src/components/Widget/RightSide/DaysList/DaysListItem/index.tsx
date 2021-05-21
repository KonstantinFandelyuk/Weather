import React, { FC } from 'react';
import { IForecastItem } from '../../../../../types/types';
// import { getMeIcon } from '../../../../helpers/iconHelpers';
import { geCurrentDay, getDayAndMonth } from '../../../../helpers/timeWork';

interface ItemProps {
  item: IForecastItem;
}

export const DaysListItem: FC<ItemProps> = ({ item }) => {
  return (
    <li className="forecastDay">
      <img src={item?.day.condition.icon} alt="pic weather" />
      <span className="forecastDay-Day">
        {getDayAndMonth(item.date)}, {geCurrentDay(item.date, true)}
      </span>
      <span className="forecastDay-Temp">{Math.round(item.day.avgtemp_c)}°C</span>
    </li>
  );
};
