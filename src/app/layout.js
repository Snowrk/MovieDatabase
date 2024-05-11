"use client";

import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-main">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
