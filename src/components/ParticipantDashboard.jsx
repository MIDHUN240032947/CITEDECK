import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  User, 
  BookOpen, 
  Users,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  MapPin,
  Download,
  Edit,
  Trash2,
  Eye,
  Upload,
  MessageSquare,
  Search,
  Filter,
  Star,
  Share2,
  Copy,
  ExternalLink,
  CreditCard,
  Receipt,
  Calendar as CalendarIcon,
  UserPlus,
  Send,
  Bookmark,
  Settings,
  FileUp,
  DollarSign,
  CheckCircle2,
  X
} from 'lucide-react';

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'submissions', label: 'My Submissions', icon: FileText },
  { id: 'registrations', label: 'My Registration', icon: Calendar },
  { id: 'schedule', label: 'Conference Schedule', icon: Calendar },
  { id: 'profile', label: 'Profile', icon: User },
];

const mockData = {
  user: {
    name: 'Mr.Midhun varma',
    email: '2400032947@kluniversity.in',
    affiliation: 'KL University',
    title: 'Associate Professor',
    department: 'Computer Science',
    orcid: '0000-0002-1825-0097',
    linkedin: 'midhun-varma',
    bio: 'Mr.Midhun varma is an Associate Professor specializing in machine learning applications for climate science. His research focuses on neural networks and environmental prediction models.',
    researchInterests: ['Machine Learning', 'Climate Science', 'Neural Networks', 'Environmental Modeling'],
    avatar: '/api/placeholder/150/150'
  },
  submissions: [
    {
      id: 1,
      title: 'Machine Learning Applications in Climate Science',
      authors: ['Mr.Midhun varma', 'Prof. Michael Chen', 'Dr. Lisa Wang'],
      submissionDate: '2024-09-15',
      status: 'Under Review',
      conference: 'AI Climate Summit 2024',
      abstract: 'This paper presents novel applications of machine learning techniques in climate science, focusing on predictive modeling and data analysis of environmental patterns.',
      keywords: ['Machine Learning', 'Climate Science', 'Prediction', 'Environmental Data'],
      track: 'AI Applications',
      reviewerComments: [],
      files: [
        { name: 'paper.pdf', size: '2.3 MB', type: 'application/pdf' },
        { name: 'supplementary.zip', size: '5.1 MB', type: 'application/zip' }
      ]
    },
    {
      id: 2,
      title: 'Neural Networks for Environmental Prediction',
      authors: ['Mr.Midhun varma', 'Dr. Robert Kim'],
      submissionDate: '2024-09-10',
      status: 'Accepted',
      conference: 'Environmental AI Conference',
      abstract: 'A comprehensive study of neural network architectures for environmental prediction, demonstrating improved accuracy in weather forecasting models.',
      keywords: ['Neural Networks', 'Environmental Prediction', 'Weather Forecasting'],
      track: 'Deep Learning',
      reviewerComments: [
        { reviewer: 'Reviewer 1', comment: 'Excellent work with solid methodology. Minor revisions needed in the conclusion.', rating: 'Accept' },
        { reviewer: 'Reviewer 2', comment: 'Strong contribution to the field. The experimental validation is thorough.', rating: 'Accept' }
      ],
      files: [
        { name: 'final_paper.pdf', size: '1.8 MB', type: 'application/pdf' }
      ]
    },
    {
      id: 3,
      title: 'Deep Learning in Weather Forecasting',
      authors: ['Mr.Midhun varma', 'Dr. Emily Rodriguez', 'Prof. David Park'],
      submissionDate: '2024-08-28',
      status: 'Revision Required',
      conference: 'Weather Tech Symposium',
      abstract: 'An exploration of deep learning techniques for improving weather forecasting accuracy, with focus on long-term predictions.',
      keywords: ['Deep Learning', 'Weather Forecasting', 'Prediction Models'],
      track: 'Weather Systems',
      reviewerComments: [
        { reviewer: 'Reviewer 1', comment: 'The methodology is sound but needs more experimental validation. Please include additional datasets.', rating: 'Minor Revision' },
        { reviewer: 'Reviewer 2', comment: 'Interesting approach. The related work section needs expansion.', rating: 'Minor Revision' }
      ],
      files: [
        { name: 'draft_paper.pdf', size: '2.1 MB', type: 'application/pdf' }
      ]
    }
  ],
  registrations: [
    {
      id: 1,
      conference: 'AI Climate Summit 2024',
      date: 'October 15-17, 2024',
      location: 'San Francisco, CA',
      status: 'Confirmed',
      registrationType: 'Author',
      fee: 450,
      paymentDate: '2024-09-12',
      invoiceNumber: 'INV-2024-001',
      sessions: ['Opening Keynote', 'AI Applications Track', 'Poster Session'],
      deadline: '2024-10-01'
    },
    {
      id: 2,
      conference: 'Environmental AI Conference',
      date: 'November 8-10, 2024',
      location: 'Boston, MA',
      status: 'Pending Payment',
      registrationType: 'Student',
      fee: 250,
      paymentDate: null,
      invoiceNumber: 'INV-2024-002',
      sessions: [],
      deadline: '2024-10-25'
    }
  ],
  schedule: [
    {
      id: 1,
      title: 'Opening Keynote: The Future of AI in Science',
      speaker: 'Dr. Elena Martinez',
      date: '2024-10-15',
      time: '09:00 - 10:00',
      location: 'Main Auditorium',
      conference: 'AI Climate Summit 2024',
      track: 'Keynote',
      description: 'An inspiring talk about the future applications of AI in scientific research.',
      bookmarked: true
    },
    {
      id: 2,
      title: 'Machine Learning Panel Discussion',
      speaker: 'Various Experts',
      date: '2024-10-15',
      time: '10:30 - 12:00',
      location: 'Conference Room A',
      conference: 'AI Climate Summit 2024',
      track: 'AI Applications',
      description: 'Panel discussion with leading experts in machine learning applications.',
      bookmarked: false
    },
    {
      id: 3,
      title: 'Poster Session',
      speaker: 'Multiple Presenters',
      date: '2024-10-16',
      time: '14:00 - 16:00',
      location: 'Exhibition Hall',
      conference: 'AI Climate Summit 2024',
      track: 'Posters',
      description: 'Interactive poster presentations from conference participants.',
      bookmarked: true
    }
  ],
  proceedings: [
    {
      id: 1,
      title: 'Advances in Climate Modeling with Machine Learning',
      authors: ['Dr. John Smith', 'Prof. Mary Johnson'],
      conference: 'AI Climate Summit 2023',
      year: 2023,
      doi: '10.1000/xyz123',
      abstract: 'This paper discusses recent advances in climate modeling using machine learning techniques...',
      downloadUrl: '/papers/advances-climate-ml.pdf',
      citations: 45,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Neural Network Architectures for Environmental Data',
      authors: ['Dr. Lisa Chen', 'Dr. Robert Wilson'],
      conference: 'Environmental AI Conference 2023',
      year: 2023,
      doi: '10.1000/abc456',
      abstract: 'An comprehensive survey of neural network architectures suitable for environmental data analysis...',
      downloadUrl: '/papers/nn-environmental-data.pdf',
      citations: 67,
      bookmarked: true
    }
  ],
  networking: {
    connections: [
      {
        id: 1,
        name: 'Dr. Michael Chen',
        affiliation: 'MIT',
        title: 'Professor',
        researchAreas: ['Machine Learning', 'Climate Science'],
        avatar: '/api/placeholder/50/50',
        connected: true,
        lastMessage: 'Looking forward to your presentation!'
      },
      {
        id: 2,
        name: 'Prof. Emily Rodriguez',
        affiliation: 'UC Berkeley',
        title: 'Associate Professor',
        researchAreas: ['Deep Learning', 'Environmental Modeling'],
        avatar: '/api/placeholder/50/50',
        connected: false,
        lastMessage: null
      }
    ],
    messages: [
      {
        id: 1,
        from: 'Dr. Michael Chen',
        subject: 'Collaboration Opportunity',
        preview: 'I\'d love to discuss potential collaboration on climate modeling...',
        date: '2024-09-20',
        read: false
      },
      {
        id: 2,
        from: 'Conference Organizer',
        subject: 'Session Details Update',
        preview: 'Your presentation slot has been confirmed for October 16th...',
        date: '2024-09-19',
        read: true
      }
    ]
  },
  announcements: [
    {
      id: 1,
      title: 'Early Bird Registration Extended',
      message: 'The early bird registration deadline has been extended to October 1st.',
      date: '2024-09-20',
      conference: 'AI Climate Summit 2024'
    },
    {
      id: 2,
      title: 'Keynote Speaker Announced',
      message: 'We are excited to announce Dr. Emily Chen as our keynote speaker.',
      date: '2024-09-18',
      conference: 'Environmental AI Conference'
    }
  ]
};

