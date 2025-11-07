import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Clock, MapPin, User } from "lucide-react";

export function ProgramPage() {
  const schedule = {
    'Day 1': [
      {
        time: '8:00 - 9:00',
        title: 'Registration & Welcome Coffee',
        location: 'Main Lobby',
        type: 'general'
      },
      {
        time: '9:00 - 10:00',
        title: 'Opening Ceremony & Keynote',
        speaker: 'Dr. Sarah Mitchell',
        topic: 'The Future of AI in Scientific Research',
        location: 'Grand Hall',
        type: 'keynote'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        location: 'Exhibition Area',
        type: 'break'
      },
      {
        time: '10:30 - 12:00',
        title: 'Session 1A: Machine Learning Advances',
        location: 'Room A',
        type: 'technical',
        track: 'AI & ML',
        papers: [
          'Deep Learning for Medical Image Analysis',
          'Novel Approaches to Transfer Learning',
          'Federated Learning in Healthcare Systems'
        ]
      },
      {
        time: '10:30 - 12:00',
        title: 'Session 1B: Big Data Analytics',
        location: 'Room B',
        type: 'technical',
        track: 'Data Science',
        papers: [
          'Real-Time Stream Processing at Scale',
          'Distributed Data Mining Algorithms',
          'Graph Analytics for Social Networks'
        ]
      },
      {
        time: '12:00 - 13:30',
        title: 'Lunch Break',
        location: 'Dining Hall',
        type: 'break'
      },
      {
        time: '13:30 - 15:00',
        title: 'Session 2A: Computer Vision',
        location: 'Room A',
        type: 'technical',
        track: 'AI & ML',
        papers: [
          'Object Detection in Autonomous Vehicles',
          'Semantic Segmentation Using Transformers',
          '3D Reconstruction from Multiple Views'
        ]
      },
      {
        time: '13:30 - 15:00',
        title: 'Session 2B: Software Architecture',
        location: 'Room B',
        type: 'technical',
        track: 'Software Eng',
        papers: [
          'Microservices Design Patterns',
          'Serverless Computing Best Practices',
          'Cloud-Native Application Development'
        ]
      },
      {
        time: '15:00 - 15:30',
        title: 'Coffee Break',
        location: 'Exhibition Area',
        type: 'break'
      },
      {
        time: '15:30 - 17:00',
        title: 'Session 3: Panel Discussion',
        topic: 'Ethics in AI Development',
        location: 'Grand Hall',
        type: 'panel'
      },
      {
        time: '18:00 - 20:00',
        title: 'Welcome Reception',
        location: 'Rooftop Terrace',
        type: 'social'
      }
    ],
    'Day 2': [
      {
        time: '9:00 - 10:00',
        title: 'Keynote Address',
        speaker: 'Dr. James Chen',
        topic: 'Quantum Computing: From Theory to Practice',
        location: 'Grand Hall',
        type: 'keynote'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        location: 'Exhibition Area',
        type: 'break'
      },
      {
        time: '10:30 - 12:00',
        title: 'Session 4A: Natural Language Processing',
        location: 'Room A',
        type: 'technical',
        track: 'AI & ML',
        papers: [
          'Large Language Models for Code Generation',
          'Multilingual Sentiment Analysis',
          'Question Answering Systems'
        ]
      },
      {
        time: '10:30 - 12:00',
        title: 'Session 4B: Cybersecurity Threats',
        location: 'Room B',
        type: 'technical',
        track: 'Security',
        papers: [
          'Advanced Persistent Threat Detection',
          'Zero Trust Network Architecture',
          'AI-Powered Intrusion Detection'
        ]
      },
      {
        time: '12:00 - 13:30',
        title: 'Lunch Break',
        location: 'Dining Hall',
        type: 'break'
      },
      {
        time: '13:30 - 15:00',
        title: 'Session 5A: Data Visualization',
        location: 'Room A',
        type: 'technical',
        track: 'Data Science',
        papers: [
          'Interactive Visual Analytics',
          'VR/AR for Data Exploration',
          'Visualization for Time-Series Data'
        ]
      },
      {
        time: '13:30 - 15:00',
        title: 'Session 5B: DevOps & CI/CD',
        location: 'Room B',
        type: 'technical',
        track: 'Software Eng',
        papers: [
          'Automated Testing Strategies',
          'Container Orchestration at Scale',
          'Infrastructure as Code Best Practices'
        ]
      },
      {
        time: '15:00 - 15:30',
        title: 'Coffee Break',
        location: 'Exhibition Area',
        type: 'break'
      },
      {
        time: '15:30 - 17:00',
        title: 'Session 6: Industry Track',
        topic: 'AI in Production: Real-World Case Studies',
        location: 'Grand Hall',
        type: 'industry'
      },
      {
        time: '19:00 - 22:00',
        title: 'Conference Gala Dinner',
        location: 'Grand Ballroom',
        type: 'social'
      }
    ],
    'Day 3': [
      {
        time: '9:00 - 10:00',
        title: 'Keynote Address',
        speaker: 'Dr. Emily Rodriguez',
        topic: 'Sustainable Computing for the Future',
        location: 'Grand Hall',
        type: 'keynote'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        location: 'Exhibition Area',
        type: 'break'
      },
      {
        time: '10:30 - 12:00',
        title: 'Session 7A: Blockchain & Distributed Systems',
        location: 'Room A',
        type: 'technical',
        track: 'Data Science',
        papers: [
          'Consensus Algorithms for Blockchain',
          'Smart Contracts Security Analysis',
          'Distributed Ledger Technologies'
        ]
      },
      {
        time: '10:30 - 12:00',
        title: 'Session 7B: IoT Security',
        location: 'Room B',
        type: 'technical',
        track: 'Security',
        papers: [
          'Securing Edge Computing Devices',
          'Privacy in Smart Home Systems',
          'Authentication for IoT Networks'
        ]
      },
      {
        time: '12:00 - 13:00',
        title: 'Poster Session',
        location: 'Exhibition Area',
        type: 'poster'
      },
      {
        time: '13:00 - 14:00',
        title: 'Lunch Break',
        location: 'Dining Hall',
        type: 'break'
      },
      {
        time: '14:00 - 15:30',
        title: 'Best Paper Awards & Closing Ceremony',
        location: 'Grand Hall',
        type: 'ceremony'
      }
    ]
  };

  const getSessionStyle = (type) => {
    switch (type) {
      case 'keynote':
        return 'border-l-4 border-l-blue-500 bg-blue-50/50';
      case 'technical':
        return 'border-l-4 border-l-purple-500 bg-purple-50/50';
      case 'panel':
      case 'industry':
        return 'border-l-4 border-l-amber-500 bg-amber-50/50';
      case 'social':
        return 'border-l-4 border-l-green-500 bg-green-50/50';
      case 'poster':
      case 'ceremony':
        return 'border-l-4 border-l-rose-500 bg-rose-50/50';
      default:
        return 'border-l-4 border-l-slate-300 bg-slate-50/50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">Conference Program</h1>
          <p className="text-xl text-slate-600">
            Full schedule for ICACIS 2025 • July 10-12, 2025 • MIT, Cambridge, MA
          </p>
        </div>

        {/* Legend */}
        <Card className="border-slate-200 mb-8">
          <CardHeader>
            <CardTitle>Session Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-blue-500 text-blue-700 bg-blue-50">
                Keynote
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-700 bg-purple-50">
                Technical Session
              </Badge>
              <Badge variant="outline" className="border-amber-500 text-amber-700 bg-amber-50">
                Panel / Industry
              </Badge>
              <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                Social Event
              </Badge>
              <Badge variant="outline" className="border-rose-500 text-rose-700 bg-rose-50">
                Special Event
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Tabs */}
        <Tabs defaultValue="Day 1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="Day 1">Day 1 - July 10</TabsTrigger>
            <TabsTrigger value="Day 2">Day 2 - July 11</TabsTrigger>
            <TabsTrigger value="Day 3">Day 3 - July 12</TabsTrigger>
          </TabsList>

          {Object.entries(schedule).map(([day, sessions]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-4">
                {sessions.map((session, index) => (
                  <Card key={index} className={`border-slate-200 ${getSessionStyle(session.type)}`}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Time */}
                        <div className="flex items-center gap-2 text-slate-600 md:w-40 flex-shrink-0">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-slate-900 mb-2">{session.title}</h3>
                          
                          {session.speaker && (
                            <div className="flex items-center gap-2 text-slate-600 mb-2">
                              <User className="h-4 w-4" />
                              <span>{session.speaker}</span>
                            </div>
                          )}
                          
                          {session.topic && (
                            <p className="text-slate-600 mb-2 italic">{session.topic}</p>
                          )}
                          
                          {session.track && (
                            <Badge variant="secondary" className="mb-2">
                              {session.track}
                            </Badge>
                          )}
                          
                          {session.papers && (
                            <ul className="space-y-1 mt-3 ml-4">
                              {session.papers.map((paper, i) => (
                                <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                                  <span className="text-slate-400 mt-1">•</span>
                                  <span>{paper}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                            <MapPin className="h-4 w-4" />
                            <span>{session.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Info */}
        <Card className="border-slate-200 mt-12">
          <CardHeader>
            <CardTitle>Venue Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-slate-900 mb-3">Location</h4>
                <p className="text-slate-600">
                  Massachusetts Institute of Technology<br />
                  77 Massachusetts Avenue<br />
                  Cambridge, MA 02139
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-3">Room Locations</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>Grand Hall:</strong> Building 10, Room 250</li>
                  <li><strong>Room A:</strong> Building 32, Room 123</li>
                  <li><strong>Room B:</strong> Building 32, Room 141</li>
                  <li><strong>Exhibition Area:</strong> Building 10, Lobby</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
