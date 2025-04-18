
import { Navigation } from "@/components/ui/navigation"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { SkillCard } from "@/components/ui/skill-card"
import { ProjectCard } from "@/components/ui/project-card"
import { Footer } from "@/components/footer"
import { Server, Shield, Database, Code } from "lucide-react"
import { Link } from "react-router-dom"

const Index = () => {
  // Featured skills data
  const skillsData = [
    {
      icon: Server,
      title: "Administration réseaux",
      description: "Configuration et gestion des infrastructures réseaux, routage et sécurisation des communications."
    },
    {
      icon: Database,
      title: "Systèmes d'information",
      description: "Installation, configuration et maintenance de systèmes d'exploitation et services associés."
    },
    {
      icon: Shield,
      title: "Sécurité informatique",
      description: "Protection des données et des systèmes contre les intrusions et vulnérabilités."
    },
    {
      icon: Code,
      title: "Développement web",
      description: "Création de sites et applications web avec les technologies modernes."
    }
  ]

  // Featured projects data (sample data - should be replaced with actual projects)
  const projectsData = [
    {
      title: "Gestion de parc informatique",
      description: "Application de suivi et gestion de matériel informatique pour une entreprise.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "/projets"
    },
    {
      title: "Infrastructure réseau sécurisée",
      description: "Conception et mise en place d'une architecture réseau sécurisée pour un établissement scolaire.",
      technologies: ["Cisco", "Firewall", "VLAN"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "/projets"
    },
    {
      title: "Site e-commerce",
      description: "Développement d'une plateforme e-commerce pour une boutique locale.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1561997968-aa846c2bf255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "/projets"
    }
  ]

  return (
    <div className="min-h-screen bg-portfolioSecondary/30">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Skills Section */}
      <section id="featured-skills" className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Mes compétences"
            subtitle="Voici les principales compétences que j'ai développées durant ma formation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/apropos"
              className="inline-flex items-center font-montserrat font-medium text-portfolioAccent hover:text-portfolioPrimary transition-colors"
            >
              En savoir plus sur mon parcours →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Projets récents"
            subtitle="Découvrez quelques-uns des projets sur lesquels j'ai travaillé."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projets"
              className="bg-portfolioAccent hover:bg-portfolioPrimary text-white font-montserrat font-medium px-6 py-2 rounded-md transition-colors"
            >
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-portfolioPrimary text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Intéressé par mon profil ?
          </h2>
          <p className="font-opensans text-xl max-w-2xl mx-auto mb-10 text-portfolioSecondary">
            N'hésitez pas à me contacter pour discuter de vos projets ou simplement 
            pour en savoir plus sur mon parcours et mes compétences.
          </p>
          <Link
            to="/contact"
            className="bg-portfolioAccent hover:bg-portfolioAccent/80 text-white font-montserrat font-medium px-8 py-3 rounded-md transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Index
