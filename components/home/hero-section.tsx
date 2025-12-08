"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Play,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const slides = [
  {
    badge: "Propulsé par l'Intelligence Artificielle",
    title: "Maîtrisez enfin vos",
    highlight: "exercices difficiles",
    description:
      "TaNote analyse vos problèmes scolaires, vous fournit des explications claires et vous guide vers la solution pas à pas.",
  },
  {
    badge: "Adapté au programme ivoirien",
    title: "Progressez à votre",
    highlight: "propre rythme",
    description:
      "Des exercices personnalisés selon votre niveau, du CP à la Terminale. Chaque élève mérite une attention particulière.",
  },
  {
    badge: "Suivi en temps réel",
    title: "Parents, suivez les",
    highlight: "progrès de vos enfants",
    description:
      "Un tableau de bord complet pour accompagner la réussite scolaire de vos enfants avec des alertes et rapports détaillés.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(true)
      }, 50)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsAnimating(true)
    }, 50)
  }

  const prevSlide = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsAnimating(true)
    }, 50)
  }

  const nextSlide = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsAnimating(true)
    }, 50)
  }

  const slide = slides[currentSlide]

  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="min-h-[280px] h-[280px] flex flex-col items-center justify-center">
          <div
            className={`transition-all duration-500 ease-out ${
              isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
              {slide.title}{" "}
              <span className="text-primary">{slide.highlight}</span> !
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors hidden sm:block"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors hidden sm:block"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/register">
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 gap-2 group bg-foreground text-background border-foreground hover:bg-background hover:text-foreground dark:bg-background dark:text-foreground dark:hover:bg-foreground dark:hover:text-background transition-all duration-300"
            >
              Commencer gratuitement
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#demo">
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 gap-2 bg-foreground text-background border-foreground hover:bg-background hover:text-foreground dark:bg-background dark:text-foreground dark:hover:bg-foreground dark:hover:text-background transition-all duration-300 group"
            >
              <Play className="h-4 w-4 fill-current" />
              Voir la démo
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success" />
            <span>Gratuit pour commencer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success" />
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success" />
            <span>+12 500 élèves actifs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
