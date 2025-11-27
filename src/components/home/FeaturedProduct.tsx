import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Check, Zap, Settings, Shield } from "lucide-react";
import featuredMachine from "figma:asset/b1bd046c502957bb9b1721bec8737ac60a84addd.png";

export function FeaturedProduct() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-red-400 text-sm font-semibold tracking-wide mb-6">
              FLAGSHIP MODEL 2024
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              智能一体化<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                高速装箱工作站
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              集成了先进的伺服控制系统与视觉识别技术，将开箱、装填、封箱功能完美融合于一体。
              紧凑的模块化设计，为您节省40%以上的生产空间。
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: <Zap className="w-5 h-5 text-yellow-400" />, text: "高达 25 箱/分钟 的稳定产能" },
                { icon: <Settings className="w-5 h-5 text-blue-400" />, text: "5分钟快速免工具换型" },
                { icon: <Shield className="w-5 h-5 text-green-400" />, text: "符合 CE 标准的安全防护体系" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white h-12 px-8 text-base border-0">
                获取技术参数
              </Button>
              <Button variant="outline" className="border-slate-700 text-white hover:bg-white/10 h-12 px-8 text-base">
                预约视频演示
              </Button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl transform scale-75" />
            
            <img 
              src={featuredMachine} 
              alt="High Speed Case Packing Workstation" 
              className="relative w-full h-auto object-contain drop-shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-500"
            />
            
            {/* Floating Detail Cards - Decorative */}
            <div className="absolute top-10 -right-4 bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-lg hidden sm:block">
              <span className="text-xs text-slate-400 uppercase block">Efficiency</span>
              <span className="text-lg font-bold text-green-400">98.5%</span>
            </div>
            <div className="absolute bottom-10 -left-4 bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-lg hidden sm:block">
              <span className="text-xs text-slate-400 uppercase block">Precision</span>
              <span className="text-lg font-bold text-blue-400">±1mm</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
