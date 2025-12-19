"use client"

import { useState } from "react"
import { Check, Zap, Crown, Sparkles, Star, Building2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import Image from "next/image"

const plans = [
  {
    name: "Découverte",
    icon: Zap,
    title: "Découvrez la méthode TaNote",
    subtitle: "Testez la plateforme et comprenez comment TaNote aide à mieux apprendre et réussir",
    description: "Accès gratuit",
    monthlyPrice: 0,
    yearlyPrice: 0,
    trial: null,
    features: [
      "10 questions par mois",
      "1 examen par mois (sans limite de temps)",
      "Explications simples et progressives",
      "Accès à plusieurs matières scolaires",
      "Test de niveau de base",
    ],
    limitations: [
      "Achat de questions supplémentaires",
      "Exercices personnalisés",
      "Envoi d'exercices en photo"
    ],
    cta: "Commencer gratuitement",
    popular: false,
    tagline: "Idéal pour découvrir TaNote sans engagement",
  },
  {
    name: "Essentiel",
    icon: Sparkles,
    title: "Progresser régulièrement et consolider ses bases",
    subtitle: "Pensé pour les élèves qui souhaitent améliorer leurs résultats au quotidien",
    description: "Le plus populaire",
    monthlyPrice: 4000,
    yearlyPrice: 38400,
    trial: null,
    features: [
      "40 questions par mois",
      "3 examens par mois (chronométrés)",
      "Exercices générés par IA selon le niveau",
      "Exercices ciblés sur les lacunes",
      "Mode « Apprendre la méthode »",
      "Mode examen standard (conditions réelles)",
      "Test de niveau complet",
      "Suivi de progression",
      "Historique des activités",
      "Toutes les matières scolaires",
    ],
    limitations: [
      "Envoi de photos (OCR)",
      "Analyse avancée du mode examen"
    ],
    cta: "Choisir le plan Essentiel",
    popular: false,
    tagline: "Le meilleur équilibre entre prix et efficacité",
  },
  {
    name: "Avancé",
    icon: Star,
    title: "Performance académique",
    subtitle: "Préparer efficacement les examens et concours",
    description: "Conçu pour les élèves exigeants et les objectifs académiques élevés",
    monthlyPrice: 7500,
    yearlyPrice: 72000,
    trial: null,
    features: [
      "100 questions par mois",
      "7 examens par mois",
      "Exercices avancés et personnalisés",
      "Diagnostic approfondi des lacunes",
      "Mode professeur IA avec reformulation",
      "Mode examen intelligent adapté au niveau",
      "Analyse détaillée des erreurs",
      "Suivi de progression avancé",
      "Envoi d'exercices en photo (OCR)",
      "Traitement prioritaire des demandes",
      "Toutes les matières scolaires",
    ],
    limitations: [],
    cta: "Passer au plan Avancé",
    popular: true,
    tagline: "Une expérience proche d'un accompagnement individuel",
  },
  {
    name: "Famille",
    icon: Crown,
    title: "Accompagnement multi-enfants",
    subtitle: "Suivre et faire progresser plusieurs enfants avec un seul abonnement",
    description: "Une solution complète pour les parents soucieux de la réussite scolaire",
    monthlyPrice: 13000,
    yearlyPrice: 124800,
    trial: null,
    features: [
      "220 questions par mois",
      "15 examens par mois par enfant",
      "2 enfants inclus par défaut",
      "Comptes séparés pour chaque enfant",
      "Exercices personnalisés par enfant",
      "Cours adaptés à chaque niveau",
      "Mode examen individuel",
      "Suivi de progression détaillé par enfant",
      "Tableau de bord parents avec statistiques",
      "Rapports de progression et alertes",
      "Envoi d'exercices en photo (OCR)",
      "Support prioritaire parents",
    ],
    limitations: [
      "Ajout d'enfant supplémentaire (payant)"
    ],
    cta: "Choisir le plan Famille",
    popular: false,
    tagline: "La solution idéale pour une réussite scolaire encadrée à domicile",
  },
]

const paymentMethods = [
  {
    name: "Wave",
    logo: "/wave-mobile-money-logo-blue.jpg",
  },
  {
    name: "Orange Money",
    logo: "/orange-money-logo.jpg",
  },
  {
    name: "Visa",
    logo: "/visa-card-logo-blue-gold.jpg",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-CI", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="pricing" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-balance">TaNote : L'IA qui transforme tes faiblesses en forces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Commence gratuitement, évolue à ton rythme, domine tes examens. Choisis le plan qui correspond à tes objectifs.
          </p>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className={`text-sm ${!isYearly ? "font-semibold" : "text-muted-foreground"}`}>Mensuel</span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} />
              <span className={`text-sm ${isYearly ? "font-semibold" : "text-muted-foreground"}`}>Annuel</span>
            </div>
            {isYearly && (
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
                -4% d'économie + 1 mois offert
              </span>
            )}
          </div>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary hover:shadow-primary/20 hover:ring-primary/50"
                  : "border-border hover:shadow-lg hover:shadow-muted/20"
              }`}
              style={{ display: 'grid', gridTemplateRows: 'auto auto 1fr auto' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Le plus choisi
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="p-5 lg:p-6 pb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-10 w-10 rounded-xl ${plan.popular ? "bg-primary" : "bg-primary/10"} flex items-center justify-center flex-shrink-0`}
                  >
                    <plan.icon className={`h-5 w-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{plan.title}</h4>
                  <p className="text-xs text-muted-foreground italic">{plan.subtitle}</p>
                </div>
              </div>

              {/* Price Section - Aligned */}
              <div className="p-5 lg:p-6 pt-0 pb-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">
                    {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground text-sm">FCFA/{isYearly ? "an" : "mois"}</span>
                </div>
                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-success mt-1">
                    Économise {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)} FCFA/an
                  </p>
                )}
                {plan.monthlyPrice > 0 && plan.name === "Essentiel" && (
                  <p className="text-xs bg-success/10 text-success px-2 py-1 rounded mt-2 inline-block">
                    Le plus populaire • Exercices IA ciblés
                  </p>
                )}
                {plan.monthlyPrice > 0 && plan.name === "Avancé" && (
                  <p className="text-xs bg-chart-3/10 text-chart-3 px-2 py-1 rounded mt-2 inline-block">
                    Mode Prof IA • Envoi photos inclus
                  </p>
                )}
                {plan.monthlyPrice > 0 && plan.name === "Famille" && (
                  <p className="text-xs bg-primary/10 text-primary px-2 py-1 rounded mt-2 inline-block">
                    Dashboard parent • 2 enfants inclus
                  </p>
                )}
              </div>

              {/* Content - Features */}
              <div className="p-5 lg:p-6 pt-0 pb-3 flex flex-col">
                <ul className="space-y-2 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="h-4 w-4 flex items-center justify-center mt-0.5 shrink-0">—</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer - Button and Tagline */}
              <div className="p-5 lg:p-6 pt-0">
                <Link href="/auth/register">
                  <Button
                    className={`w-full mb-4 transition-all duration-300 ${
                      plan.popular && plan.name === "Performance"
                        ? "hover:shadow-lg hover:scale-105 hover:bg-primary/90"
                        : plan.popular
                        ? ""
                        : "bg-foreground text-background border-foreground hover:bg-background hover:text-foreground dark:bg-background dark:text-foreground dark:hover:bg-foreground dark:hover:text-background border"
                    }`}
                    size="sm"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                {plan.tagline && (
                  <p className="text-xs text-center pt-3 border-t border-border font-medium text-muted-foreground">
                    {plan.tagline}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Établissements Scolaires */}
        <div className="mt-8 bg-card border border-border rounded-2xl p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Vous êtes un établissement scolaire ?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Nous proposons des tarifs spéciaux pour les écoles, collèges, lycées et universités.
          </p>
          <Link href="#contact">
            <Button
              variant="outline"
              className="gap-2 bg-foreground text-background border-foreground hover:bg-background hover:text-foreground dark:bg-background dark:text-foreground dark:hover:bg-foreground dark:hover:text-background transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Contactez-nous pour un devis
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">Paiement sécurisé par :</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {/* Orange Money Container */}
            <div className="relative h-12 w-28 bg-orange-500 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25">
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[8px] border-r-[8px] border-r-transparent border-t-white transform -translate-y-[1px]"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[8px] border-l-[8px] border-l-transparent border-b-black transform translate-y-[1px]"></div>
              <div className="flex items-center justify-center h-full text-white font-bold text-sm">
                Orange Money
              </div>
            </div>

            {/* Visa Container */}
            <div className="relative h-12 w-28 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-blue-600/25">
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[8px] border-r-[8px] border-r-transparent border-t-white transform -translate-y-[1px]"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[8px] border-l-[8px] border-l-transparent border-b-black transform translate-y-[1px]"></div>
              <div className="flex items-center justify-center h-full text-white font-bold text-sm">
                VISA
              </div>
            </div>

            {/* MTN Container */}
            <div className="relative h-12 w-28 bg-yellow-600 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-yellow-600/25">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 bg-yellow-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">MTN</span>
              </div>
            </div>

            {/* Wave Container */}
            <div className="relative h-12 w-28 bg-sky-400 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-sky-400/25">
              <div className="flex items-center justify-center h-full text-white font-bold text-sm">
                Wave
              </div>
            </div>

            {/* Moov Container */}
            <div className="relative h-12 w-28 bg-green-500 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-green-500/25">
              <div className="flex items-center justify-center h-full text-white font-bold text-sm">
                Moov
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
