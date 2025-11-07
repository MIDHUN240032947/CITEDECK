import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2, Users, Calendar, DollarSign } from "lucide-react";

interface RegistrationInfoPageProps {
  onNavigate: (page: string) => void;
}

export function RegistrationInfoPage({ onNavigate }: RegistrationInfoPageProps) {
  const registrationTiers = [
    {
      type: 'Student',
      earlyBird: '$299',
      regular: '$399',
      onSite: '$499',
      benefits: [
        'Access to all technical sessions',
        'Conference materials',
        'Coffee breaks and lunch',
        'Welcome reception',
        'Conference proceedings'
      ]
    },
    {
      type: 'Academic',
      earlyBird: '$499',
      regular: '$599',
      onSite: '$699',
      benefits: [
        'Access to all technical sessions',
        'Conference materials',
        'Coffee breaks and lunch',
        'Welcome reception',
        'Gala dinner',
        'Conference proceedings',
        'Workshop access'
      ]
    },
    {
      type: 'Industry',
      earlyBird: '$699',
      regular: '$799',
      onSite: '$899',
      benefits: [
        'Access to all technical sessions',
        'Conference materials',
        'Coffee breaks and lunch',
        'Welcome reception',
        'Gala dinner',
        'Conference proceedings',
        'Workshop access',
        'Industry networking session'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">Conference Registration</h1>
          <p className="text-xl text-slate-600">
            Secure your spot at ICACIS 2025 and join researchers from around the world
          </p>
        </div>

        {/* Registration Status Banner */}
        <Card className="border-2 border-green-200 bg-green-50/50 mb-12">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-1">Early Bird Registration Active</h3>
                <p className="text-slate-600">Save up to 30% by registering before April 30, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Tiers */}
        <div className="mb-12">
          <h2 className="text-slate-900 mb-6">Registration Fees</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {registrationTiers.map((tier, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    {tier.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="pb-4 border-b border-slate-200">
                      <div className="text-slate-600 text-sm mb-1">Early Bird (Until Apr 30)</div>
                      <div className="text-2xl text-slate-900">{tier.earlyBird}</div>
                    </div>
                    <div className="pb-4 border-b border-slate-200">
                      <div className="text-slate-600 text-sm mb-1">Regular (May 1 - Jul 9)</div>
                      <div className="text-xl text-slate-700">{tier.regular}</div>
                    </div>
                    <div>
                      <div className="text-slate-600 text-sm mb-1">On-Site</div>
                      <div className="text-xl text-slate-700">{tier.onSite}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Credit/Debit Cards (Visa, Mastercard, Amex)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>PayPal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Bank Transfer (for institutional payments)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Purchase Orders accepted</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Before May 31:</strong> 90% refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span><strong>June 1-30:</strong> 50% refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span><strong>After June 30:</strong> No refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Registration transferable to colleagues</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Optional Add-ons */}
        <Card className="border-slate-200 mb-12">
          <CardHeader>
            <CardTitle>Optional Add-ons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="pb-6 border-b border-slate-200 md:border-b-0 md:border-r md:pr-6">
                <h4 className="text-slate-900 mb-2">Extra Gala Dinner Ticket</h4>
                <p className="text-2xl text-slate-700 mb-2">$75</p>
                <p className="text-slate-600 text-sm">
                  For accompanying guests (not included in student registration)
                </p>
              </div>
              <div className="pb-6 border-b border-slate-200 md:border-b-0 md:border-r md:pr-6">
                <h4 className="text-slate-900 mb-2">Workshop Day Pass</h4>
                <p className="text-2xl text-slate-700 mb-2">$99</p>
                <p className="text-slate-600 text-sm">
                  Access to pre-conference workshops (July 9)
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Extended Proceedings</h4>
                <p className="text-2xl text-slate-700 mb-2">$49</p>
                <p className="text-slate-600 text-sm">
                  Hardcopy of conference proceedings shipped to you
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Verification */}
        <Card className="border-slate-200 mb-12">
          <CardHeader>
            <CardTitle>Student Registration Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              To qualify for student registration rates, you must provide proof of current enrollment:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Upload a copy of your current student ID (both sides)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>OR provide an official letter from your institution verifying enrollment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Documents will be verified within 2 business days</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => onNavigate('login')}
            size="lg"
            className="bg-slate-800 hover:bg-slate-900"
          >
            Register Now
          </Button>
          <p className="text-slate-600 text-sm mt-4">
            You need to create an account or login to complete registration
          </p>
        </div>
      </div>
    </div>
  );
}
