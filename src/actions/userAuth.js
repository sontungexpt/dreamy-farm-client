export const getuser = (number) => {
  return {
    type: 'GET_USER',
    payload: number,
  };
};
