import { api } from '@/api';
export const getHall = async (id: number) => {
  const { data } = await api.get(`hall/${id}`);
  const hall = data as any[];
  return hall;
};
