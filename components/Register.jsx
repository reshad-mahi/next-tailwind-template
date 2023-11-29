'use client';

import Form from '@/components/custom/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosOpen } from '@/utils/axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { validatePassword } from '@/utils/service';
export default function Register() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const formFields = [
    {
      label: 'Name',
      name: 'name',
      type: 'name',
      id: 'name',
      placeholder: 'Type your name',
      required: true,
      error: 'name is required',
    },
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
    {
      label: 'Confirm Password',
      name: 'confirm-password',
      type: 'password',
      id: 'confirmPassword',
      placeholder: 'Type password',
      required: true,
      error: 'please re type password',
    },
  ];

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here based on the form data

    (async () => {
      try {
        if (formData.password !== formData.confirmPassword) {
          toast.warning('password doesnt match');
        } else if (!validatePassword(formData.password)) {
          toast.warning(
            'Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 number'
          );
        } else {
          const response = await axiosOpen.post('auth/register', {
            fullName: formData.name,
            email: formData.email,
            password: formData.password,
            role:
              searchParams.get('role') === 'provider' ? 'PROVIDER' : 'CONSUMER',
          });

          if (response?.status == 201) {
            toast.success(
              'user registered successful. Please check your email to activate your account'
            );
            setTimeout(() => {
              router.push('/login');
            }, 2000);
          }
        }
      } catch (err) {
        if (err.response?.status === 401) {
          //   setShowToster(true);
          const error = err.response.data.message;
          toast.error(error);
        } else {
          const error = err.response.data.error;
          toast.error(error);
        }
      }
    })();
  };

  return (
    <div>
      <Form
        formTitle="Register"
        formFields={formFields}
        onSubmit={handleFormSubmit}
        buttonText="Submit"
      />
    </div>
  );
}
