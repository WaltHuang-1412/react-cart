// layouts/MainLayout.tsx
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header Section */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">React Cart</h1>
            <div className="flex items-center gap-4">
              {/* Add navigation items here */}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {children}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">Your trusted shopping destination for quality products.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">Email: support@reactcart.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2024 React Cart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}