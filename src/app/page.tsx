import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-xl font-black">Wicked Works — Storefront (MVP)</h1>
        </div>
      </header>

      <main>
        <ProductGrid />
      </main>
    </div>
  );
}
