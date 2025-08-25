import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import OptimizedSVGBackground from "@/components/optimized-svg-background";

export function HeroSection() {
  return (
      <section
          className="flex relative flex-col items-center text-center relative mx-auto  overflow-hidden   px-4
         w-full h-screen md:w-full md:h-screen lg:h-screen md:px-0"
      >
        <OptimizedSVGBackground/>
        <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-0 pointer-events-none"/>

        {/* Header positioned at top of hero container */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header/>
        </div>

        <div
            className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-32 md:mt-[200px] lg:mt-[250px] px-4">
          <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
            Nous construisons l'avenir du digital
          </h1>
          <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
            Développement web et mobile, automatisation intelligente et solutions sur-mesure.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link href="#features-section" rel="noopener noreferrer">
            <Button
                className="bg-primary text-primary-foreground hover:bg-white hover:text-primary px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-primary/20 transition-all duration-300">
              Découvrir nos services
            </Button>
          </Link>
          <Link href="#contact-section" rel="noopener noreferrer">
            <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-medium text-base transition-all duration-300 bg-transparent"
            >
              Nous rejoindre
            </Button>
          </Link>
        </div>
      </section>
  )
}
