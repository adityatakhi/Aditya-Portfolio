import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FDFCF9] text-gray-900`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}