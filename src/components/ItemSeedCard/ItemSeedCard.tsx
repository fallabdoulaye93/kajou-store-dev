import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'antd';
import * as Style from './ItemSeedCard.styles';
import { useTranslation } from 'react-i18next';
import seedLine from '@app/assets/images/seedLine.png';
import { ItemThematique } from '../ItemThematique/ItemThematique';
import {useNavigate} from "react-router-dom";
import * as  API from '@app/api/store.api';
import imageDossierThematique from '@app/assets/images/image1.png';

const themeJson = [
  {
    categorie: 'sante',
    titre: "J’attends un bébé !",
  },
  {
    categorie: 'sante',
    titre: "J’attends un bébé !",
  },
  {
    categorie: 'sante',
    titre: "J’attends un bébé !",
  },
];

interface ItemSeedCardProps {
  ItemSeedCardData:any;
}

export const ItemSeedCard: React.FC<ItemSeedCardProps> = ({ ItemSeedCardData }) => {

  const [thematique, setThematique] = useState<any>();
  const { t } = useTranslation();
  const navigate = useNavigate();  

  // const getAllSeedThematique = async () => {
  //   const resp =  await API.__getAllSeedThematique();
  //   setThematique(resp)
  //   // console.log(thematique)
  // }

  useEffect(() => {

    // getAllSeedThematique()
  
  },[]);

  const handleClick = () => {
    navigate('/dossier-thematique', { state: { data:ItemSeedCardData } })
  };


  return (
  
      <Style.ItemSeedCardWrapper>

        <Style.ImgWrapper onClick={handleClick}>
          <Image src={ItemSeedCardData.image?ItemSeedCardData.image:imageDossierThematique} preview={false} width={'100%'} style={{borderRadius: '5%'}} />

          <Style.ImageAbsolute>

            <Style.SliderItem>
              {thematique?.map((item: any, key: any) => (
                <div>
                  <ItemThematique itemThematiqueData={item} key={key} />
                </div>
              ))}
            </Style.SliderItem>

            <Style.Seedtitle>
              <Style.Title>{ItemSeedCardData.title?ItemSeedCardData.title:'valeur test'} </Style.Title>
              <Style.Line>
                <Image src={seedLine} preview={false} width={'25%'} />{' '}
              </Style.Line>
            </Style.Seedtitle>

          </Style.ImageAbsolute>
        </Style.ImgWrapper>

        </Style.ItemSeedCardWrapper>
  );
};
