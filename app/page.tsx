import Image from "next/image";
import { Briefcase, Cake, Code, Heart, MapPin, Mountain } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ProfileCarousel } from "@/components/profile-carousel";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const stack = [
  { name: "Azure", icon: "/stack/azure.png", tip: "Cloud hosting & infrastructure" },
  { name: "Next.js", icon: "/stack/nextjs.png", tip: "Customer-facing frontends & server-side APIs" },
  { name: "Dataverse", icon: "/stack/dataverse.png", tip: "Databases" },
  { name: "SharePoint", icon: "/stack/sp_online.png", tip: "File storage & document management" },
  { name: "Power Automate", icon: "/stack/powerautomate.png", tip: "Automations and Integrations" },
  { name: "Power Apps", icon: "/stack/powerapps.png", tip: "Backend processing platforms" },
  { name: "Dynamics 365", icon: "/stack/dynamics365.png", tip: "Business process management" },
  { name: "AI Foundry", icon: "/stack/aiFoundry.png", tip: "AI integrations & custom agents" },
] as const;

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function yearsSince(year: number, month: number): number {
  return Math.floor((Date.now() - new Date(year, month).getTime()) / MS_PER_YEAR);
}

const links = [
  { name: "GitHub", icon: "/links/github.png", href: "https://github.com/CasparRubin", tip: "My open source projects" },
  { name: "LinkedIn", icon: "/links/linkedin.png", href: "https://www.linkedin.com/in/caspar-camille-rubin", tip: "Professional profile" },
  { name: "Helvety", icon: "/links/helvety.png", href: "https://helvety.com", tip: "My side project" },
] as const;

export default function Page() {
  const age = yearsSince(1991, 5);
  const daughterAge = yearsSince(2022, 11);

  return (
    <section className="py-12 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-[3fr_5fr] md:gap-14">
        <div className="relative mx-auto mt-5 w-full max-w-[280px] md:max-w-[380px]">
          <ProfileCarousel />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Caspar Camille{" "}
              <span className="font-normal">Rubin</span>
            </h1>
            <div className="mt-3">
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="default" className="pb-1 text-sm">Full Stack Enterprise System Engineer</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  I design and build end-to-end enterprise applications, from frontend to backend, including architecture and process automation.
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <ul className="text-muted-foreground flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Briefcase className="text-primary size-4 shrink-0" />
              Working at <span className="text-foreground font-medium">ETH Zürich</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-primary size-4 shrink-0" />
              Living in <span className="text-foreground font-medium">Basel</span>
            </li>
            <li className="flex items-center gap-2">
              <Mountain className="text-primary size-4 shrink-0" />
              Originally from <span className="text-foreground font-medium">Oberwallis</span>
            </li>
            <li className="flex items-center gap-2">
              <Cake className="text-primary size-4 shrink-0" />
              Born in <span className="text-foreground font-medium">1991</span> ({age})
            </li>
            <li className="flex items-center gap-2">
              <Heart className="text-primary size-4 shrink-0" />
              Married, one daughter ({daughterAge}), one dog
            </li>
            <li className="flex items-center gap-2">
              <Code className="text-primary size-4 shrink-0" />
              Building{" "}
              <a
                href="https://helvety.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium underline underline-offset-4 hover:text-primary"
              >
                Helvety
              </a>{" "}
              in my free time
            </li>
          </ul>

          <Separator />

          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              My stack is built around enterprise-grade services that are
              secure, performant, and stable out of the box. Easy to govern and
              maintain, they minimize technical debt so projects keep running for
              years without constant upkeep.
            </p>

            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger>
                    <Badge variant="outline" className="gap-1.5 pr-2.5">
                      <Image
                        src={item.icon}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5 object-contain"
                      />
                      {item.name}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>{item.tip}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex flex-wrap items-center gap-2">
            {links.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline" className="gap-1.5 pr-2.5 hover:bg-muted">
                      <Image
                        src={item.icon}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5 object-contain"
                      />
                      {item.name}
                    </Badge>
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.tip}</TooltipContent>
              </Tooltip>
            ))}
            <Separator orientation="vertical" className="mx-1 self-stretch" />
            <Tooltip>
              <TooltipTrigger>
                <a href="mailto:caspar@helvety.com">
                  <Badge variant="outline" className="gap-1.5 pr-2.5 hover:bg-muted">
                    <Image
                      src="/links/helvety.png"
                      alt=""
                      width={14}
                      height={14}
                      className="size-3.5 object-contain"
                    />
                    caspar@helvety.com
                  </Badge>
                </a>
              </TooltipTrigger>
              <TooltipContent>Send me an email</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
