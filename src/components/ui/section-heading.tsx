
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2
        className={cn(
          "font-montserrat font-bold text-3xl md:text-4xl text-portfolioPrimary relative pb-3 inline-block",
          "after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-portfolioAccent after:bottom-0 after:left-1/4",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-opensans text-lg mt-3 text-portfolioPrimary/80",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
