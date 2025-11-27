import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

// Importing all machine images
import machineDetail from "figma:asset/9a3bea3eb6eaa216d7ceb329e4abb57e1ed65484.png";
import machineFull from "figma:asset/52c673937a3f57b492114baff6b6b0c29a4b2467.png";
import machineLine from "figma:asset/0820823d341e2036dc974524398cd0e8ca96d543.png";
import machineRobotic from "figma:asset/a89c7189ba6367eec3ee4b49ee89f8353297e205.png";

const products = [
  {
    id: 1,
    title: "智能装箱/码垛单元",
    enTitle: "Robotic Packing Cell",
    image: machineRobotic, // New yellow-accent machine
    description: "高度集成的机器人装箱与码垛工作站。紧凑型设计，适合有限空间的高效作业，支持柔性生产切换。",
    features: ["视觉定位系统", "多功能抓手", "紧凑布局", "安全光幕"],
  },
  {
    id: 2,
    title: "一体化装箱包装线",
    enTitle: "Integrated Packaging Line",
    image: machineLine, 
    description: "集开箱、装箱、封箱于一体的全自动包装产线。模块化设计，可根据工厂布局灵活配置，极大节省占地面积。",
    features: ["全伺服驱动", "可视化操作界面", "柔性产品抓取", "数据实时监控"],
    highlight: true, 
  },
  {
    id: 3,
    title: "全自动开箱封底机",
    enTitle: "Automatic Case Erector",
    image: machineFull,
    description: "高效稳定的纸箱成型与封底设备，适用于多种规格纸箱。采用立式储料机构，可随时补充纸箱，无需停机。",
    features: ["50箱/分钟高速成型", "PLC智能控制", "自动预警系统", "快速换型设计"],
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase mb-2">Our Products</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            核心产品与技术
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            结合先进的工程设计与制造工艺，为您打造最值得信赖的自动化包装设备
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col ${product.highlight ? 'lg:-mt-8' : ''}`}
            >
              <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group ${
                product.highlight ? 'border-red-200 shadow-lg ring-1 ring-red-100 relative' : 'border-slate-200'
              }`}>
                {product.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-red-600 z-10" />
                )}
                
                <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 relative z-10"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="mb-1 text-xs font-bold text-red-600 tracking-wider uppercase">{product.enTitle}</div>
                  <CardTitle className="text-2xl text-slate-900 group-hover:text-red-700 transition-colors">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-slate-100 bg-slate-50/50">
                  <Button variant={product.highlight ? "default" : "ghost"} className={`w-full justify-between group-hover:translate-x-1 transition-transform ${product.highlight ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-slate-900 hover:text-red-600 hover:bg-red-50'}`}>
                    了解参数详情 <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
