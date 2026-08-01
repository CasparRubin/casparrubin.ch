"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Cake,
  Check,
  Code,
  Heart,
  Layers,
  Mail,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ProfileCarousel } from "@/components/profile-carousel";
import { Separator } from "@/components/ui/separator";
import { getAge } from "@/lib/age";
import { EMAIL, EMPLOYER, JOB_TITLE, STACK } from "@/lib/site";

export default function Page() {
  const [emailCopied, setEmailCopied] = useState(false);
  const today = new Date();
  const age = getAge(today, new Date(1991, 5, 18));
  const daughterAge = getAge(today, new Date(2022, 11, 1));
  const dogAge = getAge(today, new Date(2020, 11, 1));
  const emailAddress = EMAIL;

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    setEmailCopied(true);
    window.setTimeout(() => {
      setEmailCopied(false);
    }, 2500);
  };

  return (
    <section className="pt-12 pb-16">
      <div className="grid items-start gap-8 lg:grid-cols-[3fr_5fr] lg:items-center lg:gap-14">
        <div className="relative mx-auto w-full max-w-[280px] lg:max-w-[380px]">
          <ProfileCarousel />
        </div>
        <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="sm:hidden">
              Caspar <span className="font-normal">Rubin</span>
            </span>
            <span className="hidden sm:inline">
              Caspar Camille <span className="font-normal">Rubin</span>
            </span>
          </h1>
          <div className="mb-4 flex justify-center lg:justify-start">
            <Badge
              variant="default"
              className="h-auto max-w-full whitespace-normal break-words border-transparent bg-[#ff2764] pb-1 text-left text-sm text-white dark:bg-[#ff2764] dark:text-white sm:max-w-3xl"
            >
              {JOB_TITLE}
            </Badge>
          </div>
          <ul className="text-muted-foreground flex flex-col items-center gap-2 pt-1 text-sm lg:items-start">
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <span className="flex h-5 shrink-0 items-center" aria-hidden>
                <Cake className="text-[var(--primary)] size-4" />
              </span>
              <span>
                Born in{" "}
                <span className="text-foreground font-medium">1991</span> ({age}
                )
              </span>
            </li>
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <span className="flex h-5 shrink-0 items-center" aria-hidden>
                <MapPin className="text-[var(--primary)] size-4" />
              </span>
              <span>
                Living in{" "}
                <span className="text-foreground font-medium">Basel</span>
              </span>
            </li>
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <span className="flex h-5 shrink-0 items-center" aria-hidden>
                <Heart className="text-[var(--primary)] size-4" />
              </span>
              <span>
                Married in{" "}
                <span className="text-foreground font-medium">2022</span>, one
                daughter ({daughterAge}), one dog ({dogAge})
              </span>
            </li>
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <span className="flex h-5 shrink-0 items-center" aria-hidden>
                <Briefcase className="text-[var(--primary)] size-4" />
              </span>
              <span>
                Working at{" "}
                <span className="text-foreground font-medium">{EMPLOYER}</span>
              </span>
            </li>
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <span className="flex h-5 shrink-0 items-center" aria-hidden>
                <Code className="text-[var(--primary)] size-4" />
              </span>
              <span>
                Building open source software at{" "}
                <a
                  href="https://helvety.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline underline-offset-4 hover:text-primary"
                >
                  Helvety
                </a>{" "}
                in my free time
              </span>
            </li>
          </ul>
          <Separator className="my-2" />
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm leading-relaxed lg:justify-start">
              <span className="flex h-5 shrink-0 items-center" aria-hidden>
                <Layers className="text-[var(--primary)] size-4" />
              </span>
              <span>My go-to stack:</span>
            </p>
            <ul className="text-muted-foreground flex flex-col items-center gap-2 text-sm lg:items-start">
              {STACK.map(({ category, service, icon }) => (
                <li
                  key={service}
                  className="flex items-center justify-center gap-2 lg:justify-start"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={14}
                    height={14}
                    className="size-3.5 shrink-0 object-contain"
                  />
                  <span>
                    <span className="text-foreground font-medium">
                      {category}:
                    </span>{" "}
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <a
                  href="https://github.com/CasparRubin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 pr-2.5 hover:bg-muted"
                  >
                    <Image
                      src="/more/github_64px.png"
                      alt=""
                      width={14}
                      height={14}
                      className="size-3.5 object-contain"
                    />
                    GitHub
                  </Badge>
                </a>
                <a
                  href="https://www.linkedin.com/in/caspar-camille-rubin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 pr-2.5 hover:bg-muted"
                  >
                    <Image
                      src="/more/linkedin_64px.png"
                      alt=""
                      width={14}
                      height={14}
                      className="size-3.5 object-contain"
                    />
                    LinkedIn
                  </Badge>
                </a>
                <a
                  href="https://helvety.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 pr-2.5 hover:bg-muted"
                  >
                    <Image
                      src="/more/helvety_64px.png"
                      alt=""
                      width={14}
                      height={14}
                      className="size-3.5 object-contain"
                    />
                    Helvety
                  </Badge>
                </a>
              </div>
              <Separator orientation="vertical" className="mx-1 self-stretch" />
              <div className="flex items-center justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={
                    emailCopied
                      ? "Email address copied to clipboard"
                      : `Copy ${emailAddress} to clipboard`
                  }
                  className="inline-flex rounded-md focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 pr-2.5 hover:bg-muted"
                  >
                    {emailCopied ? (
                      <>
                        <Check
                          className="size-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Mail
                          className="size-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{emailAddress}</span>
                      </>
                    )}
                  </Badge>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
