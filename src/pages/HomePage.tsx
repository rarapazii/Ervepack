import { Hero } from "../components/home/Hero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <>
      <Hero />
      {/* Brief intro or call to action could go here if needed, but Hero is substantial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">致力于后道包装自动化</h2>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
             我们为您提供从开箱、装箱到码垛的一站式智能包装解决方案，助力企业实现工业 4.0 转型升级。
           </p>
           <div className="flex justify-center gap-6">
             <Link to="/products" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
               查看产品 <ArrowRight className="w-4 h-4" />
             </Link>
             <Link to="/about" className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
               了解我们
             </Link>
           </div>
        </div>
      </section>
    </>
  );
}
