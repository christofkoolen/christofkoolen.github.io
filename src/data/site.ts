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

export type PublicationCategory = 'books' | 'articles' | 'outreach';

export type Publication = {
  category: PublicationCategory;
  year: string;
  type: string;
  title: string;
  authors: string;
  venue: string;
  links: SiteLink[];
  bibtex?: string;
  oscola?: string;
};

export const profile = {
  name: 'Christof Koolen',
  title: 'Visiting Professor and FWO Postdoctoral Researcher',
  affiliation: 'The Centre for IT & IP Law, KU Leuven (Belgium)',
  email: 'christof.koolen@kuleuven.be',
  bio: 'I study how artificial intelligence can improve access to legal information while remaining transparent, reliable, and accountable. My work brings together legal information retrieval, computational legal research, and the responsible evaluation of AI systems in legal settings.',
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=yPojlMIAAAAJ' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-2210-6821' },
    { label: 'GitHub', href: 'https://github.com/christofkoolen' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christofkoolen/' }
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

/*
For every publication:
- Set category to books, articles, or outreach.
- Add link objects inside links for PDF, DOI, Publisher, Dataset, or Code.
- Paste BibTeX between the backticks in bibtex.
- Paste an OSCOLA citation in oscola. Use <em>...</em> for italics.
Empty fields are intentionally not shown on the website.
*/
export const publicationResourceTemplate = {
  category: 'articles',
  links: [
    { label: 'PDF', href: '/publications/your-file-name.pdf' },
    { label: 'DOI', href: 'https://doi.org/10.xxxx/your-doi' },
    { label: 'Publisher', href: 'https://publisher.example/article-page' }
  ],
  bibtex: `@article{koolen2025example,
  title = {Replace with the publication title},
  author = {Koolen, Christof and Example, Coauthor},
  journal = {Replace with the journal or book title},
  year = {2025},
  doi = {10.xxxx/your-doi}
}`,
  oscola: `Christof Koolen and Coauthor Example, ‘Replace with the Article Title’ (2025) 1 <em>Journal Title</em> 1`
} satisfies Pick<Publication, 'category' | 'links' | 'bibtex' | 'oscola'>;

export const publications: Publication[] = [
  {
    category: 'books',
    year: '2025',
    type: 'Book',
    title: 'Protecting EU Consumers in Internet of Things Ecosystems: The Intersection Between Consumer, Competition, and Data',
    authors: 'Christof Koolen',
    venue: 'Oxford University Press',
    links: [
      {
        label: 'Publisher',
        href: 'https://academic.oup.com/book/61253'
      }
    ],
    oscola: `Christof Koolen, <em>Protecting EU Consumers in Internet of Things Ecosystems: The Intersection between Consumer, Competition, and Data </em>, (Oxford University Press 2025) 482`,
    bibtex: `@book{koolen_protecting_2025,
	title = {Protecting {EU} {Consumers} in {Internet} of {Things} {Ecosystems}: {The} {Intersection} between {Consumer}, {Competition}, and {Data}},
	isbn = {978-0-19-897258-7 978-0-19-897256-3},
	doi = {10.1093/9780198972563.001.0001},
	abstract = {Abstract
            The number of devices being connected to the internet is growing rapidly. This trend—referred to as the Internet of Things (IoT)—reflects the gradual transformation of everyday objects into smart devices. These smart devices are capable of collecting data from their surroundings and sharing those data over the internet. As a result, the development of the IoT raises extensive legal questions from a consumer protection perspective. First, the functionality of smart devices challenges consumer autonomy and the average consumer’s ability to make well-informed transactional decisions. Second, concerns remain about consumer choice, as switching between products or brands is difficult due to interoperability limitations. Third, consumer privacy is threatened by the data-driven nature of the IoT. Protecting EU Consumers in Internet of Things Ecosystems explores solutions to these challenges by critically analyzing the interplay between EU consumer law, EU competition law, and EU data privacy law, aiming to balance innovation and consumer protection in IoT ecosystems. At a time when society must question how the benefits of IoT can be harnessed for the greater good—rather than posing a threat to consumers, businesses, and governments—this volume offers valuable insights for academics, policymakers, businesses, and anyone interested in understanding the impact of technology on our daily lives.},
	language = {en},
	urldate = {2025-10-09},
	publisher = {Oxford University Press},
	author = {Koolen, Christof},
	year = {2025},
	note = {https://academic.oup.com/book/61253},
  }`
  {
    category: 'articles',
    year: '2025',
    type: 'Journal article',
    title: 'De Digital Services Act na één jaar: naar een meer betrouwbare onlineomgeving?',
    authors: 'Christof Koolen and Monica Schellemans',
    venue: '46(2) Computerrecht: Tijdschrift voor Informatica, Telecommunicatie en Recht 86–103',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_and_Schellemans_2025_DSA.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://www.inview.nl/document/id48f2351fa62e4f648138c688146a9af2/'
      }
    ],
    oscola: `Christof Koolen and Monica Schellemans, ‘De Digital Services Act na één jaar: naar een meer betrouwbare onlineomgeving?’ (2025) 46(2) Computerrecht: Tijdschrift voor Informatica, Telecommunicatie en Recht 86–103`,
    bibtex: `@article{koolen2025dsa,
    author = {Koolen, Christof and Schellemans, Monica},
    title = {De Digital Services Act na één jaar: naar een meer betrouwbare onlineomgeving?},
    journal = {Computerrecht: Tijdschrift voor Informatica, Telecommunicatie en Recht},
    publisher = {Wolters Kluwer},
    year = {2025},
    volume = {46},
    number = {2},
    pages = {86--103}
  }`
  },
  {
    category: 'articles',
    year: '2025',
    type: 'Book chapter',
    title: 'Genesis of the Artificial Intelligence Act: When AI Beats the Imitation Game',
    authors: 'Christof Koolen, C. N. Pehlivan, N. Forgó, and P. Valcke',
    venue: 'Wolters Kluwer',
    links: [],
    bibtex: `@incollection{koolen2025genesis,
  title = {Genesis of the Artificial Intelligence Act: When AI Beats the Imitation Game},
  author = {Koolen, Christof and Pehlivan, C. N. and Forgó, Nikolaus and Valcke, Peggy},
  year = {2025},
  publisher = {Wolters Kluwer}
}`,
    oscola: `Christof Koolen, C N Pehlivan, Nikolaus Forgó and Peggy Valcke, ‘Genesis of the Artificial Intelligence Act: When AI Beats the Imitation Game’ in <em>Artificial Intelligence and the Law</em> (Wolters Kluwer 2025)`
  },
  {
    category: 'articles',
    year: '2024',
    type: 'Journal article',
    title: 'Generative AI, education, and copyright law: An empirical study of policymaking in UK universities',
    authors: 'G. N. La Diega and Christof Koolen',
    venue: 'European Intellectual Property Review, 46(6), 346–360',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2024',
    type: 'Journal article',
    title: 'From insight to compliance: Appropriate technical and organisational security measures through the lens of cybersecurity maturity models',
    authors: 'Christof Koolen, K. Wuyts, W. Joosen, and P. Valcke',
    venue: 'Computer Law & Security Review, 52, 105914',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2023',
    type: 'Journal article',
    title: 'Consumer protection in the age of artificial intelligence: Breaking down the silo mentality between consumer, competition, and data',
    authors: 'Christof Koolen',
    venue: 'European Review of Private Law, 31(2/3)',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2023',
    type: 'Book chapter',
    title: 'AI and Antitrust: Between Collision and Collusion',
    authors: 'Christof Koolen and B. V. den Bosch',
    venue: 'Artificial Intelligence and the Law, 13, 577–621',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2022',
    type: 'Working paper',
    title: "'Apes Gone', but what about Consumer Protection? Applying EU Consumer Law to the Transfer of NFTs",
    authors: 'Christof Koolen',
    venue: 'SSRN 4065776',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2022',
    type: 'Case note',
    title: 'The Refusal to Allow Interoperability Between Android Auto and Third-Party Apps: A Deep Dive into Enel X Italia v. Google',
    authors: 'Christof Koolen',
    venue: 'IIC - International Review of Intellectual Property and Competition Law, 53',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'outreach',
    year: '2021',
    type: 'Professional commentary',
    title: 'Cybersecurity voor het Internet of Things: Hoe beoordeel je de juridische gevolgen van slimme apparaten met beveiligingsproblemen?',
    authors: 'Christof Koolen',
    venue: '',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2021',
    type: 'Journal article',
    title: 'The traceability of construction and demolition waste in Flanders via blockchain technology: A match made in heaven?',
    authors: 'J. Voorter and Christof Koolen',
    venue: 'Journal for European Environmental & Planning Law, 18(4), 347–369',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2021',
    type: 'Journal article',
    title: 'Des appareils intelligents au centre de plusieurs problèmes de concurrence: Le rapport de l’enquête sectorielle de la Commission européenne sur l’Internet des Objets destiné aux consommateurs',
    authors: 'Christof Koolen',
    venue: 'Consumentenrecht / Droit de la Consommation, 73–78',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2021',
    type: 'Case note',
    title: 'Connected cars and FRAND licensing traffic jams: The CJEU referral in C-182/21 Nokia v Daimler',
    authors: 'Christof Koolen',
    venue: '',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2021',
    type: 'Journal article',
    title: 'Transparency and Consent in Data-Driven Smart Environments',
    authors: 'Christof Koolen',
    venue: 'European Data Protection Law Review, 7(2), 174–189',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2020',
    type: 'Book chapter',
    title: 'Blockchaintechnologie, smart contracts en consumentenbescherming',
    authors: 'Christof Koolen',
    venue: 'Smart contracts: een overzicht vanuit juridisch perspectief, 233–295',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2019',
    type: 'Journal article',
    title: 'Vacuum Cleaner Energy Labels and Misleading Commercial Practices: EU Consumers Left in the Dust?',
    authors: 'Christof Koolen',
    venue: 'Journal of European Consumer and Market Law, 8(2), 82–88',
    links: [],
    bibtex: '',
    oscola: ''
  },
  {
    category: 'articles',
    year: '2016',
    type: 'Journal article',
    title: 'The use of hyperlinks in an online environment: putting links in chains?',
    authors: 'Christof Koolen',
    venue: 'Journal of Intellectual Property Law & Practice, 11(8), 585–598',
    links: [],
    bibtex: '',
    oscola: ''
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