'use client';

import { useState, useEffect, useRef } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  type MapRef,
} from 'react-map-gl';
import type { Story } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/context/language-context';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type { ViewState } from 'react-map-gl';
import { cn } from '@/lib/utils';

interface InteractiveMapProps {
  stories: Story[];
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export default function InteractiveMap({ stories }: InteractiveMapProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const { dictionary } = useLanguage();
  const [fog, setFog] = useState({});
  const mapRef = useRef<MapRef>(null);

  const [viewState, setViewState] = useState<Partial<ViewState>>({
    latitude: 4.695135,
    longitude: 96.749399,
    zoom: 7.5,
    pitch: 50,
    bearing: -15,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const backgroundColorValue = getComputedStyle(document.body).getPropertyValue(
        '--background'
      );
      if (backgroundColorValue) {
        const formattedColor = `hsl(${backgroundColorValue.trim().replace(/ /g, ', ')})`;
        setFog({
          range: [0.8, 8],
          color: formattedColor,
          'horizon-blend': 0.1,
        });
      }
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (selectedStory && selectedStory.location && map) {
      map.flyTo({
        center: [selectedStory.location.lng, selectedStory.location.lat],
        zoom: 14,
        pitch: 60,
        bearing: 0,
        duration: 4000, // 4 seconds for a slow flight
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }, [selectedStory]);

  return (
    <div className="relative h-full min-h-[300px] w-full lg:min-h-[400px]">
      <Map
        ref={mapRef}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/standard"
        style={{ width: '100%', height: '100%' }}
        fog={fog}
        terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
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
                <MapPin
                  className={cn(
                    'h-8 w-8 text-white drop-shadow-lg transition-all duration-300',
                    selectedStory?.id === story.id
                      ? 'fill-red-500 scale-150'
                      : 'fill-primary scale-100'
                  )}
                />
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
              offset={50} // Increased offset for the larger pin
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
