"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen } from "lucide-react"
import { TaNoteLogo } from "@/components/tanote-logo"

const questions = [
  {
    id: 1,
    subject: "Mathématiques",
    class: "4ème",
    question: "Quelle est la forme développée de l'expression (2x + 3)(x - 1) ?",
    options: [
      "2x² - 2x + 3x - 3",
      "2x² + x - 3",
      "2x² - x + 3",
      "2x² + 3x - 3"
    ],
    correct: 1
  },
  {
    id: 2,
    subject: "Français",
    class: "3ème",
    question: "Dans la phrase 'Le soleil brillait intensément', quel est la nature du mot 'intensément' ?",
    options: [
      "Adjectif qualificatif",
      "Adverbe de manière",
      "Nom commun",
      "Verbe conjugué"
    ],
    correct: 1
  },
  {
    id: 3,
    subject: "Histoire-Géographie",
    class: "3ème",
    question: "En quelle année la Côte d'Ivoire a-t-elle obtenu son indépendance ?",
    options: [
      "1958",
      "1960",
      "1962",
      "1964"
    ],
    correct: 1
  },
  {
    id: 4,
    subject: "Physique-Chimie",
    class: "4ème",
    question: "Quelle est la formule chimique de l'eau ?",
    options: [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    correct: 1
  },
  {
    id: 5,
    subject: "SVT",
    class: "3ème",
    question: "Quel organe est responsable de la photosynthèse chez les plantes ?",
    options: [
      "Les racines",
      "La tige",
      "Les feuilles",
      "Les fleurs"
    ],
    correct: 2
  }
]

export default function TestNiveauPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")

  const handleAnswer = () => {
    if (selectedAnswer === "") return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = parseInt(selectedAnswer)
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score++
      }
    })
    return score
  }

  const getLevel = (score: number) => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return { level: "Excellent", color: "text-green-600", description: "Vous maîtrisez très bien les notions fondamentales" }
    if (percentage >= 60) return { level: "Bon", color: "text-blue-600", description: "Vous avez de bonnes bases, quelques améliorations possibles" }
    if (percentage >= 40) return { level: "Moyen", color: "text-yellow-600", description: "Vous avez besoin de renforcer certaines notions" }
    return { level: "À améliorer", color: "text-red-600", description: "Un accompagnement personnalisé vous aidera à progresser" }
  }

  if (showResults) {
    const score = calculateScore()
    const level = getLevel(score)

    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4">
                <TaNoteLogo size="lg" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Résultats de votre test</h1>
              <p className="text-muted-foreground">Voici votre évaluation personnalisée</p>
            </div>

            <Card className="mb-6">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {score}/{questions.length} bonnes réponses
                </CardTitle>
                <CardDescription>
                  soit {Math.round((score / questions.length) * 100)}% de réussite
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-3xl font-bold mb-2 ${level.color}`}>
                  {level.level}
                </div>
                <p className="text-muted-foreground mb-6">{level.description}</p>
                <Progress value={(score / questions.length) * 100} className="mb-6" />
              </CardContent>
            </Card>

            <div className="grid gap-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Recommandations personnalisées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Exercices adaptés à votre niveau dans chaque matière</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Suivi personnalisé de votre progression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Accès illimité à l'assistant IA 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/register" className="flex-1">
                <Button size="lg" className="w-full">
                  Commencer ma progression
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => window.location.reload()}>
                Refaire le test
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            <TaNoteLogo size="sm" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Test de niveau gratuit</h1>
            <p className="text-muted-foreground">Évaluez votre niveau dans le programme ivoirien</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} sur {questions.length}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {question.subject}
                  </span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">
                    {question.class}
                  </span>
                </div>
              </div>
              <Progress value={progress} className="mb-4" />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-6">{question.question}</h3>
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1)
                  setSelectedAnswer(answers[currentQuestion - 1]?.toString() || "")
                }
              }}
              disabled={currentQuestion === 0}
            >
              Précédent
            </Button>
            <Button onClick={handleAnswer} disabled={selectedAnswer === ""}>
              {currentQuestion === questions.length - 1 ? "Terminer" : "Suivant"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}