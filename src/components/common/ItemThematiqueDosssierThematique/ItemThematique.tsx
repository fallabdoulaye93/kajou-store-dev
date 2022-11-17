import React from 'react';
import { Col, Image, Row ,Card} from 'antd';
import * as Style from './ItemThematique.styles';
import { useTranslation } from 'react-i18next';

interface ItemThematiqueProps {

data ?: any
}

    export const ItemThematique: React.FC<ItemThematiqueProps> = ({data }) => {
      const { t } = useTranslation();
  return (
     
      <Style.ItemThematiqueWrapper>      
      
       <Image src={data.image} alt={data.titre} preview={false} width={'100%'}/>
       <Style.DetailsWrapper>
       <Style.Titre>{t(data.titre)} </Style.Titre>
       <Style.Contenus>{t(data.contenus)} </Style.Contenus>
       </Style.DetailsWrapper>         
    </Style.ItemThematiqueWrapper>

  );
};
