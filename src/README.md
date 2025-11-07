# CITEDECK - Academic Conference Management Platform

A comprehensive, professional web-based platform for managing academic conferences, including paper submissions, peer reviews, scheduling, and attendee registration.

![Platform Status](https://img.shields.io/badge/status-demo-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![React](https://img.shields.io/badge/react-18.x-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/tailwind-4.0-38B2AC?logo=tailwind-css)

---

## 🎯 Overview

CITEDECK is a full-featured conference management system designed to streamline the entire conference lifecycle - from paper submission to final presentation. Built with React and modern web technologies, it provides distinct interfaces for administrators and participants.

### Key Features

✅ **Dual Role System**
- Administrator dashboard for conference management
- Participant dashboard for authors and attendees

✅ **Paper Management**
- Online submission system
- Peer review coordination
- Status tracking and notifications

✅ **Conference Organization**
- Schedule builder and management
- Session planning and room allocation
- Attendee registration and tracking

✅ **Professional Design**
- Clean, modern UI with muted color palette
- Responsive design for all devices
- Clickable metrics and interactive elements

---

## 🚀 Quick Start

### Demo Credentials

#### Administrator Access
```
Email: admin@citedeck.com
Password: admin123
```

#### Participant Access
```
Email: participant@citedeck.com
Password: participant123
```

### Accessing the Platform

1. **Public Pages** (No login required):
   - Home - Conference overview
   - About - Conference details
   - Call for Papers - Submission guidelines
   - Registration - Fee structure
   - Program - Full schedule
   - Resources - Templates and tools
   - FAQ - Common questions
   - Contact - Contact form

2. **Login**:
   - Click "Login / Register" in the header
   - Use demo credentials or click quick login cards
   - Access role-specific dashboard

---

## 📋 Menu Structure

### Public Navigation
```
Home
About
Conference
  ├── Call for Papers
  ├── Registration
  └── Program
Resources
  ├── Resources
  ├── FAQ
  └── Contact
```

### Admin Dashboard
```
Admin Dashboard
  ├── Admin Dashboard (Overview)
  ├── Submissions Management
  ├── Review Coordination
  ├── Schedule Builder
  └── Attendee List
```

### Participant Dashboard
```
Participant Dashboard
  ├── Dashboard (Overview)
  ├── My Submissions
  ├── My Registration
  ├── Conference Schedule
  └── Profile
```

---

## 🎨 Design Features

### Professional UI/UX
- **Color Palette**: Muted slate tones for trust and credibility
- **Typography**: Clear hierarchy with semantic HTML
- **Spacing**: Consistent 4px/8px grid system
- **Components**: Shadcn/ui component library

### Interactive Elements
- **Clickable Metrics**: Homepage statistics open detailed dialogs
- **Hover States**: Visual feedback on all interactive elements
- **Smooth Transitions**: Professional animations throughout
- **Responsive Tables**: Adaptive layouts for data display

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast text

---

## 📊 Mock Data

The platform includes comprehensive demo data:

### Statistics
- 247 paper submissions
- 89 accepted papers
- 500+ registered attendees
- 45 countries represented
- 8 keynote speakers
- 30+ technical sessions

### Submission Pipeline
- 67 submitted papers
- 91 under review
- 89 accepted
- 58 rejected

### Reviewers
- 4 active reviewers
- Performance metrics
- Workload distribution
- Review completion tracking

---

## 🔐 User Roles & Permissions

### Administrator
**Full Access to:**
- View all submissions and their status
- Assign reviewers to papers
- Manage review process
- Build conference schedule
- View attendee list and registrations
- Access analytics and metrics
- Export data

**Dashboard Sections:**
- Overview with key metrics
- Submissions management table
- Review coordination panel
- Schedule builder (under development)
- Attendee management system

### Participant
**Access to:**
- Submit papers for review
- Track submission status
- View reviewer feedback
- Register for conference
- View personalized schedule
- Update profile information

**Dashboard Sections:**
- Welcome overview
- My submissions list
- Registration management
- Conference schedule viewer
- Profile editor

---

## 📄 Page Details

### Public Pages

#### Home Page
- Hero section with conference details
- **Clickable metrics** showing statistics
- Important dates timeline
- Registration call-to-action
- Conference tracks overview
- Why attend section

#### About Page
- Conference mission and vision
- Organizing committee details
- Venue information
- Conference statistics
- Track chairs information

#### Call for Papers
- Submission timeline
- Topics of interest by track
- Submission guidelines
- Paper format requirements
- Review process details
- Download templates

#### Registration Info
- Fee structure (Student/Academic/Industry)
- Early bird discounts
- Payment methods
- Cancellation policy
- Optional add-ons
- Student verification requirements

#### Program/Schedule
- 3-day detailed schedule
- Session types with color coding
- Speaker information
- Room locations
- Venue details

#### Resources
- Paper templates (LaTeX/Word)
- Author guidelines
- Presentation templates
- Video tutorials
- Recommended tools

#### FAQ
- 25+ questions across 5 categories:
  - General
  - Submissions
  - Registration
  - Presentation
  - Travel

#### Contact
- Contact form
- Email addresses by department
- Phone number
- Physical address
- FAQ section

---

## 🛠️ Technical Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS 4.0** - Styling
- **Shadcn/ui** - Component library
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Components
- Fully converted to JSX (JavaScript)
- Modular component architecture
- Reusable UI components
- Consistent styling patterns

### State Management
- React useState hooks
- Props drilling for simplicity
- Local component state

---

## 📁 Project Structure

```
citedeck/
├── App.jsx                          # Main application
├── components/
│   ├── LoginPage.jsx               # Authentication
│   ├── PublicHeader.jsx            # Public navigation
│   ├── PublicFooter.jsx            # Footer
│   ├── AuthenticatedHeader.jsx     # Logged-in header
│   ├── Sidebar.jsx                 # Dashboard sidebar
│   ├── AdminDashboard.tsx          # Admin interface
│   ├── ParticipantDashboard.tsx    # Participant interface
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page
│   │   ├── AboutPage.jsx           # About conference
│   │   ├── CallForPapersPage.jsx   # CFP
│   │   ├── RegistrationInfoPage.jsx # Registration
│   │   ├── ProgramPage.jsx         # Schedule
│   │   ├── ContactPage.jsx         # Contact
│   │   ├── ResourcesPage.jsx       # Resources
│   │   └── FAQPage.jsx             # FAQ
│   ├── admin/
│   │   ├── SubmissionsManagement.tsx
│   │   ├── ReviewCoordination.tsx
│   │   └── AttendeeList.tsx
│   └── ui/                         # Shadcn components
└── styles/
    └── globals.css                 # Global styles
```

---

## 🎯 Use Cases

### For Conference Organizers
1. **Paper Management**
   - Accept submissions through the platform
   - Assign papers to reviewers
   - Track review progress
   - Make acceptance decisions

2. **Registration Management**
   - Track registrations in real-time
   - Monitor payment status
   - Export attendee lists
   - Send bulk communications

3. **Schedule Building**
   - Plan sessions and tracks
   - Assign presenters to slots
   - Allocate rooms
   - Publish final schedule

### For Authors/Participants
1. **Paper Submission**
   - Submit research papers
   - Track review status
   - Respond to reviewer comments
   - Submit revisions

2. **Conference Participation**
   - Register for the conference
   - Choose session preferences
   - View personalized schedule
   - Network with other attendees

---

## 🔄 Workflow Examples

### Paper Submission Workflow
```
Author → Submit Paper → Admin Assigns Reviewers → Review Process →
Decision (Accept/Reject/Revise) → Author Notification → Camera-Ready Upload
```

### Registration Workflow
```
User → Select Registration Type → Fill Details → Payment →
Confirmation Email → Download Invoice → Access Conference Materials
```

### Review Workflow
```
Admin → Create Review Assignment → Notify Reviewer → Reviewer Submits →
Admin Views Feedback → Makes Decision → Notify Author
```

---

## 📱 Responsive Design

The platform is fully responsive across:
- **Desktop** (1920px+) - Full feature set
- **Laptop** (1024px-1919px) - Optimized layout
- **Tablet** (768px-1023px) - Adapted navigation
- **Mobile** (320px-767px) - Mobile-first approach

---

## 🚧 Future Enhancements

### Planned Features
- [ ] Real authentication with JWT
- [ ] Email notification system
- [ ] Document version control
- [ ] Advanced search and filters
- [ ] Real-time collaboration
- [ ] Analytics dashboard
- [ ] Export functionality
- [ ] Payment gateway integration
- [ ] Video presentation uploads
- [ ] Live streaming integration
- [ ] Mobile app companion
- [ ] Multi-language support

---

## 📝 Documentation

Additional documentation available:
- `DEMO_CREDENTIALS.md` - Login credentials and testing guide
- `CONVERSION_STATUS.md` - TypeScript to JavaScript conversion status
- `FEATURE_CHECKLIST.md` - Feature implementation checklist
- `NAVIGATION_GUIDE.md` - Complete navigation reference

---

## 🤝 Support

### Conference Information
- **Email**: info@icacis2025.org
- **Phone**: +1 (617) 555-1234
- **Address**: MIT, 77 Massachusetts Avenue, Cambridge, MA 02139

### Technical Support
For platform-related questions:
- Check the FAQ page
- Review documentation files
- Contact support team

---

## 📜 License

This is a demonstration platform for academic conference management.

---

## 🎓 About ICACIS 2025

**International Conference on Advanced Computing and Information Systems**

- **Dates**: July 10-12, 2025
- **Venue**: Massachusetts Institute of Technology, Cambridge, MA
- **Tracks**: AI/ML, Data Science, Software Engineering, Cybersecurity
- **Format**: Hybrid (In-person + Virtual)

---

## 👥 Credits

Built with:
- React
- Tailwind CSS
- Shadcn/ui
- Lucide Icons
- Sonner

Platform designed for academic excellence and professional conference management.

---

**Version**: 1.0.0  
**Last Updated**: November 2024  
**Status**: Demo/Prototype

---

For the best experience, use modern browsers (Chrome, Firefox, Safari, Edge).
