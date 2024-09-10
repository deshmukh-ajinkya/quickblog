import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { privatePaths } from './app/(private)';
import { protectedPaths } from './app/(protected)';
import { checkRoutePaths } from './utils';
import { handleRedirection } from './utils/middleware.utils';

export function middleware(request: NextRequest): void | NextResponse {
  const token = false;
  const { pathname } = request.nextUrl;

  return (
    handleRedirection(pathname === '/', '/login', request) ||
    handleRedirection(!token && checkRoutePaths(privatePaths, pathname), '/login', request) ||
    handleRedirection(token && checkRoutePaths(protectedPaths, pathname), '/dashboard', request)
  );
}

export const config = {
  matcher: '/:path*'
};
