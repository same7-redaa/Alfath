import { motion } from 'motion/react';

export default function RealEstate() {
  const developers = [
    { name: "طلعت مصطفي", logo: "https://www.stjegypt.com/uploads/978906375235.jpg" },
    { name: "بالم هيلز", logo: "https://logodix.com/logo/1693845.png" },
    { name: "حسن علام", logo: "https://tse3.mm.bing.net/th/id/OIP.g7m4v_1j0ovHU_8v-8xMRwHaEy?w=1626&h=1051&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "ماونتن فيو", logo: "https://tse2.mm.bing.net/th/id/OIP.qmqkefBMeZOUlXajm4hGFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "أربا العقارية", logo: "https://arbarealestate.com/site/images/logo.png" },
    { name: "A and M International", logo: "https://images.wuzzuf-data.net/files/company_logo/13443802506571b09180c73.jpeg" },
    { name: "شريك نجاح", logo: "https://tse4.mm.bing.net/th/id/OIP.nBSfj6ws176qJOkLCdQPBwHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "شريك نجاح", logo: "https://i.postimg.cc/fRG8t5d3/Chat-GPT-Image-May-23-2026-12-08-53-AM.png" },
    { name: "شريك نجاح", logo: "https://i.postimg.cc/pdPn6Fbs/Chat-GPT-Image-May-23-2026-12-11-29-AM.png" },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-3">شركاء النجاح</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary font-display mb-12">
          شركات التطوير العقاري والمقاولات في مصر
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {developers.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl w-32 h-24 md:w-48 md:h-32 flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all p-4 border border-gray-100 group"
              title={company.name}
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 mix-blend-multiply" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
