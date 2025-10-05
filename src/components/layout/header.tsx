"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Lightbulb,
  UploadCloud,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/schedule", label: "Schedule", icon: CalendarDays },
  { href: "/teams", label: "Teams", icon: Users },
  { href: "/submit", label: "Submit", icon: UploadCloud },
  { href: "/ideas", label: "Ideas", icon: Lightbulb },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 text-2xl font-bold font-headline text-accent"
          >
            IX
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 flex items-center gap-2",
                  isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                <link.icon className="h-4 w-4" />
                <span className="hidden md:inline">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
