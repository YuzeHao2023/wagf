import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Linkedin, Globe, Award, BookOpen, Briefcase } from 'lucide-react';
import { fellows } from '../data/fellows';

export default function FellowDetail() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language as 'en' | 'zh' | 'zh-TW' | 'ja' | 'ko' | 'es';
  
  const fellow = fellows.find(f => f.id === id);

  if (!fellow) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Fellow Not Found</h2>
        <Link to="/fellows" className="text-primary hover:underline">Back to Fellows List</Link>
      </div>
    );
  }

  const name = fellow.name[currentLang] || fellow.name.en;
  const title = fellow.title[currentLang] || fellow.title.en;
  const organization = fellow.organization[currentLang] || fellow.organization.en;
  const bio = fellow.bio[currentLang] || fellow.bio.en;
  const expertise = fellow.expertise[currentLang] || fellow.expertise.en;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/fellows" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.fellows')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-8">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={fellow.image} 
                  alt={name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{name}</h1>
                  <p className="text-primary font-medium">{title}</p>
                  <p className="text-slate-500 text-sm">{organization}</p>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Globe size={18} />
                  </a>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-accent" size={24} />
                <h2 className="text-2xl font-bold">Biography</h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                  {bio}
                </p>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white shadow-lg shadow-slate-200/40 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-accent" size={24} />
                  <h3 className="text-xl font-bold">Key Achievements</h3>
                </div>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>Global Green Finance Award 2023</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>Lead Author of UN Sustainable Finance Framework</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>Advisor to multiple Central Banks on ESG integration</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white shadow-lg shadow-slate-200/40 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-accent" size={24} />
                  <h3 className="text-xl font-bold">Selected Publications</h3>
                </div>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>"The Future of Sustainable Banking" (2024)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>"Climate Risk and Financial Stability" (2022)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>"ESG Integration in Emerging Markets" (2021)</span>
                  </li>
                </ul>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
