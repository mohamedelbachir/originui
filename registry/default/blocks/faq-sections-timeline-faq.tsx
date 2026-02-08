import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const timelineFaqs = [
  {
    title: "Getting Started",
    description: "How does the onboarding process work?",
    steps: [
      {
        title: "Create an account",
        description:
          "Start by signing up for an account using your email address or by connecting with Google, Microsoft, or Apple accounts for faster registration.",
        additionalInfo:
          "We'll send a verification email to confirm your email address. Personal information is only used to identify your account and is never shared with third parties.",
      },
      {
        title: "Complete your profile",
        description:
          "Add your basic information including your name, organization, role, and profile picture to help others identify you on the platform.",
        additionalInfo:
          "Your profile information helps us personalize your experience and provide relevant recommendations. You can update your profile at any time from your account settings.",
      },
      {
        title: "Set up your workspace",
        description:
          "Create or join a workspace for your organization. This is where all your projects, tasks, and team collaborations will live.",
        additionalInfo:
          "Workspaces allow you to organize different areas of work. You can be part of multiple workspaces and switch between them easily.",
      },
      {
        title: "Invite team members",
        description:
          "Add colleagues to your workspace by sending invitation emails. Set appropriate permission levels for each team member.",
        additionalInfo:
          "Team members can have different roles including Admin, Editor, and Viewer. Only workspace admins can invite new members and manage permissions.",
      },
      {
        title: "Start your first project",
        description:
          "Create a new project, set goals and deadlines, and assign team members to specific tasks within the project.",
        additionalInfo:
          "Projects can be organized using boards, lists, or timelines depending on your preferred workflow. You can also import existing projects from other tools.",
      },
    ],
  },
  {
    title: "Billing Cycle",
    description: "How does your subscription and billing process work?",
    steps: [
      {
        title: "Choose a plan",
        description:
          "Select from our Free, Pro, or Enterprise plans based on your needs. Each plan includes different features and user limits.",
        additionalInfo:
          "You can start with our 14-day free trial of any paid plan to explore all features before committing. No credit card required for the trial.",
      },
      {
        title: "Enter payment details",
        description:
          "Provide your credit card or PayPal information. We use industry-standard encryption to protect your payment information.",
        additionalInfo:
          "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Enterprise plans can also pay via invoice.",
      },
      {
        title: "Billing cycle begins",
        description:
          "Your subscription starts immediately, and you'll be charged according to your chosen billing cycle (monthly or annual).",
        additionalInfo:
          "Annual plans come with a significant discount compared to monthly billing. You can change your billing cycle at any time.",
      },
      {
        title: "Receive invoices",
        description:
          "After each payment, we'll email you a receipt and you can access all invoices from your billing dashboard.",
        additionalInfo:
          "Invoices include detailed information about your plan, any add-ons, applicable taxes, and payment method used.",
      },
      {
        title: "Renewal or cancellation",
        description:
          "Subscriptions automatically renew at the end of each billing cycle. You can cancel anytime from your account settings.",
        additionalInfo:
          "If you cancel, you'll maintain access until the end of your current billing period. We don't offer prorated refunds for unused time.",
      },
    ],
  },
];

export default function TimelineFAQ() {
  return (
    <div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-16">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          How It Works
        </h2>
        <p className="mt-4 text-muted-foreground">
          Step-by-step guides to common processes
        </p>
      </div>
      {/* End Title */}

      <div className="space-y-20">
        {timelineFaqs.map((faq, faqIndex) => (
          <div key={faqIndex}>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {faq.title}
              </h3>
              <p className="text-muted-foreground">{faq.description}</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-border z-0 hidden md:block" />

              {/* Timeline steps */}
              <div className="space-y-8 relative">
                {faq.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="relative">
                    <div className="grid md:grid-cols-[96px_1fr] gap-6">
                      {/* Timeline marker */}
                      <div className="flex md:justify-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-4 border-background z-20">
                          <span className="font-semibold">{stepIndex + 1}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <Card>
                        <CardHeader>
                          <CardTitle>{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground">
                            {step.additionalInfo}
                          </div>
                        </CardContent>
                        {stepIndex === faq.steps.length - 1 && (
                          <CardFooter className="border-t pt-4 flex justify-between items-center">
                            <div className="flex items-center text-sm font-medium text-primary">
                              <CheckCircle className="h-4 w-4 mr-1.5" />
                              <span>Process complete</span>
                            </div>
                            <Link href="#">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1"
                              >
                                <span>Learn more</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </CardFooter>
                        )}
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Help */}
      <div className="mt-20 max-w-xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help with any specific questions you might
          have about our services or processes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#">
            <Button variant="outline">Browse FAQs</Button>
          </Link>
          <Link href="#">
            <Button>Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
