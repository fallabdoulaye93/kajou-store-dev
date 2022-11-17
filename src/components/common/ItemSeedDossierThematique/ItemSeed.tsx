import React from 'react';
import { Col, Image, Row, Card } from 'antd';
import * as Style from './ItemSeed.styles';
import { useTranslation } from 'react-i18next';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import rectangle from '@app/assets/images/rectangle.png'

interface ItemSeedProps {
  data?: any;
}

export const ItemSeed: React.FC<ItemSeedProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Style.ItemSeedWrapper>
      <Image src={data.image} alt={data.titre} preview={false} width={'100%'} />
        <Style.DetailsWrapper>
          <Style.DetailsContent>
             <Image src={rectangle} alt={data.titre} preview={false} width={'20%'}  />
            <Style.DescriptionContent>{t(data.description)} </Style.DescriptionContent>
            <Style.Duree>{data.duree} </Style.Duree>
            </Style.DetailsContent>
        </Style.DetailsWrapper> 
    </Style.ItemSeedWrapper>
  );
};
