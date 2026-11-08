import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#eaf0fc] border-b border-blue-100">
      <a href="/" className="relative h-10 w-19 overflow-hidden block">
        <Image
          src="/QCSA-Logo-2.webp"
          alt="QCSA Logo — go to home"
          fill
          priority
          sizes="48px"
          className="object-contain scale-200"
        />
      </a>
      <div className="flex items-center gap-6">
        <a
          href="/about-us"
          className="text-sm font-semibold text-blue-900 hover:text-gray-900 transition-colors"
        >
          About Us
        </a>
        <a
          href="/gallery"
          className="text-sm font-semibold text-blue-900 hover:text-gray-900 transition-colors"
        >
          Gallery
        </a>
        <a
          href="/research"
          className="text-sm font-semibold text-blue-900 hover:text-gray-900 transition-colors"
        >
          Research
        </a>
        <Button href="/coming-soon" size="sm" className="font-semibold rounded-md bg-blue-900">
          Donate
        </Button>
      </div>
    </nav>
  );
}
