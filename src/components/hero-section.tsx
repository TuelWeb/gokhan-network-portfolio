
import { ArrowDown } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-portfolioSecondary">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolioPrimary via-portfolioPrimary/90 to-portfolioAccent/20"></div>
      
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 overflow-hidden">
            <img
              src="/public/placeholder.svg"
              alt="Aslan Gokhan"
              className="w-32 h-32 object-cover rounded-full border-4 border-portfolioAccent/50 mx-auto animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 animate-fade-in">
            Aslan Gokhan
          </h1>
          
          <p className="text-xl md:text-2xl text-portfolioSecondary mb-8 animate-fade-in">
            Étudiant en BTS SIO, passionné par les réseaux et les systèmes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link
              to="/apropos"
              className="bg-portfolioAccent hover:bg-portfolioAccent/80 text-white font-montserrat font-medium px-8 py-3 rounded-md transition-colors"
            >
              En savoir plus
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-portfolioSecondary text-portfolioSecondary hover:bg-white/10 font-montserrat font-medium px-8 py-3 rounded-md transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
      
      <a
        href="#featured-skills"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  )
}
