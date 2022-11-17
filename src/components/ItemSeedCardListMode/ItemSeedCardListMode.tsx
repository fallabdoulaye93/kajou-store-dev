import React from 'react';
import { Col, Row } from 'antd';

import petitRectangleNoir from "@app/assets/images/petitRectangleNoir.png";
import * as S from "@app/components/ItemSeedCardListMode/ItemSeedCardListMode.styles";

interface ItemSeedCardProps {
  seedDetails?: any;
}

export const ItemSeedCardListMode: React.FC<ItemSeedCardProps> = ({ seedDetails }) => {


  return (
      <div style={{marginTop: "5px"}}>
          <Row style={{backgroundColor: "#F9F9F9"}} gutter={[24, 24]}>
              <Col span={11}>
                  <S.InfoWrapper>
                      <img width={'20px'} height={'4px'} style={{marginTop: '12px'}} src={petitRectangleNoir} alt="" />
                      <S.InfoHeader>
                          <S.Title>{seedDetails?.title}</S.Title>
                      </S.InfoHeader>
                      <S.Description>{seedDetails?.contenus}</S.Description>
                  </S.InfoWrapper>
              </Col>
              <Col span={12}>
                  <S.ImgWrapper>
                      <S.Image src={seedDetails?.image}/>
                  </S.ImgWrapper>
              </Col>
          </Row>
      </div>


  );
};