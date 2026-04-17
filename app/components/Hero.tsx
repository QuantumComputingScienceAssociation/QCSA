import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-16 pb-24 px-8">
      <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 mt-20 mb-6">
        Empowering the Future of
        <br />
        <span className="text-blue-900">Quantum Computing</span>
      </h1>
      <Button href="/coming-soon" variant="outline" size="md" className="mt-2">
        Learn More
      </Button>
    </section>
  );
}
