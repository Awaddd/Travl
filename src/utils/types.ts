export type CountdownData = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  completed?: boolean;
};

export type CountdownTimeData = {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export type Times = {
  [key: string]: PrayerTimes;
};

export type RawPrayerTimes = {
  date: string;
  fajr: string;
  fajr_jamat: string;
  sunrise: string;
  dhuhr: string;
  dhuhr_jamat: string;
  asr: string;
  asr_2: string;
  asr_jamat: string;
  magrib: string;
  magrib_jamat: string;
  isha: string;
  isha_jamat: string;
};

export type PrayerTimes = {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  magrib: string;
  isha: string;
};

export type NextPrayer = {
  name: string;
  time: string;
};

export type TimeToNextPrayer = {
  timeToNextPrayer?: number;
  nextPrayer?: string;
  getNextPrayer: () => void;
};
