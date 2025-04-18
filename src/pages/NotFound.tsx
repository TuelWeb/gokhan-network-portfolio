import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-portfolioSecondary/30">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-portfolioSecondary/30 max-w-md mx-auto">
          <h1 className="font-montserrat font-bold text-6xl mb-4 text-portfolioPrimary">404</h1>
          <p className="font-opensans text-xl text-portfolioPrimary/80 mb-6">
            Oops! La page que vous recherchez n'existe pas.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-portfolioAccent text-white font-montserrat font-medium px-6 py-2 rounded-md hover:bg-portfolioPrimary transition-colors"
          >
            <Home size={18} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
