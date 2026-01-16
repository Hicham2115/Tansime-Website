import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/business-center", label: "Business Center" },
  { href: "/residences", label: "Residences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Component() {
  return (
    <header className="px-4 md:px-6 sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#d9ac6f]/20 shadow-lg shadow-[#d9ac6f]/5">
      <div className="relative flex h-16 items-center justify-between gap-4">
        {/* Left side  */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden text-primary"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, _index) => (
                    <NavigationMenuItem className="w-full" key={link.href}>
                      <NavigationMenuLink
                        className="py-1.5 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent hover:text-black focus:text-black data-[active]:text-black"
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <div className="flex flex-col-reverse gap-2 mt-2">
                    <Button
                      asChild
                      className="group relative px-4 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105 flex items-center gap-2 w-full justify-center"
                      size="sm"
                    >
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-3">
              <div className="flex">
                <span className="text-xl font-bold tracking-tight text-black">
                  TASNIME <span className="text-[#225f66]">IMMOBILIER</span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation menu - Centered */}
        <NavigationMenu className="max-md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenuList className="gap-1">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="py-2 px-4 font-medium transition-all rounded-lg hover:bg-transparent hover:underline hover:text-primary text-black focus:bg-transparent focus:text-black data-[active]:bg-transparent data-[active]:text-black"
                  href={link.href}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side - Contact Button */}
        <div className="max-md:hidden flex items-center gap-4">
          <Button
            asChild
            className="group relative px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105"
            size="sm"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
