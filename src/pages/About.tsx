import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Target, Eye, History, Award } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-8">{t('about.title')}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-primary/5 border border-primary/10"
          >
            <Eye className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">{t('about.visionTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.visionDesc')}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-accent/5 border border-accent/10"
          >
            <Target className="text-accent mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">{t('about.missionTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.missionDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <History className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">{t('about.historyTitle')}</h2>
          </div>
          <div className="space-y-12">
            {[
              { year: '2020', title: t('about.historyItem1Title'), desc: t('about.historyItem1Desc') },
              { year: '2022', title: t('about.historyItem2Title'), desc: t('about.historyItem2Desc') },
              { year: '2024', title: t('about.historyItem3Title'), desc: t('about.historyItem3Desc') },
              { year: '2026', title: t('about.historyItem4Title'), desc: t('about.historyItem4Desc') },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8"
              >
                <div className="text-3xl font-serif font-bold text-primary shrink-0 w-24">{item.year}</div>
                <div className="pt-1">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-900 text-white rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto text-center">
          <Award className="text-accent mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-12">{t('about.valuesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent">{t('about.value1Title')}</h4>
              <p className="text-white/60">{t('about.value1Desc')}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent">{t('about.value2Title')}</h4>
              <p className="text-white/60">{t('about.value2Desc')}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent">{t('about.value3Title')}</h4>
              <p className="text-white/60">{t('about.value3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
