import React, {useState} from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { UserprefItem } from '@app/api/userPreference.api';
import * as S from './ItemThematiqueCard.styles';
import {Col, Row} from "antd";
import { message } from 'antd';

interface ItemThematiqueCardProps {
  itemThematique: UserprefItem;
}

export const ItemThematiqueCard: React.FC<ItemThematiqueCardProps> = ({ itemThematique }) => {
  const [isActive, setIsActive] = useState(false);
    function add_preference(id : String) {
        const localPrefStrThematiques = localStorage.getItem('local_pref_thematiques_test');
        localStorage.setItem('local_pref_thematiques_test', localPrefStrThematiques+ ",'"+id+"'")
    }

    function handleClick(id : String) {
        setIsActive(current => !current);
        {!isActive && add_preference(id) }

    }


  return (
      <S.Card onClick={() => handleClick(itemThematique.title)} padding={0} $color={itemThematique.backgroundColor}>
          <Col span={24}>
              <Row style={{position: 'relative', textAlign: 'center', margin: "0px"}} gutter={[10, 0]}>
                  <S.img src={itemThematique.image} alt="" />
              </Row>

              <Col span={24}>
                  <Row gutter={[10, 0]}>
                      <S.Title>{itemThematique.title}</S.Title>
                  </Row>
              </Col>
          </Col>
          {isActive &&  <Col span={24}>
              <S.img style={{width: '100%', height: '100px', marginTop: '-35px'}} src='https://layefall93.alwaysdata.net/iconstore/transparent_rect.png' alt="" />
          </Col> }
      </S.Card>
  );
};
