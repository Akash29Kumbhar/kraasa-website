import React from "react";

export default function KraasaWebsite() {
  const services = [
    "Hair Cutting",
    "Hair Coloring",
    "Keratin Treatment",
    "Make-up Services",
    "Pedicure & Manicure",
    "Spa Treatment",
    "Body Waxing",
    "Bridal Services",
    "Shampoo & Conditioning",
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wide">KRAASA</h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Premium Unisex Salon in Ahilyanagar
        </h2>
        <p className="text-gray-400 mb-6">
          Hair & Makeup under one roof. Experience expert care and transform your look.
        </p>
      </section>

      {/* Images */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-semibold mb-8 text-center">Our Studio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            className="rounded-2xl h-72 w-full object-cover"
            alt="haircut"
          />
          <img
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486"
            className="rounded-2xl h-72 w-full object-cover"
            alt="styling"
          />
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            className="rounded-2xl h-72 w-full object-cover"
            alt="haircut girl"
          />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-semibold mb-8 text-center">Our Services</h3>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-700 px-6 py-4 rounded-2xl flex justify-between items-center hover:bg-white hover:text-black transition"
            >
              <span>{service}</span>
              <span>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-12 bg-gray-900">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          What Our Clients Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-700 rounded-xl">
            <p>
              “I'm fully satisfied with my haircut. The hairstylists are very skillful and polite. Even though my haircut was simple, they did it perfectly.”
            </p>
            <p className="mt-3 text-gray-400 text-sm">- Lokhande Rutuja</p>
          </div>

          <div className="p-4 border border-gray-700 rounded-xl">
            <p>
              “It's a very nice place for your hairstyle and hair health. The staff is excellent and gives exactly the haircut you want.”
            </p>
            <p className="mt-3 text-gray-400 text-sm">- Mayuri Vedpathak</p>
          </div>

          <div className="p-4 border border-gray-700 rounded-xl">
            <p>
              “Beyond expectations! I got my haircut at Kraasa and it was a fabulous experience. The attention to detail and professionalism were impressive.”
            </p>
            <p className="mt-3 text-gray-400 text-sm">- Harshada Shinde</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">Visit Us</h3>
        <p className="text-gray-400 mb-4">
          2nd Floor, Hiwale Heights, Near Makasare Gym, Savedi, Ahilyanagar
        </p>
        <p className="mb-4">📞 +91 8009900983</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 border-t border-gray-800 text-gray-500">
        © 2026 Kraasa Hair Studio. All rights reserved.
      </footer>
    </div>
  );
}
