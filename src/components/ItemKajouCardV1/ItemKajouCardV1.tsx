import React, {useEffect, useState} from 'react';
import { Dates } from '@app/constants/Dates';
import {Avatar, Col, Image, Row} from 'antd';
import { Tag, ITag } from '../Tag/Tag';
import * as S from './ItemKajouCardV1.styles';
import {Navigate, useNavigate} from "react-router-dom";
import {CartesKajouData} from "@app/api/LesCartesKajou.api";
import {DetailsCarteComponent} from "@app/components/DetailsCarteComponent/DetailsCarteComponent";
import {useTranslation} from "react-i18next";

interface KajouCardProps {
  className?: string;
  carte?: CartesKajouData
}

export const ItemKajouCardV1: React.FC<KajouCardProps> = ({
  carte,
  className = 'article-card',
}) => {
  const [isSDCard, setIsSDCard] = useState(false);
  const [isECard, setIsECard] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
      {!!carte?.availability && carte?.availability.map((av) => (
          av.name === "sdcard" ? setIsSDCard(true): setIsECard(true)
      ))}
  }, []);


  const handleClick = () => {
      navigate('/detail-carte', { state: { carte } })
  };

  return (
    <S.Card onClick={handleClick} className={className}>
      <Row gutter={[{}, { xxl: 10 }]}>
        <Col span={24}>
          <S.ImgWrapper>
            <Image src={carte?.image}  preview={false} />
          </S.ImgWrapper>
        </Col>
      </Row>
      <S.InfoWrapper>
          <S.InfoHeader>
              <S.Title>{carte?.titre}</S.Title>
          </S.InfoHeader>
          <S.Description>{carte?.descriptionCourte}</S.Description>
      </S.InfoWrapper>
      {!!carte?.language?.length && (
            <S.TagsWrapper>
                {carte?.language.map((lang) => (
                    <Tag name={lang.name} color={lang.color} />
                ))}
            </S.TagsWrapper>
       )}

        {!!carte?.availability?.length && (
            <S.InfoWrapper>
               {isSDCard && <S.CardAvailability> {t('les_cartes_kajou.dispo_en_carte_sd')}  {isECard && t('les_cartes_kajou.dispo_en_carte_ecard')}</S.CardAvailability>}
            </S.InfoWrapper>
        )}
    </S.Card>
  );
};

