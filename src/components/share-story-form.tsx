'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquareText } from 'lucide-react';
import { stories } from '@/lib/data';

const formSchema = z.object({
  name: z.string().optional(),
  location: z.string().nonempty({ message: 'Lokasi harus diisi.' }),
  storyType: z
    .array(z.string())
    .refine(value => value.some(item => item), {
      message: 'Anda harus memilih setidaknya satu jenis cerita.',
    }),
  story: z
    .string()
    .min(10, { message: 'Cerita harus lebih dari 10 karakter.' })
    .max(2000, { message: 'Cerita tidak boleh lebih dari 2000 karakter.' }),
  agree: z.boolean().refine(value => value === true, {
    message: 'Anda harus menyetujui syarat dan ketentuan.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const storyTypes = [
  { id: 'Tsunami', label: 'Tsunami' },
  { id: 'Recovery', label: 'Pemulihan' },
  { id: 'Peace Process', label: 'Proses Perdamaian' },
  { id: 'Local Wisdom', label: 'Kearifan Lokal' },
];

const locations = [...new Set(stories.map(s => s.location.name))];

export default function ShareStoryForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      storyType: [],
      story: '',
      agree: false,
    },
  });

  function onSubmit(data: FormValues) {
    const { name, location, storyType, story } = data;
    const message = `Halo, saya ingin berbagi cerita.
Nama: ${name || 'Anonim'}
Lokasi: ${location}
Jenis Cerita: ${storyType.join(', ')}
Cerita:
${story}`;

    const whatsappUrl = `https://wa.me/6285296443101?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-8 text-white">
        <div className="space-y-6">
          <h3 className="font-headline text-2xl">Cara Berkontribusi</h3>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/30 font-bold">
                1
              </span>
              <div>
                <h4 className="font-semibold">Kirim via WhatsApp</h4>
                <p className="text-sm opacity-90">
                  Gunakan asisten WhatsApp kami untuk membagikan cerita Anda
                  dalam bentuk teks, catatan suara, atau video pendek.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/30 font-bold">
                2
              </span>
              <div>
                <h4 className="font-semibold">Dapatkan Bantuan AI</h4>
                <p className="text-sm opacity-90">
                  Bot kami akan membantu menyusun cerita Anda dan mengajukan
                  pertanyaan klarifikasi jika diperlukan.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/30 font-bold">
                3
              </span>
              <div>
                <h4 className="font-semibold">Terima Umpan Balik</h4>
                <p className="text-sm opacity-90">
                  Dapatkan konten pendidikan yang dipersonalisasi berdasarkan
                  pengalaman Anda.
                </p>
              </div>
            </li>
          </ol>
          <div className="rounded-lg bg-black/20 p-4">
            <h4 className="font-semibold">Ide Prompt</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm opacity-90">
              <li>"Di mana Anda saat tsunami terjadi?"</li>
              <li>
                "Bagaimana komunitas Anda pulih dalam beberapa bulan setelahnya?"
              </li>
              <li>
                "Pelajaran apa tentang perdamaian yang Anda pelajari dari
                bencana tersebut?"
              </li>
              <li>
                "Bagaimana kearifan lokal (smong) memengaruhi kesiapan keluarga
                Anda?"
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 font-headline text-2xl">Mulai Berbagi</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Anda (opsional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Anda" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lokasi</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih lokasi Anda" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map(loc => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storyType"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Jenis Cerita</FormLabel>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {storyTypes.map(item => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="storyType"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={checked => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              value => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="story"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cerita Anda</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ceritakan pengalaman Anda..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Saya menyetujui syarat dan ketentuan dan mengizinkan
                        cerita saya digunakan untuk tujuan pendidikan.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full">
                <MessageSquareText />
                Kirim via WhatsApp
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
