
"use client";

import { useState, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Clock, User, Scissors, Sparkles } from "lucide-react";
import { format, getDay, set } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { allServicesForBooking, stylists, exclusiveServicesForBooking } from "@/lib/data";

const bookingSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  service: z.string().optional(),
  exclusiveService: z.string().optional(),
  stylist: z.string({ required_error: "Por favor, selecione um estilista." }),
  date: z.date({ required_error: "A data é obrigatória." }),
  time: z.string({ required_error: "Por favor, selecione um horário." }),
}).refine(data => data.service || data.exclusiveService, {
  message: "Por favor, selecione ao menos um serviço.",
  path: ["service"],
});


const generateAvailableTimes = (date: Date | undefined): string[] => {
    if (!date) return [];

    const now = new Date();
    const dayOfWeek = getDay(date); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    let startHour = 7;
    let endHour = 19; // O último horário de agendamento é 1h antes de fechar

    if (dayOfWeek === 0) { // Domingo
        return [];
    } else if (dayOfWeek === 6) { // Sábado
        startHour = 7;
        endHour = 15;
    }

    const times: string[] = [];
    for (let hour = startHour; hour <= endHour; hour++) {
        const timeSlot = set(date, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 });

        // Se a data for hoje, só mostrar horários futuros
        if (format(date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')) {
            if (timeSlot > now) {
                times.push(format(timeSlot, "HH:mm"));
            }
        } else {
            times.push(format(timeSlot, "HH:mm"));
        }
    }
    return times;
};


export function BookingModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      service: "",
      exclusiveService: ""
    },
  });

  const selectedDate = useWatch({ control: form.control, name: "date" });
  const selectedService = useWatch({ control: form.control, name: "service" });
  const selectedExclusiveService = useWatch({ control: form.control, name: "exclusiveService" });

  const availableTimes = useMemo(() => generateAvailableTimes(selectedDate), [selectedDate]);

  const availableStylists = useMemo(() => {
    const serviceName = selectedService || selectedExclusiveService;
    if (!serviceName) {
      return stylists;
    }
    return stylists.filter(stylist => stylist.services.includes(serviceName));
  }, [selectedService, selectedExclusiveService]);


  function onSubmit(data: z.infer<typeof bookingSchema>) {
    console.log(data);
    const finalService = data.service || data.exclusiveService;
    toast({
      title: "Agendamento Confirmado!",
      description: `Obrigado, ${data.name}! Seu horário para um ${finalService} com ${data.stylist} está marcado para ${format(data.date, "PPP", { locale: ptBR })} às ${data.time}.`,
    });
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[380px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Agende um Horário</DialogTitle>
          <DialogDescription>
            Escolha seu serviço, estilista e horário. Estamos ansiosos para te ver.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[calc(90vh-150px)] overflow-y-auto pr-2">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                        <Input placeholder="João da Silva" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviços</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue('exclusiveService', '');
                          form.resetField('stylist');
                        }} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger><Scissors className="mr-2 h-4 w-4" /> <SelectValue placeholder="Selecione um serviço" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {allServicesForBooking.map((service) => (
                            <SelectItem key={service.name} value={service.name}>{service.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="exclusiveService"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviços Exclusivos</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue('service', '');
                          form.resetField('stylist');
                        }} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger><Sparkles className="mr-2 h-4 w-4" /> <SelectValue placeholder="Selecione um serviço exclusivo" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {exclusiveServicesForBooking.map((service) => (
                            <SelectItem key={service.name} value={service.name}>{service.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="stylist"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Estilista</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ''} disabled={!selectedService && !selectedExclusiveService}>
                        <FormControl>
                        <SelectTrigger><User className="mr-2 h-4 w-4" /><SelectValue placeholder={!selectedService && !selectedExclusiveService ? "Selecione um serviço primeiro" : "Selecione um estilista"} /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {availableStylists.length > 0 ? (
                            availableStylists.map((stylist) => (
                                <SelectItem key={stylist.name} value={stylist.name}>{stylist.name}</SelectItem>
                            ))
                        ) : (
                           <SelectItem value="no-stylist" disabled>Nenhum estilista disponível</SelectItem>
                        )}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Data</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value ? (
                                format(field.value, "PPP", { locale: ptBR })
                            ) : (
                                <span>Escolha uma data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            locale={ptBR}
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                                field.onChange(date);
                                form.resetField('time');
                            }}
                            disabled={(date) =>
                                date < new Date(new Date().setHours(0,0,0,0)) ||
                                getDay(date) === 0 // Desabilita domingos
                            }
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Horário</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={!selectedDate || availableTimes.length === 0}>
                        <FormControl>
                        <SelectTrigger><Clock className="mr-2 h-4 w-4" /><SelectValue placeholder={!selectedDate ? "Selecione uma data primeiro" : "Selecione um horário"} /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {availableTimes.length > 0 ? (
                            availableTimes.map((time) => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))
                        ) : (
                            <SelectItem value="no-time" disabled>Nenhum horário disponível</SelectItem>
                        )}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <DialogFooter>
                <Button type="submit" className="w-full">Confirmar Agendamento</Button>
                </DialogFooter>
            </form>
            </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
