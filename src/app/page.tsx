import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Stylists from "@/components/sections/stylists";
import Gallery from "@/components/sections/gallery";
import Pricing from "@/components/sections/pricing";
import ProductRecommender from "@/components/sections/product-recommender";
import Footer from "@/components/footer";
import { ImageUploader } from "@/components/image-uploader";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stylists />
        <Gallery />
        <Pricing />
        <ProductRecommender />
        <div className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4">Exemplo de Upload de Imagem</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto text-center mb-12">
              Esta seção é um exemplo prático para explicar como o upload de imagens funciona.
            </p>
            <ImageUploader />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
