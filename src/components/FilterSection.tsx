"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {MakeupProduct} from "@/types";

const FormSchema = z.object({
  brands: z.array(z.string()).optional(),
});

export function FilterSection({products}: {products: MakeupProduct[]}) {
  // Group products by brand and count occurrences
  const brandCounts = products.reduce((acc, product) => {
    const brand = product.caracteristici.brand;
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get unique brands sorted alphabetically
  const uniqueBrands = Object.keys(brandCounts).sort();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      brands: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast("Filtre aplicate", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="brands"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base uppercase">Branduri</FormLabel>
              </div>
              <div className="space-y-3">
                {uniqueBrands.map((brand) => (
                  <FormField
                    key={brand}
                    control={form.control}
                    name="brands"
                    render={({field}) => {
                      return (
                        <FormItem className="flex flex-row items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(brand)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value ?? []),
                                        brand,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== brand
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {brand}
                            </FormLabel>
                          </div>
                          <span className="text-xs text-gray-500">
                            ({brandCounts[brand]})
                          </span>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Aplică filtre
        </Button>
      </form>
    </Form>
  );
}
