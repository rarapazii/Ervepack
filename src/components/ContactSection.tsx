import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { CheckCircle2, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('您的咨询已提交！我们的工程师将在24小时内联系您。');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                让我们讨论您的包装需求
              </h2>
              <p className="text-lg text-slate-600">
                无论您是需要单一设备还是整线规划，我们的专家团队随时准备为您提供专业的咨询服务。
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-red-600 shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-full bg-red-100 text-red-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">电话咨询</h3>
                    <p className="text-slate-600 mb-1">周一至周五 9:00 - 18:00</p>
                    <a href="tel:+8612345678901" className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors">
                      +86 123 4567 8901
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-600 shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-full bg-red-100 text-red-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">邮件联系</h3>
                    <p className="text-slate-600 mb-1">发送您的需求文档</p>
                    <a href="mailto:sales@erve-pac.com" className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors">
                      sales@erve-pac.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <Card className="shadow-xl border-slate-200 bg-slate-50/50">
            <CardHeader>
              <CardTitle className="text-2xl">在线咨询 / 获取方案</CardTitle>
              <CardDescription>
                填写下方表单，我们将为您免费定制初步解决方案。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">联系人姓名 <span className="text-red-500">*</span></Label>
                    <Input id="name" placeholder="请输入您的姓名" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">联系电话 <span className="text-red-500">*</span></Label>
                    <Input id="phone" placeholder="请输入手机号码" required type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">公司名称</Label>
                  <Input id="company" placeholder="请输入您的公司名称" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">需求类型</Label>
                  <select 
                    id="type" 
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="consultation">方案咨询</option>
                    <option value="quote">设备报价</option>
                    <option value="service">售后服务</option>
                    <option value="other">其他合作</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">具体需求描述</Label>
                  <Textarea 
                    id="message" 
                    placeholder="请描述您的包装产品、产能要求或具体痛点..." 
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg h-12" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" /> 提交中...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" /> 提交咨询
                    </span>
                  )}
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  提交即表示您同意我们联系您以回应您的请求。您的信息将被严格保密。
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
