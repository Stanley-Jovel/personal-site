import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stanley Jovel - Software and AI Engineer in Seattle",
  description:
    "Stanley Jovel is a seasoned AI and Software Engineer with over 7 years of experience. Specializing in machine learning, deep learning, and full-stack development, Stanley combines robust technical skills with innovative AI solutions. Discover his expertise in developing advanced technologies and creating impactful software applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
