export type Credential = {
  year: string;
  degree: string;
  institution: string;
  detail?: string;
};

export const about = {
  introduction: [
    `I am a Visiting Professor and FWO Postdoctoral Researcher at KU Leuven's Centre for IT & IP Law (CiTiP). My academic background combines legal research in consumer, competition, and data law with computational approaches to legal scholarship.`,
    `I completed my PhD in Laws at KU Leuven in 2023, examining innovation and consumer protection in Internet of Things ecosystems. Before beginning my doctoral research, I studied law at KU Leuven and the University of Oxford.`
  ],
  credentials: [
    {
      year: '2023',
      degree: 'Ph.D. in Law',
      institution: 'KU Leuven',
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
    },
  ] satisfies Credential[]
};
