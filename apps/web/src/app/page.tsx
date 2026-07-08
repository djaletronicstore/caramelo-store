import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
    </main>
  );
}