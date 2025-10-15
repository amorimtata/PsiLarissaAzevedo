import larissaPortrait from "@/assets/larissa-portrait.png";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Quem Sou
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Sou Larissa Azevedo Pedraça, psicóloga dedicada a oferecer um atendimento 
                acolhedor e humanizado. Minha missão é proporcionar um espaço seguro onde 
                você possa se expressar livremente, compreender suas emoções e desenvolver 
                ferramentas para viver com mais equilíbrio e bem-estar.
              </p>
              <p className="text-lg">
                Acredito que cada pessoa possui um potencial único de transformação e 
                crescimento. Meu trabalho é caminhar ao seu lado nessa jornada de 
                autoconhecimento, respeitando seu tempo e suas necessidades individuais.
              </p>
              <p className="text-lg">
                Com uma abordagem empática e baseada em evidências científicas, busco 
                promover mudanças significativas e duradouras na vida dos meus pacientes, 
                sempre com acolhimento, respeito e profissionalismo.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in-slow order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative shadow-medium rounded-3xl overflow-hidden border-4 border-white">
                <img 
                  src={larissaPortrait} 
                  alt="Psicóloga Larissa Azevedo Pedraça"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
