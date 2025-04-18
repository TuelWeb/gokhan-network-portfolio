
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Download, BookOpen, Trophy, Briefcase, Code } from "lucide-react"

const APropos = () => {
  // Education timeline data
  const educationTimeline = [
    {
      period: "2022 - 2024",
      title: "BTS SIO option SISR",
      institution: "Lycée Monge, Charleville-Mézières",
      description: "Formation en Services Informatiques aux Organisations avec spécialisation en Solutions d'Infrastructure, Systèmes et Réseaux."
    },
    {
      period: "2021 - 2022",
      title: "Baccalauréat STMG",
      institution: "Lycée Lycée Monge, Charleville-Mézières",
      description: "Baccalauréat Sciences et Technologies du Management et de la Gestion, option Systèmes d'Information de Gestion."
    }
  ]

  // Skills data with percentages
  const technicalSkills = [
    { name: "Administration Windows Server", percentage: 85 },
    { name: "Configuration réseau (Cisco)", percentage: 80 },
    { name: "Sécurité informatique", percentage: 75 },
    { name: "Virtualisation (VMware, VirtualBox)", percentage: 80 },
    { name: "Linux", percentage: 70 },
  ]

  const developmentSkills = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "PHP", percentage: 75 },
    { name: "JavaScript", percentage: 70 },
    { name: "SQL", percentage: 85 },
    { name: "Python", percentage: 60 },
  ]

  return (
    <div className="min-h-screen bg-portfolioSecondary/30">
      {/* Navigation */}
      <Navigation />
      
      {/* Page Header */}
      <div className="pt-24 pb-10 bg-portfolioPrimary">
        <div className="container mx-auto px-4">
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white">À propos de moi</h1>
          <p className="font-opensans text-lg text-portfolioSecondary mt-2">
            Mon parcours, mes compétences et mes objectifs
          </p>
        </div>
      </div>
      
      {/* Personal Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-portfolioSecondary/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-portfolioAccent/30">
                  <img
                    src="/public/placeholder.svg"
                    alt="Aslan Gokhan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="font-montserrat font-semibold text-2xl md:text-3xl mb-4 text-portfolioPrimary">
                  Aslan Gokhan
                </h2>
                <p className="font-opensans text-portfolioPrimary/80 mb-6 text-lg">
                  Étudiant en deuxième année de BTS SIO (Services Informatiques aux Organisations) 
                  au lycée Monge de Charleville-Mézières, je me spécialise dans l'option SISR 
                  (Solutions d'Infrastructure, Systèmes et Réseaux).
                </p>
                <p className="font-opensans text-portfolioPrimary/80 mb-6">
                  Passionné par l'administration réseau et la sécurité informatique, j'aspire à poursuivre mes études 
                  à l'École Polytechnique d'Informatique (EPI) de Reims en troisième année d'administrateur réseaux.
                </p>
                <p className="font-opensans text-portfolioPrimary/80 mb-6">
                  J'ai développé des compétences solides en configuration de serveurs, en mise en place 
                  d'infrastructures réseaux et en développement web. Je suis particulièrement intéressé 
                  par les solutions de virtualisation et les problématiques de cybersécurité.
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-portfolioAccent text-white font-montserrat font-medium px-6 py-2 rounded-md hover:bg-portfolioPrimary transition-colors"
                >
                  <Download size={18} />
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Formation"
            subtitle="Mon parcours académique"
          />
          
          <div className="max-w-3xl mx-auto">
            {educationTimeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 animate-fade-in">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-portfolioAccent/50"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 -ml-3 rounded-full border-2 border-portfolioAccent bg-white"></div>
                
                {/* Content */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-portfolioSecondary/30">
                  <div className="flex items-center mb-2">
                    <BookOpen size={18} className="text-portfolioAccent mr-2" />
                    <span className="text-sm font-medium text-portfolioAccent font-montserrat">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-1 text-portfolioPrimary">
                    {item.title}
                  </h3>
                  <h4 className="font-montserrat text-md mb-3 text-portfolioPrimary/70">
                    {item.institution}
                  </h4>
                  <p className="font-opensans text-portfolioPrimary/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Compétences"
            subtitle="Mes compétences techniques et professionnelles"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30">
              <h3 className="font-montserrat font-semibold text-xl mb-6 text-portfolioPrimary flex items-center">
                <Trophy size={20} className="text-portfolioAccent mr-2" />
                Compétences techniques
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-montserrat font-medium text-portfolioPrimary">
                        {skill.name}
                      </span>
                      <span className="font-montserrat text-sm text-portfolioPrimary/70">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolioSecondary/30 rounded-full h-2">
                      <div
                        className="bg-portfolioAccent h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Development Skills */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30">
              <h3 className="font-montserrat font-semibold text-xl mb-6 text-portfolioPrimary flex items-center">
                <Code size={20} className="text-portfolioAccent mr-2" />
                Compétences en développement
              </h3>
              
              <div className="space-y-6">
                {developmentSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-montserrat font-medium text-portfolioPrimary">
                        {skill.name}
                      </span>
                      <span className="font-montserrat text-sm text-portfolioPrimary/70">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolioSecondary/30 rounded-full h-2">
                      <div
                        className="bg-portfolioAccent h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30">
            <h3 className="font-montserrat font-semibold text-xl mb-6 text-portfolioPrimary flex items-center">
              <Briefcase size={20} className="text-portfolioAccent mr-2" />
              Compétences professionnelles
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Travail d'équipe", "Gestion de projet", "Résolution de problèmes", 
                "Communication", "Autonomie", "Adaptabilité"].map((skill, index) => (
                <div
                  key={index}
                  className="bg-portfolioSecondary/20 px-4 py-3 rounded-md text-center font-montserrat font-medium text-portfolioPrimary"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          {/* Objectives */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30">
            <h3 className="font-montserrat font-semibold text-xl mb-4 text-portfolioPrimary">
              Objectifs professionnels
            </h3>
            
            <ul className="list-disc pl-5 font-opensans text-portfolioPrimary/80 space-y-2">
              <li>Intégrer l'École Polytechnique d'Informatique (EPI) à Reims en troisième année d'administrateur réseaux</li>
              <li>Développer une expertise en cybersécurité et protection des infrastructures critiques</li>
              <li>Obtenir des certifications professionnelles reconnues (Cisco CCNA, Microsoft, etc.)</li>
              <li>À terme, devenir administrateur système et réseau dans une entreprise innovante</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default APropos
