import { IData, ILocation, ISearchData } from './../types/types';
import { makeAutoObservable, action } from 'mobx';
import { fetchForecast, fetchSearch } from '../api/apiWeather';
// import { toJS } from 'mobx';

class dataStore {
  loading: boolean = false;
  currentCity: string = 'Kiev';
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
}
export default new dataStore();
