import axios from 'axios';
    
    export const __getAllDossierThematique =  async() => {
        try {
          const response = await axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/dossier_thematique');
          return response.data?.hits?.hit;
        } catch (e: any) {
          throw new Error(e);
        }
      };

      export const __getAllSeed =  async() => {
        try {
          const response = await axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/seeds');
          return response.data?.hits?.hit;
        } catch (e: any) {
          throw new Error(e);
        }
      };

      export const __getAllArticle =  async() => {
        try {
          const response = await axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/articles');
           return response.data?.hits?.hit;
          //
        } catch (e: any) {
          throw new Error(e);
        }
      };
      
      export const __getAllPlaylist =  async() => {
        try {
          const response = await axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/playlists');
          return response.data?.hits?.hit;
        } catch (e: any) {
          throw new Error(e);
        }
      };

      export const __getAllThematique =  async(idSeed: number) => {
        try {
          const response = await axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/dossier_thematique')
          return response.data?.hits?.hit;
        } catch (e: any) {
          throw new Error(e);
        }
      };

      export const __getAllSeedThematique =  async(idDossierThematique:number) => {
        await axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/dossier_thematique')
        .then((res) => {
          const resp = res.data?.hits?.hit;
          const respfilter = resp?.filter((thematic:any) => thematic?.fields?.id == idDossierThematique )
          return respfilter;
         })
         .catch((err) => {
           console.log("AXIOS ERROR: ", err);
         })
      };
      
      export const __getAllEcards =  async() => {
        try {
          const response = await axios.get('http://kajou.io/eCards/eCards.json');
          return response.data;
        } catch (e: any) {
          throw new Error(e);
        }
      };