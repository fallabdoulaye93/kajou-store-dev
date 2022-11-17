import React from 'react';
import { Col, Image, Row, Card } from 'antd';
import * as Style from './EcardItem.styles';
import { useTranslation } from 'react-i18next';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import blackLine from '@app/assets/images/blackLine.png'
import {useNavigate} from "react-router-dom";
import {SeedsData} from "@app/api/seeds.api";
import ecard from '@app/assets/images/ecard.png'


interface EcardItemProps {
    EcardItemData?: any;
}

export const EcardItem: React.FC<EcardItemProps> = ({ EcardItemData }) => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detail', { state: { EcardItemData } })
  };

  return (
    <Style.EcardWrapper>

      <Style.Image>
          <Image src={EcardItemData?.image} preview={false} width={'100%'} style={{borderRadius:10}} />
     </Style.Image>

      {/* <Style.DetailsWrapper>
  
          <Style.Title>{EcardItemData?.title} </Style.Title>
          <Style.Description>{EcardItemData?.subtitle} </Style.Description>
          <Style.Contenus>{EcardItemData?.nbrevideo} videos - {EcardItemData?.duration} </Style.Contenus>
  
      </Style.DetailsWrapper>  */}

    </Style.EcardWrapper>
  );
};
