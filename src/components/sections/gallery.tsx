import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imageData from "@/lib/placeholder-images.json";


export default function Gallery() {
  const { galleryImages } = imageData;
  return (
    <section id="gallery" className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Galeria de Estilos</h2>
          <p className="text-md text-muted-foreground mt-3 max-w-2xl mx-auto">
            Uma prévia das transformações e estilos criados por nossos barbeiros especialistas.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={800}
                      data-ai-hint={image.aiHint}
                      className="w-full h-full object-cover aspect-[3/4] transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
