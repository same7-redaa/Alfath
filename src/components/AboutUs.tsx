import { motion } from 'motion/react';
import { User, Award, Briefcase, Building } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent/5 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-3">عن الشركة</h2>
              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent font-display mb-8 leading-tight drop-shadow-sm py-1">
                من نحن ؟
              </h3>
              
              <div className="bg-gray-50 border-r-4 border-accent p-6 md:p-8 rounded-l-2xl shadow-sm mb-8 relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-gray-100 opacity-50">
                   <User size={120} strokeWidth={1} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white p-3 rounded-full shadow-md text-primary shrink-0 border border-gray-100">
                      <User size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary font-display uppercase tracking-wider">MR. Hassan Marzouk</h4>
                      <p className="text-accent font-bold text-sm tracking-widest uppercase mt-1">Chairman</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-medium text-lg md:text-xl leading-relaxed text-justify">
                    بخبره تتجاوز أكثر من <span className="text-accent font-bold">15 عام</span> في مجال تجارة الأدوات الصحية 
                    أهتم بتأسيس <span className="text-primary font-bold text-xl">شركة الفتح</span> لتصبح واحدة من أكبر شركات التوريد المعتمدة في الصعيد 
                    وشريكاً إستراتيجياً لأكبر شركات التطوير العقاري في مصر بالإضافة لمساهمتنا الفعالة في توريد وتأسيس البنية التحتية للمشروعات القومية الكبري.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default"
                >
                  <div className="bg-accent/10 p-2 rounded-lg text-accent">
                    <Award size={24} />
                  </div>
                  <span className="text-primary font-bold text-lg">+15 عام خبرة</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default"
                >
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Building size={24} />
                  </div>
                  <span className="text-primary font-bold text-lg">شركاء استراتيجيون</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-lg aspect-[4/5] sm:aspect-auto sm:h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                alt="Business Leadership" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply hover:opacity-0 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent pt-20 pb-8 px-8">
                 <h4 className="text-white text-2xl font-bold font-display tracking-wider mb-2">الرؤية والقيادة</h4>
                 <p className="text-gray-200 text-sm">نحو الريادة في قطاع المقاولات والتوريدات</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 -right-4 sm:-right-8 bg-white p-5 rounded-xl shadow-xl z-10 border border-gray-100 max-w-[180px]"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-accent">
                <Briefcase size={28} />
              </div>
              <p className="font-bold text-primary text-lg leading-tight mb-1">البنية التحتية</p>
              <p className="text-sm text-gray-500 font-medium">للمشروعات القومية</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
