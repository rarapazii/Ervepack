import { ContactSection } from "../components/contact/ContactSection";

export function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Get in Touch</p>
      </div>
      <ContactSection />
    </div>
  );
}
