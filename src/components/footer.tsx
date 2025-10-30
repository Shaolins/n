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
              <span>Rua Gen. Porfírio da Paz, 778, Vila Bancaria, São Paulo - SP, 03918-040</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>(11) 95447-1955</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span>contato@cutandstyle.com</span>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="font-headline text-xl font-semibold">Horários</h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Segunda - Sexta</span>
              <span>07:00 - 20:00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Sábado</span>
              <span>07:00 - 16:00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Feriados</span>
              <span>07:00 - 13:00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Domingo</span>
              <span>Fechado</span>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
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
