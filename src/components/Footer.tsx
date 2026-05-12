import { Mountain, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-20 pb-10 border-t-4 border-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-6">
                <img src="/alfath-log.svg" alt="لوجو الفتح" className="h-16 sm:h-20 w-auto object-contain" />
                <img src="/gm.png" alt="لوجو GM" className="h-16 sm:h-20 w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-white leading-tight">شركة الفتح</h3>
                <p className="text-sm text-silver font-bold">الوكيل المعتمد للشركة الخليجية للتصنيع GM</p>
              </div>
            </div>
            <p className="mb-8 max-w-md font-medium leading-relaxed">
              نفخر بكوننا جزءاً من نهضة مصر العمرانية وصياغة البنية التحتية، من خلال توريد أجود مواسير الـ HDPE والـ UPVC وتقديم الدعم الفني لأكبر المشروعات القومية.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1EC9Fdjvuq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors border border-white/20"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/alfathforsupplies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors border border-white/20"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@alfath_supplies?_r=1&_t=ZS-96HFi0P4Thp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 font-display">روابط سريعة</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span>الرئيسية</span></a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors flex items-center gap-2"><span>المشروعات القومية</span></a></li>
              <li><a href="#services" className="hover:text-accent transition-colors flex items-center gap-2"><span>خدماتنا</span></a></li>
              <li><a href="#products" className="hover:text-accent transition-colors flex items-center gap-2"><span>المنتجات البلاستيكية</span></a></li>
              <li><a href="#certs" className="hover:text-accent transition-colors flex items-center gap-2"><span>الشهادات والاعتمادات</span></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 font-display">معلومات الاتصال</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="font-sans" dir="ltr">01028869262 - 01031386200<br/>01031381400 - 01030543856</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>الإدارة : بني سويف - شارع صلاح سالم - بجوار البنك الأهلي.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>المصنع : السادس من أكتوبر - المنطقة الصناعية الخامسة</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-3 text-sm text-center">
          <p className="text-gray-400 font-medium">
            جميع الحقوق محفوظة لشركة{' '}
            <a href="https://owlmedia-agency.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors font-bold">
              Owl Media
            </a>
            {' '}© {new Date().getFullYear()} — تصميم وتطوير{' '}
            <a href="https://owlmedia-agency.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors font-bold">
              Owl Media Agency
            </a>
          </p>
          <div className="flex gap-4 items-center text-gray-500">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
