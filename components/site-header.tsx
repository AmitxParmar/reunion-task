import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky bg-background z-40 w-full border-b top-0">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Link
              href={"/login"}
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              rel="noreferrer"
              className={buttonVariants()}
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
