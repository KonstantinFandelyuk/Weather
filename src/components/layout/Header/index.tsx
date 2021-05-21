import React, { FC } from 'react';
import './style.scss';

interface IHeaderProps {
  searchHandler: (value: string) => void;
}

export const Header: FC<IHeaderProps> = ({ searchHandler }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#" className="link">
                1 день
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="link">
                5 дней
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="link">
                10 дней
              </a>
            </li>
            <li className="nav__list-item">
              <input
                type="text"
                name="search"
                id=""
                className="search-city"
                onChange={(e) => searchHandler(e.target.value)}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
