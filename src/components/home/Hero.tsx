import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import newBoothImage from "figma:asset/4bc9687d87bf18edfcaf98aead22ad2241203e17.png";

export function Hero() {
  return (
    <div id="home" className="relative bg-slate-900 h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Modern Gradient Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={newBoothImage}
          alt="Suzhou Erve Packaging Exhibition Booth"
          className="w-full h-full object-cover"
        />
        {/* Dual gradient for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-4xl text-white pt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-red-500"></span>
              <span className="text-red-400 font-bold tracking-widest uppercase text-sm">
                Since 2010
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              Packaging <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
                Automation
              </span>
              <span className="text-red-600">.</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-slate-200 mb-4 font-light tracking-wide">
              End of Line Solutions Provider
            </p>
            
            <p className="text-slate-400 mb-10 text-lg max-w-xl leading-relaxed border-l-2 border-slate-700 pl-6">
              专注于为全球制造企业打造高效、智能的后道包装生产线。
              从单一设备到整线集成，我们重新定义包装效率。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-red-900/20 group">
                探索解决方案 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-white/10 hover:text-white h-14 px-8 text-lg rounded-full backdrop-blur-sm flex items-center gap-2">
                <PlayCircle className="w-5 h-5" /> 观看演示视频
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent"></div>
      </motion.div>
    </div>
  );
}
