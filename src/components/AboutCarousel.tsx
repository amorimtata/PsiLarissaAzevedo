import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pho2 from "@/assets/pho2.jpeg";
import pho3 from "@/assets/pho3.jpeg";  
import pho4 from "@/assets/pho4.jpeg";
import pho5 from "@/assets/pho5.jpeg";
import lariPhoto from "@/assets/lari-photo.jpeg";  



// Array carrossel images

// Add more images here as needed
const images = [
  {
    src: pho2,
    alt: "Imagem 2",
  },
  {
    src: pho3,
    alt: "Imagem 3",
  },
  {
    src: pho4,
    alt: "Imagem 4",
  },
  {
    src: pho5,
    alt: "Imagem 5",
  },
  {
    src: lariPhoto,
    alt: "Imagem 6",  
  }
];

export const AboutCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Carregamento das imagens a cada 2 segundos -> 2000 milesegundos

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
      <div className="relative shadow-medium rounded-3xl overflow-hidden border-4 border-white">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-soft transition-smooth group"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary group-hover:scale-110 transition-smooth" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-soft transition-smooth group"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-5 w-5 text-primary group-hover:scale-110 transition-smooth" />
            </button>
          </>
        )}

        {/* Navigation Dots - only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
