// src/app/about/page.tsx
import { Button } from 'antd';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>Welcome to our about page!</p>
      
      {/* Button to go back home */}
      <Link href="/">
        <Button type="primary" className="mt-4">
          Go Home
        </Button>
      </Link>
    </div>
  );
}