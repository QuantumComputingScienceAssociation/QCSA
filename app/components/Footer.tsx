import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#eaf0fc] py-10">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-10 w-19 overflow-hidden">
          <Image
            src="/QCSA-Logo-2.webp"
            alt="QCSA Logo"
            fill
            sizes="76px"
            className="object-contain scale-200"
          />
        </div>
      </div>
    </footer>
  );
}
