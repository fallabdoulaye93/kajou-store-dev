import React from 'react';
import { Image } from 'antd';
import * as Style from './ItemSeed.styles';
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";

interface ItemSeedProps {
  ItemSeedData?: any;
}

export const ItemSeed: React.FC<ItemSeedProps> = ({ ItemSeedData }) => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/detail-seed', { state: {data:ItemSeedData} })
  };

  return (
    <Style.ItemSeedWrapper>

      <Style.Image onClick={handleClick}>
          <Image src={ItemSeedData?.image} alt={ItemSeedData?.titre} preview={false} width={'100%'} height={'100%'} style={{borderRadius:10}} />
     </Style.Image>

      <Style.DetailsWrapper>
  
          <Style.Title>{ItemSeedData?.thematique} </Style.Title>
          <Style.Description>{ItemSeedData?.title} </Style.Description>
          <Style.Contenus>{ItemSeedData?.nbrevideo} videos - {ItemSeedData?.duration} </Style.Contenus>
  
      </Style.DetailsWrapper> 

    </Style.ItemSeedWrapper>
  );
};
