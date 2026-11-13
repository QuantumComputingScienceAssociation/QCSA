import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 bg-[#eaf0fc] border-b border-blue-100">
      <Link href="/" className="relative h-10 w-19 overflow-hidden block">
        <Image
          src="/QCSA-Logo-2.webp"
          alt="QCSA Logo — go to home"
          fill
          priority
          sizes="48px"
          className="object-contain scale-200"
        />
      </Link>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
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
        <a
          href="/nonprofit-info"
          className="text-sm font-semibold text-blue-900 hover:text-gray-900 transition-colors"
        >
          Nonprofit Info
        </a>
      </div>
    </nav>
  );
}
