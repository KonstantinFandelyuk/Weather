import React, { FC, useEffect } from 'react';
import { Widget } from './components/Widget';
import { Loader } from './components/Loader';
import { observer } from 'mobx-react-lite';
import dataStore from './store/dataStore';
import { IGeoCords } from './types/types';

export const App: FC = observer(() => {
  const { getCurrentWeather, loading } = dataStore;

  const fethGeoCords = (): Promise<IGeoCords> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (position.coords) return resolve({ latitude, longitude });
      });
    });
  };
  useEffect(() => {
    getCurrentWeather();
  }, []);

  useEffect(() => {
    const getCords = async () => {
      const data = await fethGeoCords();
      await dataStore.getCityForCords(data);
    };
    getCords();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">{!loading ? <Widget /> : <Loader />}</div>
    </div>
  );
});
