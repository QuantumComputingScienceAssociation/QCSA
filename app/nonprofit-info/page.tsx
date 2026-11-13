import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nonprofit Information — QCSA",
  description:
    "IRS-recognized 501(c)(3) public charity information for the Quantum Computing Science Association.",
};

const tax990Url = "https://explorer.tax990.com/organization/33-3759985";

export default function NonprofitInfoPage() {
  return (
    <div className="min-h-screen bg-[#F3F8FF] flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="mb-10 rounded-3xl bg-[#16366f] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
              Public charity
            </p>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Nonprofit Information
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-blue-100">
              The Quantum Computing Science Association is recognized by the
              Internal Revenue Service as a tax-exempt 501(c)(3) public charity.
            </p>
          </header>

          <section aria-labelledby="organization-details">
            <h2 id="organization-details" className="mb-5 text-2xl font-bold text-[#234285]">
              Organization details
            </h2>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-[#234285]/10 bg-[#234285]/10 sm:grid-cols-2">
              {[
                ["Legal name", "Quantum Computing Science Association"],
                ["Employer identification number (EIN)", "33-3759985"],
                ["Federal tax status", "501(c)(3) tax-exempt organization"],
                ["Public charity classification", "IRC Section 170(b)(1)(A)(vi)"],
                ["Exemption effective date", "March 4, 2025"],
                ["Accounting period ends", "December 31"],
                ["IRS mailing address", "405 Hilgard Ave, Room 5408, UCLA, Los Angeles, CA 90025"],
              ].map(([label, value]) => (
                <div key={label} className="bg-white p-5 sm:p-6">
                  <dt className="text-sm font-medium text-[#234285]/65">{label}</dt>
                  <dd className="mt-1 font-semibold leading-relaxed text-[#234285]">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="public-records" className="mt-10 rounded-2xl border border-[#234285]/15 bg-white p-6 sm:p-8">
            <h2 id="public-records" className="text-2xl font-bold text-[#234285]">
              Public records
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              View QCSA&apos;s organization profile on Tax990&apos;s nonprofit
              explorer. Tax990 is an independent third-party service; its
              profile is not maintained by QCSA.
            </p>
            <a
              href={tax990Url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#16366f] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#234285] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16366f]"
            >
              View QCSA on Tax990
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
