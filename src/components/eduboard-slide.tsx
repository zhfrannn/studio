'use client';

import { Slide } from '@/lib/eduboard-templates';
import {
  AlertTriangle,
  BookCopy,
  CheckCircle,
  GanttChartSquare,
  Goal,
  HeartHandshake,
  Info,
  Lightbulb,
  ListChecks,
  Quote,
  ShieldAlert,
  Sparkles,
  Target,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import WaveMascot from './icons/wave-mascot';

const iconMapping: { [key: string]: React.ElementType } = {
  Lightbulb,
  Sparkles,
  AlertTriangle,
  Goal,
  Target,
  ListChecks,
  CheckCircle,
  Quote,
  HeartHandshake,
  BookCopy,
  Info,
  GanttChartSquare, // Added missing icon
  ShieldAlert, // Added missing icon
};

const SlideLayout = ({ children }: { children: React.ReactNode }) => (
  <Card className="flex h-full w-full flex-col overflow-hidden border-2 shadow-2xl">
    {children}
  </Card>
);

const SlideHeader = ({
  title,
  subtitle,
  icon,
  themeColor,
}: {
  title: string;
  subtitle?: string;
  icon?: string;
  themeColor: string;
}) => {
  const IconComponent = icon ? iconMapping[icon] : null;
  return (
    <div
      className={cn('p-8 text-white', themeColor)}
      style={{
        background: `linear-gradient(135deg, ${themeColor} 0%, oklch(from ${themeColor} l calc(l - 0.1) c h) 100%)`,
      }}
    >
      <div className="flex items-center gap-4">
        {IconComponent && <IconComponent className="h-12 w-12 flex-shrink-0" />}
        <div>
          <h2 className="font-headline text-4xl">{title}</h2>
          {subtitle && <p className="mt-1 text-lg opacity-80">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

const TitleSlide = ({ slide }: { slide: Slide }) => (
  <SlideLayout>
    <div
      className={cn(
        'flex h-full flex-col items-center justify-center p-8 text-center text-white',
        slide.themeColor
      )}
      style={{
        background: `radial-gradient(circle, oklch(from ${slide.themeColor} l calc(l - 0.1) c h) 0%, ${slide.themeColor} 100%)`,
      }}
    >
      <WaveMascot className="mb-6 h-24 w-24" />
      <Badge variant="secondary" className="mb-4">
        {slide.category}
      </Badge>
      <h1 className="font-headline text-5xl md:text-6xl">{slide.title}</h1>
      <p className="mt-4 max-w-2xl text-xl opacity-80">{slide.description}</p>
    </div>
  </SlideLayout>
);

const ContentWithImageSlide = ({ slide }: { slide: Slide }) => (
  <SlideLayout>
    <SlideHeader
      title={slide.title}
      icon={slide.icon}
      themeColor={slide.themeColor}
    />
    <CardContent className="grid flex-grow grid-cols-2 gap-6 p-8">
      <div className="prose prose-lg dark:prose-invert">
        <p>{slide.description}</p>
        <ul>
          {slide.points?.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={slide.imageUrl || 'https://picsum.photos/seed/placeholder/800/600'}
          alt={slide.title}
          fill
          className="object-cover"
        />
      </div>
    </CardContent>
  </SlideLayout>
);

const BulletPointsSlide = ({ slide }: { slide: Slide }) => (
  <SlideLayout>
    <SlideHeader
      title={slide.title}
      icon={slide.icon}
      themeColor={slide.themeColor}
    />
    <CardContent className="flex-grow p-8">
      <ul className="space-y-6">
        {slide.points?.map((point, i) => (
          <li key={i} className="flex items-start gap-4">
            <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
            <span className="text-xl text-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </SlideLayout>
);

const QuoteSlide = ({ slide }: { slide: Slide }) => (
  <SlideLayout>
    <div className="flex h-full flex-col items-center justify-center bg-muted/30 p-8 text-center">
      <Quote
        className={cn('h-16 w-16', slide.themeColor.replace('bg-', 'text-'))}
      />
      <blockquote className="mt-6 max-w-3xl font-headline text-4xl text-foreground">
        "{slide.description}"
      </blockquote>
      {slide.metadata?.author && (
        <cite className="mt-4 text-xl text-muted-foreground not-italic">
          — {slide.metadata.author}
        </cite>
      )}
    </div>
  </SlideLayout>
);

const InfographicSlide = ({ slide }: { slide: Slide }) => (
  <SlideLayout>
    <SlideHeader
      title={slide.title}
      icon={slide.icon}
      themeColor={slide.themeColor}
    />
    <CardContent className="grid flex-grow grid-cols-1 gap-6 p-8 md:grid-cols-3">
      {slide.points?.map((point, i) => {
        const [header, ...rest] = point.split(':');
        const body = rest.join(':');
        const Icon = iconMapping[slide.metadata?.pointIcons?.[i] || 'Info'];
        return (
          <div
            key={i}
            className="flex flex-col items-center rounded-lg border bg-card p-6 text-center"
          >
            <div
              className={cn(
                'mb-4 flex h-16 w-16 items-center justify-center rounded-full',
                slide.themeColor.replace('bg-', 'bg-') + '/10',
                slide.themeColor.replace('bg-', 'text-')
              )}
            >
              {Icon && <Icon className="h-8 w-8" />}
            </div>
            <h3 className="font-headline text-xl">{header}</h3>
            <p className="mt-1 text-muted-foreground">{body}</p>
          </div>
        );
      })}
    </CardContent>
  </SlideLayout>
);

const SectionHeaderSlide = ({ slide }: { slide: Slide }) => (
  <SlideLayout>
    <div className="flex h-full flex-col items-center justify-center bg-muted/50 p-8 text-center">
      <Badge className="mb-4" variant="outline">
        {slide.category}
      </Badge>
      <h2 className="font-headline text-5xl">{slide.title}</h2>
      <p className="mt-2 max-w-xl text-lg text-muted-foreground">
        {slide.description}
      </p>
    </div>
  </SlideLayout>
);

const EndSlide = ({ slide }: { slide: Slide }) => (
    <SlideLayout>
      <div
        className={cn(
          'flex h-full flex-col items-center justify-center p-8 text-center text-white',
          slide.themeColor
        )}
        style={{
            background: `linear-gradient(135deg, ${slide.themeColor} 0%, oklch(from ${slide.themeColor} l calc(l + 0.1) c h) 100%)`,
        }}
      >
        <BookCopy className="mb-6 h-24 w-24" />
        <h1 className="font-headline text-5xl">{slide.title}</h1>
        <p className="mt-4 max-w-2xl text-xl opacity-80">{slide.description}</p>
      </div>
    </SlideLayout>
  );

const componentMap: { [key: string]: React.FC<{ slide: Slide }> } = {
  'title-slide': TitleSlide,
  'content-with-image': ContentWithImageSlide,
  'bullet-points': BulletPointsSlide,
  'quote': QuoteSlide,
  'infographic': InfographicSlide,
  'section-header': SectionHeaderSlide,
  'end-slide': EndSlide,
};

export default function EduBoardSlide({ slide }: { slide: Slide }) {
  const SlideComponent = componentMap[slide.layout] || BulletPointsSlide; // Default to a safe layout
  return <SlideComponent slide={slide} />;
}
