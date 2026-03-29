import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
            alt="Nature Background" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fdfdfb]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              {t('hero.tag')}
            </span>
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-8">
              {t('hero.title')}<br />
              <span className="text-accent italic">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/fellows" className="btn-primary flex items-center gap-2 group">
                {t('hero.ctaPrimary')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all font-medium">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: t('stats.fellows'), value: '100+' },
              { label: t('stats.reports'), value: '500+' },
              { label: t('stats.partners'), value: '50+' },
              { label: t('stats.countries'), value: '30+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              {t('mission.title')}<br />
              <span className="text-primary">{t('mission.highlight')}</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t('mission.description')}
            </p>
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-accent" />, title: t('mission.item1Title'), desc: t('mission.item1Desc') },
                { icon: <Zap className="text-accent" />, title: t('mission.item2Title'), desc: t('mission.item2Desc') },
                { icon: <BarChart3 className="text-accent" />, title: t('mission.item3Title'), desc: t('mission.item3Desc') },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Green Forest" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <Users className="text-primary mb-4" size={40} />
              <p className="text-sm italic text-slate-600">
                "{t('mission.quote')}"
              </p>
              <p className="mt-4 font-bold text-primary">— {t('mission.quoteAuthor')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-white/70 mb-10 text-lg">
            {t('cta.description')}
          </p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all inline-block">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
