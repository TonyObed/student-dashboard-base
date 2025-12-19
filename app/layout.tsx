import type React from "react"
import type { Metadata } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TaNote - Apprends mieux, progresse plus vite",
  description:
    "Plateforme éducative IA pour les élèves ivoiriens. Diagnostic personnalisé, exercices adaptés et suivi de progression.",
    generator: 'v0.app',
  icons: {
    icon: "/logos/sub_logo.png",
    shortcut: "/logos/sub_logo.png",
    apple: "/logos/sub_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
