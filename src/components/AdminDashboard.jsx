import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Users, 
  ClipboardList, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { SubmissionsManagement } from './admin/SubmissionsManagement';
import { ReviewCoordination } from './admin/ReviewCoordination';
import { AttendeeList } from './admin/AttendeeList';

// Removed TypeScript interface for JS conversion

const sidebarItems = [
  { id: 'dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
  { id: 'submissions', label: 'Submissions Management', icon: FileText },
  { id: 'reviews', label: 'Review Coordination', icon: ClipboardList },
  { id: 'schedule', label: 'Schedule Builder', icon: Calendar },
  { id: 'attendees', label: 'Attendee List', icon: Users },
];

const mockData = {
  stats: {
    totalSubmissions: 247,
    papersAccepted: 89,
    registeredAttendees: 156,
    totalRevenue: 47850
  },
  submissionPipeline: {
    submitted: 67,
    underReview: 91,
    accepted: 89,
    rejected: 58
  },
  topReviewers: [
    { name: 'Dr. Sarah Chen', reviews: 23 },
    { name: 'Prof. Michael Johnson', reviews: 19 },
    { name: 'Dr. Emily Rodriguez', reviews: 16 },
    { name: 'Prof. David Kim', reviews: 14 }
  ],
  recentActivity: [
    { action: 'New paper submission', user: 'Dr. Jane Smith', time: '2 minutes ago' },
    { action: 'Review completed', user: 'Prof. John Doe', time: '15 minutes ago' },
    { action: 'Conference registration', user: 'Dr. Alice Brown', time: '1 hour ago' },
    { action: 'Payment received', user: 'Prof. Bob Wilson', time: '2 hours ago' },
    { action: 'Review assigned', user: 'Dr. Carol Davis', time: '3 hours ago' }
  ]
};

export function AdminDashboard({ onLogout }) {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderDashboardContent = () => {
    // Render specific pages
    if (activeItem === 'submissions') {
      return <SubmissionsManagement />;
    }
    
    if (activeItem === 'reviews') {
      return <ReviewCoordination />;
    }
    
    if (activeItem === 'attendees') {
      return <AttendeeList />;
    }
    
    if (activeItem === 'schedule') {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h3 className="text-lg font-medium text-muted-foreground mb-2">
              Schedule Builder
            </h3>
            <p className="text-muted-foreground">This section is under development</p>
          </div>
        </div>
      );
    }
    
    // Dashboard home page
    if (activeItem !== 'dashboard') {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h3 className="text-lg font-medium text-muted-foreground mb-2">
              {sidebarItems.find(item => item.id === activeItem)?.label}
            </h3>
            <p className="text-muted-foreground">This section is under development</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.stats.totalSubmissions}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Papers Accepted</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.stats.papersAccepted}</div>
              <p className="text-xs text-muted-foreground">
                36% acceptance rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registered Attendees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.stats.registeredAttendees}</div>
              <p className="text-xs text-muted-foreground">
                +23% from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${mockData.stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8% from target
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Submission Pipeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Submission Pipeline
              </CardTitle>
              <CardDescription>Current status of paper submissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Submitted</span>
                  <Badge variant="secondary">{mockData.submissionPipeline.submitted}</Badge>
                </div>
                <Progress value={(mockData.submissionPipeline.submitted / mockData.stats.totalSubmissions) * 100} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Under Review</span>
                  <Badge variant="outline">{mockData.submissionPipeline.underReview}</Badge>
                </div>
                <Progress value={(mockData.submissionPipeline.underReview / mockData.stats.totalSubmissions) * 100} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accepted</span>
                  <Badge variant="default">{mockData.submissionPipeline.accepted}</Badge>
                </div>
                <Progress value={(mockData.submissionPipeline.accepted / mockData.stats.totalSubmissions) * 100} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Rejected</span>
                  <Badge variant="destructive">{mockData.submissionPipeline.rejected}</Badge>
                </div>
                <Progress value={(mockData.submissionPipeline.rejected / mockData.stats.totalSubmissions) * 100} />
              </div>
            </CardContent>
          </Card>

          {/* Top Reviewers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Top Reviewers
              </CardTitle>
              <CardDescription>Most active reviewers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.topReviewers.map((reviewer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{reviewer.name}</span>
                    </div>
                    <Badge variant="outline">{reviewer.reviews} reviews</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm">{activity.action} by <span className="font-medium">{activity.user}</span></p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        items={sidebarItems}
        activeItem={activeItem}
        onItemClick={setActiveItem}
        onLogout={onLogout}
        userRole="admin"
      />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your academic conferences efficiently</p>
          </div>
          
          {renderDashboardContent()}
        </div>
      </main>
    </div>
  );
}