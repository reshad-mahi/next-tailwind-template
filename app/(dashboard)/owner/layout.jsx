'use client';

// RootLayout.jsx
import { redirect } from 'next/navigation';
import Header from '@/components/Header';

const Body = ({ children }) => <div className="min-container">{children}</div>;

const RootLayout = ({ children }) => {
  // const authToken =
  //   typeof window !== "undefined" ? localStorage.getItem("userToken") : null;

  // if (!authToken) {
  //   redirect("/login");
  //   return null;
  // }

  return (
    <div>
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

export default RootLayout;
