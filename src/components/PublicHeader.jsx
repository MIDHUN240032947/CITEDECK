import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function PublicHeader({ currentPage, onNavigate }) {
  const mainMenuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
  ];

  const conferenceItems = [
    { id: 'call-for-papers', label: 'Call for Papers', desc: 'Submit your research' },
    { id: 'registration-info', label: 'Registration', desc: 'Register for the conference' },
    { id: 'program', label: 'Program', desc: 'View full schedule' },
  ];

  const resourceItems = [
    { id: 'resources', label: 'Resources', desc: 'Templates and guidelines' },
    { id: 'faq', label: 'FAQ', desc: 'Common questions answered' },
    { id: 'contact', label: 'Contact', desc: 'Get in touch' },
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
          <nav className="hidden lg:flex items-center gap-1">
            {mainMenuItems.map((item) => (
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

            {/* Conference Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-md transition-colors text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                Conference
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                {conferenceItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-md transition-colors text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                Resources
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                {resourceItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
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
