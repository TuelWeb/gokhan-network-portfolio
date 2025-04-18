
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  projectUrl?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md",
        "border border-portfolioSecondary/30 group",
        "hover:shadow-lg transition-all duration-300 flex flex-col",
        "animate-fade-in",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
          {title}
        </h3>
        <p className="font-opensans text-portfolioPrimary/80 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-montserrat px-2 py-1 bg-portfolioSecondary text-portfolioPrimary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {projectUrl && (
          <Link
            to={projectUrl}
            className="inline-flex items-center gap-1 font-montserrat font-medium text-portfolioAccent hover:text-portfolioPrimary transition-colors"
          >
            Voir le projet <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
