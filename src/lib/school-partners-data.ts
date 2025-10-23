
export interface PartnerData {
    id: string;
    name: string;
    logoUrl: string;
    type: 'School' | 'NGO' | 'Community';
    location: string;
    description: string;
    participants: number;
    topContributors: string[];
  }
  
  export const schoolPartners: PartnerData[] = [
    {
      id: 'sdn-1-banda-aceh',
      name: 'SDN 1 Banda Aceh',
      logoUrl: 'https://cdn.dribbble.com/userupload/16865134/file/original-ac6d283eaa706824abed43da7e901dd2.jpeg',
      type: 'School',
      location: 'Banda Aceh',
      description: 'A leading elementary school in implementing disaster preparedness curriculum through our platform.',
      participants: 120,
      topContributors: ['Ibu Nurdiani', 'Pak Budi', 'Rizki Aulia'],
    },
    {
      id: 'smp-3-meulaboh',
      name: 'SMPN 3 Meulaboh',
      logoUrl: 'https://cdn.dribbble.com/userupload/16865092/file/original-286765ae0de4074597bfb6584a571c60.jpeg',
      type: 'School',
      location: 'Aceh Barat',
      description: 'Actively uses AI-generated quizzes and comics to teach local history and resilience.',
      participants: 250,
      topContributors: ['Andi Pratama', 'Siti Zulaikha', 'Ahmad Farhan'],
    },
    {
      id: 'komunitas-peduli-hutan',
      name: 'Komunitas Peduli Hutan',
      logoUrl: 'https://cdn.dribbble.com/userupload/27796411/file/original-992aa78e02707e86da76830a224a2f2d.png',
      type: 'NGO',
      location: 'Gayo Lues',
      description: 'An NGO focused on forest conservation, using our platform to educate about fire prevention.',
      participants: 80,
      topContributors: ['Giman', 'Surya Adi', 'Lestari Putri'],
    },
    {
        id: 'sanggar-seni-seudati',
        name: 'Sanggar Seni Seudati',
        logoUrl: 'https://cdn.dribbble.com/userupload/29829998/file/original-94b1514fe3d528f62a84cf250c5efc1f.png',
        type: 'Community',
        location: 'Pidie',
        description: 'A cultural community group preserving the Seudati dance and using our platform for peacebuilding narratives.',
        participants: 60,
        topContributors: ['Maulana Yusuf', 'Cut Indah', 'Teuku Razi'],
      },
      {
        id: 'yayasan-harapan-ibu',
        name: 'Yayasan Harapan Ibu',
        logoUrl: 'https://cdn.dribbble.com/userupload/32247153/file/original-1fe677ceff3cabb6bf2037dc808ace4d.jpg',
        type: 'NGO',
        location: 'Aceh Besar',
        description: 'Empowering women and tsunami survivors through craft and digital literacy, supported by our educational modules.',
        participants: 150,
        topContributors: ['Ibu Aminah', 'Dewi Sartika', 'Nurul Hidayah'],
      },
  ];
  
