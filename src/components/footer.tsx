import Link from "next/link";
import { Scissors, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card text-card-foreground border-t">
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-3">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <Scissors className="h-7 w-7 text-primary" />
              <span className="font-headline text-2xl font-semibold text-primary">
                Cut & Style
              </span>
            </Link>
            <p className="text-white max-w-sm text-sm">
              O destino principal para cuidados de luxo e estilo atemporal. Experimente a arte da barbearia.
            </p>
          </div>
          <div className="grid gap-3">
            <h3 className="font-headline text-lg font-semibold text-primary">Contato</h3>
            <div className="flex items-center gap-3 text-white text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>Rua Gen. Porfírio da Paz, 778, Vila Bancaria, São Paulo - SP, 03918-040</span>
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>(11) 95447-1955</span>
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span>contato@cutandstyle.com</span>
            </div>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-headline text-lg font-semibold text-primary">Horários</h3>
            <div className="flex justify-between text-white">
              <span>Segunda - Sexta</span>
              <span>07:00 - 20:00</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Sábado</span>
              <span>07:00 - 16:00</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Feriados</span>
              <span>07:00 - 13:00</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Domingo</span>
              <span>Fechado</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Navegador de Corte & Estilo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
