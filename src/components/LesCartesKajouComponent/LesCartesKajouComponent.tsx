import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './LesCartesKajouComponent.styles';
import { Link } from 'react-router-dom';
import {getCartesKajou, getCartesKajouTest} from "@app/api/LesCartesKajou.api";
import {CartesKajouData} from "@app/api/LesCartesKajou.api";
import {Col, notification, Row} from "antd";
import {Carousel} from "@app/components/common/Carousel/Carousel";
import Slider from "react-slick";
import {BREAKPOINTS} from "@app/styles/themes/constants";
import {ItemKajouAlaUneCard} from "@app/components/ItemKajouAlaUneCard/ItemKajouAlaUneCard";
import {ItemKajouCardV1} from "@app/components/ItemKajouCardV1/ItemKajouCardV1";


export const LesCartesKajouComponent: React.FC = () => {
  const [data, setData] = useState<CartesKajouData[]>([]);
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    getCartesKajou().then((result) => {
      setData(result);
    });
  }, []);


  return (
      <>
        {data.length > 0 && (
            <S.CarouselWrapper>
              <Carousel
                  arrows={false}
                  slidesToShow={2}
                  infinite={false}
                  responsive={[
                      {
                          breakpoint: 1931,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: 1530,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: BREAKPOINTS.xl - 1,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: 1140,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: 920,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: BREAKPOINTS.md - 1,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: 720,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                      {
                          breakpoint: 520,
                          settings: {
                              slidesToShow: 1,
                          },
                      },
                  ]}>
                {data.map((carte) => {
                    if (carte.isAlaUne) {
                        return (
                            <div key={carte?.idCard}>
                                <ItemKajouAlaUneCard
                                    imgUrl={carte?.image}
                                    name={carte?.titre}
                                />
                            </div>
                        );
                    }
                })}
              </Carousel>
            </S.CarouselWrapper>
          )}

          <S.InfoHeader>
              <S.Titre>{t('les_cartes_kajou.deja_disponible')}</S.Titre>
          </S.InfoHeader>

          <>
              <S.SectionWrapper>
                  <Row gutter={[24, 10]}>
                      {data.map((carte) => (
                          <ItemKajouCardV1
                              key={carte.idCard}
                              carte={carte}
                          />
                      ))}
                  </Row>
              </S.SectionWrapper>
          </>



      </>
  );
};
