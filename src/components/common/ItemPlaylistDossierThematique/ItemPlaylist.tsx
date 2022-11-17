import React from 'react';
import { Col, Image, Row, Card } from 'antd';
import * as Style from './ItemPlaylist.styles';
import { useTranslation } from 'react-i18next';
import playlist from '@app/assets/images/playlist.png'

interface ItemPlaylistProps {
  data?: any;
}

export const ItemPlaylist: React.FC<ItemPlaylistProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    
    <Style.ItemPlayslistWrapper>
      <Image src={playlist} preview={false} width={'100%'} />
      <Style.DetailsWrapper>
        <Style.Title>{data.titrePlaylist} </Style.Title>
        <Style.Description>{data.descriptionPlayslist} </Style.Description>
      </Style.DetailsWrapper>
    </Style.ItemPlayslistWrapper>
  );
};