export function ParticipantDashboard({ onLogout }) {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted': return 'default';
      case 'under review': return 'secondary';
      case 'revision required': return 'outline';
      case 'rejected': return 'destructive';
      case 'confirmed': return 'default';
      case 'pending payment': return 'outline';
      default: return 'secondary';
    }
  };

  const renderDashboardContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return renderDashboard();
      case 'submissions':
        return renderSubmissions();
      case 'registrations':
        return renderRegistrations();
      case 'schedule':
        return renderSchedule();
      case 'profile':
        return renderProfile();
      case 'proceedings':
        return renderProceedings();
      case 'networking':
        return renderNetworking();
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => {

    return (
      <div className="space-y-6">
        {/* Welcome Message */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Welcome back, {mockData.user.name}!
            </CardTitle>
            <CardDescription>
              {mockData.user.affiliation} • {mockData.user.email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{mockData.submissions.length}</div>
                <p className="text-sm text-muted-foreground">Active Submissions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{mockData.registrations.length}</div>
                <p className="text-sm text-muted-foreground">Conference Registrations</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{mockData.networking.connections.filter(c => c.connected).length}</div>
                <p className="text-sm text-muted-foreground">Professional Connections</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Submission Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  My Submission Status
                </span>
                <Button size="sm" className="ml-2">
                  <Plus className="mr-1 h-4 w-4" />
                  New Submission
                </Button>
              </CardTitle>
              <CardDescription>Track the status of your paper submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.submissions.slice(0, 3).map((submission) => (
                  <div key={submission.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{submission.title}</h4>
                      <Badge variant={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {submission.conference}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(submission.submissionDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Submissions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Registration Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Registration Information
                </span>
                <Button size="sm" variant="outline">
                  <Plus className="mr-1 h-4 w-4" />
                  Register
                </Button>
              </CardTitle>
              <CardDescription>Your conference registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.registrations.map((registration) => (
                  <div key={registration.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{registration.conference}</h4>
                      <Badge variant={getStatusColor(registration.status)}>
                        {registration.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {registration.date}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {registration.location}
                      </p>
                      {registration.status === 'Pending Payment' && (
                        <p className="text-xs text-destructive flex items-center">
                          <AlertCircle className="mr-1 h-3 w-3" />
                          Payment due by {registration.deadline}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Important Announcements
            </CardTitle>
            <CardDescription>Latest updates from conference organizers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.announcements.map((announcement) => (
                <div key={announcement.id} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-medium text-sm">{announcement.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {announcement.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {announcement.conference}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="h-12 flex-col">
                <Plus className="h-4 w-4 mb-1" />
                Submit New Paper
              </Button>
              <Button variant="outline" className="h-12 flex-col">
                <Calendar className="h-4 w-4 mb-1" />
                Register for Conference
              </Button>
              <Button variant="outline" className="h-12 flex-col">
                <BookOpen className="h-4 w-4 mb-1" />
                Browse Proceedings
              </Button>
              <Button variant="outline" className="h-12 flex-col">
                <Users className="h-4 w-4 mb-1" />
                Network & Connect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderSubmissions = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">My Submissions</h2>
            <p className="text-muted-foreground">Manage and monitor your paper submissions</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Submission
          </Button>
        </div>

        <div className="space-y-4">
          {mockData.submissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{submission.title}</CardTitle>
                    <CardDescription className="mt-1">
                      Authors: {submission.authors.join(', ')}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>Conference: {submission.conference}</span>
                      <span>Track: {submission.track}</span>
                      <span>Submitted: {new Date(submission.submissionDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(submission.status)} className="ml-4">
                    {submission.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="files">Files</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="actions">Actions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Abstract</h4>
                      <p className="text-sm text-muted-foreground">{submission.abstract}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Keywords</h4>
                      <div className="flex gap-2 flex-wrap">
                        {submission.keywords.map((keyword, index) => (
                          <Badge key={index} variant="outline">{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="files">
                    <div className="space-y-2">
                      {submission.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm">{file.name}</span>
                            <Badge variant="outline" className="text-xs">{file.size}</Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Revision
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews">
                    {submission.reviewerComments.length > 0 ? (
                      <div className="space-y-4">
                        {submission.reviewerComments.map((review, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{review.reviewer}</h4>
                              <Badge variant={review.rating === 'Accept' ? 'default' : 'outline'}>
                                {review.rating}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center py-4">
                        No reviews available yet. Reviews will appear here once the review process begins.
                      </p>
                    )}
                  </TabsContent>
                  <TabsContent value="actions">
                    <div className="flex gap-2 flex-wrap">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Metadata
                      </Button>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Files
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Withdraw
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderRegistrations = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">My Registrations</h2>
            <p className="text-muted-foreground">Manage your conference registrations and payments</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Registration
          </Button>
        </div>

        <div className="space-y-4">
          {mockData.registrations.map((registration) => (
            <Card key={registration.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{registration.conference}</CardTitle>
                    <CardDescription className="mt-1">
                      {registration.registrationType} Registration
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {registration.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {registration.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={getStatusColor(registration.status)} className="mb-2">
                      {registration.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      ${registration.fee}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="payment">Payment</TabsTrigger>
                    <TabsTrigger value="sessions">Sessions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Registration Type</Label>
                          <p className="text-sm text-muted-foreground">{registration.registrationType}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Status</Label>
                          <p className="text-sm text-muted-foreground">{registration.status}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Invoice Number</Label>
                          <p className="text-sm text-muted-foreground">{registration.invoiceNumber}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Registration Fee</Label>
                          <p className="text-sm text-muted-foreground">${registration.fee}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="payment">
                    <div className="space-y-4">
                      {registration.status === 'Pending Payment' ? (
                        <div className="border border-destructive rounded-lg p-4 bg-destructive/5">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="h-4 w-4 text-destructive" />
                            <h4 className="font-medium text-destructive">Payment Required</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Payment due by {registration.deadline}
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm">
                              <CreditCard className="mr-2 h-4 w-4" />
                              Pay Now
                            </Button>
                            <Button size="sm" variant="outline">
                              <Receipt className="mr-2 h-4 w-4" />
                              View Invoice
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <h4 className="font-medium text-green-600">Payment Confirmed</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Paid on {registration.paymentDate}
                          </p>
                          <Button size="sm" variant="outline">
                            <Receipt className="mr-2 h-4 w-4" />
                            Download Receipt
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="sessions">
                    <div className="space-y-2">
                      {registration.sessions.length > 0 ? (
                        registration.sessions.map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">{session}</span>
                            <Badge variant="outline">Registered</Badge>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-center py-4">
                          No specific sessions selected. You have access to all general sessions.
                        </p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderSchedule = () => {
    const filteredSchedule = mockData.schedule.filter(session => {
      const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           session.speaker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
      const matchesDate = selectedDate === 'all' || session.date === selectedDate;
      return matchesSearch && matchesTrack && matchesDate;
    });

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Conference Schedule</h2>
          <p className="text-muted-foreground">View and manage your conference sessions</p>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search sessions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                <SelectTrigger>
                  <SelectValue placeholder="All Tracks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tracks</SelectItem>
                  <SelectItem value="Keynote">Keynote</SelectItem>
                  <SelectItem value="AI Applications">AI Applications</SelectItem>
                  <SelectItem value="Posters">Posters</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger>
                  <SelectValue placeholder="All Dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="2024-10-15">October 15</SelectItem>
                  <SelectItem value="2024-10-16">October 16</SelectItem>
                  <SelectItem value="2024-10-17">October 17</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Export Calendar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Items */}
        <div className="space-y-4">
          {filteredSchedule.map((session) => (
            <Card key={session.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{session.title}</h3>
                      {session.bookmarked && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Speaker: {session.speaker}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {session.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {session.location}
                      </span>
                      <Badge variant="outline">{session.track}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {session.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm" variant={session.bookmarked ? "default" : "outline"}>
                      <Star className="mr-2 h-4 w-4" />
                      {session.bookmarked ? "Bookmarked" : "Bookmark"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSchedule.length === 0 && (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">No sessions found matching your criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const renderProfile = () => {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">My Profile</h2>
          <p className="text-muted-foreground">Manage your personal and professional information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={mockData.user.avatar} />
                <AvatarFallback>{mockData.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Upload Photo
              </Button>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={mockData.user.name} readOnly />
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={mockData.user.title} readOnly />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={mockData.user.email} readOnly />
                </div>
                <div>
                  <Label htmlFor="affiliation">Institution</Label>
                  <Input id="affiliation" value={mockData.user.affiliation} readOnly />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" value={mockData.user.department} readOnly />
                </div>
                <div>
                  <Label htmlFor="orcid">ORCID ID</Label>
                  <div className="flex gap-2">
                    <Input id="orcid" value={mockData.user.orcid} readOnly />
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="bio">Biography</Label>
              <Textarea 
                id="bio" 
                value={mockData.user.bio}
                rows={4}
                placeholder="Tell us about your research and background..."
                readOnly
              />
            </div>
            <div>
              <Label>Research Interests</Label>
              <div className="flex gap-2 flex-wrap mt-2">
                {mockData.user.researchInterests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    {interest}
                    <X className="h-3 w-3 cursor-pointer" />
                  </Badge>
                ))}
                <Button variant="outline" size="sm">
                  <Plus className="mr-1 h-3 w-3" />
                  Add Interest
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" value={mockData.user.linkedin} placeholder="linkedin.com/in/your-profile" readOnly />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Public Email</Label>
                <p className="text-sm text-muted-foreground">Allow other participants to see your email</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Networking Directory</Label>
                <p className="text-sm text-muted-foreground">Include your profile in the networking directory</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Research Interests Visible</Label>
                <p className="text-sm text-muted-foreground">Show your research interests to other participants</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    );
  };

  const renderProceedings = () => {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Proceedings & Papers</h2>
          <p className="text-muted-foreground">Browse and download published conference papers</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search papers..."
                  className="pl-9"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Conferences" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conferences</SelectItem>
                  <SelectItem value="2024">2024 Conferences</SelectItem>
                  <SelectItem value="2023">2023 Conferences</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Authors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Authors</SelectItem>
                  <SelectItem value="bookmarked">Bookmarked Authors</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Papers List */}
        <div className="space-y-4">
          {mockData.proceedings.map((paper) => (
            <Card key={paper.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Authors: {paper.authors.join(', ')}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{paper.conference} ({paper.year})</span>
                      <span>DOI: {paper.doi}</span>
                      <span>{paper.citations} citations</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {paper.abstract}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Copy className="mr-2 h-4 w-4" />
                      Cite
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={paper.bookmarked ? "text-yellow-600" : ""}
                    >
                      <Bookmark className="mr-2 h-4 w-4" />
                      {paper.bookmarked ? "Saved" : "Save"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Citation Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Citation Formats</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="apa">
              <TabsList>
                <TabsTrigger value="apa">APA</TabsTrigger>
                <TabsTrigger value="mla">MLA</TabsTrigger>
                <TabsTrigger value="bibtex">BibTeX</TabsTrigger>
              </TabsList>
              <TabsContent value="apa" className="mt-4">
                <div className="bg-muted p-3 rounded text-sm font-mono">
                  Smith, J., & Johnson, M. (2023). Advances in Climate Modeling with Machine Learning. 
                  <em>AI Climate Summit 2023</em>. https://doi.org/10.1000/xyz123
                </div>
                <Button size="sm" variant="outline" className="mt-2">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Citation
                </Button>
              </TabsContent>
              <TabsContent value="mla" className="mt-4">
                <div className="bg-muted p-3 rounded text-sm font-mono">
                  Smith, John, and Mary Johnson. "Advances in Climate Modeling with Machine Learning." 
                  <em>AI Climate Summit 2023</em>, 2023, doi:10.1000/xyz123.
                </div>
                <Button size="sm" variant="outline" className="mt-2">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Citation
                </Button>
              </TabsContent>
              <TabsContent value="bibtex" className="mt-4">
                <div className="bg-muted p-3 rounded text-sm font-mono">
                  @inproceedings&#123;smith2023advances,<br />
                  &nbsp;&nbsp;title=&#123;Advances in Climate Modeling with Machine Learning&#125;,<br />
                  &nbsp;&nbsp;author=&#123;Smith, John and Johnson, Mary&#125;,<br />
                  &nbsp;&nbsp;booktitle=&#123;AI Climate Summit 2023&#125;,<br />
                  &nbsp;&nbsp;year=&#123;2023&#125;,<br />
                  &nbsp;&nbsp;doi=&#123;10.1000/xyz123&#125;<br />
                  &#125;
                </div>
                <Button size="sm" variant="outline" className="mt-2">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Citation
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderNetworking = () => {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Networking</h2>
          <p className="text-muted-foreground">Connect with fellow researchers and academics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Participant Directory */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Participant Directory
                <Button size="sm">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Find Connections
                </Button>
              </CardTitle>
              <CardDescription>Browse and connect with conference participants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, institution, or research interest..."
                  className="pl-9"
                />
              </div>
              <div className="space-y-4">
                {mockData.networking.connections.map((connection) => (
                  <div key={connection.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={connection.avatar} />
                        <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{connection.name}</h4>
                        <p className="text-sm text-muted-foreground">{connection.title} at {connection.affiliation}</p>
                        <div className="flex gap-1 mt-1">
                          {connection.researchAreas.slice(0, 2).map((area, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{area}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {connection.connected ? (
                        <Button size="sm" variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      ) : (
                        <Button size="sm">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Connect
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Messages
                <Badge variant="outline">{mockData.networking.messages.filter(m => !m.read).length} new</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockData.networking.messages.map((message) => (
                  <div key={message.id} className={`p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${!message.read ? 'border-primary bg-primary/5' : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{message.from}</h4>
                      <span className="text-xs text-muted-foreground">{message.date}</span>
                    </div>
                    <h5 className="text-sm font-medium mb-1">{message.subject}</h5>
                    <p className="text-xs text-muted-foreground">{message.preview}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Messages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Discussion Boards */}
        <Card>
          <CardHeader>
            <CardTitle>Discussion Boards</CardTitle>
            <CardDescription>Join topic-based discussions with other participants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium mb-2">Machine Learning Applications</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>23 posts</span>
                  <span>45 participants</span>
                </div>
                <Badge variant="outline" className="mt-2">Active</Badge>
              </div>
              <div className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium mb-2">Climate Science Research</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>18 posts</span>
                  <span>32 participants</span>
                </div>
                <Badge variant="outline" className="mt-2">Active</Badge>
              </div>
              <div className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium mb-2">General Discussion</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>56 posts</span>
                  <span>89 participants</span>
                </div>
                <Badge variant="outline" className="mt-2">Active</Badge>
              </div>
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
        userRole="participant"
      />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">
              {activeItem === 'dashboard' ? 'My Dashboard' : 
               sidebarItems.find(item => item.id === activeItem)?.label}
            </h1>
            <p className="text-muted-foreground">
              {activeItem === 'dashboard' ? 'Manage your conference submissions and registrations' :
               activeItem === 'submissions' ? 'Manage and monitor your paper submissions' :
               activeItem === 'registrations' ? 'Manage your conference registrations and payments' :
               activeItem === 'schedule' ? 'View and manage your conference sessions' :
               activeItem === 'profile' ? 'Manage your personal and professional information' :
               activeItem === 'proceedings' ? 'Browse and download published conference papers' :
               activeItem === 'networking' ? 'Connect with fellow researchers and academics' :
               'Manage your conference activities'}
            </p>
          </div>
          
          {renderDashboardContent()}
        </div>
      </main>
    </div>
  );
}