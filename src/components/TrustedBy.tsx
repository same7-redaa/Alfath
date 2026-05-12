import { motion } from 'motion/react';

export default function TrustedBy() {
  const companies = [
    { name: "أوراسكوم", logo: "https://tse3.mm.bing.net/th/id/OIP.GRRVbno6M9gQtqWG7ratcgHaBj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "المقاولون العرب", logo: "https://th.bing.com/th/id/R.477686c3116aba3a4a00059aedf6e343?rik=vwg6heyWIKF6Vw&riu=http%3a%2f%2festsmararabe.com%2fwp-content%2fuploads%2f2021%2f08%2fthe-arab-contractors-logo.jpg&ehk=9Ls9kPpqQTH3wxwPq4bFybfqq6e%2bj8rIINDODUJtLLQ%3d&risl=&pid=ImgRaw&r=0" },
    { name: "السويدي إليكتريك", logo: "https://invest-gate.me/wp-content/uploads/2018/01/El-Sewedy-Electric-615x370.jpg" },
    { name: "حسن علام", logo: "https://tse4.mm.bing.net/th/id/OIP.jS3SNFqj6oKO1eUhClmNUgHaEy?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "كونكورد", logo: "https://egypt.tanqeeb.com/img/uploads/5e4db395c4d7c_logo.png" },
    { name: "الخرافي", logo: "https://tse2.mm.bing.net/th/id/OIP.UJ8emT9hZHpR9Id6qDcAggHaGf?w=615&h=539&rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden border-y 1 border-accent/20">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-white font-display mb-12">
          ثقة أكبر شركات المقاولات والتطوير في مصر
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl w-32 h-24 md:w-48 md:h-32 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] data-[hovered=true]:shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:-translate-y-2 data-[hovered=true]:-translate-y-2 transition-all p-4 border-2 border-transparent hover:border-accent data-[hovered=true]:border-accent group auto-hover-group"
              title={company.name}
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-w-full max-h-full object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-110 group-data-[hovered=true]:scale-110" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
