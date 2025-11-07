import { Card, CardContent } from "../ui/card";
import { MapPin, Calendar, Users, Award } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">About the Conference</h1>
          <p className="text-xl text-slate-600">
            ICACIS 2025 brings together researchers, practitioners, and students to share innovative ideas
            and cutting-edge research in computing and information systems.
          </p>
        </div>

        {/* Conference Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">Conference Dates</h3>
                  <p className="text-slate-600">July 10-12, 2025</p>
                  <p className="text-slate-500 text-sm mt-1">Three full days of presentations, workshops, and networking</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">Venue</h3>
                  <p className="text-slate-600">Massachusetts Institute of Technology</p>
                  <p className="text-slate-500 text-sm mt-1">77 Massachusetts Avenue, Cambridge, MA 02139</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="border-slate-200 mb-12">
          <CardContent className="pt-6">
            <h2 className="text-slate-900 mb-4">Mission</h2>
            <p className="text-slate-600 mb-4">
              The International Conference on Advanced Computing and Information Systems (ICACIS) serves as a premier
              forum for presenting and discussing the latest research and innovations in computing technologies,
              information systems, and their applications across diverse domains.
            </p>
            <p className="text-slate-600">
              Our mission is to foster collaboration between academia and industry, promote knowledge exchange,
              and inspire the next generation of researchers and practitioners in the field of computing and
              information systems.
            </p>
          </CardContent>
        </Card>

        {/* Organizing Committee */}
        <div className="mb-12">
          <h2 className="text-slate-900 mb-6">Organizing Committee</h2>
          
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-slate-900 mb-4">General Chairs</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-900">Dr. Sarah Mitchell</p>
                    <p className="text-slate-600 text-sm">Professor of Computer Science, MIT</p>
                    <p className="text-slate-500 text-sm">s.mitchell@mit.edu</p>
                  </div>
                  <div>
                    <p className="text-slate-900">Dr. James Chen</p>
                    <p className="text-slate-600 text-sm">Director of AI Research, Stanford University</p>
                    <p className="text-slate-500 text-sm">jchen@stanford.edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-slate-900 mb-4">Program Chairs</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-900">Dr. Emily Rodriguez</p>
                    <p className="text-slate-600 text-sm">Associate Professor, Carnegie Mellon University</p>
                  </div>
                  <div>
                    <p className="text-slate-900">Dr. Michael Thompson</p>
                    <p className="text-slate-600 text-sm">Senior Research Scientist, Google AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-slate-900 mb-4">Track Chairs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-700">AI & Machine Learning</p>
                    <p className="text-slate-600 text-sm">Dr. Lisa Wang, UC Berkeley</p>
                  </div>
                  <div>
                    <p className="text-slate-700">Data Science & Big Data</p>
                    <p className="text-slate-600 text-sm">Dr. Robert Kim, Harvard University</p>
                  </div>
                  <div>
                    <p className="text-slate-700">Software Engineering</p>
                    <p className="text-slate-600 text-sm">Dr. Anna Kowalski, Microsoft Research</p>
                  </div>
                  <div>
                    <p className="text-slate-700">Cybersecurity & Privacy</p>
                    <p className="text-slate-600 text-sm">Dr. David Park, MIT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conference Statistics */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Expected Attendees', value: '500+' },
            { icon: FileText, label: 'Paper Submissions', value: '200+' },
            { icon: Award, label: 'Keynote Speakers', value: '8' },
            { icon: Calendar, label: 'Technical Sessions', value: '30+' }
          ].map((stat, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="pt-6 text-center">
                <stat.icon className="h-8 w-8 text-slate-700 mx-auto mb-2" />
                <div className="text-2xl text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
