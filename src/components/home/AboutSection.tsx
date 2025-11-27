import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Building2, Users, Trophy } from "lucide-react";
// Using the new building exterior image
import companyBuilding from "figma:asset/0ea087246a60a6ff51bd4b3ac3e39037bfa957b9.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Content - Left Side for better balance */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-red-600/20 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-slate-100 rounded-br-3xl -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={companyBuilding} 
                alt="Suzhou Erve Packaging Company Building" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-lg tracking-wide">总部基地</span>
                </div>
                <p className="text-sm text-slate-200 max-w-xs">
                  位于苏州的现代化研发与制造中心，占地面积逾10000平方米。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
              Since 2010
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              匠心智造 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                卓越包装未来
              </span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                苏州溢尔美包装科技有限公司（Suzhou Erve Packaging Technologies Co., Ltd）是后道包装自动化领域的先行者。
              </p>
              <p>
                我们不仅制造机器，更创造价值。从方案设计到设备交付，我们始终坚持以“创新、智能、稳定”为核心，帮助全球客户解决包装难题，提升生产效益。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10 mb-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                  <Users className="w-6 h-6 text-red-500" />
                  <span>50+</span>
                </div>
                <p className="text-sm text-slate-500">研发技术专家</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                  <Trophy className="w-6 h-6 text-red-500" />
                  <span>ISO9001</span>
                </div>
                <p className="text-sm text-slate-500">国际质量认证</p>
              </div>
            </div>

            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-12 rounded-full">
              预约实地考察
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
