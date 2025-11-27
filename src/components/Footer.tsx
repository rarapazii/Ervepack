import React from 'react';
import { Package } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center font-bold">E</div>
              <span className="text-lg font-bold">溢尔美包装</span>
            </div>
            <p className="text-sm text-slate-400">
              苏州溢尔美包装科技有限公司 (Suzhou Erve Packaging Technologies Co., Ltd) 
              专注于后道包装自动化解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-red-500 transition-colors">首页</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">关于我们</a></li>
              <li><a href="#products" className="hover:text-red-500 transition-colors">产品中心</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">联系我们</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">产品系列</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">全自动开箱机</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">智能装箱机</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">封箱打包一体机</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">机器人码垛系统</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>地址：苏州市相城区黄埭镇...</li>
              <li>电话：+86 512 1234 5678</li>
              <li>邮箱：info@erve-pac.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 苏州溢尔美包装科技有限公司 版权所有</p>
          <p className="flex items-center gap-1">
            Powered by <span className="text-red-500 font-semibold">Figma Make</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
