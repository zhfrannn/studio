'use client';

import { useState, useEffect } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import type { Story } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/context/language-context';

interface InteractiveMapProps {
  stories: Story[];
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export default function InteractiveMap({ stories }: InteractiveMapProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const { dictionary } = useLanguage();

  const [viewState, setViewState] = useState({
    latitude: 4.695135,
    longitude: 96.749399,
    zoom: 7.5,
    pitch: 50,
    bearing: -15,
  });

  // GSAP animation for smooth transition
  useEffect(() => {
    const { gsap } = require('gsap');
    if (selectedStory) {
      gsap.to(viewState, {
        duration: 2,
        latitude: selectedStory.location.lat,
        longitude: selectedStory.location.lng,
        zoom: 12,
        pitch: 60,
        bearing: 0,
        onUpdate: () => {
          setViewState({ ...viewState });
        },
        ease: 'power3.inOut',
      });
    }
  }, [selectedStory]);

  return (
    <div className="relative h-full min-h-[300px] w-full lg:min-h-[400px]">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/standard"
        style={{ width: '100%', height: '100%' }}
        fog={{
            'range': [0.8, 8],
            'color': 'hsl(var(--background))',
            'horizon-blend': 0.1
        }}
        terrain={{source: 'mapbox-dem', exaggeration: 1.5}}
      >
        <NavigationControl position="top-right" />
        {stories.map(story => (
          <Marker
            key={story.id}
            latitude={story.location.lat}
            longitude={story.location.lng}
            onClick={e => {
              e.originalEvent.stopPropagation();
              setSelectedStory(story);
            }}
          >
            <button
              aria-label={`View story: ${story.title}`}
              className="transform transition-transform duration-200 hover:scale-125"
            >
              <MapPin className="h-8 w-8 fill-red-600 text-white drop-shadow-lg" />
            </button>
          </Marker>
        ))}

        {selectedStory && (
          <Popup
            latitude={selectedStory.location.lat}
            longitude={selectedStory.location.lng}
            onClose={() => setSelectedStory(null)}
            closeOnClick={false}
            anchor="bottom"
            offset={40}
          >
            <Card className="max-w-xs border-0 shadow-none">
              <CardHeader className="p-2">
                <CardTitle className="text-base">{selectedStory.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <p className="mb-2 text-xs text-muted-foreground line-clamp-2">
                  {selectedStory.summary}
                </p>
                <Button size="sm" asChild>
                  <Link href={`/story/${selectedStory.id}`}>
                    {dictionary.storyCard.readMore}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Popup>
        )}
      </Map>
    </div>
  );
}
