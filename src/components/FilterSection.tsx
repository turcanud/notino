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
  types: z.array(z.string()).optional(),
});

export function FilterSection({products}: {products: MakeupProduct[]}) {
  // Group products by type and count occurrences
  const typeCounts = products.reduce((acc, product) => {
    const type = product.caracteristici.tip_produs;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get unique types sorted alphabetically
  const uniqueTypes = Object.keys(typeCounts).sort();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      types: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast("Filtre aplicate", {
      description: (
        <pre className="mt-2 w-full max-w-[280px] sm:max-w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white text-xs sm:text-sm">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6 p-4 sm:p-6 bg-white rounded-lg shadow-sm">
        <FormField
          control={form.control}
          name="types"
          render={() => (
            <FormItem>
              <div className="mb-3 sm:mb-4">
                <FormLabel className="text-sm sm:text-base uppercase font-semibold">
                  Tipuri
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
        <Button
          type="submit"
          className="w-full text-sm sm:text-base py-2 sm:py-3 rounded-none">
          Aplică filtre
        </Button>
      </form>
    </Form>
  );
}
