"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUp,
  Briefcase,
  Cake,
  Check,
  Copy,
  Code,
  Heart,
  Mail,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProfileCarousel } from "@/components/profile-carousel";
import { Separator } from "@/components/ui/separator";

function getAge(today: Date, birthDate: Date): number {
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}

export default function Page() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const roleTitle = "Full-Stack Software Engineer";
  const roleExplanation =
    "I plan, build, and connect business software, then automate the workflows around it.";
  const today = new Date();
  const age = getAge(today, new Date(1991, 5, 18));
  const daughterAge = getAge(today, new Date(2022, 11, 1));
  const dogAge = getAge(today, new Date(2020, 11, 1));
  const ethEndDate = new Date(2026, 6, 31, 23, 59, 59, 999);
  const currentEmployer =
    today <= ethEndDate ? "ETH Zürich" : "University of Zürich";
  const emailAddress = "caspar@helvety.com";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    setEmailCopied(true);
    window.setTimeout(() => {
      setEmailCopied(false);
    }, 1500);
  };

  return (
    <section className="pt-12 pb-16">
      <div className="grid items-start gap-8 lg:grid-cols-[3fr_5fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-[280px] lg:mt-5 lg:max-w-[380px]">
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
          <div className="mb-4 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
            <Badge
              variant="default"
              className="h-auto max-w-full whitespace-normal break-words border-transparent bg-[#ff2764] pb-1 text-left text-sm text-white dark:bg-[#ff2764] dark:text-white sm:max-w-3xl"
            >
              {showExplanation ? (
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-primary-foreground font-normal">
                    {roleExplanation}
                  </span>
                </span>
              ) : (
                roleTitle
              )}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowExplanation((current) => !current)}
              aria-expanded={showExplanation}
              className="gap-1.5"
            >
              {showExplanation ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <>
                  <ArrowUp className="size-4 sm:hidden" aria-hidden="true" />
                  <ArrowLeft
                    className="hidden size-4 sm:block"
                    aria-hidden="true"
                  />
                </>
              )}
              <span>{showExplanation ? "Got it" : "What does that mean?"}</span>
            </Button>
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest">
            Basics
          </h2>
          <ul className="text-muted-foreground flex flex-col items-center gap-2 pt-1 text-sm lg:items-start">
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <Cake className="text-[var(--primary)] size-4 shrink-0" />
              <span>
                Born in{" "}
                <span className="text-foreground font-medium">1991</span> ({age}
                )
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <MapPin className="text-[var(--primary)] size-4 shrink-0" />
              <span>
                Living in{" "}
                <span className="text-foreground font-medium">Basel</span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <Heart className="text-[var(--primary)] size-4 shrink-0" />
              <span>
                Married in{" "}
                <span className="text-foreground font-medium">2022</span>, one
                daughter ({daughterAge}), one dog ({dogAge})
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <Briefcase className="text-[var(--primary)] size-4 shrink-0" />
              <span>
                Working at{" "}
                <span className="text-foreground font-medium">
                  {currentEmployer}
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <Code className="text-[var(--primary)] size-4 shrink-0" />
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
            <h2 className="text-xs font-semibold uppercase tracking-widest">
              Stack
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I mostly work with Microsoft and Azure tools because they are
              reliable, secure, and practical for long-term maintenance.
            </p>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/azure_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                Azure
              </Badge>
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/nextjs_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                Next.js
              </Badge>
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/dataverse_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                Dataverse
              </Badge>
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/powerautomate_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                Power Automate
              </Badge>
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/powerapps_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                Power Apps
              </Badge>
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/dynamics365_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                Dynamics 365
              </Badge>
              <Badge variant="outline" className="gap-1.5 pr-2.5">
                <Image
                  src="/stack/sharepoint_64px.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
                SharePoint
              </Badge>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest">
              More
            </h2>
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
              <div className="flex items-center justify-center gap-1.5 lg:justify-start">
                <a href={`mailto:${emailAddress}`}>
                  <Badge
                    variant="outline"
                    className="gap-1.5 pr-2.5 hover:bg-muted"
                  >
                    <Mail className="size-3.5" />
                    {emailAddress}
                  </Badge>
                </a>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="h-7 px-2"
                >
                  {emailCopied ? (
                    <Check className="size-3.5" aria-hidden="true" />
                  ) : (
                    <Copy className="size-3.5" aria-hidden="true" />
                  )}
                  <span className="ml-1">
                    {emailCopied ? "Copied!" : "Copy email"}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
