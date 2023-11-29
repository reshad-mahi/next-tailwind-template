'use client';

import Link from 'next/link';
import Form from '@/components/custom/Form';
import Icon from '@mdi/react';
import { mdiKeyboardBackspace } from '@mdi/js';
import { axiosOpen } from '@/utils/axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';
import { validatePassword } from '@/utils/service';

export default function forgotPasswordPage() {
  const router = useRouter();

  const handleForgotPassword = async (formData) => {
    // Handle form submission logic here based on the form data
    console.log('Form submitted:', formData);
    // if (email !== "") {
    //   navigate("/reset-password/c1-23");
    // }
    try {
      const response = await axiosOpen.patch('auth/forgot-password', {
        email: formData.email,
      });
      console.log(response);
      if (response.status === 200) {
        toast.success(
          'We have received your password reset request. Please check your email for further instructions.'
        );
        setTimeout(() => {
          router.push('/reset-password');
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status === 401) {
        //   setShowToster(true);
        const error = err.response?.msg;
        toast.error(error);
      } else {
        const error = err.response.data.message;
        toast.error(error);
      }
    }
  };

  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      id: 'email',
      placeholder: 'Type email here',
    },
  ];

  return (
    <div className="flex justify-evenly items-center h-full">
      {/* Left Column */}
      <div className="w-1/2 max-w-[516px] text-center">
        <p className="title-large text-white">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
      </div>

      {/* Right Column: Login Form with Glassmorphism Background */}
      <div className="w-1/2 max-w-[500px] py-12 px-14 bg-white bg-opacity-20 backdrop-blur-lg backdrop-opacity-95 rounded-lg border border-[#78767A]">
        {/* Your login form components go here */}

        <Form
          formTitle="Forgot Password"
          formFields={formFields}
          onSubmit={handleForgotPassword}
          buttonText="Submit"
        />

        <div className="text-center text-white pt-4">
          <p className="p-2.5 my-2 body-medium">
            <Link href="/login">
              <span className="font-[600] text-[18px] flex gap-3 justify-center">
                <Icon path={mdiKeyboardBackspace} size={1} />
                Back
              </span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
      />
    </div>
  );
}
