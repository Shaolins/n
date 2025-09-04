"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Wand2, Loader2, Sparkles } from "lucide-react";

import { recommendProductsForStyle } from "@/ai/flows/recommend-products-for-style";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const FormSchema = z.object({
  haircut: z.string().min(3, "Please describe your haircut."),
  style: z.string().min(3, "Please describe your desired style."),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ProductRecommender() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      haircut: "",
      style: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await recommendProductsForStyle(data);
      if (result.products && result.products.length > 0) {
        setRecommendations(result.products);
      } else {
        setError("Could not generate recommendations. Please try a different description.");
      }
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="recommender" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
            <Wand2 className="h-10 w-10 text-accent" />
            AI Product Recommender
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Not sure what to use? Describe your hair and desired style, and our AI will suggest the perfect products for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="p-6 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="haircut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Your Haircut</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Mid-length fade, curly top" {...field} />
                      </FormControl>
                      <FormDescription>
                        Describe your current haircut.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="style"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Desired Style</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Textured and messy with a natural finish, or sharp and slicked back."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        What look are you trying to achieve?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Get Recommendations
                </Button>
              </form>
            </Form>
          </Card>

          <div className="min-h-[300px] lg:mt-0 mt-8">
            <h3 className="font-headline text-2xl mb-4 text-center lg:text-left">Our AI Recommends:</h3>
            {isLoading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            )}
            {error && (
              <Card className="bg-destructive/10 border-destructive text-destructive-foreground p-4 text-center">
                {error}
              </Card>
            )}
            {!isLoading && !error && recommendations.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {recommendations.map((product, index) => (
                      <li key={index} className="flex items-center gap-4 text-lg">
                        <Sparkles className="h-6 w-6 text-accent flex-shrink-0" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {!isLoading && !error && recommendations.length === 0 && (
                <Card className="bg-card/80 p-6 text-center text-muted-foreground h-full flex items-center justify-center">
                    <p>Your product recommendations will appear here.</p>
                </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
