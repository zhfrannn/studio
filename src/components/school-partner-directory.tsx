
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { schoolPartners, PartnerData } from '@/lib/school-partners-data';
import { Trophy, Users, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';

const PartnerCard = ({
  partner,
  onSelect,
}: {
  partner: PartnerData;
  onSelect: (partner: PartnerData) => void;
}) => {
  return (
    <motion.div
      layoutId={`card-container-${partner.id}`}
      whileHover={{ scale: 1.05, y: -5 }}
      onClick={() => onSelect(partner)}
      className="cursor-pointer"
    >
      <Card className="h-full overflow-hidden text-center transition-shadow hover:shadow-xl">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <motion.div
            layoutId={`logo-${partner.id}`}
            className="relative mb-4 h-24 w-24"
          >
            <Image
              src={partner.logoUrl}
              alt={`${partner.name} logo`}
              fill
              className="rounded-full object-contain"
            />
          </motion.div>
          <motion.h3
            layoutId={`title-${partner.id}`}
            className="font-headline text-lg font-bold"
          >
            {partner.name}
          </motion.h3>
          <motion.div layoutId={`badge-${partner.id}`} className="mt-2">
            <Badge
              variant={
                partner.type === 'School'
                  ? 'default'
                  : partner.type === 'NGO'
                  ? 'secondary'
                  : 'outline'
              }
            >
              {partner.type}
            </Badge>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function SchoolPartnerDirectory() {
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {schoolPartners.map(partner => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            onSelect={setSelectedPartner}
          />
        ))}
      </div>

      <Dialog
        open={!!selectedPartner}
        onOpenChange={() => setSelectedPartner(null)}
      >
        {selectedPartner && (
          <DialogContent className="max-w-2xl">
            <DialogHeader className="items-center text-center">
              <motion.div
                layoutId={`logo-${selectedPartner.id}`}
                className="relative h-24 w-24"
              >
                <Image
                  src={selectedPartner.logoUrl}
                  alt={`${selectedPartner.name} logo`}
                  fill
                  className="rounded-full object-contain"
                />
              </motion.div>
              <motion.div layoutId={`badge-${selectedPartner.id}`} className="pt-2">
                <Badge
                  variant={
                    selectedPartner.type === 'School'
                      ? 'default'
                      : selectedPartner.type === 'NGO'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {selectedPartner.type}
                </Badge>
              </motion.div>
              <DialogTitle asChild>
                <motion.h2
                  layoutId={`title-${selectedPartner.id}`}
                  className="pt-2 font-headline text-2xl"
                >
                  {selectedPartner.name}
                </motion.h2>
              </DialogTitle>
              <DialogDescription>{selectedPartner.description}</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="flex items-center gap-3 rounded-lg border p-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Participants</p>
                        <p className="text-2xl font-bold">{selectedPartner.participants}</p>
                    </div>
                </div>
                 <div className="flex items-center gap-3 rounded-lg border p-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Top Contributors</p>
                        <p className="text-2xl font-bold">{selectedPartner.topContributors.length}</p>
                    </div>
                </div>
            </div>

            <Separator className="my-4" />
            
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Hall of Fame - Top Contributors
              </h3>
              <div className="space-y-3">
                {selectedPartner.topContributors.map((name, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={`https://picsum.photos/seed/${name.replace(/\s/g, '')}/100`} />
                       <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-medium">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
