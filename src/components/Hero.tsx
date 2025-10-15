import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-soft overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
          Larissa Azevedo Pedraça
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
          Psicóloga
        </p>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Um espaço acolhedor para cuidar da sua saúde mental e emocional. 
          Atendimento humanizado com empatia, escuta e profissionalismo.
        </p>
        
        <Button 
          size="lg"
          className="gradient-warm text-primary-foreground hover:opacity-90 transition-smooth shadow-medium text-lg px-8 py-6 rounded-full group"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
          Falar no WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Hero;
