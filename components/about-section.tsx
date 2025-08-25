import {Code, Cog, Globe, Smartphone} from "lucide-react";

export const AboutSection = () => (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-16 md:py-24 relative flex flex-col justify-start items-start gap-12">
        {/* Background elements */}
        <div className="w-[500px] h-[800px] absolute top-[200px] right-[50px] origin-top-right rotate-[25deg] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-[120px] z-0" />

        <div className="self-stretch flex flex-col lg:flex-row justify-center items-center gap-16 z-10">
          {/* Left side - Content */}
          <div className="flex-1 flex flex-col justify-start items-start gap-8 max-w-2xl">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary text-sm font-semibold tracking-wide">À PROPOS DE PIXEL</span>
              </div>

              <h2 className="text-slate-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Votre partenaire
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"> digital</span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Chez <strong className="text-slate-200">Pixel</strong>, nous transformons vos idées en solutions numériques innovantes.
                Spécialisés dans le développement web et mobile, l'automatisation des services.
              </p>
            </div>

            {/* Stats */}
            {/*<div className="grid grid-cols-3 gap-8 w-full">*/}
            {/*  <div className="flex flex-col items-center text-center">*/}
            {/*    <div className="text-3xl font-bold text-primary mb-2">50+</div>*/}
            {/*    <div className="text-slate-400 text-sm">Projets réalisés</div>*/}
            {/*  </div>*/}
            {/*  <div className="flex flex-col items-center text-center">*/}
            {/*    <div className="text-3xl font-bold text-primary mb-2">100%</div>*/}
            {/*    <div className="text-slate-400 text-sm">Satisfaction client</div>*/}
            {/*  </div>*/}
            {/*  <div className="flex flex-col items-center text-center">*/}
            {/*    <div className="text-3xl font-bold text-primary mb-2">24/7</div>*/}
            {/*    <div className="text-slate-400 text-sm">Support technique</div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/* Features list */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm shadow-primary/30"></div>
                <span className="text-slate-300 font-medium">Solutions sur-mesure adaptées à vos besoins</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm shadow-primary/30"></div>
                <span className="text-slate-300 font-medium">Technologies modernes et performantes</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm shadow-primary/30"></div>
                <span className="text-slate-300 font-medium">Accompagnement de A à Z</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="flex-1 flex justify-center items-center max-w-lg">
            <div className="relative w-80 h-80">
              {/* Central logo/brand element */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90 border border-slate-600/50 shadow-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-primary/60">
                  P
                </div>
              </div>

              {/* Floating elements around */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-primary/80" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center shadow-lg">
                <Smartphone className="w-8 h-8 text-primary/80" />
              </div>

              <div className="absolute top-1/2 -left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center shadow-lg">
                <Cog className="w-6 h-6 text-primary/80 animate-spin" style={{ animationDuration: "4s" }} />
              </div>

              <div className="absolute top-1/2 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-primary/80" />
              </div>

              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }}></div>
              <div className="absolute inset-4 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
)