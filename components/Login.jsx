'use client';
import React, { useState } from 'react';
import Form from './custom/Form';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { axiosOpen } from '@/utils/axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      id: 'email',
      placeholder: 'Type email here',
      required: true,
      error: 'email is required',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      id: 'password',
      placeholder: 'Type password',
      required: true,
      error: 'password is required',
    },
  ];

  const handleUserCheck = (role) => {
    if (role === 'PROVIDER') {
      redirect('/owner');
    } else if (role === 'CONSUMER') {
      redirect('/buyer');
    }
  };
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here based on the form data
    console.log('Form submitted:', formData);

    (async () => {
      try {
        const response = await axiosOpen.post('auth/login', {
          email: formData.email,
          password: formData.password,
        });
        console.log(response);
        localStorage.userID = response?.data?.userid;
        localStorage.userToken = response?.data?.token;
        localStorage.role = response?.data?.role;
        localStorage.fullName = response.data?.fullName;

        //  Adding Protected Route

        // setAuth({
        //   role: userRole,
        //   loggedIn: true,
        // });

        // check role and redirect users to proper pages
        // handleUserCheck();
        if (response?.status == 200) {
          toast.success('user login successful');
          setTimeout(() => {
            if (response.data.role !== 'CONSUMER') router.push('/buyer');
            else {
              router.push('/owner');
            }
          }, 1000);
        }
      } catch (err) {
        if (err.response?.status === 401) {
          //   setShowToster(true);
          const error = err.response?.data.message;
          toast.error(error);
        } else if (err.response?.data === true) {
          const error = err.response?.data.error;
          toast.error(error);
        } else {
          toast.error('internal server error. Please try later');
        }
      }
    })();
  };

  return (
    <div>
      <Form
        formTitle="Login"
        formFields={formFields}
        onSubmit={handleFormSubmit}
        buttonText="Login"
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Login;
