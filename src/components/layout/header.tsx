import Link from 'next/link';
import WaveMascot from '@/components/icons/wave-mascot';
import ShareStoryModal from '../share-story-modal';
import ThemeToggle from './theme-toggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-8 flex items-center gap-2">
          <WaveMascot className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
            Aceh Voice
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="transition-colors hover:text-primary">
            Beranda
          </Link>
          <Link href="/explore" className="transition-colors hover:text-primary">
            Jelajahi
          </Link>
          <Link href="/eduboard" className="transition-colors hover:text-primary">
            EduBoard
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <ShareStoryModal />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
