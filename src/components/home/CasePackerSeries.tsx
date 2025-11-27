import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Check, Zap, Box, ArrowRight, Activity, MoveVertical, MoveHorizontal } from "lucide-react";

// Images
import topLoaderImg from "figma:asset/b1dfddf0408df32ecc4b2a2741280b4451c0e0fc.png"; // Top loading
import sideLoaderImg from "figma:asset/6a7ae5728e2ec99a80274f11aa5ec61d401c6486.png"; // Side loading
import formatsImg from "figma:asset/ba329f1d08a6829a0bfd9506b64518afc0e122ba.png"; // Formats

export function CasePackerSeries() {
  return (
    <section className="py-24 bg-slate-50" id="case-packers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 text-red-600 border-red-200 bg-red-50 px-4 py-1 text-sm tracking-wide">
              旗舰系列 Flagship Series
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              全自动一体化装箱机系列
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Automatic 3-in-1 Case Packer Series
            </p>
          </motion.div>
        </div>

        {/* Main Machine Showcase */}
        <Tabs defaultValue="top-loading" className="w-full mb-20">
          <div className="flex justify-center mb-12">
            <TabsList className="h-14 p-1 bg-white shadow-lg rounded-full border border-slate-100">
              <TabsTrigger 
                value="top-loading" 
                className="h-full rounded-full px-8 text-base font-medium data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all gap-2"
              >
                <MoveVertical className="w-4 h-4" />
                立式装箱机 (Top Loading)
              </TabsTrigger>
              <TabsTrigger 
                value="side-loading" 
                className="h-full rounded-full px-8 text-base font-medium data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all gap-2"
              >
                <MoveHorizontal className="w-4 h-4" />
                侧推装箱机 (Side Loading)
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Top Loading */}
          <TabsContent value="top-loading" className="mt-0 focus-visible:outline-none">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-3 p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                  <motion.img 
                    src={topLoaderImg} 
                    alt="Automatic 3 in 1 Top loading Case packer" 
                    className="w-full h-auto object-contain max-h-[500px] hover:scale-105 transition-transform duration-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Content Section */}
                <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Box className="w-32 h-32 text-red-600" />
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">全自动一体化立式装箱机</h3>
                    <p className="text-slate-500 font-medium">Automatic 3 In 1 Top Loading Case Packer</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">高效稳定 (High Efficiency)</h4>
                        <p className="text-sm text-slate-600 mt-1">彰显最大程度的稳定耐用和灵活多能，确保生产流程无忧。</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">多工位装箱 (Multi-case Loading)</h4>
                        <p className="text-sm text-slate-600 mt-1">支持从 1 到 3 箱的同时装载，大幅提升产能。</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                        <Box className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">灵活抓取 (Flexible Picking)</h4>
                        <p className="text-sm text-slate-600 mt-1">可选用旋转桁架机械手或 4/6 轴机器人进行精准抓取装箱。</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Max Speed</p>
                        <p className="text-3xl font-bold text-slate-900">12 <span className="text-sm font-medium text-slate-500">cases/min</span></p>
                      </div>
                      <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center gap-2">
                        下载参数表 <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Side Loading */}
          <TabsContent value="side-loading" className="mt-0 focus-visible:outline-none">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                 {/* Image Section */}
                 <div className="lg:col-span-3 p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                  <motion.img 
                    src={sideLoaderImg} 
                    alt="Automatic 3 in 1 Side loading Case packer" 
                    className="w-full h-auto object-contain max-h-[500px] hover:scale-105 transition-transform duration-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <MoveHorizontal className="w-32 h-32 text-blue-600" />
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">全自动一体化侧推装箱机</h3>
                    <p className="text-slate-500 font-medium">Automatic 3 In 1 Side Loading Case Packer</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">伺服驱动升降堆叠 (Servo-driven elevating/lowering stacker)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">主动式纸箱提取与成型 (Positive case extraction & forming)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">带数字计数器的快速换型 (Quick size change-overs with digital counters)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">特别适合RSC侧推式装箱需求</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Max Speed</p>
                        <p className="text-3xl font-bold text-slate-900">12 <span className="text-sm font-medium text-slate-500">cases/min</span></p>
                      </div>
                      <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
                        下载参数表 <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Compatibility Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">适配多种封盒设计</h3>
              <p className="text-lg text-slate-500">Versatile Packaging Materials & Formats</p>
              <p className="text-slate-600 leading-relaxed">
                我们的设备经过精心设计，可处理多种复杂的包装形式，满足市场多样化的展示需求。无论是袋装、连包还是货架展示盒，都能完美兼容。
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> 袋装箱 (Pouch case packing)
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> 连包折叠装箱 (Chainpack)
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> 货架展示纸盒 (Shelf Ready)
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span> 立式袋装箱 (Doy pack)
                </li>
              </ul>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <img 
                  src={formatsImg} 
                  alt="Packaging Materials Compatibility" 
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
