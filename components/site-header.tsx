import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center sm:justify-between  md:space-x-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Link
              href={"/login"}
              rel="noreferrer"
              className={`font-semibol  tracking-wide text-primary ${buttonVariants({ variant: "outline" })}`}
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              rel="noreferrer"
              className={`hidden md:block ${buttonVariants()}`}
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
