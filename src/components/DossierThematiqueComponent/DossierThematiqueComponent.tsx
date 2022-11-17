import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Style from './DossierThematiqueComponent.styles';

import {Image, Button} from "antd";

import blackLine from '@app/assets/images/blackLine.png'
import arrow_icon from '@app/assets/images/arrow_icon.png'
import red_rectangle from '@app/assets/images/red_rectangle.png'


import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { ItemSeed } from '@app/components/common/ItemSeedDossierThematique/ItemSeed';
import { ItemPlaylist } from '@app/components/common/ItemPlaylistDossierThematique/ItemPlaylist';
import { ItemThematique } from '@app/components/common/ItemThematiqueDosssierThematique/ItemThematique';

import {thematiqueJson} from '@app/api/thematique.api'
import {categorieJson} from '@app/api/categorie.api'
import {useLocation, useNavigate} from "react-router-dom";
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import * as  API from '@app/api/store.api';

interface DossierThematiqueProps {
  DossierThematiqueData?: any;
}

export const DossierThematiqueComponent: React.FC<DossierThematiqueProps> = ({DossierThematiqueData}) => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = (e:any) => {
    navigate(-1)
  };
  
  const getAllArticle = async () => {
    const resp =  await API.__getAllArticle();
    const respfilter = resp?.filter((artic:any) => artic?.fields?.idparent == state?.data?.id )
  }

  //  console.log(state?.data?.id) 

  useEffect(() => {
     // setSeedDetail(state?.data)
     getAllArticle()
  }, []);


  

  return (
      <Style.ScrollWrapper>

      <HeaderComponent/>
      <Style.DossierThematiqueContent>
            <Style.DossierThematiqueImage>
              <Image src={state?.data?.image} preview={false} width={'100%'} />
            </Style.DossierThematiqueImage>

            <Style.Title>{state?.data?.title}</Style.Title>
            <Style.Description>{state?.data?.subtitle}</Style.Description>
            <Style.Separator>
            <Image src={blackLine} preview={false} width={'20%'}/>
            </Style.Separator>

            <Button type="primary" icon={<VerticalAlignBottomOutlined style={{ fontSize: '16px', color: '#4ABC96' }}/>} size={'small'} 
              style={{ background: "#F3F3F3", color: "black",
              fontSize: 12}}>
              {`${t('les_cartes_kajou.AJOUTER_AUX_FAVORIS')}`}
            </Button>
            
            <Style.DescriptionSeed>
            {state?.data?.description}
            Voir plus
            </Style.DescriptionSeed>


            <Style.SeedHeader>
                    <Style.SeedTitle>{t('Les étapes de la grossesse')}</Style.SeedTitle>
                    <Style.SeedIcon><Image src={arrow_icon} width={'60%'}/> </Style.SeedIcon>
                </Style.SeedHeader>


                <Style.SliderItem>       
              
                {
                            thematiqueJson?.map((item: any, key: any) => (
                              <div>
                                <ItemSeed data={item} key={key} />
                              </div>
                            ))
                }
            
                </Style.SliderItem>

                <Style.DescriptionSeed> 
                Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus.
                Voir toute la graine
                </Style.DescriptionSeed>

                <Style.SeedHeader>
                    <Style.SeedTitle>{t('Se préparer à l’accouchement')}</Style.SeedTitle>
                    <Style.SeedIcon><Image src={arrow_icon} width={'60%'}/> </Style.SeedIcon>
                </Style.SeedHeader>


                <Style.SliderItem>       
              
                {
                            thematiqueJson?.map((item: any, key: any) => (
                              <div>
                                <ItemSeed data={item} key={key} />
                              </div>
                            ))
                }
            
                </Style.SliderItem>

                <Style.DescriptionSeed> 
                Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus.
                Voir toute la graine
                </Style.DescriptionSeed>


                <Style.Slider>       
              
              {
                            
                              categorieJson?.map((item: any, key: any) => (
                              <div>
                              <ItemPlaylist data={item} key={key}/>
                              </div>
                            ))
                
              }
            
              </Style.Slider>


              <Style.SeedHeader>
                    <Style.SeedTitle>{t('Les 1.000 premiers jours de votre enfant')}</Style.SeedTitle>
                    <Style.SeedIcon><Image src={arrow_icon} width={'60%'}/> </Style.SeedIcon>
                </Style.SeedHeader>


                <Style.SliderItem>       
              
                {
                            thematiqueJson?.map((item: any, key: any) => (
                              <div>
                                <ItemSeed data={item} key={key} />
                              </div>
                            ))
                }
            
                </Style.SliderItem>

                <Style.DescriptionSeed> 
                Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus.
      Voir toute la playlist


                </Style.DescriptionSeed>


                <Style.ImageHeader>
                <Image src={red_rectangle} preview={false} width={'15%'} />
                </Style.ImageHeader>
                <Style.TitleThematique>
                Ces contenus devraient aussi vous intéresser ! 
                </Style.TitleThematique>

                <Style.SliderItem>
                {
                            categorieJson?.map((item: any, key: any) => (
                              <div>
                                <ItemThematique data={item} key={key} />
                              </div>
                            ))
                }
                </Style.SliderItem>
                  <Style.ImageHeader>
                <Image src={red_rectangle} preview={false} width={'15%'} />
                </Style.ImageHeader>

                </Style.DossierThematiqueContent>

      </Style.ScrollWrapper>
  );
};
