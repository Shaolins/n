import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import imageData from "@/lib/placeholder-images.json";

export default function Hero() {
  const { heroImage } = imageData;
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        data-ai-hint={heroImage.aiHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-headline text-5xl md:text-6xl drop-shadow-lg text-primary">
          Cut & Style
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base md:text-lg text-neutral-200 drop-shadow-md">
          Experimente a Arte da Barbearia Premium.
          <br />
          Onde o Estilo Encontra a Atitude.
        </p>
        <div className="mt-8">
          <BookingModal>
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Agende Seu Horário
            </Button>
          </BookingModal>
        </div>
        <div className="absolute bottom-10 animate-bounce">
            <a href="#services">
                <ArrowDown className="h-8 w-8 text-white/70" />
            </a>
        </div>
      </div>
    </section>
  );
}
