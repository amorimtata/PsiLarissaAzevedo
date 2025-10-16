import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import lariPhoto from '../assets/lari-photo.jpeg';

const Hero = () => {
  const whatsappNumber = "5569999682668"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* CAMADA DA IMAGEM DE FUNDO */}
      <div 
        className="absolute inset-0 bg-cover bg-top filter blur-sm scale-105"
        style={{ backgroundImage: `url(${lariPhoto})` }}
      />
      
      {/* CAMADA DE COR (OVERLAY) */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

      {/* CONTEÚDO */}
      <div className="container-custom relative z-10 text-center animate-fade-in">
        <h1 
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}
        >
          Larissa Azevedo Silva
        </h1>
        <div 
          className="flex items-center justify-center gap-x-4 mb-8 text-2xl text-gray-100 font-light"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          <span>Psicóloga</span>
          <span className="text-gray-400 font-light">|</span>
          <span>CRP 24/05599</span>
        </div>
        <p 
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
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