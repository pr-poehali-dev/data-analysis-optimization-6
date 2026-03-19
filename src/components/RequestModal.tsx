import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface RequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  offerName?: string;
}

export default function RequestModal({ open, onOpenChange, offerName }: RequestModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setTimeout(() => {
        setSent(false);
        setName("");
        setPhone("");
        setMessage("");
      }, 300);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {sent ? "Заявка отправлена!" : "Оставить заявку"}
          </DialogTitle>
          {!sent && offerName && (
            <DialogDescription>
              Интересует: {offerName}
            </DialogDescription>
          )}
        </DialogHeader>

        {sent ? (
          <div className="py-6 text-center">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-neutral-600 mb-6">
              Мы свяжемся с вами в ближайшее время
            </p>
            <Button onClick={() => handleClose(false)} className="w-full bg-black text-white hover:bg-neutral-800">
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="req-name">Ваше имя</Label>
              <Input
                id="req-name"
                placeholder="Иван Иванов"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="req-phone">Телефон</Label>
              <Input
                id="req-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="req-message">Комментарий</Label>
              <Textarea
                id="req-message"
                placeholder="Укажите ваши пожелания..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white hover:bg-neutral-800 uppercase tracking-widest text-sm mt-2"
            >
              {loading ? "Отправляем..." : "Отправить заявку"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
