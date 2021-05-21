import axios from 'axios';

export const fetchForecast = async (search: string = 'kiev') => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_API}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&lang=en&days=3`,
    );
  } catch (error) {
    console.log(`error`, error);
  }
};

// export const testApi = async (latitude: number, longitude: number) => {
//   try {
//     return await axios.get(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
//     );
//   } catch (error) {
//     console.log(`error`, error);
//   }
// };

// export const testApi = async (latitude: number, longitude: number) => {
//   try {
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
//     );
//     return await response.json();
//   } catch (error) {
//     console.log('error :>> ', error);
//   }
// };
// /search.json

export const fetchSearch = async (search: string) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_API}/search.json?key=${process.env.REACT_APP_API_KEY}&q=${search}`,
    );
  } catch (error) {
    console.log(`error`, error);
  }
};
