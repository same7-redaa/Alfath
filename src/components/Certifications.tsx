import { motion } from 'motion/react';
import { FileBadge, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certs = [
    "اعتماد الهيئة القومية لمياه الشرب والصرف الصحي",
    "اعتماد منتجات HDPE",
    "اعتماد GM كمورد ووكيل رسمي",
    "عضوية اتحاد الصناعات المصرية",
    "شهادات الجودة والمواصفات القياسية",
    "تسجيلات رسمية وضريبية",
  ];

  return (
    <section id="certs" className="py-24 bg-secondary relative overflow-hidden text-white">
      {/* Abstract Official Document Pattern/Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
          <path d="M0 0 L100 0 L100 10 L0 10 Z" opacity="0.1" />
          <path d="M0 20 L100 20 L100 22 L0 22 Z" opacity="0.2" />
          <path d="M0 40 L100 40 L100 45 L0 45 Z" opacity="0.1" />
          <path d="M0 60 L100 60 L100 61 L0 61 Z" opacity="0.3" />
          <path d="M0 80 L100 80 L100 84 L0 84 Z" opacity="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 text-accent">
              <FileBadge size={40} />
              <h2 className="text-base font-bold uppercase tracking-widest text-white/80">موافقات رسمية</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-black font-display mb-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-silver drop-shadow-md py-1">
              اعتمادات حكومية و<span className="text-accent text-shadow-none">مطابقة للمواصفات</span>
            </h3>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed font-medium">
              نعمل تحت إشراف كامل وباعتمادات رسمية من كبرى الهيئات والمؤسسات المعنية بالبنية التحتية والمشروعات القومية، مما يجعلنا الخيار الأول للمشاريع الحساسة والكبرى.
            </p>

            <div className="bg-primary/50 border border-accent/30 p-6 rounded-lg backdrop-blur-sm border-l-4 border-l-accent flex items-start gap-4">
              <ShieldCheck className="text-accent shrink-0 mt-1" size={28} />
              <p className="font-bold text-lg text-white">
                جميع مُنتجاتنا تحمل شهادات الجودة (ISO) ومتوافقة تماماً مع الأكواد الإنشائية المصرية.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-accent/50 data-[hovered=true]:border-accent/50 p-6 rounded-xl hover:bg-white/10 data-[hovered=true]:bg-white/10 transition-all duration-500 flex flex-col gap-4 auto-hover-group"
              >
                <Award className="text-accent" size={32} />
                <h4 className="font-bold text-shadow-sm leading-tight text-lg">{cert}</h4>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
