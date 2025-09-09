"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const MasukPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  // jika berhasil login arahkan ke beranda
  useEffect(() => {
    if (status === "authenticated" && session !== null) {
      router.push("/");
    }
  }, [status, session]);

  return (
    <div className="flex items-center justify-center my-30 md:my-20">
      <div className="flex gap-4 flex-col items-center justify-center px-20 py-20  rounded-md shadow-xl">
        <h1 className="font-bold text-2xl mb-5">Masuk</h1>

        {/* google */}

        <div
          className="flex w-full items-center gap-2 px-4 py-4 bg-emerald-600 text-white hover:bg-emerald-800 hover:scale-90 duration-300 rounded-sm cursor-pointer font-semibold"
          onClick={() => signIn("google")}
        >
          <FaGoogle className="size-5" />
          Masuk dengan Google
        </div>

        {/* github */}

        <div
          className="flex w-full items-center gap-2 px-4 py-4 bg-amber-500 text-white hover:bg-amber-700 hover:scale-90 duration-300 rounded-sm cursor-pointer font-semibold"
          onClick={() => signIn("github")}
        >
          <FaGithub className="size-5" />
          Masuk dengan Github
        </div>

        {/* facebook */}
        <div
          className="flex w-full items-center gap-2 px-4 py-4 bg-blue-600 text-white hover:bg-blue-800 hover:scale-90 duration-300 rounded-sm cursor-pointer font-semibold"
          onClick={() => signIn("facebook")}
        >
          <FaFacebook className="size-5" />
          Masuk dengan Facebook
        </div>
      </div>
    </div>
  );
};

export default MasukPage;
