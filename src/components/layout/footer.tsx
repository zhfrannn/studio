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
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wave of Voice. {footerDict.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
