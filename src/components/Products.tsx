import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import machineDetail from 'figma:asset/9a3bea3eb6eaa216d7ceb329e4abb57e1ed65484.png';
import machineStandalone from 'figma:asset/52c673937a3f57b492114baff6b6b0c29a4b2467.png';

export function Products() {
  const products = [
    {
      id: 1,
      title: '全自动开箱机',
      category: '开箱系列',
      image: machineStandalone,
      description: '高速、稳定、兼容性强。适用于多种规格纸箱的自动成型与封底，极大提升包装效率。',
    },
    {
      id: 2,
      title: '智能装箱系统',
      category: '装箱系列',
      image: machineDetail,
      description: '精密机械结构配合智能控制系统，实现产品的精准抓取与装箱，保护产品同时也提升速度。',
    },
    {
      id: 3,
      title: '自动化封箱机',
      category: '封箱系列',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', // Fallback relevant image
      description: '自动调节纸箱大小，封箱平整美观。支持一字封、工字封等多种封箱模式。',
    },
    {
      id: 4,
      title: '码垛机器人',
      category: '码垛系列',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800', // Fallback relevant image
      description: '灵活高效的码垛解决方案，节省人力成本，确保堆垛整齐稳固，适应高强度作业。',
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">核心产品与技术</h2>
          <p className="text-lg text-slate-600">
            我们提供从开箱、装箱、封箱到码垛的全流程自动化设备，每一台设备都凝聚了溢尔美的技术创新与匠心品质。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-slate-200 bg-white">
              <div className="aspect-square overflow-hidden bg-slate-100 relative p-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-red-600 hover:bg-red-700">
                  {product.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-slate-900">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 text-sm line-clamp-3">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="w-full justify-between text-red-600 hover:text-red-700 hover:bg-red-50 px-0">
                  查看详情 <ArrowUpRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
