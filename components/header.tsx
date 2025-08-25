"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const navItems = [
    { name: "Services", href: "#services-section" },
    { name: "Équipe", href: "#team-section" },
    { name: "Contact", href: "#contact-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <header className="w-full py-4 px-6 relative overflow-hidden">
        {/* Effet glacial pixelisé en arrière-plan */}

        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                {/* Bulle avec gradient et effets */}
                <div className="relative w-16 h-16 rounded-full bg-blue-900 p-0.5 shadow-xl">
                  <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/startup-logo.png"
                        alt="Pixel Logo"
                        width={44}
                        height={44}
                        className="rounded-lg"
                    />
                  </div>
                </div>
                {/* Effet de brillance */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-sm"></div>
              </div>
              <span className="text-foreground text-2xl font-bold tracking-tight">Pixel</span>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="text-slate-300 hover:text-cyan-300 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#contact-section" className="hidden md:block">
              <Button className="bg-transparent hover:bg-black text-white  border border-white  px-6 py-2 rounded-full font-medium shadow-sm">
                Nous contacter
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="bg-background border-t border-border text-foreground">
                <SheetHeader>
                  <SheetTitle className="text-left text-xl font-semibold text-foreground">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleScroll(e, item.href)}
                          className="text-[#888888] hover:text-foreground justify-start text-lg py-2"
                      >
                        {item.name}
                      </Link>
                  ))}
                  <Link href="#contact-section" className="w-full mt-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full font-medium shadow-sm">
                      Nous contacter
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  )
}