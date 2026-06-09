import { Header } from "@/components/Header";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16">
      <Header />
      <section className="mt-12">
        <h1 className="text-3xl font-semibold tracking-tight">{site.title}</h1>
      </section>
    </main>
  );
}
