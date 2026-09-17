import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Heart, Image as ImageIcon, Calculator, MapPin, Calendar } from 'lucide-react';
import logo from '../assets/icons/logo.svg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#inicio');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once initially
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll Spy Observer to dynamically light up active sections
  useEffect(() => {
    const sections = [
      'inicio',
      'sobre-nosotros',
      'actividades',
      'animales',
      'galeria',
      'eventos',
      'ubicacion',
      'faq',
      'cotizador'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -45% 0px', // Highlights sections when they occupy the center viewport
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navLinks = [
    { label: 'La Granja', href: '#sobre-nosotros' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Animales', href: '#animales' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Eventos Privados', href: '#eventos' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Preguntas', href: '#faq' },
  ];

  const mobileTabs = [
    { label: 'Inicio', href: '#inicio', icon: Home },
    { label: 'Animales', href: '#animales', icon: Heart },
    { label: 'Galería', href: '#galeria', icon: ImageIcon },
    { label: 'Agenda', href: '#cotizador', icon: Calendar },
    { label: 'Ubicación', href: '#ubicacion', icon: MapPin },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md border-b border-brand-primary/10 py-2 sm:py-2.5'
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-black/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo (acts as Inicio) */}
          <a
            href="#inicio"
            id="brand-logo-link"
            className="flex items-center focus:outline-none"
          >
            <img
              src={logo}
              className={`transition-all duration-300 w-auto ${
                isScrolled ? 'h-8 sm:h-10' : 'h-12 sm:h-15'
              } hover:scale-[1.02]`}
              alt="Aula Verde"
            />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#024e21] text-white shadow-sm'
                      : 'text-[#2D3A30] hover:text-brand-primary hover:bg-[#024e21]/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-primary hover:bg-brand-primary/10 focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="md:hidden bg-[#FAF8F5] border-b border-brand-primary/10 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'text-[#2D3A30] hover:bg-brand-primary/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Tab Navigation (App-like experience) */}
      <nav 
        id="mobile-bottom-bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border-t border-brand-primary/10 pb-safe px-4 py-2"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {mobileTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeHash === tab.href;
            return (
              <a
                key={tab.href}
                href={tab.href}
                onClick={() => setActiveHash(tab.href)}
                className="flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-300 relative text-center"
              >
                <div className={`transition-all duration-300 ${
                  isActive ? 'text-brand-accent-green scale-110' : 'text-brand-neutral-gray hover:text-brand-primary'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-brand-accent-green font-extrabold' : 'text-[#2D3A30]'
                }`}>
                  {tab.label}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-brand-accent-green animate-pulse" />
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};
