# CITEDECK - Quick Start Guide

## 🎯 What is CITEDECK?

CITEDECK is a comprehensive web-based platform for academic conference management serving two main user roles:
- **Administrators**: Manage conferences, submissions, reviews, attendees, and schedules
- **Participants**: Submit papers, register, view schedules, and network

## 🚀 Getting Started

### For Conference Attendees/Authors

1. **Browse the Conference** (No login required)
   - Visit the homepage to see conference details
   - Check "About Conference" for organizing committee and venue
   - Review "Call for Papers" for submission guidelines
   - View "Registration" for pricing and payment options
   - Explore "Program/Schedule" to see the conference agenda

2. **Login or Register**
   - Click "Login / Register" button in the top-right
   - Select "Participant" role
   - (In demo: no actual credentials needed, just select the role)

3. **Participant Dashboard**
   - **Dashboard**: See your overview - submissions, registrations, upcoming events
   - **My Submissions**: Submit papers, track review status, upload final versions
   - **My Registration**: View registration details, download receipts
   - **Conference Schedule**: Browse full program, create personal schedule
   - **Profile**: Update your information and preferences

### For Conference Administrators

1. **Login as Admin**
   - Click "Login / Register" button
   - Select "Administrator" role

2. **Admin Dashboard**
   - **Admin Dashboard**: View key metrics and recent activity
   - **Submissions Management**: 
     - See all paper submissions in a table
     - Filter by status (Under Review, Accepted, Rejected)
     - Search by paper ID, title, or author
     - Track review progress
     - Accept or reject papers
   
   - **Review Coordination**:
     - Monitor reviewer workload
     - Track review completion rates
     - See overdue reviews with alerts
     - Send reminders to reviewers
     - View reviewer performance metrics
   
   - **Schedule Builder**: Create conference program (placeholder)
   
   - **Attendee List**:
     - View all registered attendees
     - Filter by registration type and payment status
     - See revenue statistics
     - Export attendee data
     - Send emails to attendees

## 📋 Common Tasks

### For Participants

#### Submitting a Paper
1. Login as Participant
2. Go to "My Submissions"
3. Click "Submit New Paper"
4. Fill in paper details (title, authors, abstract, keywords)
5. Upload paper file and supplementary materials
6. Review and submit

#### Registering for Conference
1. Browse "Registration" page (public) to see options
2. Login or create account
3. Go to "My Registration"
4. Select registration type (Student/Academic/Industry)
5. Add optional extras (gala dinner, workshops)
6. Complete payment
7. Download receipt

#### Creating Personal Schedule
1. Login as Participant
2. Go to "Conference Schedule"
3. Browse sessions
4. Click "Add to My Schedule" for sessions you want to attend
5. Filter by your accepted papers
6. Export your personal schedule

### For Administrators

#### Managing Paper Submissions
1. Login as Administrator
2. Go to "Submissions Management"
3. Use filters to find specific papers:
   - Filter by track (AI & ML, Data Science, etc.)
   - Filter by status
   - Search by author or title
4. Click on a paper to view details
5. Make decisions (Accept/Reject)
6. Assign reviewers if needed

#### Coordinating Reviews
1. Go to "Review Coordination"
2. View reviewer load table
3. Check for overdue reviews (highlighted in red)
4. Send reminders to reviewers with pending reviews
5. Monitor review completion progress
6. Assign papers to reviewers using "Bulk Assignment"

#### Managing Attendees
1. Go to "Attendee List"
2. See all registered participants
3. Filter by:
   - Registration type (Student/Academic/Industry)
   - Payment status (Paid/Pending)
4. Send payment reminders to those with pending payments
5. Export data for badges, certificates, etc.
6. Email individual attendees or groups

## 💡 Tips and Best Practices

### For Participants
- ✅ Submit papers early to allow time for revisions
- ✅ Keep your profile updated with current affiliation
- ✅ Register early for early-bird pricing
- ✅ Add sessions to your personal schedule to avoid conflicts
- ✅ Check "My Submissions" regularly for reviewer comments

### For Administrators
- ✅ Monitor "Review Coordination" daily for overdue reviews
- ✅ Use filters in "Submissions Management" to batch process papers
- ✅ Export attendee data regularly for backups
- ✅ Send reminders before registration deadlines
- ✅ Use the search feature to quickly find specific papers or attendees

## 🎨 Design Notes

CITEDECK uses a **professional, clean, muted color palette**:
- Slate grays for backgrounds and text
- Subtle accent colors for status indicators:
  - 🟢 Green: Accepted, Paid, Complete
  - 🟡 Amber: Under Review, Pending, In Progress
  - 🔴 Red: Rejected, Overdue, Alert
  - 🔵 Blue: Information, Links
  - 🟣 Purple: Technical sessions

## 📊 Data Overview

### Mock Data Included
The demo includes realistic mock data:
- **5 paper submissions** with various statuses
- **4 reviewers** with different workloads
- **5 registered attendees** with payment statuses
- **3-day conference schedule** with multiple sessions
- Complete organizing committee information

### Customization
All mock data can be replaced with real data by:
1. Connecting to a backend API (Supabase recommended)
2. Replacing mock arrays in component files
3. Implementing actual authentication

## 🔐 Authentication Flow

Current implementation (Demo):
```
Public Pages → Login Page → Select Role → Dashboard
```

For production:
```
Public Pages → Login Page → Verify Credentials → Check Role → Dashboard
```

## 📱 Responsive Design

CITEDECK is fully responsive:
- **Desktop**: Full navigation menu, multi-column layouts
- **Tablet**: Adaptive layouts, maintained functionality
- **Mobile**: Stacked layouts, hamburger menu (where applicable)

## 🆘 Troubleshooting

**Q: I can't see the navigation menu**
- A: After login, look for the sidebar on the left side of the dashboard

**Q: How do I logout?**
- A: Click the logout button in the dashboard sidebar (bottom-left)

**Q: The page looks different after login**
- A: This is expected - you're now in the dashboard view with different navigation

**Q: Where are the public pages?**
- A: Logout to return to the public site with Home, About, Call for Papers, etc.

## 🔄 Navigation Summary

```
┌─────────────────────────────────────────┐
│           PUBLIC SITE                    │
│  Home | About | Call for Papers |       │
│  Registration | Program | Contact        │
└─────────────────┬───────────────────────┘
                  │
            [Login/Register]
                  │
      ┌───────────┴───────────┐
      │                       │
 ┌────▼────┐           ┌─────▼─────┐
 │ ADMIN   │           │PARTICIPANT│
 │Dashboard│           │ Dashboard │
 └────┬────┘           └─────┬─────┘
      │                      │
      ├─Submissions          ├─My Submissions
      ├─Reviews              ├─My Registration
      ├─Schedule             ├─Schedule
      ├─Attendees            └─Profile
      └─[Logout]             └─[Logout]
```

## 📚 Additional Resources

- See `NAVIGATION_GUIDE.md` for detailed page descriptions
- Check component files in `/components` for implementation details
- Review `/components/ui` for available UI components

## 🎯 Next Steps

1. **Try it out**: Click through all pages to see the full experience
2. **Test both roles**: Login as Admin and Participant to see differences
3. **Explore features**: Try filters, search, and table interactions
4. **Review data**: Check how mock data is structured for your own implementation

---

**Need Help?** Contact the CITEDECK development team or refer to the documentation in this repository.

**Version**: 2.0  
**Last Updated**: October 30, 2025
