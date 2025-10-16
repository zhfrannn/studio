import Link from 'next/link';
import { Button } from '@/components/ui/button';
import WaveMascot from '@/components/icons/wave-mascot';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <WaveMascot className="mb-6 h-24 w-24 text-primary" />
      <h1 className="mb-2 font-headline text-4xl font-bold md:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Oops! It looks like the wave took you to the wrong page.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
