'use client';
import { useRouter } from 'next/navigation';

const getUserID = () => {
  return localStorage.getItem('userID');
};

const getUserToken = () => {
  return localStorage.getItem('userToken');
};

const isLoggedIn = () => {
  return localStorage.getItem('userID') || false;
};
const logout = () => {
  const router = useRouter();
  window.localStorage.clear();
  router.push('/login');
};
function validatePassword(pass) {
  // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/;
  return passwordPattern.test(pass);
}

export { getUserID, getUserToken, isLoggedIn, logout, validatePassword };
