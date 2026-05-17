import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      // Ensure the click is outside the header
      if (target && !target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen ? 'bg-primary/95 backdrop-blur-md py-4' :
        isScrolled ? 'glass-panel py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <a href="#home" className="flex items-center cursor-pointer hover:scale-105 transition-transform">
              <img src="/alfath-log.svg" alt="لوجو الفتح" className="h-14 sm:h-16 w-auto object-contain rounded-2xl" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-200 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider">الرئيسية</a>
            <a href="#about" className="text-gray-200 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider">من نحن</a>
            <a href="#projects" className="text-gray-200 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider">مشروعاتنا</a>
            <a href="#services" className="text-gray-200 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider">خدماتنا</a>
            <a href="#certs" className="text-gray-200 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider">الاعتمادات</a>
            <a href="#products" className="text-gray-200 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider">المنتجات</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent-light text-white font-bold py-1.5 px-5 rounded-full transition-all flex items-center gap-2 shadow-lg text-sm"
            >
              <Phone size={14} />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md border-t border-white/10 p-4 shadow-xl"
        >
          <div className="flex flex-col gap-4 text-center">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent py-2 font-bold border-b border-white/5">الرئيسية</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent py-2 font-bold border-b border-white/5">من نحن</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent py-2 font-bold border-b border-white/5">مشروعاتنا القومية</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent py-2 font-bold border-b border-white/5">خدماتنا</a>
            <a href="#certs" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent py-2 font-bold border-b border-white/5">الاعتمادات</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent py-2 font-bold border-b border-white/5">المنتجات</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 font-bold text-accent">تواصل معنا</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
