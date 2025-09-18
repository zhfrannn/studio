'use client';

import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { MessageSquareText } from 'lucide-react';
import WaveMascot from './icons/wave-mascot';

const ShareStoryModal = () => {
  const whatsappMessage = encodeURIComponent(
    'Halo Aceh Voice, saya ingin berbagi cerita...'
  );
  const whatsappUrl = `https://wa.me/6285296443101?text=${whatsappMessage}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Bagikan Ceritamu</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="items-center text-center">
          <WaveMascot className="mb-4 h-16 w-16 text-primary" />
          <DialogTitle className="font-headline text-2xl">
            Bergabunglah dalam Gerakan
          </DialogTitle>
          <DialogDescription>
            Cerita Anda memiliki kekuatan. Bagikan pengalaman Anda tentang
            ketahanan, kearifan lokal, atau perdamaian di Aceh.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Cara termudah untuk berkontribusi adalah dengan mengirimkan cerita
            Anda melalui WhatsApp. Tim kami akan menindaklanjutinya.
          </p>
          <Button asChild size="lg" className="w-full">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquareText className="mr-2 h-5 w-5" />
              Kirim via WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareStoryModal;
