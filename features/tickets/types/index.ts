export interface ITicketsState {
  ticketsList: ITicket[] | null;
  ticketsLoading: boolean;
  ticketsError: string | null;
}
export interface ITicket {
  title: string;
  date: string;
  time: string;
  hall: number;
  row: number;
  places: number[] | number;
}
