import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import boothImage from 'figma:asset/31e7824e05a2ec85dd1b892bbef259b20264df60.png';

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={boothImage} 
          alt="Suzhou Erve Packaging Technologies Booth" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl text-white space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-400 border border-red-600/30 text-sm font-medium mb-4">
              专业后道包装自动化解决方案提供商
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
              智能包装 <br />
              <span className="text-red-500">驱动工业未来</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-light">
              End of Packaging Line Provider
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl"
          >
            苏州溢尔美包装科技有限公司致力于为全球客户提供高效、稳定、智能的后道包装自动化设备与整体解决方案。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
              探索解决方案 <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 hover:text-white">
              观看视频演示
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
