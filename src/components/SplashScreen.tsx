import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Lock scroll while splash is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      onComplete();
      // Restore scroll when done
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 800); // Wait for exit animation to finish
    }, 2800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"></div>

      {/* Animated Ripple Rings */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/20 rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 2.5, delay: 1.25, repeat: Infinity, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-accent/30 rounded-full pointer-events-none"
      />

      {/* Cinematic Logo Reveal */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.img 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/alfath-log.svg" 
          alt="Alfath Logo" 
          className="w-48 md:w-72 h-auto object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)] mb-8"
        />

        {/* Elegant Text Reveal */}
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-white tracking-widest uppercase font-display"
          >
            Alfath Group
          </motion.h2>
        </div>
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mt-4 max-w-[200px]"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
