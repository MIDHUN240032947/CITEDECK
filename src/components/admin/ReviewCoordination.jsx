import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Progress } from "../ui/progress";
import { AlertCircle, CheckCircle2, Clock, Users, FileText } from "lucide-react";

const mockReviewers = [
  {
    name: 'Dr. Sarah Chen',
    email: 's.chen@university.edu',
    expertise: 'AI & ML',
    assignedPapers: 8,
    completedReviews: 7,
    pendingReviews: 1,
    avgScore: 7.2,
    onTime: 6,
    late: 1
  },
  {
    name: 'Prof. Michael Johnson',
    email: 'm.johnson@college.edu',
    expertise: 'Data Science',
    assignedPapers: 6,
    completedReviews: 6,
    pendingReviews: 0,
    avgScore: 8.1,
    onTime: 6,
    late: 0
  },
  {
    name: 'Dr. Emily Rodriguez',
    email: 'e.rodriguez@institute.edu',
    expertise: 'Software Eng',
    assignedPapers: 7,
    completedReviews: 5,
    pendingReviews: 2,
    avgScore: 6.8,
    onTime: 4,
    late: 1
  },
  {
    name: 'Dr. David Park',
    email: 'd.park@tech.edu',
    expertise: 'Security',
    assignedPapers: 5,
    completedReviews: 3,
    pendingReviews: 2,
    avgScore: 7.5,
    onTime: 3,
    late: 0
  }
];

const overdueReviews = [
  {
    paperId: 'P004',
    title: 'Microservices Architecture Patterns',
    reviewer: 'Dr. Emily Rodriguez',
    daysOverdue: 3,
    deadline: '2024-10-20'
  },
  {
    paperId: 'P007',
    title: 'Quantum Algorithms for Optimization',
    reviewer: 'Dr. David Park',
    daysOverdue: 1,
    deadline: '2024-10-25'
  }
];

export function ReviewCoordination() {
  const totalAssigned = mockReviewers.reduce((sum, r) => sum + r.assignedPapers, 0);
  const totalCompleted = mockReviewers.reduce((sum, r) => sum + r.completedReviews, 0);
  const totalPending = mockReviewers.reduce((sum, r) => sum + r.pendingReviews, 0);
  const completionRate = Math.round((totalCompleted / totalAssigned) * 100);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-slate-900 mb-1">{mockReviewers.length}</div>
            <div className="text-slate-600 text-sm">Active Reviewers</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-600 mb-1">{totalCompleted}</div>
            <div className="text-slate-600 text-sm">Reviews Completed</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-amber-600 mb-1">{totalPending}</div>
            <div className="text-slate-600 text-sm">Reviews Pending</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-blue-600 mb-1">{completionRate}%</div>
            <div className="text-slate-600 text-sm">Completion Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Overdue Reviews Alert */}
      {overdueReviews.length > 0 && (
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertCircle className="h-5 w-5" />
              Overdue Reviews ({overdueReviews.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {overdueReviews.map((review) => (
                <div key={review.paperId} className="flex items-center justify-between bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-slate-900">{review.paperId}</span>
                      <Badge variant="destructive" className="text-xs">
                        {review.daysOverdue} {review.daysOverdue === 1 ? 'day' : 'days'} overdue
                      </Badge>
                    </div>
                    <div className="text-slate-700 mb-1">{review.title}</div>
                    <div className="text-slate-600 text-sm">
                      Reviewer: {review.reviewer} • Deadline: {review.deadline}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Send Reminder
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviewer Load Table */}
      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Reviewer Load & Performance</CardTitle>
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            Bulk Assignment
          </Button>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reviewer</TableHead>
                  <TableHead>Expertise</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Avg Score</TableHead>
                  <TableHead>On Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReviewers.map((reviewer, index) => {
                  const progress = (reviewer.completedReviews / reviewer.assignedPapers) * 100;
                  const hasOverdue = reviewer.late > 0;

                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <div className="text-slate-900">{reviewer.name}</div>
                          <div className="text-slate-600 text-sm">{reviewer.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{reviewer.expertise}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-400" />
                          <span>{reviewer.assignedPapers}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1" style={{ minWidth: '150px' }}>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">
                              {reviewer.completedReviews}/{reviewer.assignedPapers}
                            </span>
                            <span className="text-slate-900">{Math.round(progress)}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-slate-900">{reviewer.avgScore.toFixed(1)}/10</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>{reviewer.onTime}</span>
                          {reviewer.late > 0 && (
                            <>
                              <AlertCircle className="h-4 w-4 text-red-600 ml-2" />
                              <span className="text-red-600">{reviewer.late}</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {reviewer.pendingReviews === 0 ? (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Complete
                          </Badge>
                        ) : hasOverdue ? (
                          <Badge className="bg-red-100 text-red-800">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Overdue
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-100 text-amber-800">
                            <Clock className="h-3 w-3 mr-1" />
                            In Progress
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Assign Papers
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
