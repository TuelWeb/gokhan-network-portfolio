
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"
import { useState } from "react"

const Projets = () => {
  // Categories for filtering
  const categories = ["Tous", "Réseaux", "Développement", "Systèmes", "Sécurité"]
  const [activeCategory, setActiveCategory] = useState("Tous")
  
  // Project data (sample data - should be replaced with actual projects)
  const allProjects = [
    {
      title: "Gestion de parc informatique",
      description: "Application de suivi et gestion de matériel informatique pour une entreprise. Mise en place d'un système de tickets et d'inventaire automatisé.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "#",
      category: "Développement"
    },
    {
      title: "Infrastructure réseau sécurisée",
      description: "Conception et mise en place d'une architecture réseau sécurisée pour un établissement scolaire. Configuration des VLANs, ACLs et routage inter-VLAN.",
      technologies: ["Cisco", "Firewall", "VLAN"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "#",
      category: "Réseaux"
    },
    {
      title: "Site e-commerce",
      description: "Développement d'une plateforme e-commerce pour une boutique locale. Implémentation du panier d'achat, de la gestion des stocks et du paiement en ligne.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1561997968-aa846c2bf255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "#",
      category: "Développement"
    },
    {
      title: "Virtualisation de serveurs",
      description: "Mise en place d'un environnement virtualisé pour les services d'une PME. Déploiement de machines virtuelles et optimisation des ressources.",
      technologies: ["VMware ESXi", "vSphere", "Windows Server"],
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "#",
      category: "Systèmes"
    },
    {
      title: "Audit de sécurité",
      description: "Réalisation d'un audit de sécurité complet pour une entreprise, avec identification des vulnérabilités et proposition de solutions de remédiation.",
      technologies: ["Kali Linux", "Nmap", "Metasploit"],
      imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "#",
      category: "Sécurité"
    },
    {
      title: "Système de surveillance réseau",
      description: "Implémentation d'un système de monitoring réseau pour détecter les anomalies et assurer la haute disponibilité des services.",
      technologies: ["Nagios", "SNMP", "Grafana"],
      imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      projectUrl: "#",
      category: "Réseaux"
    },
  ]

  // Filtered projects based on active category
  const filteredProjects = activeCategory === "Tous" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-portfolioSecondary/30">
      {/* Navigation */}
      <Navigation />
      
      {/* Page Header */}
      <div className="pt-24 pb-10 bg-portfolioPrimary">
        <div className="container mx-auto px-4">
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white">Mes projets</h1>
          <p className="font-opensans text-lg text-portfolioSecondary mt-2">
            Découvrez les projets sur lesquels j'ai travaillé
          </p>
        </div>
      </div>
      
      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Portfolio de projets"
            subtitle="Explorez mes réalisations dans différents domaines de l'informatique"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors font-montserrat ${
                  activeCategory === category
                    ? "bg-portfolioAccent text-white"
                    : "bg-white text-portfolioPrimary hover:bg-portfolioSecondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
          
          {/* Empty state when no projects match the filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-montserrat text-xl text-portfolioPrimary/70">
                Aucun projet ne correspond à cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Collaboration CTA */}
      <section className="py-16 px-4 bg-portfolioPrimary text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Vous avez un projet ?
          </h2>
          <p className="font-opensans text-xl max-w-2xl mx-auto mb-8 text-portfolioSecondary">
            Je suis disponible pour collaborer sur des projets informatiques. 
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
          <a
            href="/contact"
            className="bg-portfolioAccent hover:bg-portfolioAccent/80 text-white font-montserrat font-medium px-8 py-3 rounded-md transition-colors"
          >
            Me contacter
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Projets
