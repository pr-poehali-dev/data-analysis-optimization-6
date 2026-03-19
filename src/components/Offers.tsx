export default function Offers() {
  const offers = [
    {
      label: "Эконом",
      name: "Дом «Старт»",
      area: "36 м²",
      price: "от 1 200 000 ₽",
      features: ["1 этаж", "2 комнаты", "Кухня-гостиная", "Санузел"],
      highlight: false,
      image: "https://cdn.poehali.dev/projects/15f79b74-430a-4a44-9562-a96520a2f32f/bucket/2b46364a-ebda-49d6-a124-ab55cd37cd4e.png",
    },
    {
      label: "Популярный",
      image: "https://cdn.poehali.dev/projects/15f79b74-430a-4a44-9562-a96520a2f32f/bucket/1cacd769-06f8-4bca-b410-67f3bc7060c0.png",
      name: "Дом «Комфорт»",
      area: "60 м²",
      price: "от 2 100 000 ₽",
      features: ["1–2 этажа", "3 комнаты", "Кухня-гостиная", "2 санузла"],
      highlight: true,
    },
    {
      label: "Премиум",
      name: "Дом «Люкс»",
      area: "100 м²",
      price: "от 3 500 000 ₽",
      features: ["2 этажа", "4 комнаты", "Кухня-гостиная", "2 санузла", "Терраса"],
      highlight: false,
      image: "https://cdn.poehali.dev/projects/15f79b74-430a-4a44-9562-a96520a2f32f/bucket/1f56ec81-0a9b-4a77-ab35-89f2ad9b01c8.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3 text-center">Прозрачные цены</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 tracking-tight">Наши предложения</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative flex flex-col border transition-shadow duration-300 hover:shadow-lg overflow-hidden ${
                offer.highlight
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-neutral-200"
              }`}
            >
              {offer.highlight && (
                <span className="absolute top-0 right-0 z-10 bg-white text-black text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                  {offer.label}
                </span>
              )}

              {offer.image ? (
                <div className="h-52 w-full overflow-hidden">
                  <img src={offer.image} alt={offer.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`h-52 w-full ${offer.highlight ? "bg-neutral-800" : "bg-neutral-100"}`} />
              )}

              <div className="flex flex-col flex-1 p-8">
                {!offer.highlight && (
                  <span className="text-xs uppercase tracking-widest text-neutral-400 mb-4 font-semibold">
                    {offer.label}
                  </span>
                )}
                {offer.highlight && <div className="mb-4" />}

                <h3 className="text-2xl font-bold mb-1">{offer.name}</h3>
                <p className={`text-sm mb-6 ${offer.highlight ? "text-neutral-400" : "text-neutral-500"}`}>
                  Площадь: {offer.area}
                </p>

                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {offer.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${offer.highlight ? "text-neutral-300" : "text-neutral-600"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${offer.highlight ? "bg-white" : "bg-black"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`border-t pt-6 mt-auto ${offer.highlight ? "border-neutral-700" : "border-neutral-200"}`}>
                  <p className="text-xl font-bold mb-4">{offer.price}</p>
                  <button
                    className={`w-full py-3 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 cursor-pointer ${
                      offer.highlight
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-black text-white hover:bg-neutral-800"
                    }`}
                  >
                    Узнать подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}