import { motion } from 'motion/react';
import { useState } from 'react';

const REVIEWS_IMAGES = [
  "WhatsApp Image 2026-05-11 at 8.28.40 PM (1).jpeg",
  "WhatsApp Image 2026-05-11 at 8.28.40 PM (2).jpeg",
  "WhatsApp Image 2026-05-11 at 8.28.40 PM.jpeg",
  "WhatsApp Image 2026-05-11 at 8.28.41 PM.jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.23 PM.jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.24 PM (1).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.24 PM (2).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.24 PM (3).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.24 PM (4).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.24 PM (5).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.24 PM.jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.25 PM (1).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.25 PM (2).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.25 PM (3).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.25 PM (4).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.25 PM (5).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.25 PM.jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.26 PM (1).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.26 PM (2).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.26 PM (3).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.26 PM (4).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.26 PM (5).jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.26 PM.jpeg",
  "WhatsApp Image 2026-05-11 at 8.31.27 PM.jpeg"
];

export default function Reviews() {
  const [activeImage, setActiveImage] = useState<string>(REVIEWS_IMAGES[0]);

  return (
    <section id="reviews" className="py-16 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-3">آراء العملاء</h2>
        <h3 className="text-3xl md:text-5xl font-black text-primary font-display mb-6">
          ثقة عملائنا هي <span className="text-accent">نجاحنا</span>
        </h3>
        <p className="max-w-2xl mx-auto text-gray-500 font-medium">
          نعتز بتجارب شركائنا وعملائنا. إليكم بعض الصور والمحادثات التي تعكس التزامنا بتقديم أعلى معايير الجودة والاحترافية.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-10">
        <div className="bg-gray-50 rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[450px]">
            
            {/* Main Big Image */}
            <div className="lg:col-span-8 lg:col-start-1 h-[300px] lg:h-full rounded-2xl overflow-hidden bg-white shadow-inner border border-gray-200 relative group flex items-center justify-center">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={`/revew/${activeImage}`} 
                alt="Customer Review Expanded" 
                className="w-full h-full object-contain p-6 md:p-10"
              />
            </div>

            {/* Thumbnails Sidebar */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto h-[160px] lg:h-full pb-2 lg:pb-0 lg:pl-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-accent/50">
              {REVIEWS_IMAGES.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`cursor-pointer rounded-xl overflow-hidden shrink-0 w-28 lg:w-full h-full lg:h-48 border-4 transition-all duration-300 relative ${activeImage === img ? 'border-accent shadow-md scale-95' : 'border-transparent hover:border-gray-300 hover:scale-[1.02] opacity-70 hover:opacity-100'} bg-white`}
                >
                  <img 
                    src={`/revew/${img}`} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover object-top"
                  />
                  {activeImage === img && (
                    <div className="absolute inset-0 bg-accent/10 pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
