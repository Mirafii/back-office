// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppLayout from './appLayout';
import 'antd/dist/reset.css'; // Add this at the top

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Refine App',
  description: 'NextJS Refine Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}