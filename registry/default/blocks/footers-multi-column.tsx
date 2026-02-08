import Link from "next/link";
import { Input } from "@/registry/default/ui/input";
import { Button } from "@/registry/default/ui/button";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  ArrowRightIcon,
} from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "/features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Integrations", href: "/integrations" },
      { title: "Changelog", href: "/changelog" },
      { title: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Careers", href: "/careers" },
      { title: "Customers", href: "/customers" },
      { title: "Brand", href: "/brand" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "/community" },
      { title: "Contact", href: "/contact" },
      { title: "Support", href: "/support" },
      { title: "FAQ", href: "/faq" },
      { title: "Terms of service", href: "/terms" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "/api" },
      { title: "Status", href: "/status" },
      { title: "GitHub", href: "https://github.com", external: true },
      { title: "Team", href: "/team" },
      { title: "Developer Blog", href: "/blog/dev" },
    ],
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
];

export default function FooterMultiColumn() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20 2xl:max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Your Company</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="mt-2 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[240px]"
                />
                <Button type="submit" size="icon">
                  <ArrowRightIcon className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              <p className="text-muted-foreground mt-2 text-xs">
                Get the latest news and updates from our team.
              </p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-center text-sm md:text-left">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
