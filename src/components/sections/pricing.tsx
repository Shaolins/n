import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricing } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Tabela de Preços</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Preços justos para serviços premium. Um bom cuidado pessoal é um investimento em você mesmo.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="w-2/3 font-headline text-lg text-muted-foreground">Serviço</TableHead>
                  <TableHead className="text-right font-headline text-lg text-muted-foreground">Preço (R$)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricing.map((item) => (
                  <TableRow key={item.service} className="text-base">
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell className="text-right font-semibold">R$ {item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="text-center mt-12">
            <BookingModal>
                <Button size="lg">Agende Seu Serviço</Button>
            </BookingModal>
        </div>
      </div>
    </section>
  );
}
