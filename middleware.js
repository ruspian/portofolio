import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("auth-token")?.value;
  const pathname = req.nextUrl.pathname;

  // belum login → redirect buat project
  if (!token && pathname.startsWith("/buat-project")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // sudah login → blok halaman masuk
  if (token && pathname.startsWith("/masuk")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
