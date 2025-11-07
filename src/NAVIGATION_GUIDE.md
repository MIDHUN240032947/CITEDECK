# CITEDECK Navigation Guide

## Overview
CITEDECK now features a comprehensive multi-page structure with public pages, role-based authentication, and distinct dashboard experiences for Administrators and Participants.

## Site Structure

### 1. PUBLIC PAGES (No Login Required)

#### Home Page (`/`)
- Hero section with conference theme
- Key dates (Submission deadline, Notification date, Conference dates)
- Registration status banner
- Conference tracks overview
- **Actions**: Submit Paper, Register Now buttons

#### About Conference
- Conference mission and dates
- Venue information (MIT, Cambridge, MA)
- Organizing committee details
  - General Chairs
  - Program Chairs
  - Track Chairs
- Conference statistics

#### Call for Papers
- Submission deadlines timeline
- Topics of interest by track:
  - AI & Machine Learning
  - Data Science & Big Data
  - Software Engineering
  - Cybersecurity & Privacy
- Submission guidelines
- Formatting templates (LaTeX, Word)
- Review process information

#### Registration
- Registration tiers (Student, Academic, Industry)
- Pricing breakdown:
  - Early Bird (until Apr 30)
  - Regular (May 1 - Jul 9)
  - On-Site
- Payment methods
- Cancellation policy
- Optional add-ons
- Student verification requirements

#### Program/Schedule
- 3-day conference schedule (July 10-12)
- Session types:
  - Keynote addresses
  - Technical sessions
  - Panel discussions
  - Social events
- Filterable by day
- Venue/room information

#### Contact
- Contact form
- Organizing committee email addresses
- General inquiries
- Paper submission support
- Registration support
- FAQ section

### 2. PARTICIPANT DASHBOARD (After Login)

Access via Login → Select "Participant" role

#### Dashboard (Overview)
- Quick stats (Submitted Papers, Accepted Papers, Upcoming Sessions, Connections)
- Recent submissions with status
- Registration status summary
- Upcoming events timeline
- Quick actions

#### My Submissions
Comprehensive paper submission management:
- Submit new papers
- View all submissions
- Track status (Under Review, Accepted, Rejected)
- Review comments from peer reviewers
- Upload final camera-ready versions
- Download submission files
- Paper metadata (authors, keywords, abstract)

#### My Registration
- Registration details (type, payment status)
- Invoice/receipt download
- Payment information
- Badge details
- Modify registration options (add gala dinner ticket, etc.)
- Cancellation options

#### Conference Schedule
- Full interactive conference schedule
- Filter by:
  - Personal accepted papers
  - Research interests
  - Session tracks
- Add/remove sessions to personal calendar
- Export personal schedule
- Session reminders

#### Profile
- Personal information (name, affiliation, contact)
- Academic credentials (ORCID, department, title)
- Research interests
- Bio/description
- Social links (LinkedIn, etc.)
- Password change
- Notification preferences

### 3. ADMIN DASHBOARD (After Login)

Access via Login → Select "Administrator" role

#### Admin Dashboard (Overview)
- Key metrics:
  - Total submissions
  - Papers accepted
  - Registered attendees
  - Total revenue
- Submission pipeline status
- Top reviewers performance
- Recent activity feed
- Quick action links

#### Submissions Management
**Full paper oversight and decision-making:**
- View all submitted papers in table format
- Columns: Paper ID, Title, Track, Author, Submission Date, Reviews, Status
- Search functionality (by ID, title, author)
- Filter by:
  - Status (Under Review, Accepted, Rejected)
  - Track (AI & ML, Data Science, Software Eng, Security)
- Review progress tracking (X/3 reviews completed)
- Quick actions:
  - View paper details
  - Download submission
  - Accept paper
  - Reject paper
  - Assign reviewers
- Statistics dashboard:
  - Total submissions
  - Under review count
  - Accepted count
  - Rejected count

#### Review Coordination
**Manage the peer review process:**
- Reviewer load table showing:
  - Reviewer name and contact
  - Expertise area
  - Papers assigned
  - Progress (completed/total)
  - Average review score
  - On-time vs late reviews
