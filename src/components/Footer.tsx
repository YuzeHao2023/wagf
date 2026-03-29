import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">WAGF</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">{t('nav.about')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/fellows" className="hover:text-white transition-colors">{t('nav.fellows')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span>contact@wagf.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span>+41 22 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span>Geneva, Switzerland</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">{t('nav.join')}</h4>
            <p className="text-sm text-white/60 mb-6">
              {t('cta.description')}
            </p>
            <Link to="/contact" className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-primary transition-all inline-block">
              {t('cta.button')}
            </Link>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© {currentYear} World Academy of Green Finance. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
