'use client';

import Link from 'next/link';
import WaveMascot from '@/components/icons/wave-mascot';
import ThemeToggle from './theme-toggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/explore', label: 'Jelajahi' },
  { href: '/interactive', label: 'Interaktif' },
  { href: '/eduboard', label: 'EduBoard' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg bg-background/80">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-8 flex items-center gap-2">
          <WaveMascot className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
            Wave of Voice
          </span>
        </Link>
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
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/share-story">Bagikan Ceritamu</Link>
          </Button>
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
                <Link href="/share-story" onClick={() => setMobileMenuOpen(false)}>
                  Bagikan Ceritamu
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
