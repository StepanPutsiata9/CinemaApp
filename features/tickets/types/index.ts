export interface ITicketsState {
  ticketsList: ITicket[] | null;
  ticketsLoading: boolean;
  ticketsError: string | null;
}
export interface ITicket {
  id: number;
  title: string;
  date: string;
  time: string;
  hall: number;
  row: number;
  place: number;
  day: string;
  cost: number;
  userId: string;
  showId: string;
}
