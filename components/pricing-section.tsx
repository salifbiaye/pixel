import {Code, Database, Globe} from "lucide-react";

export const PricingSection = () => {
  const pricingPlans = [
    {
      category: "Développement Web/Mobile",
      description: "Sites vitrines, e-commerce, applications mobiles",
      services: [
        { name: "Site vitrine", price: "150k - 300k", features: ["Design responsive", "5-10 pages", "SEO de base", "Formulaire contact"] },
        { name: "Site e-commerce", price: "400k - 800k", features: ["Boutique en ligne", "Paiement sécurisé", "Gestion produits", "Dashboard admin"] },
        { name: "Application mobile", price: "300k - 600k", features: ["iOS & Android", "Design UI/UX", "API intégration", "Publication stores"] }
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      icon: Globe
    },
    {
      category: "Design & Identité Visuelle",
      description: "Logos, branding, UI/UX design",
      services: [
        { name: "Logo + Charte graphique", price: "50k - 100k", features: ["Logo professionnel", "Palette couleurs", "Typographies", "Guidelines"] },
        { name: "Design UI/UX", price: "80k - 150k", features: ["Maquettes détaillées", "Prototypage", "Tests utilisateurs", "Design system"] },
        { name: "Identité complète", price: "120k - 200k", features: ["Branding complet", "Supports marketing", "Site web design", "Guidelines étendues"] }
      ],
      color: "from-purple-500/20 to-pink-500/20",
      icon: Code
    },
    {
      category: "Hébergement & Maintenance",
      description: "Mise en ligne, sécurité, suivi technique",
      services: [
        { name: "Hébergement Standard", price: "30k/mois", features: ["SSL certificat", "Sauvegarde quotidienne", "Support email", "99.9% uptime"] },
        { name: "Hébergement Premium", price: "50k/mois", features: ["Serveur dédié", "CDN mondial", "Support prioritaire", "Monitoring 24/7"] },
        { name: "Maintenance complète", price: "80k/mois", features: ["Mises à jour", "Sécurité renforcée", "Optimisations", "Support téléphonique"] }
      ],
      color: "from-emerald-500/20 to-teal-500/20",
      icon: Database
    }
  ]

  return (
      <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
        <div className="w-full py-16 md:py-24 relative flex flex-col justify-start items-start gap-12">
          {/* Background elements */}
          <div className="w-[600px] h-[900px] absolute top-[400px] left-[-100px] origin-top-left rotate-[-20deg] bg-gradient-to-br from-primary/8 via-primary/4 to-transparent blur-[140px] z-0" />

          {/* Header */}
          <div className="self-stretch flex flex-col justify-center items-center gap-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-semibold tracking-wide">NOS TARIFS</span>
            </div>

            <h2 className="w-full max-w-[655px] text-center text-slate-100 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Solutions sur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"> mesure</span>
            </h2>

            <p className="w-full max-w-[600px] text-center text-slate-300 text-lg font-light leading-relaxed">
              Des tarifs transparents adaptés à vos besoins et à votre budget
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
            {pricingPlans.map((plan, index) => (
                <div key={index} className="group overflow-hidden rounded-2xl border border-white/10 flex flex-col relative p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl">
                  {/* Enhanced glass background */}
                  <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                      }}
                  />

                  {/* Category gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                        <plan.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-slate-100 text-xl font-semibold tracking-tight">{plan.category}</h3>
                        <p className="text-slate-400 text-sm">{plan.description}</p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex-1 space-y-6">
                      {plan.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="border-b border-slate-700/50 pb-6 last:border-b-0">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-slate-200 font-medium">{service.name}</h4>
                              <span className="text-primary font-bold text-lg">{service.price}</span>
                            </div>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                    {feature}
                                  </li>
                              ))}
                            </ul>
                          </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-105">
                      Demander un devis
                    </button>
                  </div>
                </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="self-stretch flex flex-col items-center gap-6 mt-12 z-10">
            <div className="text-center max-w-2xl">
              <h3 className="text-slate-200 text-2xl font-semibold mb-4">Projet personnalisé ?</h3>
              <p className="text-slate-400 mb-6">
                Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques
                et recevoir un devis sur-mesure adapté à votre budget.
              </p>
              <button className="px-8 py-4 rounded-xl bg-transparent border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Consultation gratuite
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
