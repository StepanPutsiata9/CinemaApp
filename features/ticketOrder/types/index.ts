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
  bookedPlaces: number;
}

export interface IHallState {
  hallPlaces: TPlace[][] | null;
  hallLoading: boolean;
  hallError: string | null;
  reservedPlaceCost: number;
  reservedPlaceCount: number;
  bookingLoading: boolean;
  bookingError: string | null;
  isBookingSucsess: boolean;
  bookingPlaces: IBookingPlace[] | null;
}
export type TPlace = { id: number; mode: 'free' | 'selected' | 'taken' };

export interface IBookingPlaces {
  time: string;
  tickets: IBookingPlace[];
}
export interface IBookingPlace {
  row: number;
  place: number;
}
