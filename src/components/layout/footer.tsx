'use client';
import Link from 'next/link';
import WaveMascot from '../icons/wave-mascot';
import { useLanguage } from '@/context/language-context';

const Footer = () => {
  const { dictionary } = useLanguage();
  const footerDict = dictionary.footer;
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
              {footerDict.home}
            </Link>
            <Link href="/explore" className="hover:text-primary">
              {footerDict.explore}
            </Link>
             <Link href="/wave-of-school/profile" className="hover:text-primary">
              Profile
            </Link>
            <Link href="/eduboard" className="hover:text-primary">
              {footerDict.eduboard}
            </Link>
            <Link href="#" className="hover:text-primary">
              {footerDict.about}
            </Link>
            <Link href="#" className="hover:text-primary">
              {footerDict.privacy}
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wave of Voice. {footerDict.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
