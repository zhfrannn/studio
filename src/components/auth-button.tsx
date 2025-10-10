'use client';

import { useState } from 'react';
import { useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogIn, User as UserIcon, LogOut, Loader2 } from 'lucide-react';
import { signInWithGoogle, signOut } from '@/firebase/auth/auth';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

export default function AuthButton() {
  const { user, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const { dictionary } = useLanguage();

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    await signInWithGoogle();
    setAuthLoading(false);
    setOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (isLoading) {
    return <Loader2 className="h-6 w-6 animate-spin" />;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
              <AvatarFallback>
                {user.displayName
                  ? user.displayName.charAt(0)
                  : user.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <LogIn className="mr-2 h-4 w-4" />
        Masuk
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Selamat Datang
            </DialogTitle>
            <DialogDescription className="text-center">
              Masuk atau daftar untuk mulai berbagi cerita.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button
              onClick={handleGoogleSignIn}
              disabled={authLoading}
              variant="outline"
              size="lg"
            >
              {authLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <svg
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 381.5 512 244 512 111.8 512 0 400.2 0 261.8S111.8 11.6 244 11.6c67.8 0 125.6 27.5 169.5 71.3l-66.5 64.2c-20-17.5-47.8-29.3-81-29.3-68.5 0-124.5 54.3-124.5 121.3s56 121.3 124.5 121.3c78.3 0 110-55.8 114.3-84.8H244v-75h244z"
                  ></path>
                </svg>
              )}
              Masuk dengan Google
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
