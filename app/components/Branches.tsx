import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import ucla from "../../public/ucla.webp";
import caltech from "../../public/caltech.webp";
import usc from "../../public/usc-web.webp";
import ucsd from "../../public/ucsd-web.webp";
import qdc from "../../public/qdc-web.webp";

type Branch = {
  name: string;
  subtext: string;
  image: StaticImageData;
  imageClassName?: string;
  href?: string;
};

const branches: Branch[] = [
  {
    name: "UCLA",
    subtext: "Pioneering quantum research and education at UCLA",
    image: ucla,
    imageClassName: "object-cover object-[center_33%]",
    href: "https://qcsa-ucla.org",
  },
  {
    name: "Caltech",
    subtext: "Leading quantum innovation at Caltech",
    image: caltech,
  },
  {
    name: "USC",
    subtext: "Building quantum computing community at USC",
    image: usc,
  },
  {
    name: "UCSD",
    subtext: "Advancing quantum sciences at UC San Diego",
    image: ucsd,
  },
  {
    name: "QDC",
    subtext: "Quantum Device Consortium",
    image: qdc,
    href: "https://qdc-qcsa.org",
  },
];

export default function Branches() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Branches
          </h2>
          <p className="text-sm text-gray-500">
            QCSA chapters across California&apos;s leading universities
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => {
            const inner = (
              <>
                <Image
                  src={branch.image}
                  alt={`${branch.name} campus`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={branch.imageClassName ?? "object-cover"}
                  placeholder="blur"
                />
                <div className={`absolute inset-0 bg-black/30 transition-colors ${branch.href ? "group-hover:bg-black/40" : ""}`} />
                {branch.href && (
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                    <ArrowUpRight size={16} stroke="white" strokeWidth={2.5} />
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="block text-white text-base font-semibold tracking-wide">
                    {branch.name}
                  </span>
                  <span className="block text-white/80 text-xs mt-0.5">
                    {branch.subtext}
                  </span>
                </div>
              </>
            );
            const sharedClass =
              "relative rounded-2xl overflow-hidden aspect-4/3 group shadow-sm bg-gray-900";
            return branch.href ? (
              <a
                key={branch.name}
                href={branch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClass}
              >
                {inner}
              </a>
            ) : (
              <div key={branch.name} className={sharedClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
