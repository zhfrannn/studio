
'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';

export default function LanguageToggle() {
  const { language, setLanguage, dictionary } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{dictionary.languageToggle.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('id')}>
          Bahasa Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ace')}>
          Bahasa Aceh
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
