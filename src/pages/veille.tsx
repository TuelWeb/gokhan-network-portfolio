
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechWatchCard } from "@/components/ui/tech-watch-card"
import { RssIcon } from "lucide-react"

const Veille = () => {
  // Tech watch article data (sample data - should be replaced with actual articles)
  const techWatchData = [
    {
      title: "Les tendances en cybersécurité pour 2024",
      summary: "Analyse des principales menaces et solutions de cybersécurité qui marqueront l'année 2024, avec un accent sur la protection des infrastructures critiques et la sécurité du cloud.",
      date: new Date(2024, 2, 15),
      sourceUrl: "https://www.example.com",
      sourceName: "Cyber Magazine"
    },
    {
      title: "L'évolution des réseaux d'entreprise avec le SD-WAN",
      summary: "Comment le SD-WAN (Software-Defined Wide Area Network) révolutionne la gestion des réseaux d'entreprise, offrant plus de flexibilité, de sécurité et d'économies.",
      date: new Date(2024, 1, 22),
      sourceUrl: "https://www.example.com",
      sourceName: "NetworkWorld"
    },
    {
      title: "Intelligence artificielle au service de l'administration système",
      summary: "Les outils d'IA qui transforment l'administration système et réseau, de la détection d'anomalies à l'automatisation des tâches répétitives.",
      date: new Date(2024, 0, 5),
      sourceUrl: "https://www.example.com",
      sourceName: "AI Tech Review"
    },
    {
      title: "Windows Server 2022 : nouvelles fonctionnalités et améliorations",
      summary: "Tour d'horizon des avancées apportées par Windows Server 2022 en matière de sécurité, de performances et de compatibilité cloud.",
      date: new Date(2023, 11, 12),
      sourceUrl: "https://www.example.com",
      sourceName: "Microsoft Tech Community"
    },
    {
      title: "La virtualisation des réseaux avec NSX",
      summary: "Analyse des avantages de NSX de VMware pour la virtualisation des réseaux et la micro-segmentation dans les centres de données modernes.",
      date: new Date(2023, 10, 8),
      sourceUrl: "https://www.example.com",
      sourceName: "VMware Blog"
    },
    {
      title: "Les certifications les plus valorisées en administration réseau",
      summary: "Panorama des certifications actuelles les plus recherchées par les employeurs dans le domaine de l'administration réseau et système.",
      date: new Date(2023, 9, 29),
      sourceUrl: "https://www.example.com",
      sourceName: "IT Career Guide"
    }
  ]

  return (
    <div className="min-h-screen bg-portfolioSecondary/30">
      {/* Navigation */}
      <Navigation />
      
      {/* Page Header */}
      <div className="pt-24 pb-10 bg-portfolioPrimary">
        <div className="container mx-auto px-4">
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white">Veille technologique</h1>
          <p className="font-opensans text-lg text-portfolioSecondary mt-2">
            Mon suivi des tendances et innovations dans le domaine informatique
          </p>
        </div>
      </div>
      
      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-portfolioAccent/10 p-4 rounded-full">
                <RssIcon size={32} className="text-portfolioAccent" />
              </div>
            </div>
            <h2 className="font-montserrat font-semibold text-2xl mb-4 text-portfolioPrimary text-center">
              Ma démarche de veille technologique
            </h2>
            <p className="font-opensans text-portfolioPrimary/80 mb-4">
              Afin de rester à jour dans un domaine aussi dynamique que l'informatique, je maintiens une veille technologique active. 
              Cette pratique me permet de suivre les dernières innovations, tendances et bonnes pratiques, particulièrement dans les 
              domaines des réseaux, systèmes et de la sécurité informatique.
            </p>
            <p className="font-opensans text-portfolioPrimary/80 mb-4">
              Je m'appuie sur diverses sources d'information : blogs spécialisés, forums professionnels, webinaires, podcasts techniques 
              et newsletters. Cette veille contribue à enrichir mes connaissances et à maintenir mes compétences à jour face aux 
              évolutions rapides du secteur.
            </p>
            <p className="font-opensans text-portfolioPrimary/80">
              Voici quelques-uns des sujets que j'ai explorés récemment, sous forme d'articles de synthèse.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tech Watch Articles Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Articles de veille"
            subtitle="Synthèses et analyses de tendances technologiques"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techWatchData.map((article, index) => (
              <TechWatchCard
                key={index}
                title={article.title}
                summary={article.summary}
                date={article.date}
                sourceUrl={article.sourceUrl}
                sourceName={article.sourceName}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Mes sources"
            subtitle="Ressources que j'utilise pour ma veille technologique"
          />
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30 max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="font-opensans">
                <span className="font-montserrat font-semibold text-portfolioPrimary">Sites spécialisés : </span>
                NetworkWorld, Krebs on Security, The Register, ZDNet
              </li>
              <li className="font-opensans">
                <span className="font-montserrat font-semibold text-portfolioPrimary">Blogs techniques : </span>
                Cisco Blogs, Microsoft Tech Community, VMware Blog
              </li>
              <li className="font-opensans">
                <span className="font-montserrat font-semibold text-portfolioPrimary">Podcasts : </span>
                Darknet Diaries, Security Now, The CyberWire
              </li>
              <li className="font-opensans">
                <span className="font-montserrat font-semibold text-portfolioPrimary">Newsletters : </span>
                CERT-FR, ANSSI Actualités, US-CERT Alerts
              </li>
              <li className="font-opensans">
                <span className="font-montserrat font-semibold text-portfolioPrimary">Forums et communautés : </span>
                Reddit r/sysadmin, Stack Exchange Network Engineering
              </li>
              <li className="font-opensans">
                <span className="font-montserrat font-semibold text-portfolioPrimary">Veille réglementaire : </span>
                CNIL, RGPD, publications officielles
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-portfolioSecondary/30 rounded-md">
              <p className="font-opensans text-portfolioPrimary/80 italic">
                "La veille technologique n'est pas une option mais une nécessité dans un domaine 
                où l'obsolescence des connaissances peut survenir en quelques mois."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Veille