- Overdue reviews alert system
  - Days overdue
  - Paper details
  - Send reminder button
- Reviewer performance metrics
- Bulk assignment tool
- Review completion percentage
- Active reviewers count

#### Schedule Builder
**Create and manage conference program:**
- Session management interface
- Time slot assignment
- Room allocation
- Track organization
- Session chair assignment
- Paper-to-session mapping
- Drag-and-drop scheduling
- Conflict detection
*(Currently placeholder - can be expanded)*

#### Attendee List
**Registration and attendee management:**
- Complete attendee table with:
  - Name, Email, Affiliation
  - Registration type (Student, Academic, Industry)
  - Payment status
  - Amount paid
  - Registration date
  - Author badge (if they submitted papers)
- Search by name, email, or affiliation
- Filter by:
  - Registration type
  - Payment status
- Statistics:
  - Total registrations
  - Paid vs pending
  - Total revenue
- Actions:
  - View attendee details
  - Send email to individual or groups
  - Export data (CSV/Excel)
  - Payment reminders

## Navigation Flow

### Public User Journey
```
Home → Browse (About, Call for Papers, Registration, Program, Contact)
     → Click "Login/Register"
     → Login Page
```

### Participant Journey
```
Login as Participant
     → Dashboard (Overview)
     → My Submissions (Manage papers)
     → My Registration (View registration)
     → Conference Schedule (Personal schedule)
     → Profile (Settings)
     → Logout → Returns to Home
```

### Admin Journey
```
Login as Administrator
     → Admin Dashboard (Overview metrics)
     → Submissions Management (Review all papers)
     → Review Coordination (Manage reviewers)
     → Schedule Builder (Create program)
     → Attendee List (Manage registrations)
     → Logout → Returns to Home
```

## Key Features by Role

### Public (No Login)
✅ View conference information
✅ Read call for papers
✅ Check registration options
✅ View program/schedule
✅ Contact organizers
✅ Access templates and guidelines

### Participant
✅ Submit papers
✅ Track submission status
✅ View reviewer comments
✅ Register for conference
✅ Manage payment
✅ Create personal schedule
✅ Update profile
✅ Download proceedings

### Administrator
✅ Manage all submissions
✅ Assign reviewers
✅ Track review progress
✅ Make acceptance decisions
✅ Build conference schedule
✅ Manage attendee registrations
✅ Track payments and revenue
✅ Send communications
✅ Export data

## Technical Implementation

### File Structure
```
/components
  /admin
    - SubmissionsManagement.tsx
    - ReviewCoordination.tsx
    - AttendeeList.tsx
  /participant
    - DashboardPage.tsx
  /pages
    - HomePage.tsx
    - AboutPage.tsx
    - CallForPapersPage.tsx
    - RegistrationInfoPage.tsx
    - ProgramPage.tsx
    - ContactPage.tsx
  - AdminDashboard.tsx (with Sidebar)
  - ParticipantDashboard.tsx (with Sidebar)
  - LoginPage.tsx
  - PublicHeader.tsx
  - AuthenticatedHeader.tsx
  - Sidebar.tsx

/App.tsx (Main routing logic)
```

### State Management
- `userRole`: null | 'admin' | 'participant'
- `currentPage`: string (active page identifier)
- Authentication persists during session

### Component Reusability
- Shared UI components from `/components/ui`
- Consistent styling with muted color palette
- Responsive design throughout
- Toast notifications for user feedback

## Future Enhancements

### Phase 2 Features
- [ ] Schedule Builder drag-and-drop interface
- [ ] Real-time notifications system
- [ ] Messaging between participants
- [ ] Video presentation uploads
- [ ] Virtual conference support
- [ ] Mobile app companion
- [ ] Analytics dashboard
- [ ] Financial reporting module

### Integration Opportunities
- Backend API connection (Supabase)
- Payment gateway integration
- Email service provider
- Calendar sync (Google, Outlook)
- Video conferencing (Zoom, Teams)
- Document storage (S3, CloudStorage)

## Support

For questions about the navigation structure or to request new features, please contact the development team.

---

**Last Updated**: October 30, 2025
**Version**: 2.0
