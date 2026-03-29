import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-8">{t('nav.contact')}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">{t('nav.contact')}</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-slate-500">contact@wagf.org</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-slate-500">+41 22 123 4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-slate-500">Geneva, Switzerland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="p-8 md:p-12 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-lg">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
