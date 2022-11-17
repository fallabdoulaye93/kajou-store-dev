import React from 'react';
import * as S from "@app/components/ItemSeedCardThumbnailMode/ItemSeedCardThumbnailMode.styles";

interface ItemSeedCardProps {
  seedDetails?: any;
}

export const ItemSeedCardThumbnailMode: React.FC<ItemSeedCardProps> = ({ seedDetails }) => {

  return (
      <Row style={{backgroundColor: "#F9F9F9"}} gutter={[24, 24]}>
          <S.CardThumbnail>
              <S.ImageThumbnail src={seedDetails?.image}/>
              <S.InfoWrapper>
                  <S.Description>{seedDetails?.contenus}</S.Description>
                  <S.Title>{seedDetails?.title}</S.Title>
              </S.InfoWrapper>
          </S.CardThumbnail>
      </Row>

  );
};
