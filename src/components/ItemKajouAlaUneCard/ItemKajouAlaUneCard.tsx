import React from 'react';
import { Col, Image, Row } from 'antd';
import * as S from './ItemKajouAlaUneCard.styles';

interface ItemKajouAlaUneCardProps {
  id?: string;
  name?: string;
  imgUrl?: string;
}

export const ItemKajouAlaUneCard: React.FC<ItemKajouAlaUneCardProps> = ({id, name, imgUrl }) => {
  return (
      <Row style={{marginLeft: 20, marginRight: 15}} gutter={[{}, { xxl: 10 }]}>
        <Col span={24}>
          <S.ImgWrapper>
            <Image src={imgUrl} alt={name} preview={false} />
          </S.ImgWrapper>
        </Col>
      </Row>
  );
};
