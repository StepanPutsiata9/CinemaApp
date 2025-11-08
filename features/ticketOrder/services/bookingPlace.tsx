export const booking = async (idArray: number[]) => {
  //   const { data } = await api.post(`booking`,{[id,id,id,id]});
  //   const bookingResponse = data as boolean;
  //   return bookingResponse;
  return new Promise(resolve => setTimeout(() => resolve(true), 2000));
};
