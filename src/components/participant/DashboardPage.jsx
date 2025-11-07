import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, FileText, CheckCircle, Clock, AlertCircle, Users } from "lucide-react";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const stats = [
    { label: 'Submitted Papers', value: '2', icon: FileText, color: 'text-blue-600' },
    { label: 'Accepted Papers', value: '1', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Upcoming Sessions', value: '5', icon: Calendar, color: 'text-purple-600' },
    { label: 'Network Connections', value: '12', icon: Users, color: 'text-amber-600' },
  ];

  const submissions = [
    {
      id: 1,
      title: 'Machine Learning Applications in Climate Science',
      status: 'Accepted',
      submissionDate: '2024-09-15',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      title: 'Neural Networks for Environmental Prediction',
      status: 'Under Review',
      submissionDate: '2024-09-10',
      statusColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Paper Submission Deadline',
      date: 'March 15, 2025',
      type: 'deadline',
      icon: AlertCircle,
      color: 'text-red-600'
    },
    {
      title: 'Registration Opens',
      date: 'April 1, 2025',
      type: 'info',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Conference Dates',
      date: 'July 10-12, 2025',
      type: 'event',
      icon: Calendar,
      color: 'text-purple-600'
    }
  ];

  const registrationStatus = {
    type: 'Academic',
    status: 'Confirmed',
    paymentStatus: 'Paid',
    amount: '$499'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Welcome Back, Dr. Sarah Johnson</h1>
          <p className="text-slate-600">Here's an overview of your conference activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl text-slate-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* My Submissions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  My Submissions
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('my-submissions')}
                >
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-slate-900 mb-2">{submission.title}</h4>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <span>Submitted: {submission.submissionDate}</span>
                          </div>
                        </div>
                        <Badge className={submission.statusColor}>
                          {submission.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Registration Status */}
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Registration Status
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('my-registration')}
                >
                  View Details
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Registration Type</p>
                    <p className="text-slate-900">{registrationStatus.type}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Status</p>
                    <Badge className="bg-green-100 text-green-800">
                      {registrationStatus.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Payment</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-slate-900">{registrationStatus.paymentStatus}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Amount</p>
                    <p className="text-slate-900">{registrationStatus.amount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <div className={`h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0`}>
                        <event.icon className={`h-5 w-5 ${event.color}`} />
                      </div>
                      <div>
                        <h4 className="text-slate-900 text-sm mb-1">{event.title}</h4>
                        <p className="text-slate-600 text-sm">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-800 text-white">
              <CardContent className="pt-6">
                <h4 className="mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <Button
                    variant="secondary"
                    className="w-full justify-start"
                    onClick={() => onNavigate('my-submissions')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Submit New Paper
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full justify-start"
                    onClick={() => onNavigate('conference-schedule')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    View Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
