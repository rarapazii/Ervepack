import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
// import { supabase } from "../../lib/supabase"; // Will uncomment after supabase setup

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulation of API call or Supabase insertion
      // In a real scenario with Supabase:
      // const { error } = await supabase.from('contacts').insert([data]);
      // if (error) throw error;
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
      
      console.log("Form data submitted:", data);
      toast.success("消息已发送！我们会尽快联系您。", {
        description: "感谢您对溢尔美的关注。"
      });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("发送失败，请稍后重试或直接致电我们。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">联系我们，开启自动化之旅</h2>
            <p className="text-lg text-gray-600 mb-8">
              无论您是有特定的包装需求，还是想了解更多关于我们产品的信息，我们的专家团队随时准备为您提供帮助。
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">为什么选择溢尔美？</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>深耕后道包装自动化领域多年</li>
                  <li>专业的研发团队与售后支持</li>
                  <li>为客户量身定制高性价比解决方案</li>
                  <li>众多知名企业的信赖之选</li>
                </ul>
              </div>
            </div>
          </div>

          <Card className="shadow-xl border-0 ring-1 ring-gray-200">
            <CardHeader className="bg-red-600 text-white rounded-t-xl">
              <CardTitle className="text-xl">在线留言</CardTitle>
              <CardDescription className="text-red-100">
                填写下方表格，我们将在24小时内回复您
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名 <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      placeholder="您的称呼" 
                      {...register("name", { required: "请输入姓名" })} 
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">公司名称</Label>
                    <Input 
                      id="company" 
                      placeholder="所在公司" 
                      {...register("company")} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">联系电话 <span className="text-red-500">*</span></Label>
                    <Input 
                      id="phone" 
                      placeholder="手机或座机" 
                      {...register("phone", { required: "请输入联系电话" })}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">电子邮箱</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      {...register("email", { 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "邮箱格式不正确"
                        }
                      })} 
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">咨询内容 <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    placeholder="请描述您的需求..." 
                    className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                    {...register("message", { required: "请输入咨询内容" })}
                  />
                  {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white mt-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      发送留言
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
