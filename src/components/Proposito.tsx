import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Proposito = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="proposito"
      ref={ref as React.RefObject<HTMLDivElement>}
      // --- ALTERAÇÃO APLICADA AQUI ---
      // Trocamos bg-muted/30 por bg-primary/10 para um fundo marrom bem clarinho
      className={`section-padding bg-primary/10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom px-4">
        {/* Wrapper centralizador, agora com alinhamento à esquerda em todas as telas */}
        <div className="max-w-3xl mx-auto text-left">
          
          {/* Aumentado o espaçamento inferior para mb-8 */}
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Meu Propósito
        </h3>

          {/* Aumentado o espaçamento entre parágrafos para space-y-5 */}
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <p className="text-base md:text-lg">
                🌿 Um espaço para se reencontrar
            </p>
            <p className="text-base md:text-lg">
                Meu propósito é acolher histórias e ajudar pessoas a se reconectarem com quem realmente são.
            </p>
            <p className="text-base md:text-lg">
                Acredito que a terapia é mais do que um processo — é um encontro entre pessoas, um espaço onde a escuta, o afeto e o silêncio ganham sentido.
            </p>
            <p className="text-base md:text-lg">
                O autoconhecimento não é sobre se tornar alguém novo, mas sobre voltar a ser quem sempre fomos — com mais leveza, amor e verdade.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Proposito;