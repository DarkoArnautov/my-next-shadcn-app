import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/component"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Component
      </Link>
      <Link
        href="/sidebar"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sidebar
      </Link>
    </nav>
  );
}