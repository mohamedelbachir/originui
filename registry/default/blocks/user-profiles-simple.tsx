import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

export default function SimpleUserProfile() {
  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center gap-x-3">
          <Avatar className="size-16">
            <AvatarImage
              src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
              alt="Eliana Garcia"
            />
            <AvatarFallback>EG</AvatarFallback>
          </Avatar>
          <div className="grow">
            <h1 className="text-lg font-medium">Eliana Garcia</h1>
            <p className="text-sm text-muted-foreground">
              Graphic Designer, Web designer/developer
            </p>
          </div>
        </div>

        {/* About */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            I am a seasoned graphic designer with over 14 years of experience in
            creating visually appealing and user-centric designs. My expertise
            spans across UI design, design systems, and custom illustrations,
            helping clients bring their digital visions to life.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Currently, I work remotely for Notion, where I design template UIs,
            convert them into HTML and CSS, and provide comprehensive support to
            our users. I am passionate about crafting elegant and functional
            designs that enhance user experiences.
          </p>

          {/* Contact Links */}
          <ul className="mt-5 flex flex-col gap-y-3">
            <li>
              <Link
                href="mailto:elianagarcia997@about.me"
                className="flex items-center gap-x-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-3.5" />
                elianagarcia997@about.me
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/elianagarcia997"
                className="flex items-center gap-x-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <Twitter className="size-3.5" />
                @elianagarcia997
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-x-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <MapPin className="size-3.5" />
                San Francisco, CA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
