"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const FormSchema = z.object({
  name_surname: z.string().min(2, {
    message: "Numele și prenumele trebuie să aibă cel puțin 2 caractere.",
  }),
  email: z.string().email({
    message: "Adresă de email invalidă.",
  }),
  phone: z.string().min(10, {
    message: "Numărul de telefon trebuie să aibă cel puțin 10 cifre.",
  }),
  address: z.string().min(5, {
    message: "Adresa trebuie să aibă cel puțin 5 caractere.",
  }),
  location: z.string().min(2, {
    message: "Orașul trebuie să aibă cel puțin 2 caractere.",
  }),
  postal_code: z.string().min(4, {
    message: "Codul poștal trebuie să aibă cel puțin 4 caractere.",
  }),
  card_number: z.string().length(16, {
    message: "Numărul cardului trebuie să aibă exact 16 caractere.",
  }),
  card_expiry: z.string().length(5, {
    message: "Data expirării cardului trebuie să fie în format MM/AA.",
  }),
  card_cvc: z.string().length(3, {
    message: "CVC-ul cardului trebuie să aibă exact 3 caractere.",
  }),
  cardholder_name: z.string().min(2, {
    message: "Numele de pe card trebuie să aibă cel puțin 2 caractere.",
  }),
});

export function CheckoutForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name_surname: "",
      email: "",
      phone: "",
      address: "",
      location: "",
      postal_code: "",
      card_number: "",
      card_expiry: "",
      card_cvc: "",
      cardholder_name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Comanda a fost trimisă cu succes!");
    console.log("Submitted data:", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="order-2 sm:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Personal Info */}
        <FormField
          control={form.control}
          name="name_surname"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Nume și Prenume</FormLabel>
              <FormControl>
                <Input placeholder="Ion Popescu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ion.popescu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input placeholder="060000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Adresă</FormLabel>
              <FormControl>
                <Input placeholder="Strada Principală 123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Localitate</FormLabel>
              <FormControl>
                <Input placeholder="Chișinău" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="postal_code"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Cod poștal</FormLabel>
              <FormControl>
                <Input placeholder="MD-2001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Card Info */}
        <FormField
          control={form.control}
          name="card_number"
          render={({field}) => (
            <FormItem className="col-span-2">
              <FormLabel>Număr Card</FormLabel>
              <FormControl>
                <Input placeholder="1234 5678 9012 3456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="card_expiry"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>Expirare (MM/AA)</FormLabel>
              <FormControl>
                <Input placeholder="12/25" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="card_cvc"
          render={({field}) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel>CVC</FormLabel>
              <FormControl>
                <Input placeholder="123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cardholder_name"
          render={({field}) => (
            <FormItem className="col-span-2">
              <FormLabel>Nume de pe card</FormLabel>
              <FormControl>
                <Input placeholder="ION POPESCU" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2">
          <Button type="submit" className="w-full">
            Finalizează comanda
          </Button>
        </div>
      </form>
    </Form>
  );
}
