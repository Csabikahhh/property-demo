import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">LuxuryEstates</span>
          </Link>
          <nav className="flex space-x-8">
            <Link to="/" className={isActive('/')}>Buy</Link>
            <Link to="/rent" className={isActive('/rent')}>Rent</Link>
            <Link to="/sell" className={isActive('/sell')}>Sell</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}