import { Button } from "../components/ui/button";

export const metadata = {
  title: "Coming Soon — QCSA",
};

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center bg-[#eaf0fc]">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
        Coming Soon
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        This page is still under construction. Check back soon for updates from
        the Quantum Computing Student Association.
      </p>
      <Button href="/" variant="outline" size="md">
        Back to Home
      </Button>
    </div>
  );
}
