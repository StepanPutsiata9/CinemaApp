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

export interface IHallState {
  hallPlaces: any[] | null;
  hallLoading: boolean;
  hallError: string | null;
  reservedPlaceCost: number;
  reservedPlaceCount: number;
  bookingLoading: boolean;
  bookingError: string | null;
  isBookingSucsess: boolean;
}
export type TLine = { id: number; mode: 'free' | 'selected' | 'taken' };
