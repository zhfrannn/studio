
'use client';

import { useState, useEffect } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import type { Story } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/context/language-context';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface InteractiveMapProps {
  stories: Story[];
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export default function InteractiveMap({ stories }: InteractiveMapProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const { dictionary } = useLanguage();
  const [fog, setFog] = useState({});

  const [viewState, setViewState] = useState({
    latitude: 4.695135,
    longitude: 96.749399,
    zoom: 7.5,
    pitch: 50,
    bearing: -15,
  });

  useEffect(() => {
    // We need to get the computed style of the background color
    // because Mapbox fog doesn't understand CSS variables or space-separated HSL values.
    // This needs to run on the client after the component has mounted.
    if (typeof window !== 'undefined') {
        const backgroundColorValue = getComputedStyle(document.body).getPropertyValue(
          '--background'
        );
        if (backgroundColorValue) {
          // Convert space-separated HSL "210 40% 98%" to comma-separated "hsl(210, 40%, 98%)"
          const formattedColor = `hsl(${backgroundColorValue.trim().replace(/ /g, ', ')})`;
          setFog({
            range: [0.8, 8],
            color: formattedColor,
            'horizon-blend': 0.1,
          });
        }
    }
  }, []);

  // GSAP animation for smooth transition
  useEffect(() => {
    const { gsap } = require('gsap');
    if (selectedStory && selectedStory.location) {
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
  }, [selectedStory, viewState]);

  return (
    <div className="relative h-full min-h-[300px] w-full lg:min-h-[400px]">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/standard"
        style={{ width: '100%', height: '100%' }}
        fog={fog}
        terrain={{source: 'mapbox-dem', exaggeration: 1.5}}
      >
        <NavigationControl position="top-right" />
        {stories.map(story =>
          story.location ? (
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
                <MapPin className="h-8 w-8 fill-primary text-white drop-shadow-lg" />
              </button>
            </Marker>
          ) : null
        )}

        <AnimatePresence>
          {selectedStory && selectedStory.location && (
            <Popup
              latitude={selectedStory.location.lat}
              longitude={selectedStory.location.lng}
              onClose={() => setSelectedStory(null)}
              closeButton={false}
              closeOnClick={false}
              anchor="bottom"
              offset={40}
              className="z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="max-w-xs overflow-hidden border-0 shadow-2xl">
                  <div className="relative h-32 w-full">
                    <Image
                      src={selectedStory.media.featuredImage}
                      alt={selectedStory.title}
                      fill
                      className="object-cover"
                      data-ai-hint={selectedStory.media.featuredImageHint}
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-bold leading-tight">
                      {selectedStory.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <Button size="sm" asChild className="w-full">
                      <Link href={`/story/${selectedStory.id}`}>
                        {dictionary.storyCard.readMore}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Popup>
          )}
        </AnimatePresence>
      </Map>
    </div>
  );
}
