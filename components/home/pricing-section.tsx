"use client"

import { useState } from "react"
import { Check, Zap, Crown, Sparkles, Star, Building2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import Image from "next/image"

const plans = [
  {
    name: "Gratuit",
    icon: Zap,
    description: "Pour découvrir TaNote",
    monthlyPrice: 0,
    yearlyPrice: 0,
    trial: null,
    features: [
      "2 exercices complets par jour",
      "1 diagnostic par mois",
      "Accès aux cours de base",
      "Support par email",
    ],
    limitations: ["Pas de suivi parental", "Pas d'historique complet"],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Standard",
    icon: Sparkles,
    description: "Pour progresser efficacement",
    monthlyPrice: 6000,
    yearlyPrice: 57600,
    trial: "Essai gratuit 1 jour",
    features: [
      "50 questions par jour",
      "Diagnostics illimités",
      "Tous les cours disponibles",
      "Suivi de progression",
      "Support prioritaire",
    ],
    limitations: [],
    cta: "Essai gratuit 1 jour",
    popular: false,
  },
  {
    name: "Premium",
    icon: Star,
    description: "Accès illimité complet",
    monthlyPrice: 12000,
    yearlyPrice: 115200,
    trial: null,
    features: [
      "Exercices illimités",
      "Diagnostics illimités",
      "Tous les cours disponibles",
      "Suivi de progression détaillé",
      "Support prioritaire",
      "Historique complet",
    ],
    limitations: [],
    cta: "Choisir Premium",
    popular: true,
  },
  {
    name: "Famille",
    icon: Crown,
    description: "Pour toute la famille",
    monthlyPrice: 25000,
    yearlyPrice: 240000,
    trial: "Essai gratuit 3 jours",
    features: [
      "Tout le plan Premium",
      "Jusqu'à 4 enfants",
      "Dashboard parent complet",
      "Alertes et rapports",
      "Support téléphonique",
      "Conseils personnalisés",
    ],
    limitations: [],
    cta: "Essai gratuit 3 jours",
    popular: false,
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-balance">Un plan adapté à chaque besoin</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Choisis le plan qui correspond à tes objectifs. Tu peux changer ou annuler à tout moment.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm ${!isYearly ? "font-semibold" : "text-muted-foreground"}`}>Mensuel</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm ${isYearly ? "font-semibold" : "text-muted-foreground"}`}>Annuel</span>
            {isYearly && (
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
                -20% d'économie
              </span>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-5 lg:p-6 border ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`h-10 w-10 rounded-xl ${plan.popular ? "bg-primary" : "bg-primary/10"} flex items-center justify-center`}
                >
                  <plan.icon className={`h-5 w-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="mb-4">
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
              </div>

              <Link href="/auth/register">
                <Button
                  className={`w-full mb-4 transition-all duration-300 ${
                    plan.popular
                      ? ""
                      : "bg-foreground text-background border-foreground hover:bg-background hover:text-foreground border"
                  }`}
                  size="sm"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>

              <ul className="space-y-2">
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
          ))}
        </div>

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
              className="gap-2 bg-foreground text-background border-foreground hover:bg-background hover:text-foreground transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Contactez-nous pour un devis
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">Paiement sécurisé par :</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="h-12 w-28 relative bg-white rounded-lg border border-border overflow-hidden flex items-center justify-center p-2 shadow-sm"
              >
                <Image
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  width={100}
                  height={50}
                  className="object-contain max-h-8"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
