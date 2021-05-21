export interface ILocation {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface IIconTypes {
  cloudDrizzle: string;
  cloudLightning: string;
  cloudRain: string;
  cloudSnow: string;
  Mist: string;
  sun: string;
}

export interface IData {
  cloud: number;
  condition: {
    code: number;
    icon: string;
    text: keyof IIconTypes;
  };

  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

export interface IForecastItem {
  astro: { sunrise: string; sunset: string; moonrise: string; moonset: string; moon_phase: string };
  date: string;
  date_epoch: number;
  day: {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    daily_chance_of_rain: string;
    daily_chance_of_snow: string;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    uv: number;
  };
  hour: { [key: string]: unknown }[];
}

export interface ISearchData {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}
