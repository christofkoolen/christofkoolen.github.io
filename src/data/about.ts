export type Credential = {
  year: string;
  degree: string;
  institution: string;
  detail?: string;
};

export type About = {
  introduction: string[];
  credentials: Credential[];
};

export const about: About = {
  introduction: [
    `I work at the KU Leuven’s Centre for IT & IP Law in Belgium as an FWO postdoctoral researcher and I also teach Introduction to AI Technologies as a Visiting Professor in the Advanced Master of Laws program. My current research asks a fairly practical question: what can natural language processing add to the way legal scholars conduct research? As such, I study how computational methods can be used to work with large bodies of legal text, detect patterns, and test questions that are otherwise difficult to answer.`,

    `A good deal of my work moves back and forth between law and computer science. That means combining legal analysis with data and code (while keeping an eye on what computational methods cannot tell us). I am particularly interested in methods that can contribute to the legal domain in a broad sense.`,

    'My teaching covers both the technical foundations of artificial intelligence as well as the legal framework that is developing around it. I am also responsible for coordinating IusStart, an alternative master’s thesis track in which students provide legal advice to start-ups under the guidance of a law firm.',

    'My past projects range from conventional academic work, including a monograph published by Oxford University Press, to more experimental work, such as creating an algorithmic pipeline for allocating master’s thesis topics.',
  ],
  credentials: [
    {
      year: '2023',
      degree: 'Ph.D. in Law',
      institution: 'KU Leuven'
    },
    {
      year: '2018',
      degree: 'Magister Juris (MJur)',
      institution: 'University of Oxford'
    },
    {
      year: '2017',
      degree: 'Master of Laws (LL.M.)',
      institution: 'KU Leuven'
    },
    {
      year: '2016',
      degree: 'Erasmus exchange',
      institution: 'University of Southampton'
    },
    {
      year: '2015',
      degree: 'Bachelor of Laws (LL.B.)',
      institution: 'KU Leuven'
    }
  ]
};
