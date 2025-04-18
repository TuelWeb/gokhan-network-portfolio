
import { cn } from "@/lib/utils"
import { Calendar, ArrowUpRight } from "lucide-react"
import { format } from "date-fns"

interface TechWatchCardProps {
  title: string
  summary: string
  date: Date
  sourceUrl: string
  sourceName: string
  className?: string
}

export function TechWatchCard({
  title,
  summary,
  date,
  sourceUrl,
  sourceName,
  className,
}: TechWatchCardProps) {
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
      <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
        {title}
      </h3>
      <div className="flex items-center gap-2 text-sm text-portfolioPrimary/70 mb-3">
        <Calendar size={14} />
        <span>{format(date, "dd/MM/yyyy")}</span>
      </div>
      <p className="font-opensans text-portfolioPrimary/80 mb-4">
        {summary}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-montserrat font-medium text-portfolioAccent hover:text-portfolioPrimary transition-colors"
      >
        Source: {sourceName} <ArrowUpRight size={16} />
      </a>
    </div>
  )
}
