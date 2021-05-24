import { IGeoCords } from './../types/types';
import axios from 'axios';

export const fetchForecast = async (search: string = 'london') => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_API}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&lang=en&days=3`,
    );
  } catch (error) {
    console.log(`error`, error);
  }
};

export const fetchMapsCity = async (cords: IGeoCords): Promise<any> => {
  try {
    return await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${cords.latitude}&longitude=${cords.longitude}&localityLanguage=en`,
    );
  } catch (error) {
    console.log(`error`, error);
  }
};

export const fetchSearch = async (search: string) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_API}/search.json?key=${process.env.REACT_APP_API_KEY}&q=${search}`,
    );
  } catch (error) {
    console.log(`error`, error);
  }
};
// {latitude: 50.4711838, longitude: 30.612250300000003}
