import Link from 'next/link';
import WaveMascot from '../icons/wave-mascot';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <WaveMascot className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold">Wave of Voice</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground md:gap-6">
            <Link href="/" className="hover:text-primary">
              Beranda
            </Link>
            <Link href="/explore" className="hover:text-primary">
              Jelajahi
            </Link>
            <Link href="/eduboard" className="hover:text-primary">
              EduBoard
            </Link>
            <Link href="#" className="hover:text-primary">
              Tentang Kami
            </Link>
            <Link href="#" className="hover:text-primary">
              Privasi
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wave of Voice. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
