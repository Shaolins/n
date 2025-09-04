import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Stylists from "@/components/sections/stylists";
import Gallery from "@/components/sections/gallery";
import Pricing from "@/components/sections/pricing";
import ProductRecommender from "@/components/sections/product-recommender";
import Footer from "@/components/footer";

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
      </main>
      <Footer />
    </div>
  );
}
