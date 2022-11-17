import React from 'react';
import { Col, Image, Row, Button } from 'antd';
import * as Style from './ItemThematique.styles';
import { useTranslation } from 'react-i18next';

interface ItemThematiqueProps {
  itemThematiqueData?: any;
}

export const ItemThematique: React.FC<ItemThematiqueProps> = ({ itemThematiqueData }) => {
  return (
    <Style.ItemThematiqueWrapper>

       <Style.ItemThematiqueTitle>
          {itemThematiqueData.thematique?itemThematiqueData.thematique:'Valeur Test'}
       </Style.ItemThematiqueTitle>
     
    </Style.ItemThematiqueWrapper>);
};
