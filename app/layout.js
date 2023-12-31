import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import TProvider from "./lib/provider";

const kumbSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Product Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TProvider>
        <body className={kumbSans.className}>{children}</body>
      </TProvider>
    </html>
  );
}
