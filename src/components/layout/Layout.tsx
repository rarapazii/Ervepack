import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
// Imports
import logoWhite from "figma:asset/56daddba695a6ca5a1bff5e723d7f11453690783.png";
import logoMain from "figma:asset/dca26f28ec869a6a109132a22e7c4b571de48885.png";
import logoFooter from "figma:asset/e700b52d3e1d4fc743329900876448b4eafca2d4.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "首页", href: "/" },
    { name: "关于我们", href: "/about" },
    { name: "技术优势", href: "/technology" },
    { name: "产品中心", href: "/products" },
    { name: "联系我们", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Main Logo for Navbar */}
              <img 
                src={logoMain} 
                alt="溢尔美包装 Erve Pac Automation" 
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors relative group ${
                  isActive(item.href) ? "text-red-600" : "text-slate-600 hover:text-red-600"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive(item.href) ? "w-1/2 left-1/4" : "w-0 group-hover:w-1/2 group-hover:left-1/4"
                }`}></span>
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-slate-900 hover:bg-red-600 text-white transition-colors rounded-full px-6">
                获取报价
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-3 rounded-md text-base font-medium border-b border-slate-100 last:border-0 ${
                   isActive(item.href) ? "text-red-600 bg-slate-50" : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  获取报价
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                {/* Logo in footer - Using the new main logo with white background for visibility */}
                <div className="bg-white p-2 rounded-md inline-flex items-center justify-center">
                  <img 
                    src={logoMain} 
                    alt="Erve Pac Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
             </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              专注于后道包装自动化解决方案。我们以技术创新为驱动，致力于为全球客户提供高效、智能、可靠的包装设备。
            </p>
            <div className="flex gap-4 pt-2">
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">快速导航</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-red-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> 首页</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> 关于我们</Link></li>
              <li><Link to="/technology" className="hover:text-red-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> 技术优势</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> 产品中心</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">核心产品</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/products" className="hover:text-white transition-colors">全自动开箱机系列</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">高速装箱工作站</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">机器人码垛系统</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">整线自动化集成</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">联系我们</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 group-hover:text-white transition-colors" />
                <span>中国江苏省苏州市相城区<br/>黄埭镇...</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-red-600 group-hover:text-white transition-colors" />
                <span>+86 512 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-red-600 group-hover:text-white transition-colors" />
                <span>sales@erve-pac.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Suzhou Erve Packaging Technologies Co., Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">使用条款</a>
            <a href="#" className="hover:text-white transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
