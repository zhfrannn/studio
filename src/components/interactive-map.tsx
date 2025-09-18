import Image from 'next/image';
import { Card } from './ui/card';

const InteractiveMap = () => {
  return (
    <div className="relative h-full min-h-[300px] w-full lg:min-h-[400px]">
      <Image
        src="https://picsum.photos/seed/map/800/600"
        alt="Interactive map of Aceh"
        fill
        className="object-cover"
        data-ai-hint="map Aceh"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <Card className="bg-background/80 p-4 text-center backdrop-blur-sm">
          <p className="font-semibold">Interactive Map</p>
          <p className="text-sm text-muted-foreground">Coming Soon</p>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;
