import { NextRequest, NextResponse } from 'next/server';
import { auth } from './actions/auth';

export default async function middleware(request: NextRequest) {
    const url = new URL(request.url);
    const user = await auth();

    if (
        !user &&
        !url.pathname.startsWith('/sign-in') &&
        !url.pathname.startsWith('/sign-up') &&
        url.pathname !== '/welcome'
    ) {
        return NextResponse.redirect(new URL('/welcome', request.url));
    }

    if (
        user &&
        (url.pathname === '/welcome' ||
            url.pathname.startsWith('/sign-in') ||
            url.pathname.startsWith('/sign-up'))
    ) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
