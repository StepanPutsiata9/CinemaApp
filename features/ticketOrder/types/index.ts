// export interface IDateState {
//   dateList: IDateList | null;
//   dateLoading: boolean;
//   dateError: string | null;
// }
// export interface IDateList {
//   dates: any[];
//   times: any[];
// }

// export interface ITimeItem {
//   time: string;
//   placeCount: number;
//   progress: number;
//   hallNumber: number;
// }
// export interface IDateItem {
//   date: string;
//   month: string;
//   day: string;
//   index: number;
// }
// export interface ICalendarList {
//   items: IDateItem[];
// }

// export interface IDateList {
//   dates: IDateItem[];
//   times: any[];
// }

export interface IDateState {
  dateList: ITimeItem[] | null;
  dateLoading: boolean;
  dateError: string | null;
  pickedDate: ITimeItem | null;
}
export interface ITimeItem {
  id: number;
  day: string;
  date: string;
  time: ITime[];
  movieId: number;
  hall: number;
}
export interface ITime {
  time: string;
  hall: number;
}
// export interface IDateItem {
//   date: string;
//   month: string;
//   day: string;
//   index: number;
// }
// export interface ICalendarList {
//   items: IDateItem[];
// }
