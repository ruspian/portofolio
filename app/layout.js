import { Lato, Fira_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import FooterComponent from "@/components/footer/FooterComponent";
import AuthProvider from "@/provider/authProvider";

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
        <AuthProvider>
          <HeaderComponent />
          <AntdRegistry>{children}</AntdRegistry>
          <FooterComponent />
        </AuthProvider>
      </body>
    </html>
  );
}
