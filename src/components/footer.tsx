
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-portfolioPrimary text-portfolioSecondary py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Aslan Gokhan</h3>
            <p className="font-opensans mb-4">
              Étudiant en BTS SIO, passionné par les réseaux et les systèmes.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Liens rapides</h3>
            <ul className="font-opensans space-y-2">
              <li>
                <Link to="/" className="hover:text-portfolioAccent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="hover:text-portfolioAccent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/projets" className="hover:text-portfolioAccent transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/veille" className="hover:text-portfolioAccent transition-colors">
                  Veille technologique
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-portfolioAccent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Contact</h3>
            <ul className="font-opensans space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-portfolioAccent" />
                <a href="mailto:petitgokhan@gmail.com" className="hover:text-portfolioAccent transition-colors">
                  petitgokhan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-portfolioAccent" />
                <span>Sur demande</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-portfolioSecondary/10 p-2 rounded-full hover:bg-portfolioAccent/30 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-portfolioSecondary/10 p-2 rounded-full hover:bg-portfolioAccent/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-portfolioSecondary/20 mt-8 pt-6 text-center font-opensans text-sm">
          <p>© {currentYear} Aslan Gokhan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
