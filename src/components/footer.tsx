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
              The premier destination for luxury grooming and timeless style. Experience the art of barbering.
            </p>
          </div>
          <div className="grid gap-4">
            <h3 className="font-headline text-xl font-semibold">Contact Us</h3>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>123 Style Street, Fashion City, 12345</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span>contact@cutandstyle.com</span>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="font-headline text-xl font-semibold">Hours</h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Tuesday - Friday</span>
              <span>9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Saturday</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Sunday - Monday</span>
              <span>Closed</span>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cut & Style Navigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
