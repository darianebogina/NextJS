import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
    default-src 'self';
    script-src 'nonce-${nonce}' 'unsafe-eval';
    img-src 'self' http:;
    style-src 'self' 'unsafe-inline';
    `.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);

    requestHeaders.set(
        'Content-Security-Policy',
        cspHeader
    )

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    response.headers.set(
        'Content-Security-Policy',
        cspHeader
    )

    return response;
}

export const config = {
    matcher: '/:path*',
};