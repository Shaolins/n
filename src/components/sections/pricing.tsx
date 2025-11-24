import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricing, exclusiveServices } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";

export default function Pricing() {
  return (
    <section id="pricing" className="py-8 md:py-12 bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Tabela de Preços</h2>
          <p className="text-md text-foreground/80 mt-3 max-w-3xl mx-auto">
            Preços justos para serviços premium. Um bom cuidado pessoal é um investimento em você mesmo.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="w-2/3 font-headline text-md text-primary">Serviço</TableHead>
                  <TableHead className="text-right font-headline text-md text-primary">Preço (R$)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricing.map((item) => (
                  <TableRow key={item.service} className="text-sm">
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell className="text-right font-semibold">R$ {item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="text-center mt-12 mb-8">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">Nossos Serviços Exclusivos</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="w-2/3 font-headline text-md text-primary">Serviço</TableHead>
                  <TableHead className="text-right font-headline text-md text-primary">Preço (R$)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exclusiveServices.map((item) => (
                  <TableRow key={item.service} className="text-sm">
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell className="text-right font-semibold">R$ {item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
           <p className="text-center text-sm text-muted-foreground mt-4">
              Além dos serviços, também oferecemos uma linha própria de 5 cosméticos masculinos premium, para complementar sua rotina de cuidados.
            </p>
        </div>
      </div>
    </section>
  );
}
