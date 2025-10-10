'use client';

import Link from 'next/link';
import WaveMascot from '@/components/icons/wave-mascot';
import ThemeToggle from './theme-toggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import LanguageToggle from './language-toggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: '/', label: dictionary.header.home },
    { href: '/explore', label: dictionary.header.explore },
    { href: '/interactive', label: dictionary.header.interactive },
    { href: '/eduboard', label: dictionary.header.eduboard },
    { href: '/eduboard-editor', label: 'EduBoard Editor' },
  ];


  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="mr-8 flex items-center gap-2">
            <WaveMascot className="h-8 w-8 text-primary" />
            <span className="hidden font-headline text-xl font-bold text-foreground sm:inline-block">
              Wave of Voice
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-sky-500 text-white hover:opacity-90">
            <Link href="/#share-story">{dictionary.header.shareStory}</Link>
          </Button>
          <LanguageToggle />
          <ThemeToggle />
          <div className="md:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              {mobileMenuOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t md:hidden"
          >
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild>
                <Link href="/#share-story" onClick={() => setMobileMenuOpen(false)}>
                  {dictionary.header.shareStory}
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
