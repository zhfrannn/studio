'use client';

import { ReactNode } from 'react';
import { FirebaseProvider } from './provider';
import { initializeFirebase } from './index';

export default function FirebaseClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { app, auth, firestore } = initializeFirebase();

  return (
    <FirebaseProvider app={app} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}
