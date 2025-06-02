"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  searchInput: z.string(),
});

export function SearchBox({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {searchInput: ""},
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onSearch(data.searchInput);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full justify-center items-center gap-2">
        <FormField
          control={form.control}
          name="searchInput"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="search"
                  placeholder="Caută produse..."
                  className="text-sm sm:text-base h-9 sm:h-10 sm:w-[25rem] w-[17.5rem]"
                  aria-label="Search products"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="outline"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full sm:flex hidden"
          aria-label="Submit search">
          <Search className="h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
}
