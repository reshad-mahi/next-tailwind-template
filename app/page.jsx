import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-[url('/main-bg.png')] h-screen bg-cover flex flex-col justify-between bg-no-repeat bg-center px-20">
      {/* Top Section: Logo */}
      <Link href="/">
        <div className="flex items-center p-4 ">
          <Image
            priority={true}
            src="/logo.png"
            alt="Your Logo"
            width={100}
            height={80}
          />
        </div>
      </Link>

      {/* Middle Section: Hello Racksub Title and Paragraph */}
      <div className="text-center text-white max-w-[1000px] mx-auto">
        <h1 className="display-large font-[700] pb-5">
          Connecting data center users with available capacity & services.
        </h1>
        <p className="title-medium">
          IT operations have evolved to a hybrid model of cloud, on premises
          (enterprise) & third-party operator (3PO) data center facilities. Not
          every city has qualified colocation facilities & not all data center
          requirements belong in cloud, so how do data center users find
          solutions?
        </p>
      </div>

      {/* Bottom Section: Two Buttons */}
      <div className="p-4 text-center pb-[100px]">
        <p className="title-medium text-white pb-5">
          Click to reach out to the Racksub team and provide details about your
          data center capacity.
        </p>
        <div className="flex justify-center space-x-10 ">
          <Link
            href={{
              pathname: '/login',
              query: {
                role: 'provider',
              },
            }}
          >
            <Button className="main-btn min-w-[350px] min-h-[64px]">
              I Am A Capacity Owner
            </Button>
          </Link>
          <Link
            href={{
              pathname: '/login',
              query: {
                role: 'consumer',
              },
            }}
          >
            <Button className="main-btn min-w-[350px] min-h-[64px]">
              I Am Searching For Capacity
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
