import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-semibold">
          Monet
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-600 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-neutral-600 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-primary transition-colors">
            Pricing
          </a>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-card">
          <div className="container-padding py-4 flex flex-col gap-4">
            <a href="#features" className="text-neutral-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-neutral-600 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-neutral-600 hover:text-primary transition-colors">
              Pricing
            </a>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;