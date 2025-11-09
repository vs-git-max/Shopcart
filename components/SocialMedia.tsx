import React from "react";
import {
  Facebook,
  Github,
  Linkedin,
  Slack,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { Props } from "next/script";
import { cn } from "@/lib/utils";

const socialLinks = [
  { title: "LinkedIn", href: "#", icon: <Linkedin className="size-5" /> },
  { title: "Youtube", href: "#", icon: <Youtube className="size-5" /> },
  { title: "Facebook", href: "#", icon: <Facebook className="size-5" /> },
  { title: "Slack", href: "#", icon: <Slack className="size-5" /> },
  { title: "Github", href: "#", icon: <Github className="size-5" /> },
  { title: "Twitter", href: "#", icon: <Twitter className="size-5" /> },
];

interface SocialMediaProps {
  className?: string;
  tooltipClassName?: string;
  iconClassName?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  className,
  tooltipClassName,
  iconClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5 ", className)}>
        {socialLinks?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white/80 text-shop-dark-green font-semibold hoverEffect border border-red-600",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
