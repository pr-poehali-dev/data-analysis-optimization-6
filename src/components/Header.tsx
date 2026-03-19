import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import RequestModal from "@/components/RequestModal";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">ФормаЛюксДВ</div>
        <nav className="flex gap-8 items-center">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О компании
          </a>

          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer flex items-center gap-1.5"
            >
              Связаться
              <Icon name="ChevronDown" size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-3 w-72 bg-white text-black shadow-xl p-5 flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  <Icon name="MapPin" size={16} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-700 leading-snug">
                    г. Хабаровск, ул. Жуковского, д. 41а, стр. 2
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Icon name="Phone" size={16} className="text-neutral-400 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+74212697967" className="text-sm text-black hover:text-neutral-500 transition-colors">
                      +7 (4212) 69 79 67
                    </a>
                    <a href="tel:+79622237967" className="text-sm text-black hover:text-neutral-500 transition-colors">
                      +7 (962) 223 79 67
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Icon name="Mail" size={16} className="text-neutral-400 flex-shrink-0" />
                  <a href="mailto:plastmaster27@mail.ru" className="text-sm text-black hover:text-neutral-500 transition-colors">
                    plastmaster27@mail.ru
                  </a>
                </div>
                <div className="border-t pt-4 mt-1">
                  <button
                    onClick={() => { setOpen(false); setModalOpen(true); }}
                    className="w-full py-2.5 bg-black text-white text-sm uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Оставить заявку
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      <RequestModal open={modalOpen} onOpenChange={setModalOpen} />
    </header>
  );
}