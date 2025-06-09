// src/app/page.tsx
import { Button } from 'antd';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My App!</h1>
      
      {/* Add this button */}
      <Link href="/about">
        <Button type="primary">
          Go to About Page
        </Button>
      </Link>

      {/* ... rest of your homepage content ... */}
    </div>
  );
}