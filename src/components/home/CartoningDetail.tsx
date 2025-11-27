import { motion } from "motion/react";
import { CheckCircle2, Activity, Maximize, Zap, Settings2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
// The high-quality 3D render of the cartoning machine
import cartoningMachine from "figma:asset/0ef0e7d791f8047b1d9cf3850308d86552c36fb8.png";

export function CartoningDetail() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Star Product
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              全自动连续运动装盒机
            </h2>
            <h3 className="text-xl text-slate-500 font-light mb-6">
              Fully Automatic Continuous Motion Cartoning System
            </h3>
            <div className="flex justify-center gap-8 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>150 Cartons/Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-blue-500" />
                <span>Servo Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-4 h-4 text-green-500" />
                <span>Wide Range</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Machine Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-xl"
          >
             {/* Decorative Elements */}
             <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-xs font-bold text-slate-800 border border-slate-200">
               MODEL: CM-150
             </div>
             
             <img 
               src={cartoningMachine} 
               alt="Continuous Motion Cartoning System" 
               className="w-full h-auto object-contain drop-shadow-lg hover:scale-[1.02] transition-transform duration-500"
             />
             
             <div className="mt-6 text-center">
               <p className="text-xs text-slate-400 uppercase tracking-wider">Sanitary construction (Stainless Steel)</p>
             </div>
          </motion.div>

          {/* Right: Specs & Benefits Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-slate-100 p-1 rounded-full">
                <TabsTrigger value="benefits" className="rounded-full text-base data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-md transition-all">核心优势 (Benefits)</TabsTrigger>
                <TabsTrigger value="specs" className="rounded-full text-base data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-md transition-all">技术参数 (Specs)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="benefits" className="space-y-6">
                {[
                  {
                    title: "革命性双头旋转给料 (Revolutionary Feeder)",
                    desc: "配备预折功能，优化纸箱成型，确保操作流畅高效，彻底消除开箱失败率。"
                  },
                  {
                    title: "全伺服驱动设计 (Servo-driven Design)",
                    desc: "减少机械运动部件，高速运转下精度更高。坚固耐用的设计延长了组件寿命，降低维护和运营成本。"
                  },
                  {
                    title: "超大尺寸兼容范围 (Large Size Range)",
                    desc: "支持超大尺寸选项，灵活适应产品更迭，保护您的设备投资。"
                  },
                  {
                    title: "快速无工具换型 (Tool-less Changeover)",
                    desc: "配备刻度尺和预设纸箱料仓，实现快速、精准、简单的规格切换。"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors group">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="specs">
                <Card className="border-0 shadow-none bg-slate-50">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-100 border-b border-slate-200">
                          <tr>
                            <th className="px-4 py-3 font-bold">Pitch Centers</th>
                            <th className="px-4 py-3 font-bold">Length (L)</th>
                            <th className="px-4 py-3 font-bold">Width (W)</th>
                            <th className="px-4 py-3 font-bold">Depth (D)</th>
                            <th className="px-4 py-3 font-bold text-red-600">Speed</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="bg-white hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-4 font-medium">6"</td>
                            <td className="px-4 py-4">40-110mm</td>
                            <td className="px-4 py-4">16-110mm</td>
                            <td className="px-4 py-4">80-200mm</td>
                            <td className="px-4 py-4 font-bold text-slate-900">150 CPM</td>
                          </tr>
                          <tr className="bg-white hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-4 font-medium">9"</td>
                            <td className="px-4 py-4">40-180mm</td>
                            <td className="px-4 py-4">16-130mm</td>
                            <td className="px-4 py-4">80-200mm</td>
                            <td className="px-4 py-4 font-bold text-slate-900">120 CPM</td>
                          </tr>
                          <tr className="bg-white hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-4 font-medium">12"</td>
                            <td className="px-4 py-4">40-250mm</td>
                            <td className="px-4 py-4">16-150mm</td>
                            <td className="px-4 py-4">80-260mm</td>
                            <td className="px-4 py-4 font-bold text-slate-900">100 CPM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                      <Activity className="w-4 h-4" />
                      <span>数据仅供参考，具体参数可根据客户需求定制。</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
