import { profile, type PublicationCategory } from '../data/site';

export type PageKey = 'home' | 'publications' | 'teaching' | 'talks';

export type NavigationItem = {
  label: string;
  href: string;
  page?: PageKey;
};

export type PageMetadata = {
  title: string;
  description: string;
};

export const navigation: NavigationItem[] = [
  { label: 'about', href: '/#about' },
  { label: 'research', href: '/#research' },
  { label: 'publications', href: '/publications/', page: 'publications' },
  { label: 'teaching', href: '/teaching/', page: 'teaching' },
  { label: 'talks', href: '/talks/', page: 'talks' }
];

export const pageMetadata: Record<PageKey, PageMetadata> = {
  home: {
    title: `${profile.name} | Law, AI and Computational Legal Research`,
    description: `${profile.name} researches law, artificial intelligence, legal information retrieval, and computational legal studies.`
  },
  publications: {
    title: `Publications | ${profile.name}`,
    description: `${profile.name}'s books, journal articles, book chapters, blogs, and public-facing research.`
  },
  teaching: {
    title: `Teaching | ${profile.name}`,
    description: `${profile.name}'s teaching experience in artificial intelligence, technology, and law.`
  },
  talks: {
    title: `Talks | ${profile.name}`,
    description: `${profile.name}'s talks, lectures, and conference presentations on law, artificial intelligence, and legal informatics.`
  }
};

export const publicationGroups: ReadonlyArray<{
  key: PublicationCategory;
  title: string;
}> = [
  { key: 'books', title: 'Books' },
  { key: 'articles', title: 'Articles and book chapters' },
  { key: 'outreach', title: 'Blogs and outreach' }
];

export const selectedPublicationTitles = new Set([
  'Protecting EU Consumers in Internet of Things Ecosystems: The Intersection Between Consumer, Competition, and Data',
  'Genesis of the Artificial Intelligence Act: When AI Beats the Imitation Game',
  'Generative AI, Education, and Copyright Law: An Empirical Study of Policymaking in UK Universities',
  'Consumer Protection in the Age of Artificial Intelligence: Breaking Down the Silo Mentality Between Consumer, Competition, and Data'
]);
