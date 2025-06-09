// src/app/layout.tsx
import Link from 'next/link';
import { Button } from 'antd';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <nav className="bg-gray-100 p-4">
          <div className="flex gap-4">
            <Link href="/">
              <Button>Home</Button>
            </Link>
            <Link href="/about">
              <Button>About</Button>
            </Link>
          </div>
        </nav>
        
        {/* Page Content */}
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}