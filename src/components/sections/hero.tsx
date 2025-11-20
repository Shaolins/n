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
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-6xl md:text-7xl drop-shadow-lg text-primary">
          Cut & Style
        </h1>
        <p className="mt-4 max-w-3xl font-body text-lg md:text-xl text-foreground/80 drop-shadow-md">
          Experimente a Arte da Barbearia Premium.
          <br />
          Onde o Estilo Encontra a Atitude.
        </p>
        <div className="absolute bottom-10 animate-bounce">
            <a href="#services">
                <ArrowDown className="h-8 w-8 text-white/70" />
            </a>
        </div>
      </div>
    </section>
  );
}
