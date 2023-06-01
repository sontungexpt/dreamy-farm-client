import axios from 'axios';

// const request = axios.create({
//   baseURL: 'https://localhost:3001',
// });

export const get = async (url, params) => {
  const res = await axios.get(url, { params });
  return res.data;
};

export const post = async (url, data) => {
  const res = await axios.post(url, data);
  return res.data;
};
