import { NextRequest, NextResponse } from 'next/server';

function getUserStatus(token) {
  if (token === 'buyer') {
    return 'buyer';
  } else if (token === 'owner') {
    return 'owner';
  }
}

function getRequiredStatus(pathname) {
  if (pathname === '/buyer') {
    return 'buyer';
  } else if (pathname === '/profile') {
    return 'user';
  } else {
    return 'guest';
  }
}
export default function middleware(req) {
  //   const token2 = true;
  //   const token = req.cookies.token;
  //   const userStatus = 'asfsa';
  //   const requiredStatus = getRequiredStatus(req.nextUrl.pathname);
  //   const url = req.nextUrl.clone();
  //   if (token2) {
  //     if (userStatus === 'buyer') {
  //       url.pathname = '/buyer';
  //       return NextResponse.rewrite(url);
  //     } else if (userStatus === 'owner') {
  //       url.pathname = '/owner';
  //       return NextResponse.rewrite(url);
  //     } else {
  //       url.pathname = '/login/owner';
  //       return NextResponse.rewrite(url);
  //     }
  //   }
}
