import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/utils/auth";

// middleware
export const middleware = async (req) => {
  const session = await auth();
  const isLogin = !!session?.user;
  const role = session?.user?.role;
  const { pathname } = req.nextUrl;

  // proteksi halaman buat project
  if (pathname.startsWith("/buat-project")) {
    // Jika sudah login tapi bukan admin atau belum login, redirect ke halaman home
    if (role !== "admin" || !isLogin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // proteksi halaman masuk
  if (isLogin && pathname.startsWith("/masuk")) {
    // Jika sudah login, tidak boleh mengakses halaman signin
    return NextResponse.redirect(new URL("/", req.url));
  }

  // lanjut
  return NextResponse.next();
};

// jalankan middleware di path ini
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
