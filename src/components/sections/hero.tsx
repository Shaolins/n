import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full">
      <Image
        src="https://picsum.photos/seed/hero/1920/1080"
        alt="Interior de uma barbearia moderna"
        data-ai-hint="barbershop interior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">
          Cut & Style
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg md:text-xl lg:text-2xl text-neutral-200 drop-shadow-md">
          Experimente a Arte da Barbearia Premium.
          <br />
          Onde a Tradição Encontra a Tendência.
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
