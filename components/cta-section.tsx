"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { MessageSquare, Sparkles, Bell, HelpCircle, Zap, X, Send } from "lucide-react"

export function PixelAICTASection() {
  const [showAssistant, setShowAssistant] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      content: "Salut ! 👋 Je suis l'assistant IA de Pixel. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickActions = [
    { icon: HelpCircle, label: "Aide & Support", action: "help" },
    { icon: Bell, label: "Nouvelles Pixel", action: "news" },
    { icon: Zap, label: "Nos Services", action: "services" },
    { icon: MessageSquare, label: "Contact", action: "contact" }
  ]

  const handleQuickAction = (action) => {
    const responses = {
      help: "Je peux vous aider avec :\n• Questions sur nos services\n• Informations techniques\n• Processus de développement\n• Tarification\n• Support client\n\nQue souhaitez-vous savoir ?",
      news: "🚀 Dernières nouvelles Pixel :\n• Nouveau service d'automatisation lancé\n• +15 projets réussis ce mois\n• Partenariat avec des startups tech locales\n• Formation équipe en IA avancée\n\nRestez connecté pour plus d'actualités !",
      services: "Nos services principaux :\n🌐 Développement Web & Mobile\n🎨 Design & Identité Visuelle\n⚙️ Automatisation & IA\n🔧 Hébergement & Maintenance\n💡 Consulting Tech\n\nLequel vous intéresse ?",
      contact: "📞 Contactez Pixel :\n• Email: contact@pixel-startup.com\n• Téléphone: +221 XX XXX XXXX\n• WhatsApp: Disponible 24/7\n• Bureau: Dakar, Sénégal\n\nConsultation gratuite disponible !"
    }

    const newMessage = {
      type: "assistant",
      content: responses[action],
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "assistant",
        content: "Merci pour votre message ! Notre équipe Pixel va vous répondre rapidement. En attendant, n'hésitez pas à explorer nos services ou à utiliser les actions rapides ci-dessous.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
      <section className="w-full pt-20 md:pt-60 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible">
        {/* Animated Background */}
        <div className="absolute inset-0 top-[-90px]">
          <svg
              className="w-full h-full"
              viewBox="0 0 1388 825"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
          >
            <mask
                id="mask0_182_1049"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="269"
                y="27"
                width="850"
                height="493"
            >
              <rect x="269.215" y="27.4062" width="849.57" height="492.311" fill="url(#paint0_linear_182_1049)" />
            </mask>
            <g mask="url(#mask0_182_1049)">
              <g filter="url(#filter0_f_182_1049)">
                <ellipse
                    cx="694"
                    cy="-93.0414"
                    rx="670.109"
                    ry="354.908"
                    fill="url(#paint1_radial_182_1049)"
                    fillOpacity="0.8"
                />
              </g>
              <ellipse cx="694" cy="-91.5385" rx="670.109" ry="354.908" fill="url(#paint2_linear_182_1049)" />
              <ellipse cx="694" cy="-93.0414" rx="670.109" ry="354.908" fill="url(#paint3_linear_182_1049)" />
            </g>
            <defs>
              <filter
                  id="filter0_f_182_1049"
                  x="-234.109"
                  y="-705.949"
                  width="1856.22"
                  height="1225.82"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur_182_1049" />
              </filter>
              <linearGradient
                  id="paint0_linear_182_1049"
                  x1="1118.79"
                  y1="273.562"
                  x2="269.215"
                  y2="273.562"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsl(var(--background))" stopOpacity="0" />
                <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
                <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
                <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                  id="paint1_radial_182_1049"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)"
              >
                <stop offset="0.1294" stopColor="hsl(var(--primary))" />
                <stop offset="0.2347" stopColor="hsl(var(--primary))" />
                <stop offset="0.3" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                  id="paint2_linear_182_1049"
                  x1="694"
                  y1="-446.446"
                  x2="694"
                  y2="263.369"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient
                  id="paint3_linear_182_1049"
                  x1="694"
                  y1="-447.949"
                  x2="694"
                  y2="261.866"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsl(var(--background))" />
                <stop offset="1" stopColor="hsl(var(--background))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col justify-start items-center gap-9 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-wide">IA ASSISTANT PIXEL</span>
            </div>

            <h2 className="text-slate-100 text-4xl md:text-5xl lg:text-[68px] font-bold leading-tight md:leading-tight lg:leading-[76px] break-words max-w-[800px]">
              Besoin d'aide ou d'infos sur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"> Pixel</span> ?
            </h2>

            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed break-words max-w-2xl">
              Notre assistant IA est là pour vous aider 24/7. Support technique, dernières nouvelles,
              informations sur nos services - tout ce dont vous avez besoin !
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            {quickActions.map((action, index) => (
                <button
                    key={index}
                    onClick={() => {
                      setShowAssistant(true)
                      handleQuickAction(action.action)
                    }}
                    className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-primary/50 hover:from-slate-700/50 hover:to-slate-800/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/15 transition-all duration-300">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm text-center group-hover:text-slate-100 transition-colors duration-300">
                {action.label}
              </span>
                </button>
            ))}
          </div>

          {/* Main CTA */}
          <Button
              onClick={() => setShowAssistant(true)}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white text-lg font-semibold rounded-full shadow-[0px_0px_0px_4px_rgba(255,255,255,0.13)] hover:from-primary/90 hover:to-primary/70 hover:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105"
              size="lg"
          >
            <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Parler à l'Assistant IA
          </Button>
        </div>

        {/* AI Assistant Modal */}
        {showAssistant && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="w-full max-w-2xl h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-600/50 shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-semibold">Assistant IA Pixel</h3>
                      <p className="text-slate-400 text-sm">En ligne • Disponible 24/7</p>
                    </div>
                  </div>
                  <button
                      onClick={() => setShowAssistant(false)}
                      className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message, index) => (
                      <div
                          key={index}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                            className={`max-w-[80%] p-4 rounded-2xl ${
                                message.type === 'user'
                                    ? 'bg-gradient-to-r from-primary to-primary/80 text-white'
                                    : 'bg-slate-700/50 text-slate-100 border border-slate-600/50'
                            }`}
                        >
                          <p className="whitespace-pre-line leading-relaxed">{message.content}</p>
                          <span className="text-xs opacity-70 block mt-2">
                      {message.timestamp.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                        </div>
                      </div>
                  ))}
                </div>

                {/* Quick Actions in Chat */}
                <div className="p-4 border-t border-slate-700/50">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {quickActions.map((action, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuickAction(action.action)}
                            className="flex flex-col items-center gap-1 p-3 rounded-lg border border-slate-700/50 hover:border-primary/50 hover:bg-slate-700/30 transition-all duration-200"
                        >
                          <action.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-slate-400">{action.label}</span>
                        </button>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="flex gap-3">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Tapez votre message..."
                        className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim()}
                        className="px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:from-primary/90 hover:to-primary/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  )
}