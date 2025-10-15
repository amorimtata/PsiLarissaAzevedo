import { Heart, Users, Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const Services = () => {
  return (
    <section id="services" className="section-padding gradient-soft">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados para cuidar da sua saúde mental e emocional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-none shadow-soft hover:shadow-medium transition-smooth bg-white group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
