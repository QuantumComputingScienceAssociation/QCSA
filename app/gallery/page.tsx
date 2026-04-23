export const metadata = {
  title: "Gallery — QCSA",
};

export default function Gallery() {
  const images = Array(12).fill(null);

  return (
    <>
      <div className="text-center pt-32 pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Gallery
        </h1>
        <p className="text-gray-500">Description</p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto px-8 pb-32">
        {images.map((_, i) => (
          <div
            key={i}
            className="bg-[#D9D9D9] rounded-lg w-full h-48"
          />
        ))}
      </div>
    </>
  );
}