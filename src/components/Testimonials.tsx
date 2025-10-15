import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Maria Silva",
    text: "A terapia com a Larissa mudou minha vida. Finalmente consegui entender e lidar com minhas emoções de forma saudável. Sou eternamente grata!",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Profissional extremamente competente e acolhedora. O ambiente que ela cria é de total confiança e segurança. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    text: "Após meses de terapia, posso dizer que estou muito mais leve e confiante. A Larissa tem uma escuta única e sempre me ajuda a encontrar as respostas dentro de mim.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            O Que Dizem Meus Pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de pessoas que confiaram em mim para cuidar de sua saúde mental
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const { ref, isVisible } = useScrollAnimation(0.1);
            return (
              <Card 
                key={index}
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`border-none shadow-soft bg-white transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
              </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
