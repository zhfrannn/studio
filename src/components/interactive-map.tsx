'use client';

import { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import type { Story } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface InteractiveMapProps {
  stories: Story[];
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export default function InteractiveMap({ stories }: InteractiveMapProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const initialViewState = {
    latitude: 4.695135,
    longitude: 96.749399,
    zoom: 6.5,
  };

  return (
    <div className="relative h-full min-h-[300px] w-full lg:min-h-[400px]">
      <Map
        initialViewState={initialViewState}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl position="top-right" />
        {stories.map(story => (
          <Marker
            key={story.id}
            latitude={story.location.lat}
            longitude={story.location.lng}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedStory(story);
            }}
          >
            <button
              aria-label={`View story: ${story.title}`}
              className="transform transition-transform duration-200 hover:scale-125"
            >
              <MapPin className="h-8 w-8 fill-red-600 text-white" />
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
                  <Link href={`/story/${selectedStory.id}`}>Read Story</Link>
                </Button>
              </CardContent>
            </Card>
          </Popup>
        )}
      </Map>
    </div>
  );
}
