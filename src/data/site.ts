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
  bio: [
  `I study how artificial intelligence can improve access to legal information while remaining transparent, reliable, and accountable. My work brings together legal information retrieval, computational legal research, and the responsible evaluation of AI systems in legal settings.`,

  `I am always interested in collaborating with researchers from law, computer science, and social sciences. If you think our interests overlap, feel free to get in touch!`
  ],
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
    bibtex: `@book{koolen_2025_protecting,
    title = {Protecting {EU} {Consumers} in {Internet} of {Things} {Ecosystems}: {The} {Intersection} between {Consumer}, {Competition}, and {Data}},
    author = {Koolen, Christof},
    year = {2025},
    publisher = {Oxford University Press},
    pagetotal = {482},
    isbn = {978-0-19-897258-7 978-0-19-897256-3},
    doi = {10.1093/9780198972563.001.0001},
    abstract = {The number of devices being connected to the internet is growing rapidly. This trend, referred to as the Internet of Things (IoT), reflects the gradual transformation of everyday objects into smart devices. These smart devices are capable of collecting data from their surroundings and sharing those data over the internet. As a result, the development of the IoT raises extensive legal questions from a consumer protection perspective. First, the functionality of smart devices challenges consumer autonomy and the average consumer’s ability to make well-informed transactional decisions. Second, concerns remain about consumer choice, as switching between products or brands is difficult due to interoperability limitations. Third, consumer privacy is threatened by the data-driven nature of the IoT. Protecting EU Consumers in Internet of Things Ecosystems explores solutions to these challenges by critically analyzing the interplay between EU consumer law, EU competition law, and EU data privacy law, aiming to balance innovation and consumer protection in IoT ecosystems. At a time when society must question how the benefits of IoT can be harnessed for the greater good—rather than posing a threat to consumers, businesses, and governments—this volume offers valuable insights for academics, policymakers, businesses, and anyone interested in understanding the impact of technology on our daily lives.},
    language = {en},
    note = {https://academic.oup.com/book/61253},
  }`
  },
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
    bibtex: `@article{koolen_2025_dsa,
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
    authors: 'Christof Koolen',
    venue: 'AI Governance and Liability in Europe: A Primer (Wolters Kluwer)',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2025_Genesis.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://law-store.wolterskluwer.com/s/product/ai-governance-and-liability-in-europe-a-primer/01tPg000005OKCRIA4'
      }
    ],
    bibtex: `@incollection{koolen_2025_genesis,
  title = {Genesis of the {Artificial} {Intelligence} {Act}: {When} {AI} {Beats} the {Imitation} {Game}},
  author = {Koolen, Christof},
  editor = {Pehlivan, Ceyhun Necati and Forgó, Nikolaus and Valcke, Peggy},
  author = {Koolen, Christof and Pehlivan, C. N. and Forgó, Nikolaus and Valcke, Peggy},
  booktitle = {{AI} {Governance} and {Liability} in {Europe}: {A} {Primer}},
  publisher = {Wolters Kluwer},
  year = {2025},
  pages = {81--115}
  }`,
    oscola: `Christof Koolen, ‘Genesis of the Artificial Intelligence Act: When AI Beats the Imitation Game’ in Ceyhun Necati Pehlivan, Nikolaus Forgó and Peggy Valcke (eds), <em>AI Governance and Liability in Europe: A Primer</em> (Wolters Kluwer 2025) 81–115`
  },
  {
    category: 'articles',
    year: '2024',
    type: 'Journal article',
    title: 'Generative AI, Education, and Copyright Law: An Empirical Study of Policymaking in UK Universities',
    authors: 'Guido Noto La Diega and Christof Koolen',
    venue: '46(6) European Intellectual Property Review 346–360',
    links: [
      {
        label: 'PDF',
        href: '/publications/Noto_La_Diega_and_Koolen_2024_GenAI_and_Copyright.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://search.informit.org/doi/10.3316/informit.T2024082300021591119693876'
      }
    ],
    oscola: `Guido Noto La Diega and Christof Koolen, ‘Generative AI, Education, and Copyright Law: An Empirical Study of Policymaking in UK Universities’ (2024) 46(6) European Intellectual Property Review 346–360`,
    bibtex: `@article{notoladiega_2024_genai,
    author = {Noto La Diega, Guido and Koolen, Christof},
    title = {Generative AI, Education, and Copyright Law: An Empirical Study of Policymaking in UK Universities},
    journal = {European Intellectual Property Review},
    publisher = {Sweet & Maxwell},
    year = {2024},
    volume = {46},
    number = {6},
    pages = {346--360}
  }`
  },
    {
    category: 'articles',
    year: '2024',
    type: 'Journal article',
    title: 'Autonome auto’s: navigeren door het contractuele aansprakelijkheidsrecht',
    authors: 'Amber Boes and Christof Koolen',
    venue: '5 Tijdschrift voor Belgisch Handelsrecht 555–567',
    links: [
      {
        label: 'PDF',
        href: '/publications/Boes_and_Koolen_2024_Autonome_Autos.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://www.rdc-tbh.be/nl/articles/26/'
      }
    ],
    oscola: `Amber Boes and Christof Koolen, ‘Autonome auto’s: navigeren door het contractuele aansprakelijkheidsrecht’ (2024) 5 Tijdschrift voor Belgisch Handelsrecht 555–567`,
    bibtex: `@article{boes_2024_auto,
    author = {Boes, Amber and Koolen, Christof},
    title = {Autonome auto’s: navigeren door het contractuele aansprakelijkheidsrecht},
    journal = {Tijdschrift voor Belgisch Handelsrecht},
    publisher = {Larcier},
    year = {2024},
    volume = {5},
    pages = {555--567}
  }`
  },
  {
    category: 'articles',
    year: '2024',
    type: 'Journal article',
    title: 'From insight to compliance: Appropriate technical and organisational security measures through the lens of cybersecurity maturity models',
    authors: 'Christof Koolen and Kim Wuyts and Wouter Joosen and Peggy Valcke',
    venue: '52 Computer Law & Security Review, 1–10',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_et_al_2024_Insight.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0267364923001243'
      }
    ],
    oscola: `Christof Koolen et al., ‘From insight to compliance: Appropriate technical and organisational security measures through the lens of cybersecurity maturity models’ (2024) 52 Computer Law & Security Review 1–10`,
    bibtex: `@article{koolen_2024_insight,
    author = {Koolen, Christof and Wuyts, Kim and Joosen, Wouter and Valcke, Peggy},
    title = {From insight to compliance: Appropriate technical and organisational security measures through the lens of cybersecurity maturity models},
    journal = {Computer Law & Security Review},
    publisher = {Elsevier},
    year = {2024},
    volume = {52},
    pages = {1--10},
    doi = {10.1016/j.clsr.2023.105914},
  }`
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
    type: 'Case note',
    title: 'The Refusal to Allow Interoperability Between Android Auto and Third-Party Apps: A Deep Dive into Enel X Italia v. Google',
    authors: 'Christof Koolen',
    venue: 'IIC - International Review of Intellectual Property and Competition Law, 53',
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
  },



  {
    category: 'outreach',
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
    category: 'outreach',
    year: '2021',
    type: 'Case note',
    title: 'Connected cars and FRAND licensing traffic jams: The CJEU referral in C-182/21 Nokia v Daimler',
    authors: 'Christof Koolen',
    venue: '',
    links: [],
    bibtex: '',
    oscola: ''
  },
];

export const teaching = [
  {
    term: '2024-2026',
    title: 'Introduction to AI Technologies',
    institution: 'KU Leuven',
    role: 'Visiting Professor',
    description: 'This course introduces law students to the technical foundations of modern artificial intelligence. Instead of treating AI as a black box, students develop an understanding of how AI systems are built and trained, from the fundamentals of machine learning and neural networks to large language models and contemporary AI applications such as retrieval-augmented generation (RAG). The course equips students with the technical knowledge needed to critically engage with the governance and regulation of AI.'
  },
  {
    term: '2024-2025',
    title: 'European Economic Law',
    institution: 'KU Leuven',
    role: 'Substitute Lecturer',
    description: 'Add a concise description of the course and your contribution.'
  },
  {
    term: '2024-2025',
    title: 'Recht en Artificiële Intelligentie',
    institution: 'KU Leuven',
    role: 'Substitute Lecturer',
    description: 'Add a concise description of the course and your contribution.'
  },
  {
    term: '2024-2025',
    title: 'AI and Society: Core Concepts',
    institution: 'KU Leuven',
    role: 'Substitute Lecturer',
    description: 'Add a concise description of the course and your contribution.'
  },
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