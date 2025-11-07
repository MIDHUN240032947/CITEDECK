import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, Filter, Eye, Download, CheckCircle, X, Clock } from "lucide-react";
import { useState } from "react";

const mockSubmissions = [
  {
    id: 'P001',
    title: 'Machine Learning Applications in Climate Science',
    track: 'AI & ML',
    status: 'Under Review',
    submittedBy: 'Dr. Sarah Johnson',
    submissionDate: '2024-09-15',
    assignedReviewers: 3,
    reviewsCompleted: 1
  },
  {
    id: 'P002',
    title: 'Blockchain Consensus Mechanisms',
    track: 'Data Science',
    status: 'Accepted',
    submittedBy: 'Prof. Michael Chen',
    submissionDate: '2024-09-12',
    assignedReviewers: 3,
    reviewsCompleted: 3
  },
  {
    id: 'P003',
    title: 'Neural Networks for Environmental Prediction',
    track: 'AI & ML',
    status: 'Under Review',
    submittedBy: 'Dr. Robert Kim',
    submissionDate: '2024-09-10',
    assignedReviewers: 3,
    reviewsCompleted: 2
  },
  {
    id: 'P004',
    title: 'Microservices Architecture Patterns',
    track: 'Software Eng',
    status: 'Under Review',
    submittedBy: 'Dr. Lisa Wang',
    submissionDate: '2024-09-08',
    assignedReviewers: 3,
    reviewsCompleted: 0
  },
  {
    id: 'P005',
    title: 'Advanced Threat Detection Systems',
    track: 'Security',
    status: 'Rejected',
    submittedBy: 'Dr. James Park',
    submissionDate: '2024-09-05',
    assignedReviewers: 3,
    reviewsCompleted: 3
  }
];

export function SubmissionsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [trackFilter, setTrackFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const filteredSubmissions = mockSubmissions.filter(submission => {
    const matchesSearch = submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    const matchesTrack = trackFilter === 'all' || submission.track === trackFilter;
    return matchesSearch && matchesStatus && matchesTrack;
  });

  const stats = {
    total: mockSubmissions.length,
    underReview: mockSubmissions.filter(s => s.status === 'Under Review').length,
    accepted: mockSubmissions.filter(s => s.status === 'Accepted').length,
    rejected: mockSubmissions.filter(s => s.status === 'Rejected').length
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-slate-900 mb-1">{stats.total}</div>
            <div className="text-slate-600 text-sm">Total Submissions</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-amber-600 mb-1">{stats.underReview}</div>
            <div className="text-slate-600 text-sm">Under Review</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-600 mb-1">{stats.accepted}</div>
            <div className="text-slate-600 text-sm">Accepted</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-red-600 mb-1">{stats.rejected}</div>
            <div className="text-slate-600 text-sm">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search by paper ID, title, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Accepted">Accepted</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={trackFilter} onValueChange={setTrackFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by track" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tracks</SelectItem>
                <SelectItem value="AI & ML">AI & ML</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Software Eng">Software Eng</SelectItem>
                <SelectItem value="Security">Security</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paper ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Track</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Reviews</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-mono">{submission.id}</TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate">{submission.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{submission.track}</Badge>
                    </TableCell>
                    <TableCell>{submission.submittedBy}</TableCell>
                    <TableCell className="text-slate-600 text-sm">
                      {submission.submissionDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {submission.reviewsCompleted}/{submission.assignedReviewers}
                        </span>
                        {submission.reviewsCompleted === submission.assignedReviewers ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-amber-600" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        {submission.status === 'Under Review' && (
                          <>
                            <Button variant="ghost" size="sm" className="text-green-600">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No submissions found matching your criteria
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
