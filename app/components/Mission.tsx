import { Users, GraduationCap, Cpu } from "lucide-react";
import { ReactNode } from "react";

type Pillar = {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
};

const pillars: Pillar[] = [
  {
    icon: <Users size={22} stroke="#3b82f6" />,
    title: "Community",
    description:
      "Building a strong network of quantum computing students and researchers.",
    iconBg: "bg-blue-50",
  },
  {
    icon: <GraduationCap size={22} stroke="#029ec9" />,
    title: "Education",
    description:
      "Providing resources and workshops to learn quantum computing fundamentals.",
    iconBg: "bg-cyan-100",
  },
  {
    icon: <Cpu size={22} stroke="#b342af" />,
    title: "Innovation",
    description:
      "Fostering cutting-edge research and quantum computing applications.",
    iconBg: "bg-purple-100",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-500 text-base leading-relaxed mb-14 max-w-2xl mx-auto">
          QCSA brings together quantum computing enthusiasts across California
          universities to learn, collaborate, and advance the field of quantum
          computing through education and research.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div
                className={`w-12 h-12 rounded-full ${pillar.iconBg} flex items-center justify-center`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
