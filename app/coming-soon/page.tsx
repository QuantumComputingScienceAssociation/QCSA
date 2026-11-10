import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

export const metadata = {
  title: "Explore QCSA",
};

export default function ExploreQCSA() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf0fc]">
      <Navbar />
      <main className="flex-1 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Explore QCSA
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          The Quantum Computing Science Association brings students and
          researchers together to learn about quantum computing through
          workshops, collaboration, and research.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/about-us" variant="outline">Meet Our Team</Button>
          <Button href="/research">Explore Our Research</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
