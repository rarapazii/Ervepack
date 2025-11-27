import { CartoningDetail } from "../components/home/CartoningDetail";
import { ProductShowcase } from "../components/home/ProductShowcase";
import { FeaturedProduct } from "../components/home/FeaturedProduct";
import { CasePackerSeries } from "../components/home/CasePackerSeries";

export function ProductsPage() {
  return (
    <div className="pt-20">
       <div className="bg-slate-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">产品中心</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">Advanced Packaging Equipment & Solutions</p>
      </div>
      
      {/* Star Product Deep Dive */}
      <CartoningDetail />
      
      {/* NEW: 3-in-1 Case Packer Series */}
      <CasePackerSeries />

      {/* Another Featured Product (Integrated Line) */}
      <FeaturedProduct />

      {/* Full List */}
      <ProductShowcase />
    </div>
  );
}
