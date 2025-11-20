import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stylists } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import imageData from "@/lib/placeholder-images.json";

export default function Stylists() {
  const stylistImages = imageData.stylists;

  return (
    <section id="stylists" className="py-12 md:py-16 bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#B9975B]">Conheça Nossos Estilistas</h2>
          <p className="text-md text-[#B9975B]/80 mt-3 max-w-3xl mx-auto">
            Nossa talentosa equipe de estilistas apaixonados é dedicada à arte da barbearia e à satisfação do cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stylists.map((stylist, index) => {
            const image = stylistImages[index];
            return (
              <Card key={stylist.name} className="text-center flex flex-col items-center p-5 border-2 border-transparent hover:border-secondary transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0 items-center">
                  {image && <Image
                    src={image.src}
                    alt={image.alt}
                    width={120}
                    height={120}
                    data-ai-hint={image.aiHint}
                    className="rounded-full object-cover border-4 border-accent"
                  />}
                  <CardTitle className="font-headline text-xl mt-4 text-[#B9975B]">{stylist.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 text-xs">{stylist.specialty}</Badge>
                </CardHeader>
                <CardContent className="p-0 mt-3">
                  <CardDescription className="text-sm text-[#B9975B]/70">
                    {stylist.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
