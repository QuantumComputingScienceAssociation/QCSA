import Link from "next/link";

export const metadata = {
  title: "About Us — QCSA",
};

export default function AboutUs() {
  return (
    <>
      <section className="flex items-center justify-center gap-16 px-8 pt-32 pb-16">
        <div className="w-64 flex-shrink-0 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            About Us
          </h1>
          <p className="text-gray-500">Description</p>
        </div>
        <div
          className="w-96 h-80 flex-shrink-0 bg-white"
          style={{ boxShadow: "0px 1px 15.7px 4.486px #ADC8EF" }}
        />
      </section>

      <section className="flex flex-col items-center px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Get Involved
        </h2>
        <p className="text-gray-500 mb-8">Description</p>
        <div className="w-full max-w-4xl h-64 bg-[#D9D9D9] rounded-lg" />
      </section>

      <section className="flex flex-col items-center text-center px-8 py-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Join the Quantum Revolution
        </h2>
        <p className="text-gray-600 max-w-xl mb-8">
          Whether you're a student, researcher, or quantum enthusiast, there's a place for you in QCSA
        </p>
        <Link
          href="/coming-soon"
          className="bg-[#312C85] text-white px-14 py-4 rounded-full text-base hover:opacity-90 transition"
        >
          Learn More →
        </Link>
      </section>
    </>
  );
}