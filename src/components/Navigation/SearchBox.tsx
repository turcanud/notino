import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

export function SearchBox() {
  return (
    <form className="flex w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] items-center gap-2">
      <Input
        type="search"
        placeholder="Caută..."
        className="text-sm sm:text-base h-9 sm:h-10"
        aria-label="Search products"
      />
      <Button
        type="submit"
        variant="outline"
        size="icon"
        className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
        aria-label="Submit search">
        <Search className="h-5 w-5" />
      </Button>
    </form>
  );
}
