import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    { title: "خبرة في المشروعات القومية", desc: "أشركنا في كبرى التحديات الهندسية لمصر الحديثة." },
    { title: "منتجات معتمدة", desc: "مطابقة لأعلى معايير الجودة المحلية والدولية." },
    { title: "جودة تشغيل فعلية", desc: "كفاءة تم اختبارها في أقسى ظروف التشغيل." },
    { title: "توريد سريع", desc: "لوجستيات دقيقة لضمان عدم تأخير الجدول الزمني." },
    { title: "دعم هندسي وفني", desc: "فريق من الخبراء يقدم حلول الاستشارات في الموقع." },
    { title: "أسعار تنافسية للمشروعات", desc: "نحقق المعادلة الصعبة بين الجودة القصوى والتكلفة." },
  ];

  return (
    <section className="py-24 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Engineering Background" 
                className="w-full h-auto object-cover min-h-[250px] md:min-h-[400px] lg:min-h-[500px]"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 right-4 lg:right-8 hidden md:block z-10"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-accent text-primary p-6 md:p-8 rounded-xl shadow-2xl max-w-xs border-4 border-white"
              >
                <p className="font-black text-4xl mb-2 font-display text-white">100%</p>
                <p className="font-bold text-base md:text-lg leading-tight text-white/90">التزام بمعايير الجودة ومواعيد التسليم</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-3">القيمة المضافة</h2>
            <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent font-display mb-10 leading-tight drop-shadow-sm py-1">
              لماذا شركة الفتح؟
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-accent shrink-0 bg-white shadow-sm p-1 rounded-full border border-gray-200">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{reason.title}</h4>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
