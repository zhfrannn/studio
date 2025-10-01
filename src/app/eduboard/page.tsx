import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Book } from 'lucide-react';

export default function EduBoardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">EduBoard Fisik</h1>
        <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
          Menjembatani dunia digital dan fisik untuk pembelajaran komunitas yang
          inklusif dan berkelanjutan.
        </p>
      </div>

      <div className="grid items-center gap-8 lg:gap-12 md:grid-cols-2 rounded-2xl">
        <div className="relative aspect-square overflow-hidden rounded-xl border shadow-2xl md:aspect-[3/4]">
          <Image
            src="https://picsum.photos/seed/eduboard/600/800"
            alt="EduBoard Design"
            fill
            className="object-cover"
            data-ai-hint="poster design"
          />
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="font-headline text-2xl">Apa itu EduBoard?</h2>
              <p className="text-muted-foreground">
                EduBoard adalah papan informasi fisik yang dirancang untuk
                ditempatkan di ruang publik seperti sekolah, kantor desa, atau
                pusat komunitas. Papan ini menampilkan ringkasan cerita, QR code
                yang mengarah ke konten digital interaktif (video, komik,
                kuis), dan informasi penting tentang kesiapsiagaan bencana.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="font-headline text-2xl">
                Gunakan di Komunitas Anda
              </h2>
              <p className="text-muted-foreground">
                Kami mendorong sekolah, komunitas, dan relawan untuk menggunakan
                EduBoard. Unduh aset desain kami secara gratis dan ikuti panduan
                untuk memasangnya di lingkungan Anda.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Unduh Aset Poster
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#">
                    <Book className="mr-2 h-4 w-4" />
                    Lihat Panduan
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
