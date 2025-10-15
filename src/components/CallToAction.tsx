import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CallToAction = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="section-padding gradient-soft">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-custom text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Pronta Para Te Acolher
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed">
            Dê o primeiro passo em direção ao seu bem-estar emocional. 
            Entre em contato e vamos juntas construir um caminho de cuidado e transformação.
          </p>
          
          <Button 
            size="lg"
            className="gradient-warm text-primary-foreground hover:opacity-90 transition-smooth shadow-medium text-lg px-8 py-6 rounded-full group"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
