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
import { Search, Filter, Download, Mail, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const mockAttendees = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    affiliation: 'Stanford University',
    registrationType: 'Academic',
    paymentStatus: 'Paid',
    amount: '$499',
    registrationDate: '2024-09-20',
    hasPaper: true
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    email: 'm.chen@college.edu',
    affiliation: 'MIT',
    registrationType: 'Academic',
    paymentStatus: 'Paid',
    amount: '$499',
    registrationDate: '2024-09-18',
    hasPaper: true
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john.smith@company.com',
    affiliation: 'Tech Corp',
    registrationType: 'Industry',
    paymentStatus: 'Paid',
    amount: '$699',
    registrationDate: '2024-09-22',
    hasPaper: false
  },
  {
    id: 4,
    name: 'Emily Williams',
    email: 'e.williams@grad.edu',
    affiliation: 'Harvard University',
    registrationType: 'Student',
    paymentStatus: 'Pending',
    amount: '$299',
    registrationDate: '2024-09-25',
    hasPaper: false
  },
  {
    id: 5,
    name: 'Dr. Robert Kim',
    email: 'r.kim@institute.edu',
    affiliation: 'UC Berkeley',
    registrationType: 'Academic',
    paymentStatus: 'Paid',
    amount: '$499',
    registrationDate: '2024-09-15',
    hasPaper: true
  }
];

export function AttendeeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');

  const filteredAttendees = mockAttendees.filter(attendee => {
    const matchesSearch = attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attendee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attendee.affiliation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || attendee.registrationType === typeFilter;
    const matchesPayment = paymentFilter === 'all' || attendee.paymentStatus === paymentFilter;
    return matchesSearch && matchesType && matchesPayment;
  });

  const stats = {
    total: mockAttendees.length,
    paid: mockAttendees.filter(a => a.paymentStatus === 'Paid').length,
    pending: mockAttendees.filter(a => a.paymentStatus === 'Pending').length,
    revenue: mockAttendees
      .filter(a => a.paymentStatus === 'Paid')
      .reduce((sum, a) => sum + parseInt(a.amount.replace('$', '').replace(',', '')), 0)
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-slate-900 mb-1">{stats.total}</div>
            <div className="text-slate-600 text-sm">Total Registrations</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-600 mb-1">{stats.paid}</div>
            <div className="text-slate-600 text-sm">Paid</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-amber-600 mb-1">{stats.pending}</div>
            <div className="text-slate-600 text-sm">Pending Payment</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="text-2xl text-blue-600 mb-1">${stats.revenue.toLocaleString()}</div>
            <div className="text-slate-600 text-sm">Total Revenue</div>
          </CardContent>
        </Card>
      </div>

      {/* Attendee List */}
      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Attendees</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search by name, email, or affiliation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Academic">Academic</SelectItem>
                <SelectItem value="Industry">Industry</SelectItem>
              </SelectContent>
            </Select>
            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Payment status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Affiliation</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAttendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900">{attendee.name}</span>
                        {attendee.hasPaper && (
                          <Badge variant="secondary" className="text-xs">
                            Author
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600">{attendee.email}</TableCell>
                    <TableCell className="text-slate-600">{attendee.affiliation}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{attendee.registrationType}</Badge>
                    </TableCell>
                    <TableCell>
                      {attendee.paymentStatus === 'Paid' ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Paid
                        </Badge>
                      ) : (
                        <Badge className="bg-amber-100 text-amber-800">
                          <XCircle className="h-3 w-3 mr-1" />
                          Pending
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-slate-900">{attendee.amount}</TableCell>
                    <TableCell className="text-slate-600 text-sm">
                      {attendee.registrationDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredAttendees.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No attendees found matching your criteria
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
