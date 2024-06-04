import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reddit Video Games Feed",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
