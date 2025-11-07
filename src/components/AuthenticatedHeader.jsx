import { BookOpen, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function AuthenticatedHeader({ 
  userName, 
  userRole, 
  currentPage, 
  onNavigate, 
  onLogout 
}) {
  const participantMenu = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'my-submissions', label: 'My Submissions' },
    { id: 'my-registration', label: 'My Registration' },
    { id: 'conference-schedule', label: 'Conference Schedule' },
    { id: 'profile', label: 'Profile' },
  ];

  const adminMenu = [
    { id: 'admin-dashboard', label: 'Admin Dashboard' },
    { id: 'submissions-management', label: 'Submissions Management' },
    { id: 'review-coordination', label: 'Review Coordination' },
    { id: 'schedule-builder', label: 'Schedule Builder' },
    { id: 'attendee-list', label: 'Attendee List' },
  ];

  const menuItems = userRole === 'admin' ? adminMenu : participantMenu;
  const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate(userRole === 'admin' ? 'admin-dashboard' : 'dashboard')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl tracking-tight text-slate-900">CITEDECK</span>
              <span className="ml-2 text-xs text-slate-500">
                {userRole === 'admin' ? 'Admin' : 'Participant'}
              </span>
            </div>
          </button>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md transition-colors text-sm ${
                  currentPage === item.id
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarFallback className="bg-slate-700 text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm text-slate-900">{userName}</p>
                <p className="text-xs text-slate-500">
                  {userRole === 'admin' ? 'Administrator' : 'Participant'}
                </p>
              </div>
              <DropdownMenuSeparator />
              {userRole === 'participant' && (
                <DropdownMenuItem onClick={() => onNavigate('profile')}>
                  Profile Settings
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={onLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
