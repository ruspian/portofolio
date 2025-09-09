import { auth } from "@/utils/auth";
import { SessionProvider } from "next-auth/react";

// buat provider auth
const AuthProvider = async ({ children }) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
