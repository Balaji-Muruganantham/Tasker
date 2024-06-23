import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./Components/Sidebar/sidebar";
import GlobalStyleProvier from "./providers/GlobalStyleProvier";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasker",
  description: "New way to manage tasks on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyleProvier>
          <Sidebar />
          {children}
        </GlobalStyleProvier>
      </body>
    </html>
  );
}
