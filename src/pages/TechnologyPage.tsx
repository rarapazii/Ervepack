import { TechnologySection } from "../components/home/TechnologySection";
import { SolutionsProcess } from "../components/home/SolutionsProcess";

export function TechnologyPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">核心技术与工艺</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">State-of-the-art Technology & Process</p>
      </div>
      <TechnologySection />
      <SolutionsProcess />
    </div>
  );
}
