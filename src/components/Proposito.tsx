import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Proposito = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="proposito"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom px-4">
        {/* Wrapper centralizador, agora com alinhamento à esquerda em todas as telas */}
        <div className="max-w-3xl mx-auto text-left">
          
          {/* Aumentado o espaçamento inferior para mb-8 */}
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-8">
            Meu Propósito
          </h3>

          {/* Aumentado o espaçamento entre parágrafos para space-y-5 */}
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            
            {/* Adicionada fonte responsiva (text-base no mobile, text-lg no desktop) */}
            <p className="text-base md:text-lg">
              Meu propósito é oferecer um espaço acolhedor, onde você possa se expressar livremente, compreender suas emoções 
              e desenvolver ferramentas para lidar melhor com os desafios da vida.
            </p>
            <p className="text-base md:text-lg">
              Cada pessoa tem seu próprio tempo e ritmo — e é com empatia, respeito e compromisso que caminho junto com meus 
              pacientes nessa jornada de autoconhecimento e transformação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposito;