import Link from "next/link";
import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Overview", href: "#" },
      { title: "Features", href: "#" },
      { title: "Solutions", href: "#" },
      { title: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Developers", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" },
      { title: "Partners", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

const partners = [
  {
    name: "Company 1",
    logo: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="40" rx="6" className="fill-muted" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="12"
        >
          Logo 1
        </text>
      </svg>
    ),
  },
  {
    name: "Company 2",
    logo: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="40" rx="6" className="fill-muted" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="12"
        >
          Logo 2
        </text>
      </svg>
    ),
  },
  {
    name: "Company 3",
    logo: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="40" rx="6" className="fill-muted" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="12"
        >
          Logo 3
        </text>
      </svg>
    ),
  },
  {
    name: "Company 4",
    logo: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="40" rx="6" className="fill-muted" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="12"
        >
          Logo 4
        </text>
      </svg>
    ),
  },
  {
    name: "Company 5",
    logo: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="40" rx="6" className="fill-muted" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="12"
        >
          Logo 5
        </text>
      </svg>
    ),
  },
  {
    name: "Company 6",
    logo: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="40" rx="6" className="fill-muted" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="12"
        >
          Logo 6
        </text>
      </svg>
    ),
  },
];

export default function FooterLogoCloud() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        {/* Logo Cloud */}
        <div className="py-12 border-b border-border">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold mb-2">
              Trusted by leading companies
            </h2>
            <p className="text-sm text-muted-foreground">
              Join 50,000+ companies already growing with us
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href="#"
                className="flex justify-center items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <partner.logo className="h-10 w-auto" />
                <span className="sr-only">{partner.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Your Company</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Building the future of digital experiences.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Your Company, Inc. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
