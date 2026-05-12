import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function NationalProjects() {
  const projects = [
    "العاصمة الإدارية الجديدة",
    "توشكى والدلتا الجديدة",
    "المتحف المصري الكبير",
    "بحر البقر",
    "شرق بورسعيد",
    "جبل الجلالة",
    "العلمين الجديدة",
    "شبكات الغاز الطبيعي",
    "مشروعات المياه والصرف والبنية التحتية"
  ];

  return (
    <section id="projects" className="py-24 bg-gray-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 origin-top-right"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-accent/10 blur-[60px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest mb-6 border border-accent/20">
              سجل حافل بالإنجازات
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary font-display leading-tight mb-8">
              مش مجرد شركة بتقول إنها اشتغلت في المشروعات القومية... 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-secondary inline-block mt-3">
                إحنا كنا جزء من التنفيذ
              </span>
            </h3>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 h-1 bg-accent rounded-full"></span>
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span className="w-12 h-1 bg-accent rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg shadow-black/5 border border-gray-200 hover:border-accent hover:shadow-xl data-[hovered=true]:border-accent data-[hovered=true]:shadow-xl transition-all duration-500 group auto-hover-group flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-2 md:gap-4"
            >
              <div className="bg-gray-100 p-2 md:p-3 rounded-full text-secondary group-hover:text-accent group-hover:bg-primary group-data-[hovered=true]:text-accent group-data-[hovered=true]:bg-primary transition-colors duration-500">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 mt-1 flex items-center justify-center md:justify-start">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-dark group-hover:text-primary group-data-[hovered=true]:text-primary transition-colors duration-500">{project}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Milestone */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-3xl transform skew-y-1 opacity-30 blur-2xl"></div>
          
          <div className="relative bg-primary rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,30,80,0.5)] border border-white/10 group">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Internal Glow effects */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12">
              
              <div className="flex-1 text-center md:text-right">
                <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl mb-8 backdrop-blur-md border border-white/10 text-accent group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h4 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-l from-white via-silver to-white font-display mb-6 leading-tight drop-shadow-sm py-1">
                  آلاف الكيلومترات
                </h4>
                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                  من المواسير والشبكات الممتدة في شرايين مصر، تعكس التزامنا القوي ببناء بنية تحتية مستدامة وفق أعلى المواصفات العالمية.
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 transform md:translate-x-4 group-hover:translate-x-0 transition-transform duration-500 flex-1">
                  <p className="text-accent font-bold text-sm lg:text-base uppercase tracking-widest mb-2">نسبة الإنجاز</p>
                  <p className="text-4xl font-black text-white font-sans" dir="ltr">100%</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 transform md:-translate-x-4 group-hover:translate-x-0 transition-transform duration-500 flex-1">
                  <p className="text-accent font-bold text-sm lg:text-base uppercase tracking-widest mb-2">مطابقة المواصفات</p>
                  <p className="text-3xl font-black text-white">دقة تامة</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
