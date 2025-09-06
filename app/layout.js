import { Outfit } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio",
  description: "Situs Web Portofolio Ruspian Majid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${OutfitFont.className} antialiased`}>{children}</body>
    </html>
  );
}
