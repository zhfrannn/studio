
'use client';

import { useState } from 'react';
import type { Story, StoryTheme } from '@/lib/types';
import StoryCard from '@/components/story-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Search, Plus, Share } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

interface StoryGridProps {
  allStories: Story[];
}

const allThemes: StoryTheme[] = [
  'Disaster Preparedness',
  'Local Wisdom',
  'Peacebuilding',
];

const ITEMS_PER_PAGE = 5; // 5 stories + 1 share card = 6 items per row

export default function StoryGrid({ allStories }: StoryGridProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { dictionary } = useLanguage();
  const storyGridDict = dictionary.storyGrid;
  
  const allLocations = [...new Set(allStories.filter(s => s.location).map(s => s.location.name))];

  const filteredStories = allStories.filter(story => {
    const themeMatch =
      selectedTheme === 'all' || story.aiThemes.includes(selectedTheme as StoryTheme);
    const locationMatch =
      selectedLocation === 'all' || (story.location && story.location.name === selectedLocation);
    const searchMatch =
      searchTerm.trim() === '' ||
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return themeMatch && locationMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredStories.length / ITEMS_PER_PAGE);
  const paginatedStories = filteredStories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  const themeLabels: Record<StoryTheme, string> = {
    'Disaster Preparedness': storyGridDict.themes.disaster,
    'Local Wisdom': storyGridDict.themes.wisdom,
    Peacebuilding: storyGridDict.themes.peace,
  };


  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
        <Select value={selectedTheme} onValueChange={setSelectedTheme}>
          <SelectTrigger className="w-full sm:w-auto sm:min-w-[180px]">
            <SelectValue placeholder={storyGridDict.filterAllTypes} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{storyGridDict.filterAllTypes}</SelectItem>
            {allThemes.map(theme => (
              <SelectItem key={theme} value={theme}>
                {themeLabels[theme]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-full sm:w-auto sm:min-w-[180px]">
            <SelectValue placeholder={storyGridDict.filterAllLocations} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{storyGridDict.filterAllLocations}</SelectItem>
            {allLocations.map(loc => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder={storyGridDict.searchPlaceholder}
          className="w-full sm:w-auto sm:flex-grow"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button className="w-full sm:w-auto">
          <Search className="mr-2 h-4 w-4" />
          {storyGridDict.searchButton}
        </Button>
      </div>

      {/* Story Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {paginatedStories.map((story, i) => (
            <motion.div
              key={story.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
           {currentPage === totalPages && (
             <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: paginatedStories.length * 0.05 }}
            >
            <Card className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed bg-transparent p-6 text-center transition-all hover:border-primary hover:bg-muted/50">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 font-headline text-xl">{storyGridDict.shareCard.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {storyGridDict.shareCard.description}
              </p>
              <Button asChild>
                <Link href="/share-story">
                  <Share className="mr-2 h-4 w-4" />
                  {storyGridDict.shareCard.cta}
                </Link>
              </Button>
            </Card>
             </motion.div>
           )}
        </AnimatePresence>
      </div>

       {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                aria-disabled={currentPage === 1}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              >
                {storyGridDict.pagination.previous}
              </PaginationPrevious>
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(i + 1);
                  }}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                aria-disabled={currentPage === totalPages}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              >
                {storyGridDict.pagination.next}
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
