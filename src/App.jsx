import { useState } from 'react';
import { Toaster } from './components/ui/sonner.jsx';
import { LoginPage } from './components/LoginPage.jsx';
import { AdminDashboard } from './components/AdminDashboard.jsx';
import { ParticipantDashboard } from './components/ParticipantDashboard.jsx';
import { PublicHeader } from './components/PublicHeader.jsx';
import { PublicFooter } from './components/PublicFooter.jsx';
import { HomePage } from './components/pages/HomePage.jsx';
import { AboutPage } from './components/pages/AboutPage.jsx';
import { CallForPapersPage } from './components/pages/CallForPapersPage.jsx';
import { RegistrationInfoPage } from './components/pages/RegistrationInfoPage.jsx';
import { ProgramPage } from './components/pages/ProgramPage.jsx';
import { ContactPage } from './components/pages/ContactPage.jsx';
import { ResourcesPage } from './components/pages/ResourcesPage.jsx';
import { FAQPage } from './components/pages/FAQPage.jsx';

export default function App() {
  const [userRole, setUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (role) => {
    setUserRole(role);
    // After login, the dashboard components will handle their own navigation
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
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
        {currentPage === 'resources' && <ResourcesPage />}
        {currentPage === 'faq' && <FAQPage />}
      </main>
      <PublicFooter onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}
