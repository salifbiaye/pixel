import { Code, Smartphone, Cog, Globe, Database, Zap } from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description, features, animationElement }) => (
    <div className="group overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start relative p-6 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl">
        {/* Enhanced glass background with multiple layers */}
        <div
            className="absolute inset-0 rounded-2xl"
            style={{
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
            }}
        />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

        <div className="relative z-10 w-full">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/15 transition-all duration-300 border border-primary/20 group-hover:border-primary/30">
                    <Icon className="w-6 h-6 text-primary drop-shadow-sm" />
                </div>
                <h3 className="text-slate-100 text-xl font-semibold tracking-tight">{title}</h3>
            </div>

            {/* Enhanced animation element container */}
            <div className="mb-8 h-36 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-50" />
                {animationElement}
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">{description}</p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm shadow-primary/20" />
                        <span className="font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default function ServicesSection() {
    const services = [
        {
            icon: Globe,
            title: "Développement Web",
            description: "Sites web modernes et applications web performantes avec les dernières technologies.",
            features: ["Applications React/Next.js", "Sites e-commerce", "Plateformes SaaS", "Progressive Web Apps"],
            animationElement: (
                <div className="relative">
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />

                    {/* Modern browser mockup */}
                    <div className="relative w-24 h-16 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 rounded-xl border border-slate-600/80 shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-all duration-500 group-hover:shadow-primary/20 overflow-hidden">
                        {/* Browser header */}
                        <div className="w-full h-3 bg-gradient-to-r from-slate-700 to-slate-750 rounded-t-xl flex items-center justify-start pl-2 gap-1 border-b border-slate-600/50">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full shadow-sm"></div>
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm"></div>
                        </div>

                        {/* Content area */}
                        <div className="p-2 space-y-1.5">
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/70 rounded group-hover:animate-pulse shadow-sm shadow-primary/30"></div>
                            <div className="w-8 h-1 bg-gradient-to-r from-blue-400/80 to-blue-400/50 rounded group-hover:animate-pulse group-hover:delay-100"></div>
                            <div className="w-14 h-1 bg-gradient-to-r from-purple-400/60 to-purple-400/30 rounded group-hover:animate-pulse group-hover:delay-200"></div>
                            <div className="w-7 h-1 bg-gradient-to-r from-slate-500/60 to-slate-500/30 rounded group-hover:animate-pulse group-hover:delay-300"></div>
                        </div>

                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-xl"></div>
                    </div>
                </div>
            ),
        },
        {
            icon: Smartphone,
            title: "Développement Mobile",
            description: "Applications mobiles natives et cross-platform pour iOS et Android.",
            features: [
                "Applications React Native",
                "Applications natives iOS/Android",
                "UI/UX mobile optimisé",
                "Intégrations API",
            ],
            animationElement: (
                <div className="relative">
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />

                    {/* iPhone-style mockup */}
                    <div className="relative w-12 h-24 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 rounded-xl border-2 border-slate-600/80 shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-all duration-500 group-hover:shadow-cyan-500/20 overflow-hidden">
                        {/* Status bar */}
                        <div className="w-full h-1.5 bg-gradient-to-r from-slate-700 to-slate-750 rounded-t-xl border-b border-slate-600/30"></div>

                        {/* Dynamic Island / Notch */}
                        <div className="w-6 h-1 bg-slate-700 rounded-b-xl mx-auto mt-0.5 shadow-inner"></div>

                        {/* Screen content */}
                        <div className="p-2 mt-1 space-y-1">
                            <div className="w-7 h-0.5 bg-gradient-to-r from-primary to-primary/70 rounded group-hover:animate-pulse shadow-sm shadow-primary/30"></div>
                            <div className="w-4 h-0.5 bg-gradient-to-r from-cyan-400/80 to-cyan-400/50 rounded group-hover:animate-pulse group-hover:delay-100"></div>
                            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400/60 to-blue-400/30 rounded group-hover:animate-pulse group-hover:delay-200"></div>
                            <div className="w-5 h-0.5 bg-gradient-to-r from-slate-500/60 to-slate-500/30 rounded group-hover:animate-pulse group-hover:delay-300"></div>
                            <div className="w-9 h-0.5 bg-gradient-to-r from-purple-400/40 to-purple-400/20 rounded group-hover:animate-pulse group-hover:delay-400"></div>
                        </div>

                        {/* Home indicator */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-slate-400/80 rounded-full shadow-sm"></div>

                        {/* Screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
                    </div>
                </div>
            ),
        },
        {
            icon: Cog,
            title: "Automatisation",
            description: "Solutions d'automatisation intelligentes pour optimiser vos processus métier.",
            features: [
                "Automatisation de workflows",
                "Intégrations API",
                "Bots et assistants IA",
                "Optimisation des processus",
            ],
            animationElement: (
                <div className="relative flex items-center justify-center">
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl" />

                    {/* Outer gear with enhanced styling */}
                    <div className="w-16 h-16 rounded-full border-2 border-slate-600/60 bg-gradient-to-br from-slate-700/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm shadow-2xl group-hover:animate-spin group-hover:shadow-emerald-500/20 transition-all duration-300 relative" style={{ animationDuration: "4s" }}>
                        <div className="w-full h-full rounded-full border border-slate-500/40 flex items-center justify-center relative overflow-hidden">
                            {/* Central hub */}
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40 shadow-inner relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
                            </div>
                        </div>

                        {/* Enhanced gear teeth with gradients */}
                        <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t shadow-sm"></div>
                        <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-3 bg-gradient-to-t from-slate-600 to-slate-700 rounded-b shadow-sm"></div>
                        <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 h-1.5 w-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-l shadow-sm"></div>
                        <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 h-1.5 w-3 bg-gradient-to-l from-slate-600 to-slate-700 rounded-r shadow-sm"></div>
                    </div>

                    {/* Inner gear with counter-rotation */}
                    <div className="absolute w-8 h-8 rounded-full border border-slate-500/50 bg-gradient-to-br from-slate-600/80 via-slate-700/80 to-slate-800/80 backdrop-blur-sm group-hover:animate-spin transition-all duration-300 shadow-inner" style={{ animationDuration: "2.5s", animationDirection: "reverse" }}>
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/80 rounded-full group-hover:animate-pulse shadow-sm shadow-primary/50"></div>
                        </div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-emerald-400 rounded-full group-hover:animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-teal-400 rounded-full group-hover:animate-ping group-hover:delay-150"></div>
                </div>
            ),
        },
        {
            icon: Database,
            title: "Solutions Backend",
            description: "Architectures backend robustes et scalables pour vos applications.",
            features: [
                "APIs REST et GraphQL",
                "Bases de données optimisées",
                "Architecture microservices",
                "Sécurité et authentification",
            ],
            animationElement: (
                <div className="relative">
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-xl blur-xl" />

                    {/* Server rack mockup */}
                    <div className="relative w-18 h-18 rounded-xl bg-gradient-to-br from-slate-700/90 via-slate-800/90 to-slate-900/90 border border-slate-600/60 backdrop-blur-sm shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-violet-500/20 flex items-center justify-center overflow-hidden">
                        <Database className="w-12 h-12 text-primary/90 drop-shadow-sm" />

                        {/* Status indicators */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full group-hover:animate-pulse shadow-sm shadow-emerald-400/50"></div>
                        <div className="absolute top-2 right-5 w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:animate-pulse group-hover:delay-100 shadow-sm shadow-blue-400/50"></div>

                        {/* Server rack lines */}
                        <div className="absolute left-2 top-3 flex flex-col space-y-1">
                            <div className="w-1.5 h-1 bg-gradient-to-r from-primary/80 to-primary/60 rounded-full group-hover:animate-pulse"></div>
                            <div className="w-1.5 h-1 bg-gradient-to-r from-primary/60 to-primary/40 rounded-full group-hover:animate-pulse group-hover:delay-100"></div>
                            <div className="w-1.5 h-1 bg-gradient-to-r from-primary/80 to-primary/60 rounded-full group-hover:animate-pulse group-hover:delay-200"></div>
                        </div>

                        {/* Data flow animation */}
                        <div className="absolute bottom-2 left-2 right-2">
                            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent group-hover:animate-pulse"></div>
                        </div>

                        {/* Screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl"></div>
                    </div>
                </div>
            ),
        },
        {
            icon: Zap,
            title: "Performance & SEO",
            description: "Optimisation des performances et référencement pour maximiser votre visibilité.",
            features: ["Optimisation des performances", "SEO technique", "Analytics et tracking", "Core Web Vitals"],
            animationElement: (
                <div className="relative">
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl blur-xl" />

                    {/* Performance dashboard mockup */}
                    <div className="relative w-18 h-18 rounded-xl bg-gradient-to-br from-slate-700/90 via-slate-800/90 to-slate-900/90 border border-slate-600/60 backdrop-blur-sm shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-yellow-500/20 flex items-center justify-center overflow-hidden">
                        <Zap className="w-12 h-12 text-primary/90 drop-shadow-sm" />

                        {/* Lightning particles with enhanced effects */}
                        <div className="absolute -top-1 -right-1">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:animate-ping shadow-sm shadow-yellow-400/50"></div>
                        </div>
                        <div className="absolute -bottom-1 -left-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:animate-ping group-hover:delay-100 shadow-sm shadow-blue-400/50"></div>
                        </div>
                        <div className="absolute top-1 left-2">
                            <div className="w-1 h-1 bg-primary/90 rounded-full group-hover:animate-ping group-hover:delay-200 shadow-sm shadow-primary/50"></div>
                        </div>

                        {/* Energy waves with gradients */}
                        <div className="absolute inset-0 rounded-xl border border-primary/30 group-hover:animate-pulse"></div>
                        <div className="absolute inset-1 rounded-lg border border-primary/20 group-hover:animate-pulse group-hover:delay-150"></div>
                        <div className="absolute inset-2 rounded-md border border-primary/10 group-hover:animate-pulse group-hover:delay-300"></div>

                        {/* Screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl"></div>
                    </div>
                </div>
            ),
        },
        {
            icon: Code,
            title: "Consulting Tech",
            description: "Accompagnement technique et conseil en architecture pour vos projets.",
            features: ["Audit technique", "Architecture système", "Code review", "Formation équipes"],
            animationElement: (
                <div className="relative">
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl blur-xl" />

                    {/* Code editor mockup */}
                    <div className="relative w-18 h-18 rounded-xl bg-gradient-to-br from-slate-700/90 via-slate-800/90 to-slate-900/90 border border-slate-600/60 backdrop-blur-sm shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-green-500/20 flex items-center justify-center overflow-hidden">
                        <Code className="w-12 h-12 text-primary/90 drop-shadow-sm" />

                        {/* Code brackets with enhanced styling */}
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 text-primary/80 text-xl font-mono font-bold group-hover:animate-pulse drop-shadow-sm">{"{"}</div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-primary/80 text-xl font-mono font-bold group-hover:animate-pulse group-hover:delay-200 drop-shadow-sm">{"}"}</div>

                        {/* Code lines inside with gradients */}
                        <div className="absolute top-4 left-5 right-5 space-y-1">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-green-400/80 to-green-400/50 rounded group-hover:animate-pulse group-hover:delay-100"></div>
                            <div className="w-4 h-0.5 bg-gradient-to-r from-cyan-400/60 to-cyan-400/30 rounded group-hover:animate-pulse group-hover:delay-200"></div>
                            <div className="w-7 h-0.5 bg-gradient-to-r from-blue-400/40 to-blue-400/20 rounded group-hover:animate-pulse group-hover:delay-300"></div>
                        </div>

                        {/* Typing indicator with enhanced animation */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            <div className="w-1 h-1 bg-primary rounded-full group-hover:animate-bounce shadow-sm shadow-primary/50"></div>
                            <div className="w-1 h-1 bg-primary rounded-full group-hover:animate-bounce group-hover:delay-100 shadow-sm shadow-primary/50"></div>
                            <div className="w-1 h-1 bg-primary rounded-full group-hover:animate-bounce group-hover:delay-200 shadow-sm shadow-primary/50"></div>
                        </div>

                        {/* Screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl"></div>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <section
            id="services-section"
            className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent"
        >
            <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
                {/* Enhanced background blur with gradient */}
                <div className="w-[600px] h-[1000px] absolute top-[650px] left-[100px] origin-top-left rotate-[-35deg] bg-gradient-to-br from-primary/15 via-primary/8 to-transparent blur-[150px] z-0" />

                <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
                    <div className="flex flex-col justify-start items-center gap-4">
                        <h2 className="w-full max-w-[655px] text-center text-slate-100 text-4xl md:text-6xl font-bold leading-tight md:leading-[66px] tracking-tight">
                            Nos Services
                        </h2>
                        <p className="w-full max-w-[600px] text-center text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                            Des solutions digitales complètes pour propulser votre startup vers le succès.
                        </p>
                    </div>
                </div>

                <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}