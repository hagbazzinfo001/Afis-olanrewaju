import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#" className="text-2xl font-bold text-primary-500">
            Abdulafis<span className="text-secondary-500"> O.</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-800 hover:text-primary-500"
                  : "text-gray-800 hover:text-primary-500"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/m2BTQmhm/PHOTO-2025-05-13-11-10-54.jpg?auto=compress&cs=tinysrgb&w=180"
              // src="/src/images/HEADSHOT.jpg"
              // src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=180"
              alt="Abdulafis Olanrawaju"
              className="w-10 h-10 rounded-full border-2 border-primary-500 mr-4"
            />
            <a
              href="/ABDULAFIS O. RESUME.pdf"
              download
              className="btn btn-secondary flex items-center text-sm"
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </div>
        </motion.nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-800 hover:text-primary-500 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-primary-500 font-medium block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <img
                  src="/images/HEADSHOT.jpg"
                  alt="Abdulafis Olanrawaju"
                  className="w-10 h-10 rounded-full border-2 border-primary-500 mr-3"
                />
                <span className="text-sm font-medium">Abdulafis O. </span>
              </div>
              <a
                href="/ABDULAFIS O. RESUME.pdf"
                download
                className="btn btn-secondary flex items-center text-sm"
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
