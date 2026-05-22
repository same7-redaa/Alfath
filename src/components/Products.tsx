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
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-x-contain"
        >
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[46vw] sm:min-w-[300px] md:min-w-0 shrink-0 snap-center snap-always group auto-hover-group flex flex-col bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-accent/40 rounded-2xl sm:rounded-3xl p-3 sm:p-6 h-[340px] sm:h-[430px] relative overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-[0_20px_50px_rgba(0,123,255,0.25)] data-[hovered=true]:shadow-[0_20px_50px_rgba(0,123,255,0.25)] transition-all duration-500 cursor-pointer"
            >
              {/* Futuristic Glowing Backdrop Orb */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-44 h-44 bg-accent/20 rounded-full blur-[45px] opacity-0 group-hover:opacity-100 group-data-[hovered=true]:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              
              {/* Product Floating Image Container */}
              <div className="w-full h-[130px] sm:h-[210px] flex items-center justify-center relative z-10 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden bg-black/10">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={`w-full h-full object-cover rounded-xl sm:rounded-2xl drop-shadow-[0_15px_35px_rgba(255,255,255,0.15)] group-hover:scale-110 group-data-[hovered=true]:scale-110 group-hover:-translate-y-3 group-data-[hovered=true]:-translate-y-3 transition-all duration-500 ease-out transform-gpu will-change-transform ${item.rotate ? 'rotate-90 scale-[1.45] group-hover:scale-[1.6] group-data-[hovered=true]:scale-[1.6]' : ''}`} 
                />
              </div>

              {/* Product Info Container */}
              <div className="relative z-10 flex flex-col flex-grow justify-between mt-1 sm:mt-2">
                <div>
                  <h4 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-white font-display leading-snug tracking-wide group-hover:text-accent group-data-[hovered=true]:text-accent transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed font-medium line-clamp-2 sm:line-clamp-3 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                
                {/* Premium Interactive Trigger */}
                <div className="flex items-center justify-between border-t border-white/10 pt-3 sm:pt-4 mt-auto">
                  <span className="text-accent font-bold text-[10px] sm:text-xs tracking-wider group-hover:underline group-data-[hovered=true]:underline">طلب التفاصيل</span>
                  <div className="bg-white/10 p-1.5 sm:p-2 rounded-full text-accent group-hover:bg-accent group-hover:text-primary group-data-[hovered=true]:bg-accent group-data-[hovered=true]:text-primary transition-all duration-300">
                    <ArrowLeft size={14} />
                  </div>
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
