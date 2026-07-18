export type SiteLink = {
  label: string;
  href: string;
};

export type Talk = {
  date: string;
  title: string;
  event: string;
  location: string;
  links: SiteLink[];
};

export const profile = {
  name: 'Christof Koolen',
  title: 'Researcher in Law and Artificial Intelligence',
  affiliation: 'Add current institution and department',
  email: 'your.email@example.com',
  bio: 'I study how artificial intelligence can improve access to legal information while remaining transparent, reliable, and accountable. My work brings together legal information retrieval, computational legal research, and the responsible evaluation of AI systems in legal settings.',
  links: [
    { label: 'Google Scholar', href: '#' },
    { label: 'ORCID', href: '#' },
    { label: 'GitHub', href: 'https://github.com/christofkoolen' },
    { label: 'LinkedIn', href: '#' }
  ] satisfies SiteLink[]
};

export const research = [
  {
    title: 'Legal information retrieval',
    description: 'Developing and evaluating retrieval systems that help researchers and practitioners find relevant legislation, case law, and other legal materials.'
  },
  {
    title: 'Artificial intelligence and law',
    description: 'Studying the capabilities, limitations, and governance of machine-learning and language-model systems used in legal contexts.'
  },
  {
    title: 'Computational legal research',
    description: 'Using computational methods to investigate legal texts, institutions, and decision-making at scale.'
  }
];

export const publications = [
  {
    year: '2026',
    type: 'Working paper',
    title: 'Add publication title',
    authors: 'Christof Koolen and co-authors',
    venue: 'Add venue or status',
    links: [{ label: 'Abstract', href: '#' }]
  },
  {
    year: '2025',
    type: 'Dataset',
    title: 'Add dataset or software contribution',
    authors: 'Christof Koolen',
    venue: 'Repository or archive',
    links: [{ label: 'Repository', href: '#' }]
  }
];

export const teaching = [
  {
    term: 'Add term',
    title: 'Add course title',
    institution: 'Add institution',
    role: 'Lecturer / teaching assistant / guest lecturer',
    description: 'Add a concise description of the course and your contribution.'
  }
];

export const talks: Talk[] = [
  {
    date: 'Add date',
    title: 'Add talk title',
    event: 'Add conference, workshop, or institution',
    location: 'Add location',
    links: []
  }
];
