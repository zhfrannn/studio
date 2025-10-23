
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
      logoUrl: 'https://picsum.photos/seed/sdn1/200/200',
      type: 'School',
      location: 'Banda Aceh',
      description: 'A leading elementary school in implementing disaster preparedness curriculum through our platform.',
      participants: 120,
      topContributors: ['Ibu Nurdiani', 'Pak Budi', 'Rizki Aulia'],
    },
    {
      id: 'smp-3-meulaboh',
      name: 'SMPN 3 Meulaboh',
      logoUrl: 'https://picsum.photos/seed/smp3/200/200',
      type: 'School',
      location: 'Aceh Barat',
      description: 'Actively uses AI-generated quizzes and comics to teach local history and resilience.',
      participants: 250,
      topContributors: ['Andi Pratama', 'Siti Zulaikha', 'Ahmad Farhan'],
    },
    {
      id: 'komunitas-peduli-hutan',
      name: 'Komunitas Peduli Hutan',
      logoUrl: 'https://picsum.photos/seed/kph/200/200',
      type: 'NGO',
      location: 'Gayo Lues',
      description: 'An NGO focused on forest conservation, using our platform to educate about fire prevention.',
      participants: 80,
      topContributors: ['Giman', 'Surya Adi', 'Lestari Putri'],
    },
    {
        id: 'sanggar-seni-seudati',
        name: 'Sanggar Seni Seudati',
        logoUrl: 'https://picsum.photos/seed/seudati/200/200',
        type: 'Community',
        location: 'Pidie',
        description: 'A cultural community group preserving the Seudati dance and using our platform for peacebuilding narratives.',
        participants: 60,
        topContributors: ['Maulana Yusuf', 'Cut Indah', 'Teuku Razi'],
      },
      {
        id: 'yayasan-harapan-ibu',
        name: 'Yayasan Harapan Ibu',
        logoUrl: 'https://picsum.photos/seed/yhi/200/200',
        type: 'NGO',
        location: 'Aceh Besar',
        description: 'Empowering women and tsunami survivors through craft and digital literacy, supported by our educational modules.',
        participants: 150,
        topContributors: ['Ibu Aminah', 'Dewi Sartika', 'Nurul Hidayah'],
      },
  ];
  