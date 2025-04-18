
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactForm } from "@/components/ui/contact-form"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-portfolioSecondary/30">
      {/* Navigation */}
      <Navigation />
      
      {/* Page Header */}
      <div className="pt-24 pb-10 bg-portfolioPrimary">
        <div className="container mx-auto px-4">
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white">Contact</h1>
          <p className="font-opensans text-lg text-portfolioSecondary mt-2">
            Envoyez-moi un message ou retrouvez-moi sur les réseaux sociaux
          </p>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Restons en contact"
            subtitle="N'hésitez pas à me contacter pour toute question ou proposition"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30 text-center">
              <div className="bg-portfolioAccent/10 p-4 rounded-full inline-block mb-4">
                <Mail size={28} className="text-portfolioAccent" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
                Email
              </h3>
              <a 
                href="mailto:petitgokhan@gmail.com" 
                className="font-opensans text-portfolioAccent hover:underline"
              >
                petitgokhan@gmail.com
              </a>
            </div>
            
            {/* Location */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30 text-center">
              <div className="bg-portfolioAccent/10 p-4 rounded-full inline-block mb-4">
                <MapPin size={28} className="text-portfolioAccent" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
                Localisation
              </h3>
              <p className="font-opensans text-portfolioPrimary/80">
                Charleville-Mézières, France
              </p>
            </div>
            
            {/* Social Networks */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30 text-center">
              <div className="bg-portfolioAccent/10 p-4 rounded-full inline-block mb-4">
                <Linkedin size={28} className="text-portfolioAccent" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
                Réseaux Sociaux
              </h3>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolioSecondary/30 p-2 rounded-full hover:bg-portfolioAccent/30 transition-colors"
                >
                  <Linkedin size={20} className="text-portfolioPrimary" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolioSecondary/30 p-2 rounded-full hover:bg-portfolioAccent/30 transition-colors"
                >
                  <Github size={20} className="text-portfolioPrimary" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Formulaire de contact"
              subtitle="Envoyez-moi un message directement via ce formulaire"
              className="mb-6"
            />
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
