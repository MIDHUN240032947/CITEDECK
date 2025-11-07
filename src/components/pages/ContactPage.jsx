import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600">
            Have questions? We're here to help. Reach out to the organizing committee.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Paper submission inquiry"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message here..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 mb-1">Email</p>
                    <a href="mailto:info@icacis2025.org" className="text-slate-600 hover:text-slate-900">
                      info@icacis2025.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 mb-1">Phone</p>
                    <a href="tel:+16175551234" className="text-slate-600 hover:text-slate-900">
                      +1 (617) 555-1234
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Paper Submissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 mb-1">Program Chairs</p>
                    <a href="mailto:program@icacis2025.org" className="text-slate-600 hover:text-slate-900">
                      program@icacis2025.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Registration Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 mb-1">Registration Team</p>
                    <a href="mailto:registration@icacis2025.org" className="text-slate-600 hover:text-slate-900">
                      registration@icacis2025.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Conference Venue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 mb-1">Address</p>
                    <p className="text-slate-600">
                      Massachusetts Institute of Technology<br />
                      77 Massachusetts Avenue<br />
                      Cambridge, MA 02139
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-slate-200 mt-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-slate-900 mb-2">When will I receive a response to my inquiry?</h4>
                <p className="text-slate-600">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters,
                  please include "URGENT" in your subject line.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">How can I become a sponsor or exhibitor?</h4>
                <p className="text-slate-600">
                  Please contact us at <a href="mailto:sponsors@icacis2025.org" className="text-slate-700 hover:underline">sponsors@icacis2025.org</a> for
                  sponsorship opportunities and exhibition space information.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Can I volunteer at the conference?</h4>
                <p className="text-slate-600">
                  Yes! We welcome volunteers. Please email <a href="mailto:volunteers@icacis2025.org" className="text-slate-700 hover:underline">volunteers@icacis2025.org</a> to
                  learn about available opportunities.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Where can I find visa invitation letters?</h4>
                <p className="text-slate-600">
                  After completing your registration, you can request a visa invitation letter through your participant
                  dashboard. Processing typically takes 3-5 business days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
