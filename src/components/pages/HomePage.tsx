import { Calendar, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
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
                    <Users className="h-6 w-6 text-slate-700" />
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
                    Early bird rates available until April 30, 2025
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
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-slate-900 mb-12">Conference Tracks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Artificial Intelligence & Machine Learning',
                topics: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP']
              },
              {
                title: 'Data Science & Big Data',
                topics: ['Data Analytics', 'Data Mining', 'Big Data Technologies', 'Visualization']
              },
              {
                title: 'Software Engineering',
                topics: ['DevOps', 'Agile Methods', 'Software Architecture', 'Testing']
              },
              {
                title: 'Cybersecurity & Privacy',
                topics: ['Network Security', 'Cryptography', 'Privacy Protection', 'IoT Security']
              }
            ].map((track, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <h3 className="text-slate-900 mb-3">{track.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
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
    </div>
  );
}
