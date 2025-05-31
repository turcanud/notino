"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Checkbox} from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Slider} from "./ui/slider";
import {Button} from "./ui/button";
import {CategoryName, CharacteristicsForCategory, Product} from "@/types";

const FormSchema = z.object({
  types: z.array(z.string()).optional(),
  priceRange: z.tuple([z.number(), z.number()]).optional(),
});

export function FilterSection<T extends CategoryName>({
  products,
  onFilterChange,
}: {
  products: Product<CharacteristicsForCategory<T>>[];
  onFilterChange: (
    selectedTypes?: string[],
    priceRange?: [number, number]
  ) => void;
}) {
  const prices = products.map((p) => p.pret);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {types: [], priceRange: [minPrice, maxPrice]},
  });

  const typeCounts = products.reduce((acc, product) => {
    const type = product.caracteristici.tip_produs;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const uniqueTypes = Object.keys(typeCounts).sort();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onFilterChange(data.types || [], data.priceRange || [minPrice, maxPrice]);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pr-6 sm:pr-14 pl-4 py-4 mt-1 sm:mt-11 h-fit">
        <FormField
          control={form.control}
          name="types"
          render={() => (
            <FormItem>
              <div className="mb-3 sm:mb-4">
                <FormLabel className="text-sm sm:text-base uppercase font-semibold">
                  Gama de produse
                </FormLabel>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {uniqueTypes.map((type) => (
                  <FormField
                    key={type}
                    control={form.control}
                    name="types"
                    render={({field}) => (
                      <FormItem className="flex flex-row items-center justify-between gap-2 sm:gap-3">
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(type)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value ?? []),
                                      type,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== type
                                      )
                                    );
                              }}
                              className="h-5 w-5"
                            />
                          </FormControl>
                          <FormLabel className="text-xs sm:text-sm font-normal cursor-pointer">
                            {type}
                          </FormLabel>
                        </div>
                        <span className="text-xs text-gray-500">
                          ({typeCounts[type]})
                        </span>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priceRange"
          render={({field}) => (
            <FormItem>
              <div className="my-3 sm:my-4">
                <FormLabel className="text-sm sm:text-base uppercase font-semibold">
                  Preț
                </FormLabel>
              </div>
              <FormControl>
                <div className="space-y-4 my-2">
                  <Slider
                    min={minPrice}
                    max={maxPrice}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{field.value?.[0]} lei</span>
                    <span>{field.value?.[1]} lei</span>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center w-full">
          <Button type="submit" variant={"default"} className="w-[45%]">
            Aplică filtre
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="w-[50%]">
            Resetează filtre
          </Button>
        </div>
      </form>
    </Form>
  );
}
