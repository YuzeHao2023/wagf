import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.fellows'), path: '/fellows' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'es', name: 'Español' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Globe size={24} />
          </div>
          <div>
            <span className={`block font-serif font-bold text-xl leading-none ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-primary'}`}>
              WAGF
            </span>
            <span className={`block text-[10px] tracking-widest uppercase ${!scrolled && location.pathname === '/' ? 'text-white/80' : 'text-slate-500'}`}>
              World Academy of Green Finance
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                !scrolled && location.pathname === '/' ? 'text-white/90' : 'text-slate-700'
              } ${location.pathname === link.path ? 'text-accent' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${
                !scrolled && location.pathname === '/' ? 'text-white/90' : 'text-slate-700'
              }`}
            >
              <Globe size={16} />
              {languages.find(l => l.code === i18n.language.split('-')[0] || l.code === i18n.language)?.name || 'Language'}
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/fellows" className="btn-primary py-2 text-sm">
            {t('nav.join')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} className={!scrolled && location.pathname === '/' ? 'text-white' : 'text-primary'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 pt-4 mt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`text-left px-3 py-2 rounded-lg text-sm ${i18n.language === lang.code ? 'bg-primary text-white' : 'bg-slate-50 text-slate-600'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
