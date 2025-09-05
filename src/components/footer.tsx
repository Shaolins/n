import Link from "next/link";
import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card text-card-foreground border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-primary" />
              <span className="font-headline text-3xl font-semibold">
                Cut & Style
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              O destino principal para cuidados de luxo e estilo atemporal. Experimente a arte da barbearia.
            </p>
          </div>
          <div className="grid gap-4">
            <h3 className="font-headline text-xl font-semibold">Contato</h3>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>Rua do Estilo, 123, Cidade da Moda, 12345-000</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>(12) 3456-7890</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span>contato@cutandstyle.com</span>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="font-headline text-xl font-semibold">Horários</h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Terça - Sexta</span>
              <span>09:00 - 19:00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Sábado</span>
              <span>10:00 - 18:00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Domingo - Segunda</span>
              <span>Fechado</span>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Navegador de Corte & Estilo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
