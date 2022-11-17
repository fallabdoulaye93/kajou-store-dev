import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import * as Style from './ForYouComponent.styles';
import {Image} from "antd";
import {Carousel} from "@app/components/common/Carousel/Carousel";

import { ItemSeedCard } from '../ItemSeedCard/ItemSeedCard';
import image from '@app/assets/images/image1.png'
import thematique from '@app/assets/images/thematique.png'
import arrow_icon from '@app/assets/images/arrow.png'
import line from '@app/assets/images/line.png'
import { ItemSeed } from '../ItemSeed/ItemSeed';
import { Thematique } from '../Thematique/Thematique';
import { Event } from '../common/Event/Event';
import { CardSd } from '../CardSd/CardSd';
import { Expert } from '../common/Expert/Expert';
import * as  API from '@app/api/store.api';
import { EcardItem } from '../Ecard/EcardItem';
import { EcardJson } from '@app/api/ecards.api';

const T = "Les cartes SD Kajou s’insèrent dans votre smartphone et donnent accès à des centaines de contenus sans utiliser votre connexion internet ! "
const T1 = "Voir le catalogue de cartes disponibles !"


const themeJson2 = [
  {
    "image": thematique,
    "titre": "CLASSES DE PRIMAIRE  SÉNÉGAL",
    "contenus": "120 ressources",
  },
  {
    "image": thematique,
    "titre": "CLASSES DE PRIMAIRE  SÉNÉGAL",
    "contenus": "120 ressources",
  },
  {
    "image": thematique,
    "titre": "CLASSES DE PRIMAIRE  SÉNÉGAL",
    "contenus": "120 ressources",
  },
  {
    "image": thematique,
    "titre": "CLASSES DE PRIMAIRE  SÉNÉGAL",
    "contenus": "120 ressources",
  },
  {
    "image": thematique,
    "titre": "CLASSES DE PRIMAIRE  SÉNÉGAL",
    "contenus": "120 ressources",
  }
]

export const ForYouComponent: React.FC = () => {

  const [seed, setSeed] = useState<any>();
  const [dossierThematique, setDossierThematique] = useState<any>();
  const [article, setArticle] = useState<any>();
  const [playlist, setPlaylist] = useState<any>();
  const [ecard, setEcard] = useState<any>();
  const { t } = useTranslation();

  const getAllDossierThematique = async () => {
    const resp =  await API.__getAllDossierThematique();
    setDossierThematique(resp)
  }

  const getAllSeed = async () => {
    const resp =  await API.__getAllSeed();
    setSeed(resp)
  }
       

  useEffect(() => {

    getAllDossierThematique()
    getAllSeed()
  
  },[]);

  return (
      <Style.ForYouWrapper>
        
          <Style.CarouselWrapper>

              <Carousel
                  arrows={false}
                  slidesToShow={1}
                  infinite={false}>
                  {
                    dossierThematique?.map((item: any, key: any) => (
                      <div>
                        <ItemSeedCard ItemSeedCardData={item.fields} key={key} />
                      </div>
                  ))}
              </Carousel>

          </Style.CarouselWrapper>
     
          <Style.SeedContainer>

              <Style.SeedHeader>
                  <Style.Titre>{`${t('les_cartes_kajou.Recommandés_pour_vous')}`}</Style.Titre>
                  <Style.Icon><Image src={arrow_icon} width={'60%'} preview={false}/> </Style.Icon>
              </Style.SeedHeader>

              <Style.SliderItem>       
         
                {
                seed?.map((item: any, key: any) => (
                      <div>
                        <ItemSeed ItemSeedData={item.fields} key={key} />
                      </div>))
                }
          
              </Style.SliderItem>
        
        </Style.SeedContainer>

        {/* <Style.EcardContainer>

          <Style.SeedHeader>
              <Style.Titre>{`${t('les_cartes_kajou.ecard')}`}{`${t('les_cartes_kajou.ecard_ukrainien')}`}</Style.Titre>
              <Style.Icon><Image src={arrow_icon} width={'60%'} preview={false}/> </Style.Icon>
          </Style.SeedHeader>

        

          <Style.CarouselEcardWrapper>

              <Carousel
                  arrows={false}
                  slidesToShow={1}
                  infinite={false}>
                  {
                    EcardJson?.map((item: any, key: any) => (
                      <div>
                        <EcardItem EcardItemData={item} key={key} />
                      </div>
                  ))}
              </Carousel>

          </Style.CarouselEcardWrapper>

          </Style.EcardContainer>
      
        <>
          <Style.ThematiqueHeader>
              <Style.Titre>{t('Education')}</Style.Titre>
              <Style.Icon><Image src={arrow_icon} width={'60%'} preview={false}/> </Style.Icon>
          </Style.ThematiqueHeader>

          <Style.SliderItem>
          {
                       article?.map((item: any, key: any) => (
                        <div>
                          <Thematique data={item.fields} key={key} />
                        </div>
                      ))
          }
          </Style.SliderItem>
          
        </>

        
         <>
          <Style.EventHeader>
              <Style.Titre>{`${t('les_cartes_kajou.Evénement_en_cours')}`}</Style.Titre>
              <Style.Line><Image src={line} width='100%'/> </Style.Line>
          </Style.EventHeader>

          <Style.SliderContainer>
            <Event/>
          </Style.SliderContainer>
          
          </> 

          
         
          <>
          <Style.ThematiqueHeader>
              <Style.Titre>{t('Vie quotidienne >')}</Style.Titre>
          </Style.ThematiqueHeader>

          <Style.SliderItem>
          {
                       seed?.map((item: any, key: any) => (
                        <div>
                          <ItemSeed ItemSeedData={item} key={key} />
                        </div>
                      ))
          }
          </Style.SliderItem>
          </>


          <>

          <Style.SdCardHeader>
              <Style.Titre>{`${t('les_cartes_kajou.dispo_en_carte_sd')}`}</Style.Titre>
              <Style.Line><Image src={line} width='100%'/> </Style.Line>
          </Style.SdCardHeader>

          <Style.SliderContainer>
          <Style.SliderItem>
          {
                       themeJson2?.map((item: any, key: any) => (
                        <div>
                          <CardSd data={item} key={key} />
                        </div>
                      ))
          }
         
          </Style.SliderItem>

          <Style.Description>{T}</Style.Description>
          <Style.SeeAllCatalogue>{T1}</Style.SeeAllCatalogue>
          </Style.SliderContainer>
          
        </>


        <>
          <Style.ThematiqueHeader>
              <Style.Titre>{t('Santé >')}</Style.Titre>
          </Style.ThematiqueHeader>

          <Style.SliderItem>
          {
                       themeJson2?.map((item: any, key: any) => (
                        <div>
                          <Thematique data={item} key={key} />
                        </div>
                      ))
          }
          </Style.SliderItem>

        </>


        <>
          <Style.EventHeader>
              <Style.Titre>{`${t('les_cartes_kajou.Rencontrez_nos_experts')}`}</Style.Titre>
              <Style.Line><Image src={line}  width='100%'/> </Style.Line>
          </Style.EventHeader>
          <Style.SliderContainer>
     
            <Expert/>
       
          
          </Style.SliderContainer>


        </> */}

      </Style.ForYouWrapper>
  );
};
