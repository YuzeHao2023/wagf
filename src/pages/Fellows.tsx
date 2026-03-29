import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fellows } from '../data/fellows';
import { useTranslation } from 'react-i18next';

export default function Fellows() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('全部');
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] || 'en';

  const allExpertise = [t('all'), ...new Set(fellows.flatMap(f => f.expertise[currentLang] || f.expertise['en'] || []))];

  const filteredFellows = fellows.filter(f => {
    const name = f.name[currentLang] || f.name['en'] || '';
    const org = f.organization[currentLang] || f.organization['en'] || '';
    const expertise = f.expertise[currentLang] || f.expertise['en'] || [];

    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         org.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExpertise = selectedExpertise === t('all') || expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {t('fellows.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            {t('fellows.desc')}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder={t('fellows.search')} 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter size={20} className="text-slate-400 shrink-0" />
            <div className="flex gap-2">
              {allExpertise.map(exp => (
                <button
                  key={exp}
                  onClick={() => setSelectedExpertise(exp)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedExpertise === exp 
                    ? 'bg-primary text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFellows.map((fellow, i) => (
            <motion.div
              key={fellow.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <Link to={`/fellows/${fellow.id}`} className="block">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={fellow.image} 
                    alt={fellow.name[currentLang] || fellow.name['en']} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-medium flex items-center gap-2">
                      {t('fellows.viewProfile')} <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {fellow.name[currentLang] || fellow.name['en']}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {fellow.title[currentLang] || fellow.title['en']}
                  </p>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    {fellow.organization[currentLang] || fellow.organization['en']}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(fellow.expertise[currentLang] || fellow.expertise['en'] || []).slice(0, 3).map(exp => (
                      <span key={exp} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredFellows.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">{t('fellows.noResults')}</p>
          </div>
        )}
      </section>
    </div>
  );
}
