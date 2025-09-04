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
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Price List</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Fair prices for premium services. Quality grooming is an investment in yourself.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="w-2/3 font-headline text-lg text-muted-foreground">Service</TableHead>
                  <TableHead className="text-right font-headline text-lg text-muted-foreground">Price (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricing.map((item) => (
                  <TableRow key={item.service} className="text-base">
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell className="text-right font-semibold">${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="text-center mt-12">
            <BookingModal>
                <Button size="lg">Book Your Service</Button>
            </BookingModal>
        </div>
      </div>
    </section>
  );
}
