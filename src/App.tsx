import React, { FC, useEffect } from 'react';
import { Widget } from './components/Widget';
import { Loader } from './components/Loader';
import { observer } from 'mobx-react-lite'; // Or "mobx-react".
import dataStore from './store/dataStore';

export const App: FC = observer(() => {
  const { getCurrentWeather, loading } = dataStore;

  useEffect(() => {
    getCurrentWeather();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">{!loading ? <Widget /> : <Loader />}</div>
    </div>
  );
});
