'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/context/language-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ChatbotFab from '@/components/chatbot-fab';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ChatbotFab />
      </LanguageProvider>
    </ThemeProvider>
  );
}
