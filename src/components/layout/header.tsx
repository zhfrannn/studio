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
import { cn } from '@/lib/utils';
import AuthButton from '../auth-button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: '/', label: dictionary.header.home },
    { href: '/explore', label: dictionary.header.explore },
    { href: '/interactive', label: dictionary.header.interactive },
    { href: '/eduboard', label: dictionary.header.eduboard },
    { href: '/wave-of-school', label: 'Wave of School', isSpecial: true },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="mr-8 flex items-center gap-2">
            <WaveMascot className="h-8 w-8 text-primary" />
            <span className="hidden font-headline text-xl font-bold text-foreground sm:inline-block">
              Wave of Voice
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {navLinks.map(link =>
            link.isSpecial ? (
              <Button
                key={link.href}
                asChild
                className="shiny-button bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link relative px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="nav-link-indicator absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 ease-out"></span>
              </Link>
            )
          )}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <AuthButton />
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
                  className={cn(
                    'rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                    link.isSpecial && 'bg-primary text-primary-foreground'
                  )}
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
