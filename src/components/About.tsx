import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AboutCarousel } from "./AboutCarousel";

const About = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  return (
    <>
      <section id="about" className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* --- BLOCO DO TEXTO (CORRIGIDO) --- */}
            <div
              ref={textRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 ${
                // A CORREÇÃO ESTÁ AQUI
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-left">
                Quem Sou
              </h2>

              <div className="space-y-5 text-foreground/80 leading-relaxed text-left">
                <p className="text-base md:text-lg">
                  Sou <strong>Larissa Azevedo</strong>, psicóloga formada pelo 
                  <strong> Centro Universitário São Lucas</strong>, com especialização em andamento em 
                  <strong> Psicodiagnóstico e Avaliação Psicológica</strong> pela 
                  <strong> Faculdade Famart</strong>.
                </p>
                <p className="text-base md:text-lg">
                  Sou apaixonada por compreender pessoas e ajudá-las 
                  a construir uma vida mais leve e equilibrada.
                </p>
                <p className="text-base md:text-lg">
                  Atuo com base na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, uma abordagem que busca entender 
                  como pensamentos, emoções e comportamentos se relacionam, promovendo mudanças reais e sustentáveis no dia a dia.
                </p>
                <p className="text-base md:text-lg">
                  Acredito que a psicologia deve unir técnica e sensibilidade, aplicando métodos científicos sem perder a conexão 
                  genuína com quem está do outro lado.
                </p>
              </div>
            </div>

            {/* --- BLOCO DO CARROSSEL --- */}
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className={`flex justify-center transition-all duration-1200 delay-200 ${
                imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <AboutCarousel />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;