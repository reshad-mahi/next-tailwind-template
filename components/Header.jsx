'use client';

import Image from 'next/image';
import Icon from '@mdi/react';
import Link from 'next/link';
import { useState } from 'react';
import { logout } from '@/utils/service';
import { mdiAccountOutline, mdiPower } from '@mdi/js';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#F3EEF2] flex items-center justify-between px-20">
      {/* Logo on the left */}
      <div className="ml-8">
        <Image
          priority={true}
          src="/logo-black.png"
          alt="Your Logo"
          width={100}
          height={80}
        />
      </div>

      {/* User button with dropdown on the right */}
      <div className="mr-8 relative">
        <button
          className="main-btn transparent-btn flex gap-2"
          onClick={toggleDropdown}
        >
          <Icon path={mdiAccountOutline} size={1} />
          User Name
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
            <ul className="w-[273px] bg-[#EFEDF1]">
              <li className="py-2 border-t-[#D8C2BF]">
                <Link
                  href="/account"
                  onClick={logout}
                  className="px-3 py-2 flex gap-2 hover:bg-[#aaaaaa]"
                >
                  <Icon path={mdiAccountOutline} size={1} />
                  My Account
                </Link>
              </li>
              <li className="py-2 border border-t-[#D8C2BF]">
                <Link
                  href="/logout"
                  onClick={logout}
                  className="px-3 py-2 flex gap-2 hover:bg-[#aaaaaa]"
                >
                  <Icon path={mdiPower} size={1} />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
