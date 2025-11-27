import { motion } from "motion/react";
import techCollage from "figma:asset/1611f8da4ef8a65b24e0ea99c7c77d2ad68aeb0d.png";

export function TechnologySection() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">
              State-of-the-Art
            </h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-6 uppercase tracking-tight">
              Technology For Secondary & <br/> End of Line Packaging
            </h2>
            
            <div className="w-24 h-1.5 bg-red-600 mb-8"></div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              我们将“创新”、“智能”、“自动化”理念融入每一个设计细节。无论是高速装盒还是精密码垛，Ervé Pac 始终代表着行业领先的技术标准。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { en: "Innovative", zh: "创新设计", color: "bg-green-500" },
                { en: "Intelligent", zh: "智能控制", color: "bg-red-500" },
                { en: "Automation", zh: "全自动化", color: "bg-orange-500" }
              ].map((item) => (
                <div key={item.en} className="group relative overflow-hidden rounded-xl bg-white shadow-md p-4 border-l-4 border-transparent hover:border-l-0 transition-all">
                   <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color} transition-all group-hover:w-full group-hover:opacity-10`}></div>
                   <h3 className="font-bold text-slate-800 text-lg mb-1 relative z-10">{item.zh}</h3>
                   <p className="text-sm text-slate-400 font-medium uppercase relative z-10">{item.en}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Collage Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src={techCollage} 
              alt="Technology Collage: Innovative, Intelligent, Automation" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            {/* Optional stylized quote overlay matching the image style */}
            <div className="absolute -bottom-6 -right-6 hidden md:block transform rotate-[-5deg]">
               <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-100">
                 <p className="font-serif text-blue-500 italic text-lg">"Get in touch with reliability"</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
