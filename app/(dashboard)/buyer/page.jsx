'use client';

import { Button } from '@/components/ui/button';
import { logout } from '@/utils/service';
import { useRouter } from 'next/navigation';
import React from 'react';

const buyerpage = () => {
  const router = useRouter();
  const logout = () => {
    window.localStorage.clear();
    router.push('/login');
  };
  return (
    <div>
      Buyer Page
      <Button onClick={logout}>Logout </Button>
    </div>
  );
};

export default buyerpage;
