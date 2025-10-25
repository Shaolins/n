import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stylists } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function Stylists() {
  return (
    <section id="stylists" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Conheça Nossos Estilistas</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Nossa talentosa equipe de estilistas apaixonados é dedicada à arte da barbearia e à satisfação do cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <Card key={stylist.name} className="text-center flex flex-col items-center p-6 border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0 items-center">
                <div className="w-36 h-36 rounded-full bg-muted flex items-center justify-center mb-4">
                  <span className="text-muted-foreground text-sm">Sem Imagem</span>
                </div>
                <CardTitle className="font-headline text-2xl mt-4">{stylist.name}</CardTitle>
                <Badge variant="secondary" className="mt-2 bg-accent/20 text-accent-foreground">{stylist.specialty}</Badge>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <CardDescription className="text-base">
                  {stylist.bio}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
