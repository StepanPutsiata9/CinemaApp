export interface IDateState {
  dateList: IDateList | null;
  dateLoading: boolean;
  dateError: string | null;
}
export interface IDateList {
  dates: any[];
  times: any[];
}

export interface ITimeItem {
  time: string;
  placeCount: number;
  progress: number;
  hallNumber: number;
}
export interface IDateItem {
  date: string;
  month: string;
  day: string;
  index: number;
}
export interface ICalendarList {
  items: IDateItem[];
}
