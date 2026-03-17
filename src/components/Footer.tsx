export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 flex-wrap gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#technology"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Технология
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Услуги</h3>
                <a
                  href="#modular"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Модульные дома
                </a>
                <a
                  href="#blocks"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Мегаблоки
                </a>
                <a
                  href="#projects"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Проекты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Контакты</h3>
                <p className="text-white text-sm sm:text-base">г. Хабаровск</p>
                <p className="text-white text-sm sm:text-base">ул. Жуковского, д. 41а, стр. 2</p>
                <a href="tel:+74212697967" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">
                  +7 (4212) 69 79 67
                </a>
                <a href="tel:+79622237967" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">
                  +7 (962) 223 79 67
                </a>
                <a href="mailto:plastmaster27r@mail.ru" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">
                  plastmaster27r@mail.ru
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                ФОРМАЛЮКСДВ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} ФормаЛюксДВ · Хабаровск</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}