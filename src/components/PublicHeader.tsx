import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";

interface PublicHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function PublicHeader({ currentPage, onNavigate }: PublicHeaderProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Conference' },
    { id: 'call-for-papers', label: 'Call for Papers' },
    { id: 'registration-info', label: 'Registration' },
    { id: 'program', label: 'Program/Schedule' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl tracking-tight text-slate-900">CITEDECK</span>
          </button>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Login Button */}
          <Button
            onClick={() => onNavigate('login')}
            className="bg-slate-800 hover:bg-slate-900"
          >
            Login / Register
          </Button>
        </div>
      </div>
    </header>
  );
}
