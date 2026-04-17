import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import ucla from "../../public/ucla.webp";
import caltech from "../../public/caltech.webp";
import usc from "../../public/usc.webp";
import ucsd from "../../public/ucsd.webp";
import qdc from "../../public/qdc.webp";

type Branch = {
  name: string;
  subtext: string;
  image: StaticImageData;
  imageClassName?: string;
};

const branches: Branch[] = [
  {
    name: "UCLA",
    subtext: "Pioneering quantum research and education at UCLA",
    image: ucla,
    imageClassName: "object-cover object-[center_33%]",
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
    subtext: "Quantum Device Community",
    image: qdc,
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
        <div className="grid grid-cols-3 gap-4">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="relative rounded-2xl overflow-hidden aspect-4/3 cursor-pointer group shadow-sm bg-gray-900"
            >
              <Image
                src={branch.image}
                alt={`${branch.name} campus`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={branch.imageClassName ?? "object-cover"}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                <ArrowUpRight size={16} stroke="white" strokeWidth={2.5} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="block text-white text-base font-semibold tracking-wide">
                  {branch.name}
                </span>
                <span className="block text-white/80 text-xs mt-0.5">
                  {branch.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
