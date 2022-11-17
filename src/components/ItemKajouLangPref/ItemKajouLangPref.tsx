import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ViewAll } from '@app/components/nft-dashboard/common/ViewAll/ViewAll';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { getRecentlyAddedNfts, NftItem } from '@app/api/nftDashboard.api';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ItemKajouLangPref.styles';
import {getKajouPref, UserprefItem} from "@app/api/userPreference.api";
import {ItemThematiqueCard} from "@app/components/ItemKajouThematique/item-thematique-card/ItemThematiqueCard";


export const ItemKajouLangPref: React.FC = () => {
  const [items, setItems] = useState<UserprefItem[]>([]);

  const { t } = useTranslation();
  const { mobileOnly, isTablet } = useResponsive();

  useEffect(() => {
    getKajouPref().then((result) => {
      setItems(result);
    });
  }, []);

  const cards = useMemo(() => {
    return {
      mobile: items.map((item) => <ItemThematiqueCard key={item.title} itemThematique={item}  />),
    };
  }, [items]);

  return (
      <>
        <S.SectionWrapper>
          <Row gutter={[16, 16]}>
            {cards.mobile}
          </Row>
        </S.SectionWrapper>
      </>
  );
};
