import { NextRequest, NextResponse } from 'next/server';

/**
@author      : Ajinkya Deshmukh
@date        : 2024-08-14
@description : Navigate to specific route based on route type provided
*/
export function handleRedirection(
  condition: boolean,
  redirectUrl: string,
  request: NextRequest
): NextResponse | undefined {
  return condition ? NextResponse.redirect(new URL(redirectUrl, request.url)) : undefined;
}

/**
@author      : Ajinkya Deshmukh
@date        : 2024-08-14
@description : checks routes falls under which route type (Protected) or (Private)
*/
export function checkRoutePaths(routeType: string[], pathname: string): boolean {
  return routeType.some((path) => pathname.startsWith(path));
}
