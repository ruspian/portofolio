import { Lato } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata = {
  title: "Portofolio",
  description: "Situs Web Portofolio Ruspian Majid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
