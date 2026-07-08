import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative hidden w-80 lg:block">
      <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />

      <input
        className="w-full rounded-full border border-zinc-800 bg-zinc-900 py-2 pl-10 pr-4 outline-none transition focus:border-fuchsia-500"
        placeholder="Buscar productos..."
      />
    </div>
  );
}