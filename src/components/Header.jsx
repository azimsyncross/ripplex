import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    // { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
    { to:"/privacy-policy", label:"Privacy Policy"},
    { to:"/terms-of-services", label:"Terms of Services"},
    { to:"/refunds-policy", label:"Refunds Policy"},
    
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 relative group">
            {/* <span
              className={`text-2xl font-bold ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
             <span className="text-indigo-600">Ripplex Vision</span>
            </span> */}

            {/* logo image */}
            <img 
              src="/logo.png"
              alt="Ripplex Vision. logo"
              className="w-auto h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative group ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={scrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block py-2 text-gray-800 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
