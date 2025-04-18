
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface SkillCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function SkillCard({
  icon: Icon,
  title,
  description,
  className,
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md",
        "border border-portfolioSecondary/30",
        "hover:shadow-lg hover:bg-white/90 transition-all duration-300",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-portfolioAccent/10 p-4 rounded-full mb-4">
          <Icon
            size={32}
            className="text-portfolioAccent"
          />
        </div>
        <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
          {title}
        </h3>
        <p className="font-opensans text-portfolioPrimary/80">
          {description}
        </p>
      </div>
    </div>
  )
}
