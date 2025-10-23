
'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/context/language-context';
import { StoryProvider } from '@/context/story-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ChatbotFab from '@/components/chatbot-fab';
import FirebaseClientProvider from '@/firebase/client-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <StoryProvider>
          <FirebaseClientProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <ChatbotFab />
          </FirebaseClientProvider>
        </StoryProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
