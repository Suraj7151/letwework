import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Get the session cookie
  const session = req.cookies.get('session');

  // If no session cookie, redirect to the login page
  if (!session) {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to the home or login page
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/worker/dashboard:path*'], 
};