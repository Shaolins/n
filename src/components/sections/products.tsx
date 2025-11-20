import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import imageData from "@/lib/placeholder-images.json";

const products = [
    {
        name: "Cera Modeladora Efeito Matte",
        description: "Fixação forte com acabamento natural e sem brilho para o seu penteado durar o dia todo.",
    },
    {
        name: "Óleo para Barba",
        description: "Uma mistura de óleos naturais para hidratar, amaciar e dar um brilho saudável à sua barba.",
    },
    {
        name: "Shampoo Fortificante",
        description: "Limpeza profunda que fortalece os fios da raiz às pontas, promovendo um cabelo mais saudável.",
    }
];

export default function Products() {
  const { productImages } = imageData;

  return (
    <section id="products" className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Nossos Produtos</h2>
          <p className="text-md text-foreground/80 mt-3 max-w-2xl mx-auto">
            Em breve, uma linha exclusiva de produtos para levar a experiência Cut & Style para sua casa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const image = productImages[index];
            return (
              <Card key={product.name} className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-card">
                <CardHeader className="p-0 relative w-full h-64">
                  {image && (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.aiHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-5 flex-grow flex flex-col">
                  <CardTitle className="font-headline text-lg mb-2 text-foreground/80">{product.name}</CardTitle>
                  <CardDescription className="flex-grow text-sm text-foreground/80">{product.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
