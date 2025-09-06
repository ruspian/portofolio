import { Lato, Fira_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

const fira = Fira_Mono({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Portofolio",
  description: "Situs Web Portofolio Ruspian Majid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${fira.className} antialiased`}>
        <div className="flex min-h-[100vh] items-start justify-center bg-slate-900">
          <div className="w-[720px] md:w-[900px] lg:w-[1200px] px-8 py-1">
            <HeaderComponent />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
