import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            De cortes clássicos a estilos modernos, oferecemos uma gama de serviços para fazer você parecer e se sentir o seu melhor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="p-0 relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={service.aiHint}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
