import { IData, IGeoCords, ILocation, ISearchData } from './../types/types';
import { makeAutoObservable, action } from 'mobx';
import { fetchForecast, fetchSearch, fetchMapsCity } from '../api/apiWeather';
import { toJS } from 'mobx';

class dataStore {
  loading: boolean = false;
  currentCity?: string;
  currentWeather?: IData;
  locationInfo?: ILocation;
  dataForecast = [];
  searchList?: ISearchData[];
  searchText: string = '';
  isShowList: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      getCurrentWeather: action.bound,
      getSearchList: action.bound,
      getCityForCords: action.bound,
      inputSearch: action.bound,
      submitSearchCity: action.bound,
      updateCurrentCity: action.bound,
    });
  }

  isLoading(value: boolean) {
    this.loading = value;
  }

  inputSearch(value: string) {
    this.searchText = value;
  }

  submitSearchCity() {
    this.getSearchList(this.searchText);
    this.isShowList = true;
    this.searchText = '';
  }

  updateCurrentCity(value: string) {
    this.currentCity = value;
    this.getCurrentWeather();
    this.isShowList = false;
    this.searchList = [];
  }

  async getCurrentWeather() {
    this.isLoading(true);
    const response = await fetchForecast(this.currentCity);
    if (response) {
      this.currentWeather = response.data.current;
      this.locationInfo = response.data.location;
      this.dataForecast = response.data.forecast.forecastday;
      this.isLoading(false);
    }
  }

  async getSearchList(value: string) {
    this.isLoading(true);
    const response = await fetchSearch(value);
    if (response) {
      this.searchList = response.data;
      this.isLoading(false);
    }
  }
  async getCityForCords(value: IGeoCords) {
    const response = await fetchMapsCity(value);
    console.log(`response.data`, response.data.city);
    if (response) {
      if (response.data.city === 'Kyiv') {
        this.currentCity = 'Kiev';
      } else {
        this.currentCity = response?.data?.city;
      }
      this.getCurrentWeather();
    }
  }
}
export default new dataStore();
