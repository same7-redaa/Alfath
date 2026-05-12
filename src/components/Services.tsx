import { motion } from 'motion/react';
import { Settings, Droplet, Flame, Wrench, ShieldCheck, Ruler, ArrowUpLeft } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Droplet, title: "تنفيذ شبكات التغذية والصرف الصحي", desc: "أعلى معايير الأمان والكفاءة لتمديدات المياه والصرف.", color: "from-blue-400 to-blue-600" },
    { icon: Settings, title: "توريد مواسير HDPE", desc: "وكيل معتمد لـ GM، نوفر المواسير لجميع الضغوط والمقاسات.", color: "from-accent to-secondary" },
    { icon: Flame, title: "تنفيذ شبكات الغاز الطبيعي", desc: "بنية تحتية موثوقة وآمنة لنقل الغاز الطبيعي لمختلف القطاعات.", color: "from-orange-400 to-red-500" },
    { icon: Wrench, title: "تنفيذ أعمال البنية التحتية", desc: "حلول متكاملة للمشاريع الهندسية الضخمة.", color: "from-emerald-400 to-green-600" },
    { icon: ShieldCheck, title: "دعم فني ومتابعة المشروعات", desc: "إشراف هندسي ودعم فني لضمان التنفيذ الأمثل للمواصفات.", color: "from-purple-400 to-indigo-600" },
    { icon: Ruler, title: "توفير جميع المقاسات والضغوط", desc: "لدينا حلول تناسب المشاريع بمختلف متطلباتها الهندسية.", color: "from-gray-400 to-gray-600" },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-20 gap-6 lg:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-12 h-1 bg-accent rounded-full"></span>
              قدراتنا الهندسية
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary font-display leading-tight drop-shadow-sm py-1">
              خدمات متكاملة للبنية التحتية
            </h3>
          </div>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md leading-relaxed border-r-4 border-accent pr-6">
            نقدم حلولاً هندسية وتوريدات متوافقة مع أقصى اشتراطات الجودة والمواصفات القياسية العالمية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group auto-hover-group relative bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl data-[hovered=true]:shadow-2xl transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-5 group-data-[hovered=true]:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 lg:mb-12">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 text-gray-400 group-hover:text-white group-data-[hovered=true]:text-white group-hover:scale-110 group-data-[hovered=true]:scale-110 group-hover:rotate-3 group-data-[hovered=true]:rotate-3 transition-all duration-500 relative shadow-sm group-hover:shadow-lg group-data-[hovered=true]:shadow-lg`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 group-data-[hovered=true]:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
                    <service.icon size={32} className="relative z-10" />
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-primary group-data-[hovered=true]:bg-primary group-hover:border-primary group-data-[hovered=true]:border-primary group-hover:text-white group-data-[hovered=true]:text-white transition-all duration-500 transform group-hover:rotate-45 group-data-[hovered=true]:rotate-45">
                    <ArrowUpLeft size={24} />
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary group-data-[hovered=true]:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-700 group-data-[hovered=true]:text-gray-700 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
