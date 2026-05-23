import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import React, { useRef } from 'react';

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isHorizontal.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);

    if (isHorizontal.current === null && (dx > 5 || dy > 5)) {
      isHorizontal.current = dx > dy;
    }

    // If horizontal swipe → prevent page scroll so slider catches it
    if (isHorizontal.current) {
      e.stopPropagation();
    }
    // If vertical → do nothing, let the page scroll naturally
  };

  const products = [
    { name: "HDPE Pipes - شركة GM", image: "https://www.jiashangpipe.com/wp-content/uploads/2024/05/hdpe2-1.jpg", desc: "مواسير البولي إيثيلين عالي الكثافة من شركة GM" },
    { name: "PPH Pipes - شركة GM", image: "https://i.postimg.cc/MHW8VqCJ/Chat-GPT-Image-May-23-2026-12-30-07-AM.png", desc: "مواسير وقطع تركيب للصرف الصحي الداخلي والخارجي من شركة GM." },
    { name: "UPVC Pipes - شركة GM", image: "/mnmnm.png", desc: "مواسير وقطع تركيب للصرف الصحي الداخلي والخارجي من شركة GM." },
    { name: "PPR Pipes - شركة GM", image: "https://i.postimg.cc/ZnThp41G/Chat-GPT-Image-May-23-2026-12-27-44-AM.png", desc: "مواسير وقطع تركيب لشبكات المياه وتغذية المباني من شركة GM." },
    { name: "GAZ Pipes - شركة GM", image: "https://i.postimg.cc/Y0tWJLWp/Whats-App-Image-2026-05-22-at-7.jpg", desc: "أنظمة مواسير ووصلات متخصصة لشبكات الغاز من شركة GM." },
    { name: "نواكل الفتح", image: "https://i.postimg.cc/9MPhDrn5/Chat-GPT-Image-May-23-2026-12-31-45-AM.png", desc: "تشكيلة متكاملة من الوصلات، النواكل، والتجهيزات الصناعية المعتمدة." }
  ];

  return (
    <section id="products" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-base font-bold text-accent uppercase tracking-widest">التوريدات</h2>
              <span className="bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/30">جميع المنتجات من إنتاج شركة GM</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black font-display leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-silver drop-shadow-md py-1">
              قطاع المنتجات الصناعية
            </h3>
          </div>
          <a href="#contact" className="hidden border border-white/30 hover:border-accent hover:bg-accent/10 px-6 py-3 rounded-full font-bold text-sm md:flex items-center gap-2 transition-all">
            طلب الكتالوج <ArrowLeft size={16} />
          </a>
        </div>

        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-x-contain"
        >
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[75vw] sm:min-w-[300px] md:min-w-0 shrink-0 snap-center snap-always group auto-hover-group relative overflow-hidden rounded-xl bg-secondary aspect-[4/5] cursor-pointer transform-gpu"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-data-[hovered=true]:scale-110 opacity-70 group-hover:opacity-40 group-data-[hovered=true]:opacity-40 grayscale group-hover:grayscale-0 group-data-[hovered=true]:grayscale-0 transform-gpu will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 group-data-[hovered=true]:translate-y-0 transition-transform duration-300">
                  <h4 className="text-2xl font-bold mb-2 text-white font-display uppercase tracking-wider">{item.name}</h4>
                  <div className="h-1 w-12 bg-accent mb-4 opacity-0 group-hover:opacity-100 group-data-[hovered=true]:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 group-data-[hovered=true]:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#contact" className="inline-flex border border-white/30 hover:border-accent hover:bg-accent/10 px-6 py-3 rounded-full font-bold text-sm items-center gap-2 transition-all">
            طلب الكتالوج <ArrowLeft size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
