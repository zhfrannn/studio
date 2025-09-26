'use client';

import Link from 'next/link';
import WaveMascot from '@/components/icons/wave-mascot';
import ThemeToggle from './theme-toggle';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-700/50 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-8 flex items-center gap-2">
          <WaveMascot className="h-8 w-8 text-white" />
          <span className="font-headline text-xl font-bold text-white">
            Wave of Voice
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="transition-colors hover:text-white/80"
          >
            Beranda
          </Link>
          <Link
            href="/explore"
            className="transition-colors hover:text-white/80"
          >
            Jelajahi
          </Link>
          <Link
            href="/interactive"
            className="transition-colors hover:text-white/80"
          >
            Interaktif
          </Link>
          <Link
            href="/eduboard"
            className="transition-colors hover:text-white/80"
          >
            EduBoard
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
           <Button asChild variant="secondary">
              <Link href="/share-story">Bagikan Ceritamu</Link>
           </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
