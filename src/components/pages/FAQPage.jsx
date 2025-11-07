import { Card, CardContent } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { HelpCircle } from "lucide-react";

export function FAQPage() {
  const faqs = {
    general: [
      {
        q: "What is ICACIS 2025?",
        a: "ICACIS 2025 (International Conference on Advanced Computing and Information Systems) is a premier academic conference bringing together researchers, practitioners, and students to share innovative ideas and cutting-edge research in computing and information systems."
      },
      {
        q: "When and where will the conference take place?",
        a: "The conference will be held from July 10-12, 2025, at the Massachusetts Institute of Technology (MIT) in Cambridge, MA. The venue offers state-of-the-art facilities and is easily accessible via public transportation."
      },
      {
        q: "Who should attend ICACIS 2025?",
        a: "The conference is ideal for researchers, academics, industry professionals, PhD students, and anyone interested in advanced computing and information systems. We welcome participants from all career stages and backgrounds."
      },
      {
        q: "What are the conference tracks?",
        a: "ICACIS 2025 features four main tracks: (1) Artificial Intelligence & Machine Learning, (2) Data Science & Big Data, (3) Software Engineering, and (4) Cybersecurity & Privacy. Each track includes technical sessions, panels, and workshops."
      }
    ],
    submissions: [
      {
        q: "What is the submission deadline?",
        a: "The full paper submission deadline is March 15, 2025. We recommend submitting early to allow time for any technical issues. Late submissions will not be accepted."
      },
      {
        q: "What are the paper length requirements?",
        a: "Full papers should be 6-8 pages including references, short papers 4-5 pages, and poster abstracts 2 pages. All submissions must follow the IEEE conference format."
      },
      {
        q: "Is the review process double-blind?",
        a: "Yes, we follow a rigorous double-blind peer review process. Each submission is reviewed by at least three experts in the field. Please ensure your manuscript is anonymous with no author names or affiliations."
      },
      {
        q: "Can I submit to multiple tracks?",
        a: "No, each paper can only be submitted to one track. However, you may submit multiple different papers to different tracks if you wish."
      },
      {
        q: "When will I be notified about my submission?",
        a: "Authors will be notified of acceptance decisions by May 1, 2025. You will receive detailed reviewer comments and feedback regardless of the decision."
      },
      {
        q: "What happens if my paper is accepted?",
        a: "Accepted papers will be published in the conference proceedings and submitted to IEEE Xplore digital library. At least one author must register for the conference and present the paper."
      }
    ],
    registration: [
      {
        q: "How much does registration cost?",
        a: "Registration fees vary by category: Student ($299-$499), Academic ($499-$699), and Industry ($699-$899). Early bird rates are available until April 30, 2025, offering up to 30% savings."
      },
      {
        q: "What does registration include?",
        a: "Registration includes access to all technical sessions, conference materials, coffee breaks, lunch, welcome reception, and conference proceedings. Academic and Industry registrations also include the gala dinner and workshop access."
      },
      {
        q: "Can I register for just one day?",
        a: "Unfortunately, we do not offer single-day registration. All registrations cover the full three-day conference to ensure the best experience for all participants."
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancellations before May 31 receive a 90% refund, June 1-30 receive 50%, and after June 30 no refund is available. However, registrations are fully transferable to colleagues at any time."
      },
      {
        q: "How do I prove student status?",
        a: "Students must upload a copy of their current student ID or an official letter from their institution verifying enrollment. Documents are typically verified within 2 business days."
      }
    ],
    presentation: [
      {
        q: "How long is my presentation slot?",
        a: "Oral presentations are allocated 15 minutes including Q&A (typically 12 minutes presentation + 3 minutes questions). Poster sessions run for 2 hours with continuous presentation."
      },
      {
        q: "What equipment will be provided?",
        a: "Each presentation room is equipped with a computer, projector, screen, microphone, and pointer. We recommend bringing your presentation on a USB drive as backup."
      },
      {
        q: "Can I present remotely?",
        a: "For ICACIS 2025, we require in-person presentation. At least one author must attend and present the paper. Remote presentation may only be considered in exceptional circumstances with prior approval."
      },
      {
        q: "What format should my poster be?",
        a: "Posters should be in A0 size (841 × 1189 mm or 33.1 × 46.8 inches) in portrait orientation. We provide poster boards and mounting materials."
      }
    ],
    travel: [
      {
        q: "Do you provide visa invitation letters?",
        a: "Yes, registered participants can request a visa invitation letter through their dashboard. Processing typically takes 3-5 business days. Please apply for your visa well in advance."
      },
      {
        q: "Are there recommended hotels?",
        a: "Yes, we have negotiated special rates with several hotels near MIT. Details and booking links are available on the registration confirmation page and in your participant dashboard."
      },
      {
        q: "How do I get to MIT from the airport?",
        a: "From Boston Logan Airport, you can take the Silver Line to South Station, then the Red Line to Kendall/MIT station (about 30 minutes). Taxis and ride-sharing services are also readily available."
      },
      {
        q: "Is there parking available?",
        a: "Limited parking is available on campus at hourly rates. We strongly recommend using public transportation as Boston/Cambridge has excellent transit options and parking can be challenging."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions about ICACIS 2025
          </p>
        </div>

        {/* FAQ Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="presentation">Presentation</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
          </TabsList>

          {Object.entries(faqs).map(([category, questions]) => (
            <TabsContent key={category} value={category}>
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Still Have Questions */}
        <Card className="border-2 border-blue-200 bg-blue-50/50 mt-12">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 mb-4">
                Can't find the answer you're looking for? Our support team is ready to help.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="mailto:info@icacis2025.org" className="text-blue-600 hover:underline">
                  Email us at info@icacis2025.org
                </a>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">Call +1 (617) 555-1234</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
