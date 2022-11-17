import axios from "axios";
import {UserprefItem} from "@app/api/userPreference.api";
import {ITag} from "@app/components/Tag/Tag";
import {ICardAvailability} from "@app/components/CardAvailability/CardAvailability";
import {ICardPartenaire} from "@app/components/CardPartenaires/CardPartenaire";
import {ICategorieAvant} from "@app/components/CategorieAvant/CategorieAvant";
import {IContenuGraine} from "@app/components/ContenuGraine/ContenuGraine";

export interface SeedsData {
  idSeed: string;
  image: string;
  titre: string;
  descriptionCourte: string;
  descriptionGlobale: string;
  contenus: string;
  like: number;
  contenuGraine?: IContenuGraine[];
}

export const getKajouSeed = (): Promise<SeedsData[]> => {
  return new Promise((res) => {
    res([
      {
        "idSeed": "100",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "titre": "MÉCANIQUE",
        "descriptionCourte": "La vaccination, pour quoi faire, quand la faire?",
        "descriptionGlobale": "Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.",
        "contenus": "5 vidéos - 24 min",
        "like":1200,
        "contenuGraine": [
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
        ]
      },
      {
        "idSeed": "101",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "titre": "MÉCANIQUE",
        "descriptionCourte": "La vaccination, pour quoi faire, quand la faire?",
        "descriptionGlobale": "Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.",
        "contenus": "5 vidéos - 24 min",
        "like":1200,
        "contenuGraine": [
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
        ]
      },
      {
        "idSeed": "102",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "titre": "MÉCANIQUE",
        "descriptionCourte": "La vaccination, pour quoi faire, quand la faire?",
        "descriptionGlobale": "Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.",
        "contenus": "5 vidéos - 24 min",
        "like":1200,
        "contenuGraine": [
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
        ]
      },
      {
        "idSeed": "103",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "titre": "MÉCANIQUE",
        "descriptionCourte": "La vaccination, pour quoi faire, quand la faire?",
        "descriptionGlobale": "Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.",
        "contenus": "5 vidéos - 24 min",
        "like":1200,
        "contenuGraine": [
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
        ]
      },
      {
        "idSeed": "104",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "titre": "MÉCANIQUE",
        "descriptionCourte": "La vaccination, pour quoi faire, quand la faire?",
        "descriptionGlobale": "Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.",
        "contenus": "5 vidéos - 24 min",
        "like":1200,
        "contenuGraine": [
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
        ]
      },
      {
        "idSeed": "105",
        "image": "https://www.kajou.io/eCards/ecards_images/bonjour_france_last.png",
        "titre": "MÉCANIQUE",
        "descriptionCourte": "La vaccination, pour quoi faire, quand la faire?",
        "descriptionGlobale": "Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.",
        "contenus": "5 vidéos - 24 min",
        "like":1200,
        "contenuGraine": [
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
        ]
      }
    ]);
  });
};


