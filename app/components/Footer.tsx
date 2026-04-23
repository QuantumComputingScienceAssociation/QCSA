import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#dce8f8] py-8">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-20 w-40 overflow-hidden">
          <Image
            src="/QCSA-Logo-2.webp"
            alt="QCSA Logo"
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
