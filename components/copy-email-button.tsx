"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { EMAIL } from "@/lib/site";

export function CopyEmailButton() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    window.setTimeout(() => {
      setEmailCopied(false);
    }, 2500);
  };

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      aria-label={
        emailCopied
          ? "Email address copied to clipboard"
          : `Copy ${EMAIL} to clipboard`
      }
      className="inline-flex rounded-md focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <Badge variant="outline" className="gap-1.5 pr-2.5 hover:bg-muted">
        {emailCopied ? (
          <>
            <Check className="size-3.5 shrink-0" aria-hidden="true" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Mail className="size-3.5 shrink-0" aria-hidden="true" />
            <span>{EMAIL}</span>
          </>
        )}
      </Badge>
    </button>
  );
}
