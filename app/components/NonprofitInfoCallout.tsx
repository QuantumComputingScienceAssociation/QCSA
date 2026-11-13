export default function NonprofitInfoCallout() {
  return (
    <section
      aria-label="QCSA nonprofit information"
      className="bg-[#16366f] px-6 py-8 text-center text-white sm:px-8"
    >
      <p className="font-semibold">
        QCSA is an IRS-recognized 501(c)(3) public charity.
      </p>
      <a
        href="/nonprofit-info"
        className="mt-2 inline-block font-semibold text-blue-200 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        View nonprofit details and public records
      </a>
    </section>
  );
}
