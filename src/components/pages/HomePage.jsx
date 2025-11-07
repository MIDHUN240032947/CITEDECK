import { Calendar, FileText, Users, ArrowRight, TrendingUp, Award, Globe, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export function HomePage({ onNavigate }) {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const metrics = [
    {
      icon: FileText,
      label: 'Paper Submissions',
      value: '247',
      trend: '+23%',
      color: 'blue',
      details: {
        title: 'Submission Statistics',
        data: [
          { label: 'Total Submissions', value: '247' },
          { label: 'Under Review', value: '91' },
          { label: 'Accepted', value: '89' },
          { label: 'Rejected', value: '58' },
          { label: 'Pending', value: '67' }
        ]
      }
    },
    {
      icon: Users,
      label: 'Registered Attendees',
      value: '500+',
      trend: '+15%',
      color: 'green',
      details: {
        title: 'Attendee Breakdown',
        data: [
          { label: 'Total Registered', value: '500+' },
          { label: 'Academic', value: '280' },
          { label: 'Industry', value: '145' },
          { label: 'Students', value: '75' },
          { label: 'Countries Represented', value: '45' }
        ]
      }
    },
    {
      icon: Globe,
      label: 'Countries',
      value: '45',
      trend: 'Global',
      color: 'purple',
      details: {
        title: 'Global Participation',
        data: [
          { label: 'Countries', value: '45' },
          { label: 'Continents', value: '6' },
          { label: 'Top Country: USA', value: '125' },
          { label: 'Top Country: China', value: '78' },
          { label: 'Top Country: UK', value: '56' }
        ]
      }
    },
    {
      icon: Award,
      label: 'Keynote Speakers',
      value: '8',
      trend: 'World-class',
      color: 'amber',
      details: {
        title: 'Distinguished Speakers',
        data: [
          { label: 'Keynote Speakers', value: '8' },
          { label: 'Panel Discussions', value: '5' },
          { label: 'Workshop Leaders', value: '12' },
          { label: 'Industry Talks', value: '6' },
          { label: 'Tutorial Sessions', value: '4' }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
            July 10-12, 2025 • MIT, Cambridge, MA
          </Badge>
          <h1 className="text-5xl text-slate-900">
            International Conference on Advanced Computing and Information Systems 2025
          </h1>
          <p className="text-xl text-slate-600">
            Join leading researchers and industry professionals in exploring the future of computing and information technology
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Button
              onClick={() => onNavigate('call-for-papers')}
              className="bg-slate-800 hover:bg-slate-900"
              size="lg"
            >
              Submit Your Paper
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => onNavigate('registration-info')}
              variant="outline"
              size="lg"
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Clickable Metrics */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Conference at a Glance</h2>
            <p className="text-slate-600">Click on any metric to view detailed statistics</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  className="border-slate-200 hover:border-slate-400 transition-all cursor-pointer hover:shadow-lg group"
                  onClick={() => setSelectedMetric(metric)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-12 w-12 rounded-lg bg-${metric.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 text-${metric.color}-600`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {metric.trend}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
                    <div className="text-slate-600 text-sm flex items-center justify-between">
                      <span>{metric.label}</span>
                      <TrendingUp className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metric Details Dialog */}
      <Dialog open={selectedMetric !== null} onOpenChange={() => setSelectedMetric(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMetric?.details.title}</DialogTitle>
            <DialogDescription>
              Detailed breakdown and statistics
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {selectedMetric?.details.data.map((item, index) => (
              <div key={index} className="flex items-center justify-between pb-3 border-b border-slate-200 last:border-0">
                <span className="text-slate-600">{item.label}</span>
                <span className="font-semibold text-slate-900 text-lg">{item.value}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Key Dates */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-slate-900 mb-12">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Submission Deadline</div>
                    <div className="text-slate-900">March 15, 2025</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Full paper submissions must be received by this date
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Notification Date</div>
                    <div className="text-slate-900">May 1, 2025</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Authors will be notified of acceptance decisions
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Conference Dates</div>
                    <div className="text-slate-900">July 10-12, 2025</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Three-day conference at MIT, Cambridge, MA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Status */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900 mb-2">Registration Now Open</h3>
                  <p className="text-slate-600">
                    Early bird rates available until April 30, 2025 - Save up to 30%!
                  </p>
                </div>
                <Button
                  onClick={() => onNavigate('registration-info')}
                  className="bg-slate-800 hover:bg-slate-900"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-slate-900 mb-12">Conference Tracks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Artificial Intelligence & Machine Learning',
                topics: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
                color: 'blue'
              },
              {
                title: 'Data Science & Big Data',
                topics: ['Data Analytics', 'Data Mining', 'Big Data Technologies', 'Visualization'],
                color: 'green'
              },
              {
                title: 'Software Engineering',
                topics: ['DevOps', 'Agile Methods', 'Software Architecture', 'Testing'],
                color: 'purple'
              },
              {
                title: 'Cybersecurity & Privacy',
                topics: ['Network Security', 'Cryptography', 'Privacy Protection', 'IoT Security'],
                color: 'red'
              }
            ].map((track, index) => (
              <Card key={index} className="border-slate-200 hover:border-slate-300 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-slate-900 mb-3">{track.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-slate-900 mb-12">Why Attend ICACIS 2025?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Network & Collaborate</h3>
              <p className="text-slate-600">
                Connect with leading researchers and industry professionals from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Learn from Experts</h3>
              <p className="text-slate-600">
                Gain insights from world-class keynote speakers and cutting-edge research presentations
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Global Exposure</h3>
              <p className="text-slate-600">
                Present your research to an international audience and receive valuable feedback
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
