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
    `I am a Visiting Professor and FWO Postdoctoral Researcher at KU Leuven's Centre for IT & IP Law (CiTiP). My academic background combines legal research in consumer, competition, and data law with computational approaches to legal scholarship.`,
    `I completed my PhD in Laws at KU Leuven in 2023, examining innovation and consumer protection in Internet of Things ecosystems. Before beginning my doctoral research, I studied law at KU Leuven and the University of Oxford.`
  ],
  credentials: [
    {
      year: '2023',
      degree: 'PhD in Laws',
      institution: 'KU Leuven',
      detail: 'Dissertation on innovation and consumer protection in Internet of Things ecosystems.'
    },
    {
      year: '2018',
      degree: 'Magister Juris (MJur)',
      institution: 'University of Oxford'
    },
    {
      year: '2017',
      degree: 'Bachelor of Laws (LL.B.) and Master of Laws (LL.M.)',
      institution: 'KU Leuven'
    }
  ]
};
