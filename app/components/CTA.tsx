import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-24 px-8 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join the Quantum Revolution
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Whether you're a student, researcher, or quantum enthusiast,
          there's a place for you in QCSA
        </p>
        <Button href="/coming-soon" size="lg" className="bg-blue-900">
          Learn More
          <ArrowRight size={14} stroke="white" />
        </Button>
      </div>
    </section>
  );
}
