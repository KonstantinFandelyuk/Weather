import React, { FC } from 'react';
import './style.scss';

export const Loader: FC = () => {
  return (
    <div className="loaders">
      <div className="container">
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--text"></div>
        </div>
      </div>
    </div>
  );
};
