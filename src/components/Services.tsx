import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Brain, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Heart,
    title: "Terapia Individual",
    description: "Atendimento personalizado focado em suas necessidades específicas e objetivos terapêuticos.",
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    description: "Fortalecimento de vínculos e comunicação para relações mais saudáveis e harmoniosas.",
  },
  {
    icon: Brain,
    title: "Ansiedade e Depressão",
    description: "Tratamento especializado para transtornos de ansiedade, depressão e questões emocionais.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Processo de desenvolvimento pessoal e descoberta de potencialidades e propósitos de vida.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <Card 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border-none shadow-soft bg-white hover:shadow-medium transition-all duration-1000 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl gradient-warm group-hover:scale-110 transition-smooth">
            <service.icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-serif font-semibold text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  
  return (
    <section id="services" className="section-padding gradient-soft">
      <div className="container-custom">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados para cuidar da sua saúde mental e emocional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
