import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

interface PublicFooterProps {
  onNavigate: (page: string) => void;
}

export function PublicFooter({ onNavigate }: PublicFooterProps) {
  return (
    <footer className="border-t bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-800">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl tracking-tight">CITEDECK</span>
            </div>
            <p className="text-slate-400 text-sm">
              Comprehensive platform for academic conference management
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Conference
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('call-for-papers')} className="hover:text-white transition-colors">
                  Call for Papers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('program')} className="hover:text-white transition-colors">
                  Program
                </button>
              </li>
            </ul>
          </div>

          {/* For Authors */}
          <div>
            <h4 className="mb-4">For Authors</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button onClick={() => onNavigate('call-for-papers')} className="hover:text-white transition-colors">
                  Submission Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('login')} className="hover:text-white transition-colors">
                  Submit Paper
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('registration-info')} className="hover:text-white transition-colors">
                  Register
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@icacis2025.org" className="hover:text-white transition-colors">
                  info@icacis2025.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (617) 555-1234</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>MIT, Cambridge, MA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© 2025 ICACIS - International Conference on Advanced Computing and Information Systems</p>
          <p className="mt-2">Built with CITEDECK Platform</p>
        </div>
      </div>
    </footer>
  );
}
