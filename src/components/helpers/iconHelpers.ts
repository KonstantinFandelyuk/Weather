import { IIconTypes } from '../../types/types';
import cloudDrizzle from '../../assets/images/content/icon-weather/cloud-drizzle.svg';
import cloudLightning from '../../assets/images/content/icon-weather/cloud-lightning.svg';
import cloudRain from '../../assets/images/content/icon-weather/cloud-rain.svg';
import cloudSnow from '../../assets/images/content/icon-weather/cloud-snow.svg';
import Mist from '../../assets/images/content/icon-weather/cloud.svg';
import sun from '../../assets/images/content/icon-weather/sun.svg';

export const icon: IIconTypes = {
  cloudDrizzle: cloudDrizzle,
  cloudLightning: cloudLightning,
  cloudRain: cloudRain,
  cloudSnow: cloudSnow,
  Mist: Mist,
  sun: sun,
};

export const getMeIcon = (value: keyof IIconTypes): string => icon[value];
