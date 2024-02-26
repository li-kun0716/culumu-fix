import { NextResponse, NextMiddleware } from 'next/server';
import acceptLanguage from 'accept-language';

import { fallbackLng, languages, cookieName } from '@/i18n/settings';

acceptLanguage.languages(languages);

// eslint-disable-next-line import/no-unused-modules
export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};

// eslint-disable-next-line import/no-unused-modules
export const middleware: NextMiddleware = (req) => {
  let lng;
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // TODO 多言語対応
  // Redirect if lng in path is not supported
  // if (
  //   !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
  //   !req.nextUrl.pathname.startsWith('/_next')
  // ) {
  //   return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  // }
  //
  // if (req.headers.has('referer')) {
  //   const refererUrl = new URL(req.headers.get('referer') as string);
  //   const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
  //   const response = NextResponse.next();
  //
  //   if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
  //
  //   return response;
  // }

  return NextResponse.next();
};
