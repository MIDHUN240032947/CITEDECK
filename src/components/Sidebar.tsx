import { cn } from './ui/utils';
import { Button } from './ui/button';
import { GraduationCap, LogOut } from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarProps {
  items: SidebarItem[];
  activeItem: string;
  onItemClick: (itemId: string) => void;
  onLogout: () => void;
  userRole: 'admin' | 'participant';
}

export function Sidebar({ items, activeItem, onItemClick, onLogout, userRole }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="bg-sidebar-primary rounded-lg p-2">
            <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground">CITEDECK</h2>
            <p className="text-xs text-muted-foreground capitalize">{userRole} Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeItem === item.id ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  activeItem === item.id && 'bg-sidebar-accent text-sidebar-accent-foreground'
                )}
                onClick={() => onItemClick(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-destructive"
          onClick={onLogout}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}