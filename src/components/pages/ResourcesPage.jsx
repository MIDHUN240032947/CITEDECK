import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Download, FileText, Video, BookOpen, ExternalLink } from "lucide-react";

export function ResourcesPage() {
  const resources = {
    templates: [
      { name: 'IEEE LaTeX Template', size: '2.3 MB', format: 'ZIP', description: 'Official IEEE conference paper template for LaTeX' },
      { name: 'IEEE Word Template', size: '1.5 MB', format: 'DOCX', description: 'Official IEEE conference paper template for Microsoft Word' },
      { name: 'Presentation Template', size: '4.2 MB', format: 'PPTX', description: 'PowerPoint template for conference presentations' },
      { name: 'Poster Template', size: '3.1 MB', format: 'PDF', description: 'A0 poster template with guidelines' }
    ],
    guidelines: [
      { name: 'Author Guidelines', description: 'Comprehensive guide for paper preparation and submission' },
      { name: 'Presentation Guidelines', description: 'Best practices for preparing your conference presentation' },
      { name: 'Poster Guidelines', description: 'Instructions for creating effective research posters' },
      { name: 'Ethics & Plagiarism Policy', description: 'Important ethical guidelines for authors' }
    ],
    videos: [
      { name: 'How to Submit Your Paper', duration: '5:23', description: 'Step-by-step guide to the submission process' },
      { name: 'Preparing an Effective Presentation', duration: '8:45', description: 'Tips for creating engaging conference talks' },
      { name: 'Networking at Academic Conferences', duration: '6:12', description: 'Making the most of conference networking opportunities' },
      { name: 'Q&A Session Best Practices', duration: '4:38', description: 'Handling questions after your presentation' }
    ],
    tools: [
      { name: 'Reference Manager', description: 'Zotero - Free, open-source citation management tool', link: 'https://zotero.org' },
      { name: 'Grammar Checker', description: 'Grammarly - AI-powered writing assistant', link: 'https://grammarly.com' },
      { name: 'Plagiarism Check', description: 'Turnitin - Academic integrity solutions', link: 'https://turnitin.com' },
      { name: 'Collaboration', description: 'Overleaf - Online LaTeX editor for collaboration', link: 'https://overleaf.com' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">Resources</h1>
          <p className="text-xl text-slate-600">
            Everything you need for a successful conference submission and presentation
          </p>
        </div>

        {/* Templates Section */}
        <div className="mb-12">
          <h2 className="text-slate-900 mb-6">Templates & Downloads</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.templates.map((template, index) => (
              <Card key={index} className="border-slate-200 hover:border-slate-300 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-slate-900 mb-1">{template.name}</h3>
                        <p className="text-slate-600 text-sm mb-2">{template.description}</p>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span>{template.format}</span>
                          <span>•</span>
                          <span>{template.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="flex-shrink-0">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="mb-12">
          <h2 className="text-slate-900 mb-6">Guidelines & Documentation</h2>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {resources.guidelines.map((guide, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 mb-1">{guide.name}</h4>
                        <p className="text-slate-600 text-sm">{guide.description}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      View PDF
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Tutorials */}
        <div className="mb-12">
          <h2 className="text-slate-900 mb-6">Video Tutorials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.videos.map((video, index) => (
              <Card key={index} className="border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Video className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-slate-900">{video.name}</h4>
                        <span className="text-slate-500 text-sm">{video.duration}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{video.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Tools */}
        <div>
          <h2 className="text-slate-900 mb-6">Recommended Tools</h2>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {resources.tools.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <h4 className="text-slate-900 mb-1">{tool.name}</h4>
                      <p className="text-slate-600 text-sm">{tool.description}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit Site
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Box */}
        <Card className="border-2 border-blue-200 bg-blue-50/50 mt-12">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-900 mb-2">Need Additional Resources?</h3>
                <p className="text-slate-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help you with any resources or documentation you might need.
                </p>
                <Button variant="outline" className="bg-white">
                  Contact Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
