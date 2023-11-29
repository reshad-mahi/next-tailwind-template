import axios from 'axios';
<<<<<<< HEAD
=======

>>>>>>> feature/owner-deshboard-pages
const userToken =
  typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;

const api_url = 'https://racksubapi.managedcoder.com/api/v1';
export const axiosSecure = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${userToken}`,
  },
});

export const axiosOpen = axios.create({
<<<<<<< HEAD
  baseURL: api_url,
=======
  baseURL: 'https://fatimafytechapi.managedcoder.com',
>>>>>>> feature/owner-deshboard-pages
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const axiosSecureInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});
export const axiosNonSecureInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

axiosSecureInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.userToken
      ? localStorage.getItem('userToken')
      : null;
    config.headers.Authorization = `Bearer ${userToken}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
