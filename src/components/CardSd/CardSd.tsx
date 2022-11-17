import React from 'react';
import { Col, Image, Row, Card } from 'antd';
import * as Style from './CardSd.styles';
import { useTranslation } from 'react-i18next';
import sdcard from '@app/assets/images/sdcard.png';

interface CardSdProps {
  data?: any;
}
export const CardSd: React.FC<CardSdProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Style.CardSdWrapper>
      <Image src={sdcard} alt={data.titre} preview={false} width={'100%'} />
      <Style.ImageAbsolute>
        <Style.Titre>{t('Entrepreneuriat de l’idée au projet')} </Style.Titre>
        <Style.Langue>
          <Style.LanguePrincipal>{t('Wolof')} </Style.LanguePrincipal>
          <Style.LangueSecondaire>{t('FRANÇAIS')} </Style.LangueSecondaire>
        </Style.Langue>
      </Style.ImageAbsolute>
      
    </Style.CardSdWrapper>
  );
};
