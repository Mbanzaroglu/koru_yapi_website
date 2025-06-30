// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

// Sadece ana sayfa ve gerekli sistem dosyalarına izin ver
const allowedPaths = [
  '/',
  '/favicon.ico', 
  '/robots.txt',
  '/_next/static',
  '/_next/image'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Static dosyalar, public dosyaları ve Next.js sistem dosyaları için izin ver
  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/') || pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|pdf|txt)$/)) {
    return NextResponse.next()
  }

  // Sadece ana sayfaya izin ver, diğer tüm rotaları ana sayfaya yönlendir
  if (pathname !== '/' && !allowedPaths.includes(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Middleware'in hangi rotalar için çalışacağını belirle
export const config = {
  matcher: [
    /*
     * Tüm rotalar için çalış, ancak şunları hariç tut:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}