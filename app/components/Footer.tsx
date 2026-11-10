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
        <div className="px-4 text-center text-sm text-blue-900 leading-relaxed">
          <p>Quantum Computing Science Association | 501(c)(3) nonprofit</p>
          <p>EIN: 33-3759985</p>
          <p>405 Hilgard Ave, Room 5408, UCLA, Los Angeles, CA 90025</p>
          <p>
            UCLA inquiries:{" "}
            <a href="mailto:quantum.ucla@gmail.com" className="underline underline-offset-2">
              quantum.ucla@gmail.com
            </a>
          </p>
          <p>
            Research inquiries:{" "}
            <a href="mailto:sanskriti-s@berkeley.edu" className="underline underline-offset-2">
              sanskriti-s@berkeley.edu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
