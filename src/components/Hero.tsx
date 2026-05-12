import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, ShieldCheck, HardHat, Award } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-primary">
      {/* Background Image Slideshow & Overlay */}
      <AnimatePresence>
        <motion.div 
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${HERO_IMAGES[bgIndex]}")` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-[1] bg-primary/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#001730] via-black/20 to-black/60"></div>
      {/* Light white overlay */}
      <div className="absolute inset-0 z-[1] bg-white/10 pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30"></div>

      {/* Floating Particles (CSS handled in index.css or simple absolute divs) */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Slanted Transparent White Piece */}
      <motion.div 
        initial={{ x: "100%", skewX: -12 }}
        animate={{ x: "30%", skewX: -12 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 -right-20 w-[80%] h-full bg-white/5 backdrop-blur-sm border-l border-white/10 z-[2] pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg"
          >
            <span className="text-white font-bold tracking-wider text-sm sm:text-base drop-shadow-md">الوكالة الرسمية في مصر</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display mb-4"
          >
            شركة الفتح
            <span className="block text-xl sm:text-2xl md:text-3xl text-silver mt-2 font-bold">— الوكيل المعتمد للشركة الخليجية للتصنيع GM —</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300 font-medium mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            المورد الموثوق للمشروعات القومية والبنية التحتية في مصر. 
            نوفر أعلى معايير الجودة لشبكات المياه، الصرف الصحي، والغاز الطبيعي.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-black text-lg py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(255,255,255,0.25)] border border-gray-200"
            >
              اطلب عرض سعر
            </a>
            <a 
              href="#products" 
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-black text-lg py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(255,255,255,0.25)] border border-gray-200 group"
            >
              اعرف منتجاتنا
              <ArrowLeft size={22} className="group-hover:-translate-x-3 transition-transform duration-300 text-accent" />
            </a>
          </motion.div>
        </div>

        {/* Floating Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: ShieldCheck, title: 'مورد معتمد', desc: 'لأكبر الهيئات الحكومية' },
            { icon: Award, title: 'جودة معتمدة', desc: 'مطابقة للمواصفات القياسية' },
            { icon: HardHat, title: 'شريك المشروعات القومية', desc: 'نعمر مصر لغد أفضل' },
          ].map((badge, idx) => (
            <div key={idx} className="glass-panel rounded-lg p-4 flex items-center gap-3 border-b-2 border-b-white/20 transform hover:-translate-y-2 transition-transform cursor-default">
              <div className="bg-white/10 p-2 rounded text-white shadow-sm border border-white/5">
                <badge.icon size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">{badge.title}</h3>
                <p className="text-silver text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
