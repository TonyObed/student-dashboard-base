import Image from "next/image"

interface TaNoteLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  subtitle?: string
  light?: boolean
  variant?: "default" | "icon-only"
  logoPattern?: string
  faviconPattern?: string
}

export function TaNoteLogo({ size = "md", showText = true, subtitle, light = false, variant = "default", logoPattern = "sub_logo", faviconPattern = "sub_logo" }: TaNoteLogoProps) {
  const imageSizes = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  }

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl",
  }

  const subtitleClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  }

  const containerClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
    xl: "gap-4",
  }

  return (
    <div className={`flex items-center ${containerClasses[size]}`}>
      <div className="relative">
        <Image
          src={`/logos/${logoPattern}.png`}
          alt="TaNote Logo"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className={`object-contain ${light ? "brightness-0 invert" : ""}`}
          priority
        />
      </div>
      {showText && variant === "default" && (
        <div className="flex flex-col">
          <span className={`font-bold ${textClasses[size]} ${light ? "text-white" : "text-foreground"}`}>
            Ta<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Note</span>
          </span>
          {subtitle && (
            <span className={`${subtitleClasses[size]} ${light ? "text-white/80" : "text-muted-foreground"} font-medium`}>
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
