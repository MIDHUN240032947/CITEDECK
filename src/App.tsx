import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { ParticipantDashboard } from './components/ParticipantDashboard';
import { PublicHeader } from './components/PublicHeader';
import { PublicFooter } from './components/PublicFooter';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { CallForPapersPage } from './components/pages/CallForPapersPage';
import { RegistrationInfoPage } from './components/pages/RegistrationInfoPage';
import { ProgramPage } from './components/pages/ProgramPage';
import { ContactPage } from './components/pages/ContactPage';

type UserRole = 'admin' | 'participant' | null;
type Page = string;

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    // After login, the dashboard components will handle their own navigation
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('home');
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  // Render login page
  if (currentPage === 'login' && !userRole) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  // Render authenticated dashboard
  if (userRole === 'admin') {
    return (
      <>
        <AdminDashboard onLogout={handleLogout} />
        <Toaster />
      </>
    );
  }

  if (userRole === 'participant') {
    return (
      <>
        <ParticipantDashboard onLogout={handleLogout} />
        <Toaster />
      </>
    );
  }

  // Render public pages (not logged in)
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'call-for-papers' && <CallForPapersPage onNavigate={handleNavigate} />}
        {currentPage === 'registration-info' && <RegistrationInfoPage onNavigate={handleNavigate} />}
        {currentPage === 'program' && <ProgramPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <PublicFooter onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}
