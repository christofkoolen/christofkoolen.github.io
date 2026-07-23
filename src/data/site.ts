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
    venue: 'AI Governance and Liability in Europe: A Primer (Wolters Kluwer) 81–115',
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
    oscola: `Christof Koolen, ‘Genesis of the Artificial Intelligence Act: When AI Beats the Imitation Game’ in Ceyhun Necati Pehlivan, Nikolaus Forgó and Peggy Valcke (eds), <em>AI Governance and Liability in Europe: A Primer</em> (Wolters Kluwer 2025) 81–115`,
    bibtex: `@incollection{koolen_2025_genesis,
    title = {Genesis of the {Artificial} {Intelligence} {Act}: {When} {AI} {Beats} the {Imitation} {Game}},
    author = {Koolen, Christof},
    editor = {Pehlivan, Ceyhun Necati and Forgó, Nikolaus and Valcke, Peggy},
    booktitle = {{AI} {Governance} and {Liability} in {Europe}: {A} {Primer}},
    publisher = {Wolters Kluwer},
    year = {2025},
    pages = {81--115}
    }`,
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
    title: 'Consumer Protection in the Age of Artificial Intelligence: Breaking Down the Silo Mentality Between Consumer, Competition, and Data',
    authors: 'Christof Koolen',
    venue: '31(2/3) European Review of Private Law 427–468',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2023_consumer-competition-data.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://kluwerlawonline.com/journalarticle/European+Review+of+Private+Law/31.2/ERPL2023018'
      }
    ],
    oscola: `Christof Koolen, ‘Consumer Protection in the Age of Artificial Intelligence: Breaking Down the Silo Mentality Between Consumer, Competition, and Data’ (2023) 31(2/3) European Review of Private Law 427–468`,
    bibtex: `@article{koolen_2023_consumer-competition-data,
    author = {Koolen, Christof},
    title = {Consumer Protection in the Age of Artificial Intelligence: Breaking Down the Silo Mentality Between Consumer, Competition, and Data},
    journal = {European Review of Private Law},
    publisher = {Wolters Kluwer},
    year = {2023},
    volume = {31},
    number = {2/3},
    pages = {427--468},
    doi = {10.54648/ERPL2023018},
  }`
  },
  
  {
    category: 'articles',
    year: '2023',
    type: 'Book chapter',
    title: 'AI and Antitrust: Between Collision and Collusion',
    authors: 'Christof Koolen and Bruno Van den Bosch',
    venue: 'Artificial Intelligence and the Law (Larcier) 577–621',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_and_VandenBosch_2023_AI_Antitrust.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://www.larcier-intersentia.com/en/artificial-intelligence-the-law-2nd-edition-9781839702525.html'
      }
    ],
    oscola: `Christof Koolen and Bruno Van den Bosch, ‘AI and Antitrust: Between Collision and Collusion’ in Jan De Bruyne and Cedric Vanleenhove (eds), <em>Artificial Intelligence and the Law</em> (2nd edn, Larcier 2023) 577–621`,
    bibtex: `@incollection{koolen_vandenbosch_2023_ai_antitrust,
    title = {AI and Antitrust: Between Collision and Collusion},
    author = {Koolen, Christof and Van den Bosch, Bruno},
    editor = {De Bruyne, Jan and Vanleenhove, Cedric},
    booktitle = {Artificial Intelligence and the Law},
    edition = {2},
    publisher = {Intersentia},
    year = {2023},
    pages = {577--621}
    }`,
  },
  
  {
    category: 'articles',
    year: '2022',
    type: 'Journal article',
    title: 'The Refusal to Allow Interoperability Between Android Auto and Third-Party Apps: A Deep Dive into Enel X Italia v. Google',
    authors: 'Christof Koolen',
    venue: '53 IIC - International Review of Intellectual Property and Competition Law 758–777',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2022_Interoperability.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://link.springer.com/article/10.1007/s40319-022-01190-x'
      }
    ],
    oscola: `Christof Koolen, ‘The Refusal to Allow Interoperability Between Android Auto and Third-Party Apps: A Deep Dive into Enel X Italia v. Google’ (2023) 31(2/3) European Review of Private Law 427–468`,
    bibtex: `@article{koolen_2022_interoperability,
    author = {Koolen, Christof},
    title = {The Refusal to Allow Interoperability Between Android Auto and Third-Party Apps: A Deep Dive into Enel X Italia v. Google},
    journal = {IIC - International Review of Intellectual Property and Competition Law},
    publisher = {Springer},
    year = {2022},
    volume = {53},
    pages = {758--777},
    doi = {https://doi.org/10.1007/s40319-022-01190-x},
  }`
  },

  {
    category: 'articles',
    year: '2021',
    type: 'Journal article',
    title: 'The Traceability of Construction and Demolition Waste in Flanders via Blockchain Technology: A Match Made in Heaven?',
    authors: 'Jonas Voorter and Christof Koolen',
    venue: '18(4) Journal for European Environmental & Planning Law 347–369',
    links: [
      {
        label: 'PDF',
        href: '/publications/Voorter_and_Koolen_2021_Traceability.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://brill.com/view/journals/jeep/18/4/article-p347_347.xml'
      }
    ],
    oscola: `Jonas Voorter and Christof Koolen, ‘The Traceability of Construction and Demolition Waste in Flanders via Blockchain Technology: A Match Made in Heaven?’ (2021) 18(4) Journal for European Environmental & Planning Law 347–369`,
    bibtex: `@article{voorter_koolen_2021_traceability,
    author = {Voorter, Jonas and Koolen, Christof},
    title = {The Traceability of Construction and Demolition Waste in Flanders via Blockchain Technology: A Match Made in Heaven?},
    journal = {Journal for European Environmental & Planning Law},
    publisher = {Brill},
    year = {2021},
    volume = {18},
    number = {4},
    pages = {347--369},
    doi = {https://doi.org/10.1163/18760104-18040003},
  }`
  },

  {
    category: 'articles',
    year: '2021',
    type: 'Journal article',
    title: 'Des appareils intelligents au centre de plusieurs problèmes de concurrence: Le rapport de l’enquête sectorielle de la Commission européenne sur l’Internet des Objets destiné aux consommateurs',
    authors: 'Christof Koolen',
    venue: '132 Droit de la Consommation/Consumentenrecht 73–78',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2021_appareilsintelligents.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://www.larcier-intersentia.com/fr/droit-de-la-consommation-consumentenrecht.html'
      }
    ],
    oscola: `Christof Koolen, ‘Des appareils intelligents au centre de plusieurs problèmes de concurrence: Le rapport de l’enquête sectorielle de la Commission européenne sur l’Internet des Objets destiné aux consommateurs’ (2021) 132 Droit de la Consommation/Consumentenrecht 73–78`,
    bibtex: `@article{koolen_2021_appareilsintelligents,
    author = {Koolen, Christof},
    title = {Des appareils intelligents au centre de plusieurs problèmes de concurrence: Le rapport de l’enquête sectorielle de la Commission européenne sur l’Internet des Objets destiné aux consommateurs},
    journal = {Droit de la Consommation/Consumentenrecht,
    publisher = {Larcier},
    year = {2021},
    volume = {132},
    pages = {73--78},
  }`
  },

  {
    category: 'articles',
    year: '2021',
    type: 'Journal article',
    title: 'Transparency and Consent in Data-Driven Smart Environments',
    authors: 'Christof Koolen',
    venue: '7(2) European Data Protection Law Review 174–189',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2021_Transparency.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://edpl.lexxion.eu/article/EDPL/2021/2/7'
      }
    ],
    oscola: `Christof Koolen, ‘Transparency and Consent in Data-Driven Smart Environments’ (2021) 7(2) European Data Protection Law Review 174–189`,
    bibtex: `@article{koolen_2021_transparency,
    author = {Koolen, Christof},
    title = {Transparency and Consent in Data-Driven Smart Environments},
    journal = {European Data Protection Law Review},
    publisher = {Lexxion},
    year = {2021},
    volume = {7},
    number = {2},
    pages = {174--189},
    doi = {https://doi.org/10.21552/edpl/2021/2/7},
  }`
  },

  {
    category: 'articles',
    year: '2020',
    type: 'Book chapter',
    title: 'Blockchaintechnologie, smart contracts en consumentenbescherming',
    authors: 'Christof Koolen',
    venue: 'Smart contracts: een overzicht vanuit juridisch perspectief (Intersentia) 233–295',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2020_smart_contracts.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://www.larcier-intersentia.com/nl/smart-contracts-9789400011113.html'
      }
    ],
    oscola: `Christof Koolen, ‘Blockchaintechnologie, smart contracts en consumentenbescherming’ in Pieter-Jan Aerts, Frank Hoogendijk and Niels Vandezande (eds), <em>Smart contracts: een overzicht vanuit juridisch perspectief</em> (Intersentia 2020) 233–295`,
    bibtex: `@incollection{koolen_2020_smart_contracts,
    title = {Blockchaintechnologie, smart contracts en consumentenbescherming},
    author = {Koolen, Christof},
    editor = {Aerts, Pieter-Jan and Hoogendijk, Frank and Vandezande, Niels},
    booktitle = {Smart contracts: een overzicht vanuit juridisch perspectief},
    publisher = {Intersentia},
    year = {2020},
    pages = {233--295}
    }`,
  },

  {
    category: 'articles',
    year: '2019',
    type: 'Journal article',
    title: 'Vacuum Cleaner Energy Labels and Misleading Commercial Practices: EU Consumers Left in the Dust?',
    authors: 'Christof Koolen',
    venue: '8(2) Journal of European Consumer and Market Law 82–88',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2019_energy_labels.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://kluwerlawonline.com/journalarticle/Journal+of+European+Consumer+and+Market+Law/8.2/EuCML2019014'
      }
    ],
    oscola: `Christof Koolen, ‘Vacuum Cleaner Energy Labels and Misleading Commercial Practices: EU Consumers Left in the Dust?’ (2019) 8(2) Journal of European Consumer and Market Law 82–88`,
    bibtex: `@article{koolen_2019_energy_labels,
    author = {Koolen, Christof},
    title = {Vacuum Cleaner Energy Labels and Misleading Commercial Practices: EU Consumers Left in the Dust?},
    journal = {Journal of European Consumer and Market Law},
    publisher = {Wolters Kluwer},
    year = {2019},
    volume = {8},
    number = {2},
    pages = {82--88},
  }`
  },

  {
    category: 'articles',
    year: '2016',
    type: 'Journal article',
    title: 'The use of hyperlinks in an online environment: putting links in chains?',
    authors: 'Christof Koolen',
    venue: '11(8) Journal of Intellectual Property Law & Practice 585–598',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2016_Hyperlinks.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://academic.oup.com/jiplp/article/11/8/585/2450270'
      }
    ],
    oscola: `Christof Koolen, ‘The use of hyperlinks in an online environment: putting links in chains?’ (2016) 11(8) Journal of Intellectual Property Law & Practice 585–598`,
    bibtex: `@article{koolen_2016_hyperlinks,
    author = {Koolen, Christof},
    title = {The use of hyperlinks in an online environment: putting links in chains?},
    journal = {Journal of Intellectual Property Law & Practice},
    publisher = {Oxford University Press},
    year = {2016},
    volume = {11},
    number = {8},
    pages = {585--598},
    doi = {https://doi.org/10.1093/jiplp/jpw074},
  }`
  },

  
  // Blogs and other 
  
 
  
  {
    category: 'outreach',
    year: '2026',
    type: 'Blog',
    title: "Slimme technologie, kwetsbare consumenten?",
    authors: 'Christof Koolen',
    venue: 'EOS Wetenschap',
    links: [
      {
        label: 'URL',
        href: 'https://www.eoswetenschap.eu/technologie/slimme-technologie-kwetsbare-consumenten'
      },
    ],
  },
    
    {
    category: 'outreach',
    year: '2025',
    type: 'Podcast',
    title: "De duistere kant van gebruiksgemak",
    authors: 'Christof Koolen',
    venue: 'Kennismakers',
    links: [
      {
        label: 'URL',
        href: 'https://kennismakers.be/podcast/de-duistere-kant-van-gebruiksgemak'
      },
    ],
  },

  {
    category: 'outreach',
    year: '2024',
    type: 'Blog',
    title: "Autonome auto’s: navigeren door het contractuele aansprakelijkheidsrecht",
    authors: 'Amber Boes and Christof Koolen',
    venue: 'Blog Privaatrecht',
    links: [
      {
        label: 'URL',
        href: 'https://www.privaatrecht.com/bijzondereovereenkomsten/autonome-autos-navigeren-door-het-contractuele-aansprakelijkheidsrecht/'
      },
    ],
  },

  {
    category: 'outreach',
    year: '2024',
    type: 'Newspaper article',
    title: "Europa bestormt de torens van big tech, hoe zult u de veranderingen voelen?",
    authors: 'Christof Koolen (contr.)',
    venue: 'De Standaard',
    links: [
      {
        label: 'URL',
        href: 'https://www.standaard.be/economie/europa-bestormt-de-torens-van-big-tech-hoe-zult-u-de-veranderingen-voelen/40760193.html'
      },
    ],
  },


  {
    category: 'outreach',
    year: '2024',
    type: 'Blog',
    title: "Copyright, Education, and Generative AI: Getting with the programme?",
    authors: 'Christof Koolen and Guido Noto La Diega',
    venue: 'Kluwer Copyright Blog',
    links: [
      {
        label: 'URL',
        href: 'https://legalblogs.wolterskluwer.com/copyright-blog/copyright-education-and-generative-ai-getting-with-the-programme/'
      },
    ],
  },

  {
    category: 'outreach',
    year: '2023',
    type: 'Book review',
    title: "Internet of Things and the Law: Legal Strategies for Consumer-Centric Smart Technologies",
    authors: 'Christof Koolen',
    venue: '31(1) International Journal of Law and Information Technology 91–93',
    links: [
      {
        label: 'PDF',
        href: '/publications/Koolen_2023_IoT.pdf'
      },
      {
        label: 'Publisher',
        href: 'https://academic.oup.com/ijlit/article/31/1/91/7226098'
      }
    ],
    oscola: `Christof Koolen, ‘Book Review: Internet of Things and the Law: Legal Strategies for Consumer-Centric Smart Technologies’ (2023) 31(1) International Journal of Law and Information Technology 91–93`,
    bibtex: `@article{koolen_2023_internetofthings,
    author = {Koolen, Christof},
    title = {Internet of Things and the Law: Legal Strategies for Consumer-Centric Smart Technologies"},
    journal = {International Journal of Law and Information Technology},
    publisher = {Oxford University Press},
    year = {2023},
    volume = {31},
    number = {1},
    pages = {91--93},
    doi = {https://doi.org/10.1093/ijlit/eaad011},
  }`
  },

  {
    category: 'outreach',
    year: '2022',
    type: 'Blog',
    title: "'Apes Gone', but what about Consumer Protection? Applying EU Consumer Law to the Transfer of NFTs",
    authors: 'Christof Koolen',
    venue: 'Consumer Competition Market Blog',
    links: [
      {
        label: 'URL',
        href: 'https://www.law.kuleuven.be/ccm/blog/posts/apes-gone-but-what-about-consumer-protection'
      },
    ],
  },

  {
    category: 'outreach',
    year: '2021',
    type: 'Blog',
    title: 'Cybersecurity voor het Internet of Things: Hoe beoordeel je de juridische gevolgen van slimme apparaten met beveiligingsproblemen?',
    authors: 'Christof Koolen',
    venue: 'Cybersecurity Bites',
    links: [
      {
        label: 'URL',
        href: 'https://cybersecurity-bites.be/beveiligingsinfrastructuur/juridische-gevolgen-van-ontoereikende-iot-beveiliging/'
      },
    ],
  },

  {
    category: 'outreach',
    year: '2021',
    type: 'Blog',
    title: 'Connected cars and FRAND licensing traffic jams: The CJEU referral in C-182/21 Nokia v Daimler',
    authors: 'Christof Koolen',
    venue: 'Consumer Competition Market Blog',
    links: [
      {
        label: 'URL',
        href: 'https://www.law.kuleuven.be/ccm/blog/posts/connected-cars-and-frand-licensing-traffic-jams-the-cjeu-referral-in-c-18221-nokia-v-daimler'
      },
    ],
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