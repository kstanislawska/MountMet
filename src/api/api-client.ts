import axios from 'axios';

const { VITE_API_URL, VITE_API_USER, VITE_API_KEY } = import.meta.env;
const token = btoa(`${VITE_API_USER}:${VITE_API_KEY}`);

export const apiClient = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  },
});
