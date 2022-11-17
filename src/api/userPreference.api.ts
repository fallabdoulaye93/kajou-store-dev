export interface UserprefItem {
  image: string;
  title: string;
  backgroundColor: string;
}

export interface KajouLangsprefItem {
  id: number;
  language: string;
  default: boolean;
}

export const getKajouLangs = (): Promise<KajouLangsprefItem[]> => {
  return new Promise((res) => {
    res([
      {
        id: 2,
        language: 'ANGLAIS',
        default: false
      },
      {
        id: 3,
        language: 'UKRAINIEN',
        default: false
      }
    ]);
  });
};

export const getKajouPref = (): Promise<UserprefItem[]> => {
  return new Promise((res) => {
    res([
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_education.png',
        title: 'Education',
        backgroundColor: '#FC6854',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_rocket.png',
        title: 'Entreprenariat',
        backgroundColor: '#4ABC96',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_health.png',
        title: 'Santé',
        backgroundColor: '#F4AE0C',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_soccer.png',
        title: 'Culture & loisir',
        backgroundColor: '#0263B5',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_find.png',
        title: 'Entreprenariat',
        backgroundColor: '#4ABC96',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_agriculture.png',
        title: 'Santé',
        backgroundColor: '#F4AE0C',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_science.png',
        title: 'Culture & loisir',
        backgroundColor: '#0263B5',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_pikachu.png',
        title: 'Santé',
        backgroundColor: '#F4AE0C',
      },
      {
        image: 'https://layefall93.alwaysdata.net/iconstore/np_hammer.png',
        title: 'Culture & loisir',
        backgroundColor: '#0263B5',
      }
    ]);
  });
};
