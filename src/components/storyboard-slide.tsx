'use client';

import Image from 'next/image';
import { StoryboardSlideData } from '@/lib/eduboard-templates';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface StoryboardSlideProps {
  slide: StoryboardSlideData;
}

export default function StoryboardSlide({ slide }: StoryboardSlideProps) {
  const images = [
    'https://cdn.dribbble.com/userupload/26382361/file/original-a94049296846fa5218859ac34ea57b23.png',
    'https://cdn.dribbble.com/userupload/27796411/file/original-992aa78e02707e86da76830a224a2f2d.png',
    'https://cdn.dribbble.com/userupload/29829998/file/original-94b1514fe3d528f62a84cf250c5efc1f.png'
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-background text-foreground shadow-xl">
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          {slide.title}
        </p>
        <p className="text-sm text-muted-foreground">{slide.subtitle}</p>
      </div>
      <Separator />

      <div className="grid flex-grow grid-rows-3 gap-2 p-4">
        {slide.columns.map((col, index) => (
          <div key={index} className="grid grid-cols-3 gap-3 overflow-hidden rounded-lg bg-muted/50 p-3">
            <div className="relative col-span-1 h-full w-full overflow-hidden rounded-md">
              <Image
                src={images[index % images.length]}
                alt={col.title}
                fill
                className="object-cover"
                data-ai-hint={col.imageHint}
              />
            </div>
            <div className="col-span-2">
              <h4 className="text-sm font-bold">{col.title}</h4>
              <p className="text-xs text-muted-foreground">{col.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
