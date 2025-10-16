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
                Quem Sou?
              </h2>

              <div className="space-y-5 text-foreground/80 leading-relaxed text-left">
                <p className="text-base md:text-lg">
                  Sou a <strong>Larissa Azevedo</strong>, psicóloga que acredita no poder da escuta, do acolhimento e das pequenas transformações que surgem quando alguém se sente verdadeiramente compreendido. Tenho um jeito leve, empático e espontâneo — gosto de conversar com pessoas de todas as idades, transformar silêncio em conexão e mostrar que cuidar da mente pode ser um processo cheio de leveza e afeto.
                </p>
                <p className="text-base md:text-lg">
                  Com mais de 800 horas de atendimentos, tive o privilégio de acompanhar histórias que se reinventaram, dores que viraram força e pessoas que redescobriram o próprio brilho. Cada encontro me lembra que a mudança começa quando olhamos para dentro com gentileza.
                </p>
                <p className="text-base md:text-lg">
                  Trabalho com a <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, uma abordagem prática e transformadora que mostra como nossos pensamentos influenciam o que sentimos e fazemos — ajudando a viver de forma mais consciente e saudável.
                </p>
                <p className="text-base md:text-lg">
                  Sou apaixonada por animais (mãe de nove cachorros 🐾) e aprendo com eles todos os dias sobre amor e presença. Levo essa mesma energia para o consultório: escutar com o coração, acolher com leveza e ajudar cada pessoa a construir uma vida mais autêntica e possível.
                </p>
                <p className="text-base md:text-lg">
                  Porque, no fim, a terapia é isso — um encontro entre pessoas, com cuidado, verdade e esperança. 🌻
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