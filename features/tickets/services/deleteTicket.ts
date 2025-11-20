import { api } from '@/api';
export const deleteTicket = async (id: number) => {
  const { data } = await api.delete(`movies/tickets/undo/${id}`);
  const isDelete = data as boolean;
  return isDelete;
};
