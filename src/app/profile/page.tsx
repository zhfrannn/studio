'use client';

import { useUser } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { signOut } from '@/firebase/auth/auth';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    // This should ideally be handled by middleware, but for now, redirect
    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return null;
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <Card>
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 border-4 border-primary">
            <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
            <AvatarFallback>
              {user.displayName
                ? user.displayName.charAt(0)
                : user.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-bold">
            {user.displayName}
          </CardTitle>
          <p className="text-muted-foreground">{user.email}</p>
        </CardHeader>
        <CardContent className="mt-4 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            UID: {user.uid}
          </p>
          <Button variant="destructive" onClick={handleSignOut}>
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
