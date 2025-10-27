export interface IDateState {
  dateList: IDateList | null;
  dateLoading: boolean;
  dateError: string | null;
}
export interface IDateList {
  dates: any[];
  times: any[];
}
