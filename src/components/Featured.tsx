export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/15f79b74-430a-4a44-9562-a96520a2f32f/bucket/5f76a14c-3439-419d-ab69-9539c78ab2a5.jpg"
          alt="Пазогребневые мегаблоки из полистиролбетона"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Собственное производство в Хабаровске</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Производим пазогребневые мегаблоки из полистиролбетона сами — без посредников. Это гарантирует стабильное качество, быстрые сроки и честную цену.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
            <span>Тёплые стены — полистиролбетон лучше кирпича по теплоизоляции</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
            <span>Скорость монтажа — дом собирается как конструктор</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
            <span>Лёгкий фундамент — блоки весят меньше, чем кирпич</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          О технологии
        </button>
      </div>
    </div>
  );
}