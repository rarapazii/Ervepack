import { motion } from "motion/react";
import { ArrowRight, PackageCheck, Box, Layers } from "lucide-react";
import processImage from "figma:asset/18df5dded4329dc2780a60d34dcbf9d3548e9a4a.png";

export function SolutionsProcess() {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">
              Process Overview
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              一站式后道包装解决方案
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              我们提供从产品裹包、装盒到最终装箱的全流程自动化。每个环节都经过精心设计，确保生产线的流畅与高效。
            </p>
          </motion.div>
        </div>

        {/* Diagram Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-lg mb-20"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Layers className="w-64 h-64 text-slate-900" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src={processImage} 
              alt="Overwrapping, Cartoning, and Casepacking Process" 
              className="w-full max-w-4xl object-contain mix-blend-multiply"
            />
            <div className="mt-8 pt-8 border-t border-slate-200 w-full text-center">
              <p className="font-handwriting text-xl md:text-2xl text-slate-800 font-medium">
                "Solutions For The End Of Packaging Line"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <PackageCheck className="w-8 h-8" />,
              title: "Overwrapping",
              zh: "透明膜裹包",
              desc: "为单个产品或集合包装提供防尘、防潮保护，提升外观质感。"
            },
            {
              icon: <Box className="w-8 h-8" />,
              title: "Cartoning",
              zh: "自动装盒",
              desc: "高速将产品装入纸盒，支持说明书折叠、自动喷码等附加功能。"
            },
            {
              icon: <Layers className="w-8 h-8" />,
              title: "Casepacking",
              zh: "智能装箱",
              desc: "灵活的抓取机构将产品整齐装入瓦楞纸箱，完成最终封箱打包。"
            }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 rounded-xl bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-50/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 group-hover:bg-red-50 text-slate-600 group-hover:text-red-600 flex items-center justify-center mb-6 transition-colors">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h4>
              <h5 className="text-sm text-red-600 font-medium mb-4">{step.zh}</h5>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>
              <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-red-600 transition-colors cursor-pointer">
                了解更多 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
