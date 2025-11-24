import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import imageData from "@/lib/placeholder-images.json";
import { BookingModal } from "../booking-modal";
import { Button } from "../ui/button";

export default function Products() {
  const { productCollectionImage } = imageData;

  return (
    <section id="products" className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Nossos Produtos</h2>
          <p className="text-md text-foreground/80 mt-3 max-w-2xl mx-auto">
            Apresentamos nossa linha exclusiva de produtos, desenvolvida para levar a experiência Cut & Style para sua casa.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-card">
              <CardHeader className="p-0 relative w-full aspect-video">
                {productCollectionImage && (
                  <Image
                    src={productCollectionImage.src}
                    alt={productCollectionImage.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={productCollectionImage.aiHint}
                  />
                )}
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-3 text-foreground/80">Coleção Premium de Cuidados Masculinos</CardTitle>
                <CardDescription className="text-sm text-foreground/80">
                  Nossa coleção exclusiva inclui Cera Modeladora com efeito matte, Óleo para Barba com essências naturais e um Shampoo Fortificante. Tudo o que você precisa para manter seu estilo impecável todos os dias.
                </CardDescription>
              </CardContent>
            </Card>
        </div>
        <div className="text-center mt-10">
          <BookingModal>
            <Button size="lg">Agende Seu Serviço</Button>
          </BookingModal>
        </div>
      </div>
    </section>
  );
}
