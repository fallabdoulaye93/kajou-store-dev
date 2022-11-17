import React, {useEffect, useMemo, useRef, useState} from 'react';

import { DossierThematiqueComponent } from '@app/components/DossierThematiqueComponent/DossierThematiqueComponent';
import { useLocation } from 'react-router-dom';
import * as  API from '@app/api/store.api';
export const DossierThematique: React.FC = () => {

  const [seed, setSeed] = useState<any>();
  const [dossierThematique, setDossierThematique] = useState<any>();
  const [article, setArticle] = useState<any>();
  const [playlist, setPlaylist] = useState<any>(); 
  const [ecard, setEcard] = useState<any>();

  const location = useLocation();
  //console.log(location.state) 

  const getAllArticle = async () => {
      const resp =  await API.__getAllArticle();
       const resp1 = resp?.filter((artic:any) => artic?.fields.idparent == '11');
      setArticle(resp1)
      console.log(resp1.length) 
  }
    

 

  useEffect(() => {
   
    getAllArticle()

  },[]);


  return (
     <DossierThematiqueComponent DossierThematiqueData={article} />
  );

};
