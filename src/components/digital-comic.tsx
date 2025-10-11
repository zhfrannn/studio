
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Comic } from '@/lib/interactive-content';
import Image from 'next/image';
import MotionWrapper from './motion-wrapper';

interface DigitalComicProps {
    comic: Comic;
}

export default function DigitalComic({ comic }: DigitalComicProps) {
    return (
        <section>
            <div className="mb-6">
                <h2 className="font-headline text-3xl font-bold">{comic.title}</h2>
                <p className="mt-1 text-muted-foreground">{comic.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {comic.panels.map((panel, i) => (
                    <MotionWrapper key={i} delay={i * 0.1}>
                        <Card className="flex flex-col overflow-hidden h-full">
                            <CardHeader>
                                <CardTitle className="text-lg">{panel.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col gap-4">
                                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                                        <Image
                                            src={panel.imageUrl}
                                            alt={panel.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={panel.imageHint}
                                        />
                                </div>
                                <CardDescription>{panel.text}</CardDescription>
                            </CardContent>
                        </Card>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    )
}
