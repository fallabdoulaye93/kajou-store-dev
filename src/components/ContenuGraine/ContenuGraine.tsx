import React from 'react';
import * as S from './ContenuGraine.styles';
import {Col, Image, Row} from "antd";
import {Tag} from "@app/components/Tag/Tag";
import {CartesKajouData} from "@app/api/LesCartesKajou.api";
import petitRectangleNoir from '@app/assets/images/petitRectangleNoir.png';
import nbwcOrangeWhite from "@app/assets/images/nbwcOrangeWhite.png";

export interface IContenuGraine {
  id: string;
  titre: string;
  image?: string;
  type?: string;
  duree?: string;
}

interface ContenuGraineProps {
  categorie?: IContenuGraine
}

export const ContenuGraine: React.FC<ContenuGraineProps> = ({ categorie }) => {
  const style = {
    color: 'black',
  };
  return (
      <S.Card style={style}>
          <Col span={24}>
              <S.ImgWrapper>
                  <Image src={categorie?.image}  preview={false} />
              </S.ImgWrapper>
          </Col>
          <S.InfoWrapper>
              <img width={'20px'} height={'4px'} style={{marginTop: '12px'}} src={petitRectangleNoir} alt="" />

              <S.InfoHeader>
                <S.Title>{categorie?.titre}</S.Title>
              </S.InfoHeader>
              <S.Description>{categorie?.type}</S.Description>
          </S.InfoWrapper>
      </S.Card>
  );
};
