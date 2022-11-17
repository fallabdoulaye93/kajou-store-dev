import React, {useEffect, useMemo, useRef, useState} from 'react';
import * as S from './DetailsCarteComponent.styles';
import {Col, Image, notification, Row} from "antd";
import {useLocation} from 'react-router-dom';
import {ITag, Tag} from "@app/components/Tag/Tag";
import {CardAvailability, ICardAvailability} from "@app/components/CardAvailability/CardAvailability";
import { CartesKajouData } from '@app/api/LesCartesKajou.api';
import { useAppSelector } from '@app/hooks/reduxHooks';
import {useTranslation} from "react-i18next";
import {PartnerBloc} from "@app/components/common/PartnerBloc/PartnerBloc";
import {CategorieAvant} from "@app/components/CategorieAvant/CategorieAvant";
import {Carousel} from "@app/components/common/Carousel/Carousel";
import {BREAKPOINTS} from "@app/styles/themes/constants";
import {ItemKajouAlaUneCard} from "@app/components/ItemKajouAlaUneCard/ItemKajouAlaUneCard";
import { Collapse, Panel } from '@app/components/common/Collapse/Collapse';

interface KajouCardProps {
    cardDetails?: CartesKajouData;
}

export const DetailsCarteComponent: React.FC<KajouCardProps> = ({cardDetails}) => {
    const { state } = useLocation();
    const [data, setData] = useState<CartesKajouData>();
    const { t } = useTranslation();
    useEffect(() => {
       setData(state.carte)
    }, []);
    return (
        <Col xs={24} md={24}>
            <S.Image src={data?.image}/>
            <S.SectionWrapper>

                {!!state.carte?.language?.length && (
                    <S.TagsWrapper>
                        {state.carte?.language.map((lang: { name: string; color: string | undefined; }) => (
                            <Tag name={lang.name} color={lang.color} />
                        ))}
                    </S.TagsWrapper>
                )}
                <S.BlocWrapper>
                    <S.InfoHeader>
                        <S.Title>{state.carte?.titre}</S.Title>
                    </S.InfoHeader>
                    <S.Description>{state.carte?.descriptionCourte}</S.Description>
                </S.BlocWrapper>
                <S.BlocWrapper>
                    <S.TextCollab>{t('les_cartes_kajou.collab_with')}</S.TextCollab>
                </S.BlocWrapper>
                <S.BlocWrapper>
                    {!!state?.carte?.partenaires?.length && (
                        <S.PartnerWrapper>
                            {state.carte?.partenaires.map((partenaire: { name: string; logo: string | undefined; }) => (
                                <PartnerBloc logo={partenaire.logo} name={partenaire.name} />
                            ))}
                        </S.PartnerWrapper>
                    )}
                </S.BlocWrapper>
                <S.BlocWrapper>
                    <S.TextCollab>{t('les_cartes_kajou.exemples_contenus')}</S.TextCollab>
                </S.BlocWrapper>
                <S.BlocWrapper style={{marginTop: '20px'}}>
                    {state?.carte?.categoriesAvant.length > 0 && (
                        <S.CarouselWrapper>
                            <Carousel
                                arrows={false}
                                slidesToShow={2}
                                infinite={false}
                                centerMode={false}
                                responsive={[
                                    {
                                        breakpoint: 1931,
                                        settings: {
                                            slidesToShow: 3,
                                        },
                                    },
                                    {
                                        breakpoint: 1530,
                                        settings: {
                                            slidesToShow: 2,
                                        },
                                    },
                                    {
                                        breakpoint: BREAKPOINTS.xl - 1,
                                        settings: {
                                            slidesToShow: 4,
                                        },
                                    },
                                    {
                                        breakpoint: 1140,
                                        settings: {
                                            slidesToShow: 3,
                                        },
                                    },
                                    {
                                        breakpoint: 920,
                                        settings: {
                                            slidesToShow: 2,
                                        },
                                    },
                                    {
                                        breakpoint: BREAKPOINTS.md - 1,
                                        settings: {
                                            slidesToShow: 3,
                                        },
                                    },
                                    {
                                        breakpoint: 720,
                                        settings: {
                                            slidesToShow: 2
                                        },
                                    },
                                    {
                                        breakpoint: 520,
                                        settings: {
                                            slidesToShow: 2
                                        },
                                    },
                                ]}
                            >
                                {state.carte?.categoriesAvant.map((categorie: { id: string; titre: string; type: string; duree: string; image: string | undefined; }) => (
                                    <CategorieAvant categorie={categorie}  />
                                ))}


                            </Carousel>
                        </S.CarouselWrapper>
                    )}

                </S.BlocWrapper>

                <S.BlocWrapper>
                    <S.TextCollab>{t('les_cartes_kajou.versions_dispo')}</S.TextCollab>
                </S.BlocWrapper>

                <S.BlocWrapper>
                    {!!state?.carte?.availability?.length && (
                        <>
                            {state.carte?.availability.map((availability: { name: string; description: string | undefined; tarif: string | undefined; active: boolean | undefined; }) => (
                                <CardAvailability name={availability.name} description={availability.description} tarif={availability.tarif} active={availability.active} />
                            ))}
                        </>
                    )}
                </S.BlocWrapper>
            </S.SectionWrapper>
        </Col>
    );
};


