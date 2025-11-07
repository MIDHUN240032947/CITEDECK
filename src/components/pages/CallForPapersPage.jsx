import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FileText, Download, Calendar, CheckCircle2 } from "lucide-react";

export function CallForPapersPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">Call for Papers</h1>
          <p className="text-xl text-slate-600">
            We invite high-quality original research papers addressing any aspect of advanced computing
            and information systems.
          </p>
        </div>

        {/* Submission Timeline */}
        <Card className="border-slate-200 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Important Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: 'March 15, 2025', event: 'Full Paper Submission Deadline', status: 'upcoming' },
                { date: 'April 5, 2025', event: 'Review Process Completion', status: 'upcoming' },
                { date: 'May 1, 2025', event: 'Notification of Acceptance', status: 'upcoming' },
                { date: 'May 20, 2025', event: 'Camera-Ready Paper Due', status: 'upcoming' },
                { date: 'July 10-12, 2025', event: 'Conference Dates', status: 'upcoming' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-900">{item.event}</div>
                    <div className="text-slate-600 text-sm">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Topics and Tracks */}
        <Card className="border-slate-200 mb-12">
          <CardHeader>
            <CardTitle>Topics of Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-6">
              We welcome submissions on all aspects of computing and information systems, including but not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-slate-900 mb-3">Track 1: AI & Machine Learning</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Deep Learning and Neural Networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Computer Vision and Image Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Reinforcement Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Explainable AI</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 mb-3">Track 2: Data Science & Big Data</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Data Mining and Knowledge Discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Big Data Analytics and Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Data Visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Stream Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Database Systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 mb-3">Track 3: Software Engineering</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Software Architecture and Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>DevOps and Continuous Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Testing and Quality Assurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Agile and Lean Methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Software Maintenance and Evolution</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 mb-3">Track 4: Cybersecurity & Privacy</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Network Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Cryptography and Applied Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Privacy-Preserving Technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>IoT Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Security Analytics and Threat Intelligence</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Guidelines */}
        <Card className="border-slate-200 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Submission Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-slate-600">
              <div>
                <h3 className="text-slate-900 mb-2">Paper Format</h3>
                <p>
                  All submissions must be in English and follow the IEEE conference format. Papers should be
                  submitted in PDF format through the conference submission system.
                </p>
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Length Requirements</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Full Papers:</strong> 6-8 pages (including references)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Short Papers:</strong> 4-5 pages (including references)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Poster Abstracts:</strong> 2 pages (including references)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Review Process</h3>
                <p>
                  All submissions will undergo a rigorous double-blind peer review process. Each paper will be
                  reviewed by at least three experts in the field. Authors must ensure their submission is
                  anonymous (no author names or affiliations in the manuscript).
                </p>
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Publication</h3>
                <p>
                  Accepted papers will be published in the conference proceedings and submitted to IEEE Xplore
                  digital library. Selected papers may be invited for extended versions in partner journals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formatting Templates */}
        <Card className="border-slate-200 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Formatting Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-700" />
                  <div className="text-left">
                    <div className="text-slate-900">IEEE LaTeX Template</div>
                    <div className="text-slate-500 text-sm">For LaTeX users (recommended)</div>
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-700" />
                  <div className="text-left">
                    <div className="text-slate-900">IEEE Word Template</div>
                    <div className="text-slate-500 text-sm">For Microsoft Word users</div>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => onNavigate('login')}
            size="lg"
            className="bg-slate-800 hover:bg-slate-900"
          >
            Submit Your Paper
          </Button>
          <p className="text-slate-600 text-sm mt-4">
            You need to create an account or login to submit your paper
          </p>
        </div>
      </div>
    </div>
  );
}
