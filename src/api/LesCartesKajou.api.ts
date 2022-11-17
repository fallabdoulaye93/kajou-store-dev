import axios from "axios";
import {UserprefItem} from "@app/api/userPreference.api";
import {ITag} from "@app/components/Tag/Tag";
import {ICardAvailability} from "@app/components/CardAvailability/CardAvailability";
import {ICardPartenaire} from "@app/components/CardPartenaires/CardPartenaire";
import {ICategorieAvant} from "@app/components/CategorieAvant/CategorieAvant";

export interface CartesKajouData {
  idCard: string;
  type: string;
  activable: string;
  cyphering: string;
  titre: string;
  URL: string;
  nomCarte: string;
  version: string;
  taille: string;
  descriptionGlobal: string;
  descriptionCourte: string;
  couleurCarte: string;
  dateCreation: string;
  dateSortie: string;
  logo: string;
  image: string;
  published: boolean;
  availability?: ICardAvailability[];
  language?: ITag[];
  partenaires?: ICardPartenaire[];
  categoriesAvant?: ICategorieAvant[];
  isAlaUne: boolean;

}

export const getCartesKajou = (): Promise<CartesKajouData[]> => {
  return new Promise((res) => {
    res([
      {
        "idCard": "406",
        "type": "KLMS",
        "activable": "z9kSB9V9e",
        "cyphering": "false",
        "titre": "AUGMENTEZ VOS REVENUS",
        "URL": "https://www.kajou.io/eCards/bonjour%201509_v1_archive/",
        "nomCarte": "bonjour 1509_v1_archive.zip",
        "version": "1",
        "taille": "24",
        "descriptionGlobal": "<p>ffsd</p><p>sdf</p><p>ds</p>",
        "descriptionCourte": "Auto-formation et tutoriels en agriculture, élevage, mécanique, artisanat et des centaines de ressources culturelles et éducatives ! ",
        "couleurCarte": "",
        "dateCreation": "2022-09-15 14:23:05",
        "dateSortie": "2022-09-15 14:23:05",
        "logo": "",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "published": true,
        "language": [
          {
            "id": "1",
            "name": "Français",
            "color": "#0F3293"
          },
          {
            "id": "2",
            "name": "Wolof",
            "color": "#EF9F0F"
          }
        ],
        "availability": [
          {
            "name": "ecard",
            "description": "Carte Micro-SD de 32Go. L’usage de la carte SD permet de ne dépenser aucune data internet pour consulter le contenu. Le contenu sur la carte est disponible à vie.",
            "tarif": "3500 FCFA",
            "active": true
          },
          {
            "name": "sdcard",
            "description": "Carte Micro-SD de 32Go. L’usage de la carte SD permet de ne dépenser aucune data internet pour consulter le contenu. Le contenu sur la carte est disponible à vie.",
            "tarif": "3500 FCFA",
            "active": true
          }
        ],
        "partenaires": [
          {
            "id": "2",
            "name": "Total Energies",
            "logo": "https://layefall93.alwaysdata.net/iconstore/logo_totalenergies 1.png"
          },
          {
            "id": "4",
            "name": "Fondation Google",
            "logo": "https://layefall93.alwaysdata.net/iconstore/fondationGoogle1.png"
          }
        ],
        "categoriesAvant": [
          {
            "id": "43",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          },
          {
            "id": "44",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          },
          {
            "id": "45",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          }
        ],
        "isAlaUne": true
      },
      {
        "idCard": "407",
        "type": "KLMS",
        "activable": "z9kSB9V9e",
        "cyphering": "false",
        "titre": "ENTREPRENARIAT : DE L'IDEE AU SUCCES",
        "URL": "https://www.kajou.io/eCards/bonjour%201509_v1_archive/",
        "nomCarte": "bonjour 1509_v1_archive.zip",
        "version": "1",
        "taille": "24",
        "descriptionGlobal": "<p>ffsd</p><p>sdf</p><p>ds</p>",
        "descriptionCourte": "Le meilleur des ressources actuelles pour réussir son projet entrepreneurial !",
        "couleurCarte": "",
        "dateCreation": "2022-09-15 14:23:05",
        "dateSortie": "2022-09-15 14:23:05",
        "logo": "",
        "image": "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
        "published": true,
        "language": [
          {
            "id": "1",
            "name": "Français",
            "color": "#0F3293"
          },
          {
            "id": "2",
            "name": "Wolof",
            "color": "#EF9F0F"
          }
        ],
        "availability": [
          {
            "name": "ecard",
            "description": "Carte Micro-SD de 32Go. L’usage de la carte SD permet de ne dépenser aucune data internet pour consulter le contenu. Le contenu sur la carte est disponible à vie.",
            "tarif": "3500 FCFA",
            "active": true
          },
          {
            "name": "sdcard",
            "description": "Carte Micro-SD de 32Go. L’usage de la carte SD permet de ne dépenser aucune data internet pour consulter le contenu. Le contenu sur la carte est disponible à vie.",
            "tarif": "3500 FCFA",
            "active": false
          }
        ],
        "partenaires": [
          {
            "id": "2",
            "name": "Total Energies",
            "logo": "https://layefall93.alwaysdata.net/iconstore/logo_totalenergies 1.png"
          },
          {
            "id": "4",
            "name": "Fondation Google",
            "logo": "https://layefall93.alwaysdata.net/iconstore/fondationGoogle1.png"
          }
        ],
        "categoriesAvant": [
          {
            "id": "43",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          },
          {
            "id": "44",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          },
          {
            "id": "45",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          }
        ],
        "isAlaUne": false
      },
      {
        "idCard": "408",
        "type": "KLMS",
        "activable": "z9kSB9V9e",
        "cyphering": "false",
        "titre": "Entrepreneuriat : de l'idée au succès",
        "URL": "https://www.kajou.io/eCards/bonjour%201509_v1_archive/",
        "nomCarte": "bonjour 1509_v1_archive.zip",
        "version": "1",
        "taille": "24",
        "descriptionGlobal": "<p>ffsd</p><p>sdf</p><p>ds</p>",
        "descriptionCourte": "Le meilleur des ressources actuelles pour réussir son projet entrepreneurial !",
        "couleurCarte": "",
        "dateCreation": "2022-09-15 14:23:05",
        "dateSortie": "2022-09-15 14:23:05",
        "logo": "",
        "image": "https://layefall93.alwaysdata.net/iconstore/img3.png",
        "published": true,
        "language": [
          {
            "id": "1",
            "name": "Français",
            "color": "#0F3293"
          },
          {
            "id": "2",
            "name": "Wolof",
            "color": "#EF9F0F"
          }
        ],
        "availability": [
          {
            "name": "ecard",
            "description": "Carte Micro-SD de 32Go. L’usage de la carte SD permet de ne dépenser aucune data internet pour consulter le contenu. Le contenu sur la carte est disponible à vie.",
            "tarif": "3500 FCFA",
            "active": true
          },
          {
            "name": "sdcard",
            "description": "Carte Micro-SD de 32Go. L’usage de la carte SD permet de ne dépenser aucune data internet pour consulter le contenu. Le contenu sur la carte est disponible à vie.",
            "tarif": "3500 FCFA",
            "active": true
          }
        ],
        "partenaires": [
          {
            "id": "2",
            "name": "Total Energies",
            "logo": "https://layefall93.alwaysdata.net/iconstore/logo_totalenergies 1.png"
          },
          {
            "id": "4",
            "name": "Fondation Google",
            "logo": "https://layefall93.alwaysdata.net/iconstore/fondationGoogle1.png"
          }
        ],
        "categoriesAvant": [
          {
            "id": "43",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          },
          {
            "id": "44",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          },
          {
            "id": "45",
            "titre": "La vaccination, pour quoi faire, quand la faire?",
            "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
            "type": "VIDEO - 7 MIN",
            "duree": "7"
          }
        ],
        "isAlaUne": false
      }
    ]);
  });
};

export const getCartesKajouTest = async (): Promise<{ data: CartesKajouData[] } | undefined> => {
  try {
    const response = await axios.get<{ data: CartesKajouData[] }>('https://search-stox-1-wk4twji2bd6sqnxzy7cn37xofq.us-east-1.cloudsearch.amazonaws.com/2013-01-01/search?q=seed');
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e);
  }
};

