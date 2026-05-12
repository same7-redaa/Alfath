import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-light z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full glass-panel-light p-1 lg:p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200">
          <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-3">تواصل معنا</h2>
              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent font-display mb-8 leading-tight drop-shadow-sm py-1">
                ابدأ مشروعك مع الوكيل المعتمد للشركة الخليجية GM
              </h3>
              <p className="text-gray-500 mb-10 font-medium leading-relaxed">
                دعنا نناقش احتياجات مشروعك. فريقنا الهندسي والتجاري جاهز للرد على استفساراتكم وتقديم عرض سعر تنافسي.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">أرقام التواصل</p>
                    <p className="text-lg font-bold text-primary font-sans" dir="ltr">
                      01028869262 - 01031386200<br/>
                      01031381400 - 01030543856
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">الإدارة</p>
                    <p className="text-lg font-bold text-primary leading-tight">بني سويف - شارع صلاح سالم - بجوار البنك الأهلي.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-14 h-14 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">المصنع</p>
                    <p className="text-lg font-bold text-primary leading-tight">السادس من أكتوبر - المنطقة الصناعية الخامسة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-light rounded-2xl p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-primary font-display mb-6">طلب عرض سعر</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">اسم الشركة / المشروع</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white font-medium" placeholder="أدخل اسم الشركة أو المشروع" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الاسم</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white font-medium" placeholder="اسم المسؤول" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white font-medium" placeholder="رقم الموبايل" dir="rtl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">التفاصيل والكميات المطلوبة</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white font-medium resize-none" placeholder="اكتب تفاصيل طلبك هنا..."></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-secondary text-accent font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-2">
                  <span>إرسال الطلب</span>
                  <Send size={18} />
                </button>
                <p className="text-xs text-center text-gray-500 font-bold mt-4">* نعدكم بالرد السريع لمعاينة مشروعكم</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
