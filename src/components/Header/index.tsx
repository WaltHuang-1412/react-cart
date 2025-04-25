import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button/';

export const Header = () => {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    location.pathname === path
      ? 'text-black font-semibold'
      : 'text-gray-500 hover:text-black transition';

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          🛒 React Cart
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/products" className={navLinkClass('/products')}>
            商品
          </Link>
          <Link to="/cart" className={navLinkClass('/cart')}>
            購物車
          </Link>
          <Link to="/checkout" className={navLinkClass('/checkout')}>
            結帳
          </Link>
        </nav>

        <div className="md:hidden">
          <Link to="/cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};